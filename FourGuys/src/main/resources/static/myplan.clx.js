/*
 * App URI: myplan
 * Source Location: myplan.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("myplan", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * myplan.js
			 * Created at 2023. 8. 14. 오전 11:05:15.
			 *
			 * @author USER
			 ************************************************/;
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("member");
			dataSet_1.parseData({});
			app.register(dataSet_1);
			app.supportMedia("all and (min-width: 1024px)", "default");
			app.supportMedia("all and (min-width: 500px) and (max-width: 1023px)", "tablet");
			app.supportMedia("all and (max-width: 499px)", "mobile");
			
			// Configure root container
			var container = app.getContainer();
			container.style.css({
				"width" : "100%",
				"height" : "100%"
			});
			
			// Layout
			var responsiveXYLayout_1 = new cpr.controls.layouts.ResponsiveXYLayout();
			container.setLayout(responsiveXYLayout_1);
			
			// UI Configuration
			var userDefinedControl_1 = new udc.myPageSideBar();
			container.addChild(userDefinedControl_1, {
				positions: [
					{
						"media": "all and (min-width: 1024px)",
						"top": "0px",
						"right": "873px",
						"bottom": "0px",
						"left": "0px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "0px",
						"right": "426px",
						"bottom": "0px",
						"left": "0px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "0px",
						"right": "298px",
						"bottom": "0px",
						"left": "0px"
					}
				]
			});
			
			var grid_1 = new cpr.controls.Grid("grd1");
			grid_1.init({
				"columns": [
					{"width": "100px"},
					{"width": "100px"},
					{"width": "100px"},
					{"width": "100px"},
					{"width": "100px"}
				],
				"header": {
					"rows": [{"height": "24px"}],
					"cells": [
						{
							"constraint": {"rowIndex": 0, "colIndex": 0},
							"configurator": function(cell){
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 1},
							"configurator": function(cell){
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 2},
							"configurator": function(cell){
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 3},
							"configurator": function(cell){
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 4},
							"configurator": function(cell){
							}
						}
					]
				},
				"detail": {
					"rows": [{"height": "24px"}],
					"cells": [
						{
							"constraint": {"rowIndex": 0, "colIndex": 0},
							"configurator": function(cell){
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 1},
							"configurator": function(cell){
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 2},
							"configurator": function(cell){
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 3},
							"configurator": function(cell){
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 4},
							"configurator": function(cell){
							}
						}
					]
				}
			});
			container.addChild(grid_1, {
				positions: [
					{
						"media": "all and (min-width: 1024px)",
						"top": "80px",
						"right": "20px",
						"bottom": "20px",
						"left": "151px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "80px",
						"right": "10px",
						"bottom": "20px",
						"left": "74px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "80px",
						"right": "7px",
						"bottom": "20px",
						"left": "52px"
					}
				]
			});
			
			var userDefinedControl_2 = new udc.logo();
			container.addChild(userDefinedControl_2, {
				positions: [
					{
						"media": "all and (min-width: 1024px)",
						"top": "0px",
						"width": "200px",
						"height": "70px",
						"left": "calc(50% - 100px)"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "0px",
						"width": "98px",
						"height": "70px",
						"left": "calc(50% - 49px)"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "0px",
						"width": "68px",
						"height": "70px",
						"left": "calc(50% - 34px)"
					}
				]
			});
		}
	});
	app.title = "myplan";
	cpr.core.Platform.INSTANCE.register(app);
})();