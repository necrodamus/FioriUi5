sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel",
   "sap/ui/core/IconPool",
   "./view/hellodialog"
], function (UIComponent, JSONModel, ResourceModel, IconPool, hellodialog) {
   "use strict";
   return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
      metadata: {
         manifest: "json"
      },


      init: function () {
         // call the init function of the parent
         UIComponent.prototype.init.apply(this, arguments);
         // set data model
         var oData = {
            recipient: {
               name: "Andres Necrodamus"
            }
         };
         var oModel = new JSONModel(oData);
         this.setModel(oModel);

         // set i18n model
         var i18nModel = new ResourceModel({
            bundleName: "sap.ui.demo.walkthrough.i18n.i18n"
         });
         this.setModel(i18nModel, "i18n");
         sap.ui.core.IconPool.addIcon('heart', 'BusinessSuiteInAppSymbols', 'BusinessSuiteInAppSymbols', 'e000');
         // set dialog
         this._helloDialog = new hellodialog(this.getRootControl());

      },
      exit: function () {
         this._helloDialog.destroy();
         delete this._helloDialog;
      },

      openHelloDialog: function () {
         this._helloDialog.open();
      }
   });
});