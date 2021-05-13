sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/ui/core/Fragment"
], function (Controller, MessageToast, Fragment) {
   "use strict";
   return Controller.extend("sap.ui.demo.walkthrough.view.hello", {
      onShowHello: function () {
         // read msg from i18n model
         let oBundle = this.getView().getModel("i18n").getResourceBundle();
         let sRecipient = this.getView().getModel().getProperty("/recipient/name");
         let sMsg = oBundle.getText("helloMsg", [sRecipient]);
         // Show msg 
         MessageToast.show(sMsg);

      },
      onOpenDialog: function () {
         var oView = this.getView();

         // create dialog lazily
         if (!this.pDialog) {
            this.pDialog = Fragment.load({
               id: oView.getId(),
               name: "sap.ui.demo.walkthrough.view.hellodialog"
            }).then(function (oDialog) {
               // connect dialog to the root view of this component (models, lifecycle)
               oView.addDependent(oDialog);
               return oDialog;
            });
         }
         this.pDialog.then(function (oDialog) {
            oDialog.open();
         });
      }
   });
});