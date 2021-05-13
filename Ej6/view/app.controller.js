sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast"
], function (Controller, MessageToast) {
   "use strict";
   return Controller.extend("sap.ui.demo.walkthrough.view.app", {
      onShowHello: function () {
         // show a native JavaScript alert
         MessageToast.show("Welcome " + sap.ui.getCore().byId("__xmlview0--nameInput")._sTypedInValue + " to Ui5");
      }
   });
});