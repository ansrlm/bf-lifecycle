import BackForwardLifecycle from "bf-lifecycle";

const pageStateElement = document.getElementById("demo");

pageStateElement.innerHTML = "initial";

const bfLifecycle = new BackForwardLifecycle({
  callback: () => {
    pageStateElement.innerHTML = "back_forward_from_bfcache";
  },
  storeState: () => {
    sessionStorage.setItem("bf-lifecycle-example-data", "back_forward");
  },
  restoreState: () => {
    const data = sessionStorage.getItem("bf-lifecycle-example-data");
    sessionStorage.removeItem("bf-lifecycle-example-data");
    return data;
  },
  options: {
    hasDependency: true,
    withClearScrollWillNotStoreBfCache: true,
  },
});

bfLifecycle.mount();

const data = bfLifecycle.triggerRestoreState();

if (data) pageStateElement.innerHTML = data;
