sap.ui.define([
	"sap/m/Text"

], function (Text) {
	"use strict";

	new Text({
		text: "Hello World",
        width: "30rem",
        textAlign : sap.ui.core.TextAlign.Center
	}).placeAt("content");

});