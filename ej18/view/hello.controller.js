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
      onCloseDialog: function (){
			// note: We don't need to chain to the pDialog promise, since this event-handler
			// is only called from within the loaded dialog itself.
			this.byId("hellodialog").close();
      },
      onOpenDialog : function () {
			this.getOwnerComponent().openHelloDialog();
		}
   });
});