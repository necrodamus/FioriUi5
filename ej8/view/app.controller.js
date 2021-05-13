sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel"

], function (Controller, MessageToast, JSONModel, ResourceModel) {
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

         // set i18n model on view
         var i18nModel = new ResourceModel({
            bundleName: "sap.ui.demo.walkthrough.i18n.i18n"
         });
         this.getView().setModel(i18nModel, "i18n");
      },

      onShowHello: function () {
         
         /*
         let cheqName = this.getView().getModel().oData.recipient.name;
         if (cheqName)
            MessageToast.show("Welcome " + this.getView().getModel().oData.recipient.name + " to Ui5");
         */
         // read msg from i18n model
         let oBundle = this.getView().getModel("i18n").getResourceBundle();
         let sRecipient = this.getView().getModel().getProperty("/recipient/name");
         let sMsg = oBundle.getText("helloMsg", [sRecipient]);
         MessageToast.show(sMsg);

      }
   });
});