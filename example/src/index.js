import BackForwardLifecycle from "bf-lifecycle";

const pageStatusElement = document.getElementById("demo");

pageStatusElement.innerHTML = "initial";

const bfLifecycle = new BackForwardLifecycle({
  callback: () => {
    pageStatusElement.innerHTML = "back_forward_from_bfcache";
  },
  storeStatus: () => {
    sessionStorage.setItem("bf-lifecycle-example-data", "back_forward");
  },
  restoreStatus: () => {
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

const data = bfLifecycle.triggerRestoreStatus();

if (data) pageStatusElement.innerHTML = data;
