interface Props {
  callback?: () => void;
  storeState?: () => void;
  restoreState?: () => object | undefined | null | false;
  options?: {
    hasDependency?: boolean;
    withClearScrollWillNotStoreCache?: boolean;
  };
}

class BackForwardLifecycle {
  /**
   * @param callback: callback function after restoring from the cases - bfcache or session storage
   * @param storeState: hook to store data to session
   * @param restoreState: hook to restore data from session
   * @param options.hasDependency: additional checker for triggering callback - success to restore data from session or not
   * @param options.withClearScrollWillNotStoreCache: function to clear scroll position before hide cycle for the case - will not store bfcache
   */

  private props: Props;
  private handlePageShow: (e: PageTransitionEvent) => void;
  private handlePageHide: (e: PageTransitionEvent) => void;
  private isSuccess: boolean;

  constructor(props: Props) {
    this.props = props;
    this.handlePageShow = (e: PageTransitionEvent): void => {
      e.persisted && this.props.callback && this.props.callback();
    };
    this.handlePageHide = (e: PageTransitionEvent): void => {
      this.props.storeState && this.props.storeState();
      !e.persisted &&
        this.props.options &&
        this.props.options.withClearScrollWillNotStoreCache &&
        window.scrollTo(0, 0);
    };
    this.isSuccess = false;
  }

  public mount = (): void => {
    window.addEventListener("pageshow", this.handlePageShow);
    window.addEventListener("pagehide", this.handlePageHide);
  };

  private isBackForward = (): boolean =>
    window.performance.navigation.type ===
      window.performance.navigation.TYPE_BACK_FORWARD ||
    window.performance
      .getEntriesByType("navigation")
      .map((navigation) => (navigation as PerformanceNavigationTiming).type)
      .includes("back_forward");

  public triggerStoreState = (): void => {
    this.props.storeState && this.props.storeState();
  };

  public triggerRestoreState = (): object | string | false => {
    const data =
      (this.isBackForward() &&
        this.props.restoreState &&
        this.props.restoreState()) ||
      false;

    this.isSuccess = !!data;

    return data;
  };

  private isValid = (): boolean =>
    !(
      this.props.options &&
      this.props.options.hasDependency &&
      !this.isSuccess
    );

  public triggerCallback = (): void => {
    this.isBackForward() &&
      this.isValid() &&
      this.props.callback &&
      this.props.callback();
  };

  public unmount = (): void => {
    window.removeEventListener("pageshow", this.handlePageShow);
    window.removeEventListener("pagehide", this.handlePageHide);
    this.isSuccess = false;
  };
}

export default BackForwardLifecycle;
