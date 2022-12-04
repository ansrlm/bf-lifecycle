!function(){"use strict";var e=function(e){var t=this;this.mount=function(){window.addEventListener("pageshow",t.handlePageShow),window.addEventListener("pagehide",t.handlePageHide)},this.checkBackForward=function(){return window.performance.navigation.type===window.performance.navigation.TYPE_BACK_FORWARD||window.performance.getEntriesByType("navigation").map((function(e){return e.type})).includes("back_forward")},this.triggerStoreStatus=function(){t.props.storeStatus&&t.props.storeStatus()},this.triggerRestoreStatus=function(){var e=t.checkBackForward()&&t.props.restoreStatus&&t.props.restoreStatus()||!1;return t.isSuccess=!!e,e},this.isValid=function(){return!(t.props.options&&t.props.options.hasDependency&&!t.isSuccess)},this.triggerCallback=function(){t.checkBackForward()&&t.isValid()&&t.props.callback&&t.props.callback()},this.unmount=function(){window.removeEventListener("pageshow",t.handlePageShow),window.removeEventListener("pagehide",t.handlePageHide),t.isSuccess=!1},this.props=e,this.handlePageShow=function(e){e.persisted&&t.props.callback&&t.props.callback()},this.handlePageHide=function(e){t.props.storeStatus&&t.props.storeStatus(),!e.persisted&&t.props.options&&t.props.options.withClearScrollWillNotStoreCache&&window.scrollTo(0,0)},this.isSuccess=!1},t=document.getElementById("demo");t.innerHTML="initial";var o=new e({callback:function(){t.innerHTML="back_forward_from_bfcache"},storeState:function(){sessionStorage.setItem("bf-lifecycle-example-data","back_forward")},restoreState:function(){var e=sessionStorage.getItem("bf-lifecycle-example-data");return sessionStorage.removeItem("bf-lifecycle-example-data"),e},options:{hasDependency:!0,withClearScrollWillNotStoreBfCache:!0}});o.mount();var r=o.triggerRestoreState();r&&(t.innerHTML=r)}();
//# sourceMappingURL=main.47753a09.js.map