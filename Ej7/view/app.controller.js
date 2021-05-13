sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
   "use strict";
   return Controller.extend("sap.ui.demo.walkthrough.view.app", {

      onInit: function () {
         // set data model on view
         var oData = {
            recipient: {
               name: "andres"
            }
         };
         var oModel = new JSONModel(oData);
         this.getView().setModel(oModel);
      },

      onShowHello: function () {
         // show a native JavaScript alert
         let cheqName = this.getView().getModel().oData.recipient.name;
         if (cheqName)
            MessageToast.show("Welcome " + this.getView().getModel().oData.recipient.name + " to Ui5");
      }
   });
});