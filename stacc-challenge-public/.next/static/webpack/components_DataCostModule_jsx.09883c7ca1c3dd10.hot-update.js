"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("components_DataCostModule_jsx",{

/***/ "./components/DataCostModule.jsx":
/*!***************************************!*\
  !*** ./components/DataCostModule.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DataCostModule; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Data_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Data.module.css */ \"./components/Data.module.css\");\n/* harmony import */ var _Data_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Data_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chart */ \"./components/Chart.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nasync function fetchData() {\n    const response = await fetch(\"http://localhost:3306/electricityprice?year=2023&month=01&day=06\", {\n        mode: \"no-cors\"\n    });\n    console.log(response);\n    const data = await response.json();\n    return data;\n}\nasync function fetchConsumptionData() {\n    return await fetch(\"/api/consumption\").then((res)=>res.json());\n}\nfunction DataCostModule() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [consumptionData, setConsumptionData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [showCost, setShowCost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [showPrice, setShowPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [showConsumption, setShowConsumption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        Promise.all([\n            fetchData(),\n            fetchConsumptionData()\n        ]).then((param)=>{\n            let [priceData, consumptionData] = param;\n            const mergedData = priceData.map((priceItem)=>{\n                const priceHour = new Date(priceItem.time_start).getHours();\n                const consumptionItem = consumptionData.find((consumptionItem)=>{\n                    const consumptionFromHour = new Date(consumptionItem.from).getHours();\n                    return priceHour === consumptionFromHour;\n                });\n                return {\n                    hour: priceHour,\n                    price: priceItem.NOK_per_kWh,\n                    cost: priceItem.NOK_per_kWh * (consumptionItem ? consumptionItem.consumption : 0),\n                    consumption: consumptionItem ? consumptionItem.consumption : 0\n                };\n            });\n            setConsumptionData(consumptionData);\n            setData(mergedData);\n        });\n    }, []);\n    if (!data || !consumptionData) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/staccapp/components/DataCostModule.jsx\",\n        lineNumber: 53,\n        columnNumber: 41\n    }, this);\n    const filteredData = data.map((item)=>({\n            ...item,\n            cost: showCost ? item.cost : null,\n            price: showPrice ? item.price : null,\n            consumption: showConsumption ? item.consumption : null\n        }));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Data_module_css__WEBPACK_IMPORTED_MODULE_3___default().price_card),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Str\\xf8mpriser for ditt forbruk\"\n            }, void 0, false, {\n                fileName: \"/staccapp/components/DataCostModule.jsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Under finner du str\\xf8mprisene innenfor de aktuelle prisomr\\xe5dene hentet fra hvakosterstrommen.no. Det finnes fem forskjellige prisomr\\xe5der i Norge.\"\n            }, void 0, false, {\n                fileName: \"/staccapp/components/DataCostModule.jsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Dagens str\\xf8mpriser\"\n            }, void 0, false, {\n                fileName: \"/staccapp/components/DataCostModule.jsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Data_module_css__WEBPACK_IMPORTED_MODULE_3___default().chart_container),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Data_module_css__WEBPACK_IMPORTED_MODULE_3___default().checkboxes),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                checked: showCost,\n                                onChange: ()=>setShowCost(!showCost),\n                                className: (_Data_module_css__WEBPACK_IMPORTED_MODULE_3___default().custom_checkbox),\n                                id: \"cost-checkbox\"\n                            }, void 0, false, {\n                                fileName: \"/staccapp/components/DataCostModule.jsx\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"cost-checkbox\",\n                                className: (_Data_module_css__WEBPACK_IMPORTED_MODULE_3___default().custom_checkbox_label),\n                                children: \"Cost\"\n                            }, void 0, false, {\n                                fileName: \"/staccapp/components/DataCostModule.jsx\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                checked: showPrice,\n                                onChange: ()=>setShowPrice(!showPrice),\n                                className: (_Data_module_css__WEBPACK_IMPORTED_MODULE_3___default().custom_checkbox),\n                                id: \"price-checkbox\"\n                            }, void 0, false, {\n                                fileName: \"/staccapp/components/DataCostModule.jsx\",\n                                lineNumber: 86,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"price-checkbox\",\n                                className: (_Data_module_css__WEBPACK_IMPORTED_MODULE_3___default().custom_checkbox_label),\n                                children: \"Price\"\n                            }, void 0, false, {\n                                fileName: \"/staccapp/components/DataCostModule.jsx\",\n                                lineNumber: 93,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                checked: showConsumption,\n                                onChange: ()=>setShowConsumption(!showConsumption),\n                                className: (_Data_module_css__WEBPACK_IMPORTED_MODULE_3___default().custom_checkbox),\n                                id: \"consumption-checkbox\"\n                            }, void 0, false, {\n                                fileName: \"/staccapp/components/DataCostModule.jsx\",\n                                lineNumber: 99,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"consumption-checkbox\",\n                                className: (_Data_module_css__WEBPACK_IMPORTED_MODULE_3___default().custom_checkbox_label),\n                                children: \"Consumption\"\n                            }, void 0, false, {\n                                fileName: \"/staccapp/components/DataCostModule.jsx\",\n                                lineNumber: 106,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/staccapp/components/DataCostModule.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chart__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        data: filteredData\n                    }, void 0, false, {\n                        fileName: \"/staccapp/components/DataCostModule.jsx\",\n                        lineNumber: 113,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/staccapp/components/DataCostModule.jsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/staccapp/components/DataCostModule.jsx\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, this);\n}\n_s(DataCostModule, \"3gL/41DUsMjqTMi2q3c+LbsRGv0=\");\n_c = DataCostModule;\nvar _c;\n$RefreshReg$(_c, \"DataCostModule\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eEM7Ozs7OzswQ0FHRCw4REFBQ29EO2dDQUNDQyxNQUFLO2dDQUNMQyxTQUFTbkM7Z0NBQ1RvQyxVQUFVLElBQU1uQyxhQUFhLENBQUNEO2dDQUM5QjBCLFdBQVc3Qyx5RUFBc0I7Z0NBQ2pDeUQsSUFBRzs7Ozs7OzBDQUVMLDhEQUFDQztnQ0FDQ0MsU0FBUTtnQ0FDUmQsV0FBVzdDLCtFQUE0QjswQ0FDeEM7Ozs7OzswQ0FHRCw4REFBQ29EO2dDQUNDQyxNQUFLO2dDQUNMQyxTQUFTakM7Z0NBQ1RrQyxVQUFVLElBQU1qQyxtQkFBbUIsQ0FBQ0Q7Z0NBQ3BDd0IsV0FBVzdDLHlFQUFzQjtnQ0FDakN5RCxJQUFHOzs7Ozs7MENBRUwsOERBQUNDO2dDQUNDQyxTQUFRO2dDQUNSZCxXQUFXN0MsK0VBQTRCOzBDQUN4Qzs7Ozs7Ozs7Ozs7O2tDQUlILDhEQUFDQyw4Q0FBS0E7d0JBQUNPLE1BQU1tQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXJCLENBQUM7R0FuR3VCOUI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EYXRhQ29zdE1vZHVsZS5qc3g/ZDcwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9EYXRhLm1vZHVsZS5jc3MnO1xuaW1wb3J0IENoYXJ0IGZyb20gJy4vQ2hhcnQnO1xuXG5hc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzMwNi9lbGVjdHJpY2l0eXByaWNlP3llYXI9MjAyMyZtb250aD0wMSZkYXk9MDYnLFxuICAgIHsgbW9kZTogJ25vLWNvcnMnIH1cbiAgKTtcbiAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn1cbmFzeW5jIGZ1bmN0aW9uIGZldGNoQ29uc3VtcHRpb25EYXRhKCkge1xuICByZXR1cm4gYXdhaXQgZmV0Y2goJy9hcGkvY29uc3VtcHRpb24nKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXRhQ29zdE1vZHVsZSgpIHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtjb25zdW1wdGlvbkRhdGEsIHNldENvbnN1bXB0aW9uRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3Nob3dDb3N0LCBzZXRTaG93Q29zdF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3Nob3dQcmljZSwgc2V0U2hvd1ByaWNlXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbc2hvd0NvbnN1bXB0aW9uLCBzZXRTaG93Q29uc3VtcHRpb25dID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBQcm9taXNlLmFsbChbZmV0Y2hEYXRhKCksIGZldGNoQ29uc3VtcHRpb25EYXRhKCldKS50aGVuKFxuICAgICAgKFtwcmljZURhdGEsIGNvbnN1bXB0aW9uRGF0YV0pID0+IHtcbiAgICAgICAgY29uc3QgbWVyZ2VkRGF0YSA9IHByaWNlRGF0YS5tYXAoKHByaWNlSXRlbSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHByaWNlSG91ciA9IG5ldyBEYXRlKHByaWNlSXRlbS50aW1lX3N0YXJ0KS5nZXRIb3VycygpO1xuICAgICAgICAgIGNvbnN0IGNvbnN1bXB0aW9uSXRlbSA9IGNvbnN1bXB0aW9uRGF0YS5maW5kKChjb25zdW1wdGlvbkl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnN1bXB0aW9uRnJvbUhvdXIgPSBuZXcgRGF0ZShcbiAgICAgICAgICAgICAgY29uc3VtcHRpb25JdGVtLmZyb21cbiAgICAgICAgICAgICkuZ2V0SG91cnMoKTtcbiAgICAgICAgICAgIHJldHVybiBwcmljZUhvdXIgPT09IGNvbnN1bXB0aW9uRnJvbUhvdXI7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaG91cjogcHJpY2VIb3VyLFxuICAgICAgICAgICAgcHJpY2U6IHByaWNlSXRlbS5OT0tfcGVyX2tXaCxcbiAgICAgICAgICAgIGNvc3Q6XG4gICAgICAgICAgICAgIHByaWNlSXRlbS5OT0tfcGVyX2tXaCAqXG4gICAgICAgICAgICAgIChjb25zdW1wdGlvbkl0ZW0gPyBjb25zdW1wdGlvbkl0ZW0uY29uc3VtcHRpb24gOiAwKSxcbiAgICAgICAgICAgIGNvbnN1bXB0aW9uOiBjb25zdW1wdGlvbkl0ZW0gPyBjb25zdW1wdGlvbkl0ZW0uY29uc3VtcHRpb24gOiAwLFxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNldENvbnN1bXB0aW9uRGF0YShjb25zdW1wdGlvbkRhdGEpO1xuICAgICAgICBzZXREYXRhKG1lcmdlZERhdGEpO1xuICAgICAgfVxuICAgICk7XG4gIH0sIFtdKTtcblxuICBpZiAoIWRhdGEgfHwgIWNvbnN1bXB0aW9uRGF0YSkgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcblxuICBjb25zdCBmaWx0ZXJlZERhdGEgPSBkYXRhLm1hcCgoaXRlbSkgPT4gKHtcbiAgICAuLi5pdGVtLFxuICAgIGNvc3Q6IHNob3dDb3N0ID8gaXRlbS5jb3N0IDogbnVsbCxcbiAgICBwcmljZTogc2hvd1ByaWNlID8gaXRlbS5wcmljZSA6IG51bGwsXG4gICAgY29uc3VtcHRpb246IHNob3dDb25zdW1wdGlvbiA/IGl0ZW0uY29uc3VtcHRpb24gOiBudWxsLFxuICB9KSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByaWNlX2NhcmR9PlxuICAgICAgPGgyPlN0csO4bXByaXNlciBmb3IgZGl0dCBmb3JicnVrPC9oMj5cbiAgICAgIDxwPlxuICAgICAgICBVbmRlciBmaW5uZXIgZHUgc3Ryw7htcHJpc2VuZSBpbm5lbmZvciBkZSBha3R1ZWxsZSBwcmlzb21yw6VkZW5lIGhlbnRldFxuICAgICAgICBmcmEgaHZha29zdGVyc3Ryb21tZW4ubm8uIERldCBmaW5uZXMgZmVtIGZvcnNramVsbGlnZSBwcmlzb21yw6VkZXIgaVxuICAgICAgICBOb3JnZS5cbiAgICAgIDwvcD5cbiAgICAgIDxoMz5EYWdlbnMgc3Ryw7htcHJpc2VyPC9oMz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhcnRfY29udGFpbmVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGVja2JveGVzfT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICBjaGVja2VkPXtzaG93Q29zdH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBzZXRTaG93Q29zdCghc2hvd0Nvc3QpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY3VzdG9tX2NoZWNrYm94fVxuICAgICAgICAgICAgaWQ9XCJjb3N0LWNoZWNrYm94XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgaHRtbEZvcj1cImNvc3QtY2hlY2tib3hcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY3VzdG9tX2NoZWNrYm94X2xhYmVsfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIENvc3RcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgIGNoZWNrZWQ9e3Nob3dQcmljZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBzZXRTaG93UHJpY2UoIXNob3dQcmljZSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jdXN0b21fY2hlY2tib3h9XG4gICAgICAgICAgICBpZD1cInByaWNlLWNoZWNrYm94XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgaHRtbEZvcj1cInByaWNlLWNoZWNrYm94XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmN1c3RvbV9jaGVja2JveF9sYWJlbH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBQcmljZVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgY2hlY2tlZD17c2hvd0NvbnN1bXB0aW9ufVxuICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHNldFNob3dDb25zdW1wdGlvbighc2hvd0NvbnN1bXB0aW9uKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmN1c3RvbV9jaGVja2JveH1cbiAgICAgICAgICAgIGlkPVwiY29uc3VtcHRpb24tY2hlY2tib3hcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICBodG1sRm9yPVwiY29uc3VtcHRpb24tY2hlY2tib3hcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY3VzdG9tX2NoZWNrYm94X2xhYmVsfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIENvbnN1bXB0aW9uXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxDaGFydCBkYXRhPXtmaWx0ZXJlZERhdGF9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiQ2hhcnQiLCJmZXRjaERhdGEiLCJyZXNwb25zZSIsImZldGNoIiwibW9kZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwianNvbiIsImZldGNoQ29uc3VtcHRpb25EYXRhIiwidGhlbiIsInJlcyIsIkRhdGFDb3N0TW9kdWxlIiwic2V0RGF0YSIsImNvbnN1bXB0aW9uRGF0YSIsInNldENvbnN1bXB0aW9uRGF0YSIsInNob3dDb3N0Iiwic2V0U2hvd0Nvc3QiLCJzaG93UHJpY2UiLCJzZXRTaG93UHJpY2UiLCJzaG93Q29uc3VtcHRpb24iLCJzZXRTaG93Q29uc3VtcHRpb24iLCJQcm9taXNlIiwiYWxsIiwicHJpY2VEYXRhIiwibWVyZ2VkRGF0YSIsIm1hcCIsInByaWNlSXRlbSIsInByaWNlSG91ciIsIkRhdGUiLCJ0aW1lX3N0YXJ0IiwiZ2V0SG91cnMiLCJjb25zdW1wdGlvbkl0ZW0iLCJmaW5kIiwiY29uc3VtcHRpb25Gcm9tSG91ciIsImZyb20iLCJob3VyIiwicHJpY2UiLCJOT0tfcGVyX2tXaCIsImNvc3QiLCJjb25zdW1wdGlvbiIsImRpdiIsImZpbHRlcmVkRGF0YSIsIml0ZW0iLCJjbGFzc05hbWUiLCJwcmljZV9jYXJkIiwiaDIiLCJwIiwiaDMiLCJjaGFydF9jb250YWluZXIiLCJjaGVja2JveGVzIiwiaW5wdXQiLCJ0eXBlIiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwiY3VzdG9tX2NoZWNrYm94IiwiaWQiLCJsYWJlbCIsImh0bWxGb3IiLCJjdXN0b21fY2hlY2tib3hfbGFiZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/DataCostModule.jsx\n"));

/***/ })

});