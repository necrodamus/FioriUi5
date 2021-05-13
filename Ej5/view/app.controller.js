sap.ui.define([
    "sap/ui/core/mvc/Controller"
 ], function (Controller) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.view.app", {
       onShowHello : function () {
          // show a native JavaScript alert
          alert("Good Morning Andrew!!!!!!!!!!!!!");
       }
    });
 });