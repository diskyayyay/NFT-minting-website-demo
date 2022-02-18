"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_supatat_Desktop_Visual_Studio_Code_nft_building_demos_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_supatat_Desktop_Visual_Studio_Code_nft_building_demos_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_supatat_Desktop_Visual_Studio_Code_nft_building_demos_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emotion/react */ \"./node_modules/@emotion/react/dist/emotion-react.browser.esm.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _utility_createEmotionCache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utility/createEmotionCache */ \"./utility/createEmotionCache.js\");\n/* harmony import */ var _styles_theme_darkTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/theme/darkTheme */ \"./styles/theme/darkTheme.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_navabr_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/navabr/Navbar */ \"./components/navabr/Navbar.js\");\n/* harmony import */ var _components_page_wrapper_PageWrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/page-wrapper/PageWrap */ \"./components/page-wrapper/PageWrap.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar clientSideEmotionCache = (0,_utility_createEmotionCache__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\nvar MyApp = function(props) {\n    _s();\n    var Component = props.Component, _emotionCache = props.emotionCache, emotionCache = _emotionCache === void 0 ? clientSideEmotionCache : _emotionCache, pageProps = props.pageProps;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        accountAddress: false,\n        metamaskConnected: false\n    }), userState = ref[0], setUserState = ref[1];\n    var accountAddress = userState.accountAddress;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        onChangeAddress();\n        onChangeChain();\n        // loadWeb3()\n        loadBlockchainData();\n    }, [\n        accountAddress\n    ]);\n    var onChangeChain = function() {\n        ethereum.on('chainChanged', function(id) {\n            console.log(id);\n        });\n    };\n    var onChangeAddress = function() {\n        window.ethereum.on('accountsChanged', function(accounts) {\n            setUserState(_objectSpread({}, userState, {\n                accountAddress: accounts\n            }));\n            console.log('halo', accounts);\n        });\n    };\n    // const loadWeb3 = async () => {\n    //   if (window.ethereum) {\n    //     window.web3 = new Web3(window.ethereum);\n    //   } else if (window.web3) {\n    //     window.web3 = new Web3(window.web3.currentProvider);\n    //     console.log('currentPro')\n    //   } else {\n    //     window.alert(\n    //       \"Non-Ethereum browser detected. You should consider trying MetaMask!\"\n    //     );\n    //   }\n    // };\n    var loadBlockchainData = function() {\n        var _ref = _asyncToGenerator(_Users_supatat_Desktop_Visual_Studio_Code_nft_building_demos_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var accounts;\n            return _Users_supatat_Desktop_Visual_Studio_Code_nft_building_demos_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return window.ethereum.request({\n                            method: 'eth_requestAccounts'\n                        });\n                    case 2:\n                        accounts = _ctx.sent;\n                        // if (accountAddress === accounts) return\n                        console.log(\"accounts\", accounts);\n                        setUserState(_objectSpread({}, userState, {\n                            accountAddress: accounts[0]\n                        }));\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function loadBlockchainData() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var connectToMetaMask = function() {\n        var _ref = _asyncToGenerator(_Users_supatat_Desktop_Visual_Studio_Code_nft_building_demos_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _Users_supatat_Desktop_Visual_Studio_Code_nft_building_demos_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return window.ethereum.enable();\n                    case 2:\n                        // const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });\n                        // // if (accountAddress === accounts) return\n                        // console.log(\"accounts\",accounts)\n                        // setUserState({...userState,accountAddress:accounts[0]})\n                        setUserState(_objectSpread({}, userState, {\n                            metamaskConnected: true\n                        }));\n                        window.location.reload();\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function connectToMetaMask() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_9__.CacheProvider, {\n        value: emotionCache,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.ThemeProvider, {\n            theme: _styles_theme_darkTheme__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.CssBaseline, {}, void 0, false, {\n                    fileName: \"/Users/supatat/Desktop/Visual_Studio_Code/nft-building/demos/web/pages/_app.js\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_navabr_Navbar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    connectToMetaMask: connectToMetaMask,\n                    accountAddress: accountAddress\n                }, void 0, false, {\n                    fileName: \"/Users/supatat/Desktop/Visual_Studio_Code/nft-building/demos/web/pages/_app.js\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_page_wrapper_PageWrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n                        fileName: \"/Users/supatat/Desktop/Visual_Studio_Code/nft-building/demos/web/pages/_app.js\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/supatat/Desktop/Visual_Studio_Code/nft-building/demos/web/pages/_app.js\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/supatat/Desktop/Visual_Studio_Code/nft-building/demos/web/pages/_app.js\",\n            lineNumber: 77,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/supatat/Desktop/Visual_Studio_Code/nft-building/demos/web/pages/_app.js\",\n        lineNumber: 76,\n        columnNumber: 5\n    }, _this));\n};\n_s(MyApp, \"sWEs8U15aMIPbtVOevDsgVszomg=\");\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nMyApp.propTypes = {\n    Component: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().elementType.isRequired),\n    emotionCache: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object),\n    pageProps: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object.isRequired)\n};\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eEIsQ0FBQzt3QkFSS0gsaUJBQWlCOzs7O0lBVXZCLE1BQU0sNkVBQ0g5Qix5REFBYTtRQUFDa0MsS0FBSyxFQUFFdEIsWUFBWTs4RkFDL0JYLHlEQUFhO1lBQUNrQyxLQUFLLEVBQUUvQiwrREFBUzs7NEZBQzVCRix1REFBVzs7Ozs7NEZBQ1hHLGlFQUFNO29CQUFDeUIsaUJBQWlCLEVBQUVBLGlCQUFpQjtvQkFBRWhCLGNBQWMsRUFBRUEsY0FBYzs7Ozs7OzRGQUMzRVIseUVBQVE7MEdBQ1JLLFNBQVMsb0JBQUtFLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtoQyxDQUFDO0dBdkVLSixLQUFLO0tBQUxBLEtBQUs7QUF5RVgsK0RBQWVBLEtBQUssRUFBQztBQUVyQkEsS0FBSyxDQUFDMkIsU0FBUyxHQUFHLENBQUM7SUFDakJ6QixTQUFTLEVBQUVaLDJFQUFnQztJQUMzQ2EsWUFBWSxFQUFFYiwyREFBZ0I7SUFDOUJjLFNBQVMsRUFBRWQsc0VBQTJCO0FBQ3hDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IENhY2hlUHJvdmlkZXIgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyLCBDc3NCYXNlbGluZSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuXG5pbXBvcnQgY3JlYXRlRW1vdGlvbkNhY2hlIGZyb20gJy4uL3V0aWxpdHkvY3JlYXRlRW1vdGlvbkNhY2hlJztcbmltcG9ydCBkYXJrVGhlbWUgZnJvbSAnLi4vc3R5bGVzL3RoZW1lL2RhcmtUaGVtZSc7XG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2YWJyL05hdmJhcidcbmltcG9ydCBQYWdlV3JhcCBmcm9tICcuLi9jb21wb25lbnRzL3BhZ2Utd3JhcHBlci9QYWdlV3JhcCdcbmltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xuXG5jb25zdCBjbGllbnRTaWRlRW1vdGlvbkNhY2hlID0gY3JlYXRlRW1vdGlvbkNhY2hlKCk7XG5cbmNvbnN0IE15QXBwID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgQ29tcG9uZW50LCBlbW90aW9uQ2FjaGUgPSBjbGllbnRTaWRlRW1vdGlvbkNhY2hlLCBwYWdlUHJvcHMgfSA9IHByb3BzO1xuICBjb25zdCBbdXNlclN0YXRlLCBzZXRVc2VyU3RhdGVdID11c2VTdGF0ZSh7XG4gICAgYWNjb3VudEFkZHJlc3M6ZmFsc2UsXG4gICAgbWV0YW1hc2tDb25uZWN0ZWQ6ZmFsc2UsXG4gIH0pXG4gIGNvbnN0IHthY2NvdW50QWRkcmVzc30gPSB1c2VyU3RhdGVcblxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBvbkNoYW5nZUFkZHJlc3MoKVxuICAgIG9uQ2hhbmdlQ2hhaW4oKVxuICAgIC8vIGxvYWRXZWIzKClcbiAgICBsb2FkQmxvY2tjaGFpbkRhdGEoKVxuICB9LFthY2NvdW50QWRkcmVzc10pXG5cblxuIFxuICBjb25zdCBvbkNoYW5nZUNoYWluPSgpPT57XG4gICAgZXRoZXJldW0ub24oJ2NoYWluQ2hhbmdlZCcsIChpZCk9PntcbiAgICAgIGNvbnNvbGUubG9nKGlkKVxuICAgIH0pO1xuICB9XG4gIGNvbnN0IG9uQ2hhbmdlQWRkcmVzcz0oKT0+e1xuICAgIHdpbmRvdy5ldGhlcmV1bS5vbignYWNjb3VudHNDaGFuZ2VkJywoYWNjb3VudHMpPT57XG4gICAgICBzZXRVc2VyU3RhdGUoey4uLnVzZXJTdGF0ZSxhY2NvdW50QWRkcmVzczphY2NvdW50c30pXG4gICAgICBjb25zb2xlLmxvZygnaGFsbycsYWNjb3VudHMpXG4gICAgfSlcbiAgfVxuXG4gIC8vIGNvbnN0IGxvYWRXZWIzID0gYXN5bmMgKCkgPT4ge1xuICAvLyAgIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcbiAgLy8gICAgIHdpbmRvdy53ZWIzID0gbmV3IFdlYjMod2luZG93LmV0aGVyZXVtKTtcbiAgLy8gICB9IGVsc2UgaWYgKHdpbmRvdy53ZWIzKSB7XG4gIC8vICAgICB3aW5kb3cud2ViMyA9IG5ldyBXZWIzKHdpbmRvdy53ZWIzLmN1cnJlbnRQcm92aWRlcik7XG4gIC8vICAgICBjb25zb2xlLmxvZygnY3VycmVudFBybycpXG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgIHdpbmRvdy5hbGVydChcbiAgLy8gICAgICAgXCJOb24tRXRoZXJldW0gYnJvd3NlciBkZXRlY3RlZC4gWW91IHNob3VsZCBjb25zaWRlciB0cnlpbmcgTWV0YU1hc2shXCJcbiAgLy8gICAgICk7XG4gIC8vICAgfVxuICAvLyB9O1xuXG4gIGNvbnN0IGxvYWRCbG9ja2NoYWluRGF0YSA9IGFzeW5jKCk9PntcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyB9KTtcbiAgICAgIC8vIGlmIChhY2NvdW50QWRkcmVzcyA9PT0gYWNjb3VudHMpIHJldHVyblxuICAgICAgY29uc29sZS5sb2coXCJhY2NvdW50c1wiLGFjY291bnRzKVxuICAgICAgc2V0VXNlclN0YXRlKHsuLi51c2VyU3RhdGUsYWNjb3VudEFkZHJlc3M6YWNjb3VudHNbMF19KVxuICAgICAgXG4gIH1cblxuICBjb25zdCBjb25uZWN0VG9NZXRhTWFzayA9IGFzeW5jKCk9PntcbiAgICBhd2FpdCB3aW5kb3cuZXRoZXJldW0uZW5hYmxlKCk7XG4gICAgLy8gY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnIH0pO1xuICAgIC8vIC8vIGlmIChhY2NvdW50QWRkcmVzcyA9PT0gYWNjb3VudHMpIHJldHVyblxuICAgIC8vIGNvbnNvbGUubG9nKFwiYWNjb3VudHNcIixhY2NvdW50cylcbiAgICAvLyBzZXRVc2VyU3RhdGUoey4uLnVzZXJTdGF0ZSxhY2NvdW50QWRkcmVzczphY2NvdW50c1swXX0pXG4gICAgc2V0VXNlclN0YXRlKHsuLi51c2VyU3RhdGUsbWV0YW1hc2tDb25uZWN0ZWQ6IHRydWUgfSk7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FjaGVQcm92aWRlciB2YWx1ZT17ZW1vdGlvbkNhY2hlfT5cbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXtkYXJrVGhlbWV9PlxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgICAgPE5hdmJhciBjb25uZWN0VG9NZXRhTWFzaz17Y29ubmVjdFRvTWV0YU1hc2t9IGFjY291bnRBZGRyZXNzPXthY2NvdW50QWRkcmVzc30vPlxuICAgICAgICA8UGFnZVdyYXA+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9QYWdlV3JhcD5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICA8L0NhY2hlUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcblxuTXlBcHAucHJvcFR5cGVzID0ge1xuICBDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxuICBlbW90aW9uQ2FjaGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIHBhZ2VQcm9wczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlByb3BUeXBlcyIsIkNhY2hlUHJvdmlkZXIiLCJUaGVtZVByb3ZpZGVyIiwiQ3NzQmFzZWxpbmUiLCJjcmVhdGVFbW90aW9uQ2FjaGUiLCJkYXJrVGhlbWUiLCJOYXZiYXIiLCJQYWdlV3JhcCIsIldlYjMiLCJjbGllbnRTaWRlRW1vdGlvbkNhY2hlIiwiTXlBcHAiLCJwcm9wcyIsIkNvbXBvbmVudCIsImVtb3Rpb25DYWNoZSIsInBhZ2VQcm9wcyIsImFjY291bnRBZGRyZXNzIiwibWV0YW1hc2tDb25uZWN0ZWQiLCJ1c2VyU3RhdGUiLCJzZXRVc2VyU3RhdGUiLCJvbkNoYW5nZUFkZHJlc3MiLCJvbkNoYW5nZUNoYWluIiwibG9hZEJsb2NrY2hhaW5EYXRhIiwiZXRoZXJldW0iLCJvbiIsImlkIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImFjY291bnRzIiwicmVxdWVzdCIsIm1ldGhvZCIsImNvbm5lY3RUb01ldGFNYXNrIiwiZW5hYmxlIiwibG9jYXRpb24iLCJyZWxvYWQiLCJ2YWx1ZSIsInRoZW1lIiwicHJvcFR5cGVzIiwiZWxlbWVudFR5cGUiLCJpc1JlcXVpcmVkIiwib2JqZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

});