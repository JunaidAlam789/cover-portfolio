"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./app/projects.tsx":
/*!**************************!*\
  !*** ./app/projects.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Projects; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card */ \"(app-client)/./app/card.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nconst data = [\n    {\n        image_props: {\n            src: \"/Metaverse_Main.jpg\",\n            height: 200,\n            width: 200,\n            alt: \"blog\"\n        },\n        cardtitle: \"Panaverse\",\n        cardDescription: \"Project Developed in Next.js 13 React and TailwindCSS\",\n        websiteURL: \"https://panaverse-site-tailwind.vercel.app/\",\n        githubURL: \"https://github.com/JunaidAlam789/panaverse_site_tailwind\"\n    },\n    {\n        image_props: {\n            src: \"/usrbin.png\",\n            height: 200,\n            width: 200,\n            alt: \"blog\"\n        },\n        cardtitle: \"USRBIN\",\n        cardDescription: \"Project Developed in Next.js 13 React and TailwindCSS\",\n        websiteURL: \"https://usrbin-6q7i.vercel.app/\",\n        githubURL: \"https://github.com/JunaidAlam789/usrbin\"\n    },\n    {\n        image_props: {\n            src: \"/Blog.jpg\",\n            height: 200,\n            width: 200,\n            alt: \"blog\"\n        },\n        cardtitle: \"Blog\",\n        cardDescription: \"Project Developed in Next.js 13 React and TailwindCSS\",\n        websiteURL: \"https://mywebportal.kvobje.com\",\n        githubURL: \"https://github.com/JunaidAlam789\"\n    },\n    {\n        image_props: {\n            src: \"/Table2.jpg\",\n            height: 200,\n            width: 200,\n            alt: \"mathtables\"\n        },\n        cardtitle: \"MathTable\",\n        cardDescription: \"Project Developed in Next.js 13 React and TailwindCSS\",\n        websiteURL: \"https://mathtablenextapp.vercel.app/\",\n        githubURL: \"https://github.com/JunaidAlam789/mathtablenextapp\"\n    },\n    {\n        image_props: {\n            src: \"/Construction.jpg\",\n            height: 200,\n            width: 200,\n            alt: \"construction\"\n        },\n        cardtitle: \"Construction\",\n        cardDescription: \"Project Developed in Next.js 13 React and TailwindCSS\",\n        websiteURL: \"https://mywebportal.kvobje.com\",\n        githubURL: \"https://github.com/JunaidAlam789\"\n    },\n    {\n        image_props: {\n            src: \"/Blog.jpg\",\n            height: 200,\n            width: 200,\n            alt: \"blog\"\n        },\n        cardtitle: \"Blog\",\n        cardDescription: \"Project Developed in Next.js 13 React and TailwindCSS\",\n        websiteURL: \"https://contentful-blogs-site.netlify.app/\",\n        githubURL: \"https://github.com/JunaidAlam789/Contenful_Blogs\"\n    }\n];\n//\n//   These Cards are not required now ; but how to use useState it hide and show projects\n//\n/* const Card1=<Cards CardImageProps={data[0].image_props}\r\ncardtitle={data[0].cardtitle} cardDescription={data[0].cardDescription} websiteURL={data[0].websiteURL} githubURL={data[0].githubURL}/>\r\n\r\nconst Card2=<Cards CardImageProps={{src:\"/Construction.jpg\" ,height:200, width:200 ,alt:\"blog\"}}\r\ncardtitle=\"Construction\" cardDescription={data[1].cardDescription} websiteURL={data[1].websiteURL} githubURL={data[1].githubURL}/>\r\n\r\nconst Card3=<Cards  CardImageProps={{src:\"/Blog.jpg\", height:200, width:200, alt:\"blog\"}}\r\ncardtitle=\"Blogs\" cardDescription=\"Card6 Porject in Next React Tailwind\" websiteURL=\"https://mywebportal.kvobje.com\" githubURL=\"https://github.com/JunaidAlam789\"/>\r\n\r\nconst Card4=<Cards CardImageProps={{src:\"/Blog.jpg\" ,height:200, width:200 ,alt:\"blog\"}}\r\ncardtitle=\"Blogs\" cardDescription=\"Card6 Porject in Next React Tailwind\" websiteURL=\"https://mywebportal.kvobje.com\" githubURL=\"https://github.com/JunaidAlam789\"/>\r\n\r\nconst Card5=<Cards CardImageProps={{src:\"/Construction.jpg\" ,height:200, width:200 ,alt:\"blog\"}}\r\ncardtitle=\"FabricCraft\" cardDescription=\"Card6 Porject in Next React Tailwind\" websiteURL=\"https://mywebportal.kvobje.com\" githubURL=\"https://github.com/JunaidAlam789\"/>\r\n\r\nconst Card6=<Cards CardImageProps={{src:\"/Construction.jpg\" ,height:200, width:200 ,alt:\"blog\"}}\r\ncardtitle=\"Construction\" cardDescription=\"Card6 Porject in Next React Tailwind\" websiteURL=\"https://mywebportal.kvobje.com\" githubURL=\"https://github.com/JunaidAlam789\"/>\r\n */ function Projects() {\n    _s();\n    //  let [cards, setCards]=useState([Card1, Card2, Card3, Card4, Card5, Card6])\n    let [cards, setCards] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            image_props: {\n                src: \"/Blog.jpg\",\n                height: 200,\n                width: 200,\n                alt: \"blog\"\n            },\n            cardtitle: \"Blog\",\n            cardDescription: \"Project Developed in Next.js 13 React and TailwindCSS\",\n            websiteURL: \"https://mywebportal.kvobje.com\",\n            githubURL: \"https://github.com/JunaidAlam789\"\n        }\n    ]);\n    function projectCards() {\n        //setCards([Card1, Card2, Card3, Card4, Card5, Card6])\n        setCards(data);\n    //alert(card)\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" bg-gray-100\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl flex justify-center\",\n                children: \"Projects\"\n            }, void 0, false, {\n                fileName: \"D:\\\\GitHub\\\\cover-portfolio\\\\app\\\\projects.tsx\",\n                lineNumber: 94,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 m-8\",\n                children: data.map((card, key)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            CardImageProps: card.image_props,\n                            cardtitle: card.cardtitle,\n                            cardDescription: card.cardDescription,\n                            websiteURL: card.websiteURL,\n                            githubURL: card.githubURL\n                        }, void 0, false, {\n                            fileName: \"D:\\\\GitHub\\\\cover-portfolio\\\\app\\\\projects.tsx\",\n                            lineNumber: 109,\n                            columnNumber: 10\n                        }, this)\n                    }, key, false, {\n                        fileName: \"D:\\\\GitHub\\\\cover-portfolio\\\\app\\\\projects.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 36\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\GitHub\\\\cover-portfolio\\\\app\\\\projects.tsx\",\n                lineNumber: 106,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\GitHub\\\\cover-portfolio\\\\app\\\\projects.tsx\",\n        lineNumber: 93,\n        columnNumber: 1\n    }, this);\n}\n_s(Projects, \"p9onqLD8Mv1LMKkufceJZITrs3s=\");\n_c = Projects;\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3Byb2plY3RzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRThCO0FBQ0o7QUFJMUIsTUFBTUUsT0FBTztJQUFDO1FBQUVDLGFBQWE7WUFBRUMsS0FBSTtZQUF1QkMsUUFBTztZQUFLQyxPQUFNO1lBQUtDLEtBQUk7UUFBTTtRQUN2RUMsV0FBVTtRQUNUQyxpQkFBaUI7UUFDakJDLFlBQVc7UUFDWEMsV0FBVTtJQUVYO0lBQ047UUFBRVIsYUFBYTtZQUFFQyxLQUFJO1lBQWVDLFFBQU87WUFBS0MsT0FBTTtZQUFLQyxLQUFJO1FBQU07UUFDL0RDLFdBQVU7UUFDVEMsaUJBQWlCO1FBQ2pCQyxZQUFXO1FBQ1hDLFdBQVU7SUFFZjtJQUNBO1FBQUVSLGFBQWE7WUFBRUMsS0FBSTtZQUFhQyxRQUFPO1lBQUtDLE9BQU07WUFBS0MsS0FBSTtRQUFNO1FBQ25FQyxXQUFVO1FBQ1RDLGlCQUFpQjtRQUNqQkMsWUFBVztRQUNYQyxXQUFVO0lBRWY7SUFDQTtRQUFFUixhQUFhO1lBQUVDLEtBQUk7WUFBZUMsUUFBTztZQUFLQyxPQUFNO1lBQUtDLEtBQUk7UUFBWTtRQUNuRUMsV0FBVTtRQUNUQyxpQkFBaUI7UUFDakJDLFlBQVc7UUFDWEMsV0FBVTtJQUVmO0lBQ0E7UUFBRVIsYUFBYTtZQUFFQyxLQUFJO1lBQXFCQyxRQUFPO1lBQUtDLE9BQU07WUFBS0MsS0FBSTtRQUFjO1FBQ25GQyxXQUFVO1FBQ1RDLGlCQUFpQjtRQUNqQkMsWUFBVztRQUNYQyxXQUFVO0lBRWY7SUFDQTtRQUFFUixhQUFhO1lBQUVDLEtBQUk7WUFBYUMsUUFBTztZQUFLQyxPQUFNO1lBQUtDLEtBQUk7UUFBTTtRQUMzREMsV0FBVTtRQUNUQyxpQkFBaUI7UUFDakJDLFlBQVc7UUFDWEMsV0FBVTtJQUVmO0NBRUg7QUFFYixFQUFFO0FBQ0YseUZBQXlGO0FBQ3pGLEVBQUU7QUFFRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FpQkMsR0FDYyxTQUFTQyxXQUFVOztJQUNoQyw4RUFBOEU7SUFDMUUsSUFBSSxDQUFDQyxPQUFPQyxTQUFTLEdBQUNkLCtDQUFRQSxDQUFDO1FBQUM7WUFBRUcsYUFBYTtnQkFBRUMsS0FBSTtnQkFBYUMsUUFBTztnQkFBS0MsT0FBTTtnQkFBS0MsS0FBSTtZQUFNO1lBQ25HQyxXQUFVO1lBQ1RDLGlCQUFpQjtZQUNqQkMsWUFBVztZQUNYQyxXQUFVO1FBRWY7S0FBRztJQUVELFNBQVNJLGVBQWM7UUFFbkIsc0RBQXNEO1FBQ3RERCxTQUFTWjtJQUNULGFBQWE7SUFDYjtJQUVSLHFCQUNBLDhEQUFDYztRQUFJQyxXQUFVOzswQkFDZiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQStCOzs7Ozs7MEJBWXpDLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDZGYsS0FBS2lCLEdBQUcsQ0FBQyxDQUFDQyxNQUFLQyxNQUFNO29CQUFDLHFCQUFRLDhEQUFDTDtrQ0FFM0IsNEVBQUNmLDZDQUFLQTs0QkFBQ3FCLGdCQUFnQkYsS0FBS2pCLFdBQVc7NEJBQ3ZDSyxXQUFXWSxLQUFLWixTQUFTOzRCQUFFQyxpQkFBaUJXLEtBQUtYLGVBQWU7NEJBQUVDLFlBQVlVLEtBQUtWLFVBQVU7NEJBQUVDLFdBQVdTLEtBQUtULFNBQVM7Ozs7Ozt1QkFIcEZVOzs7OztnQkFPOUI7Ozs7Ozs7Ozs7OztBQU9mLENBQUM7R0E5Q3VCVDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcHJvamVjdHMudHN4P2MxN2YiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ2FyZHMgZnJvbSAnLi9jYXJkJ1xyXG5cclxuXHJcblxyXG5jb25zdCBkYXRhID0gW3sgaW1hZ2VfcHJvcHM6IHsgc3JjOlwiL01ldGF2ZXJzZV9NYWluLmpwZ1wiLCBoZWlnaHQ6MjAwICx3aWR0aDoyMDAsIGFsdDpcImJsb2dcIn0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZHRpdGxlOlwiUGFuYXZlcnNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgIGNhcmREZXNjcmlwdGlvbjogXCJQcm9qZWN0IERldmVsb3BlZCBpbiBOZXh0LmpzIDEzIFJlYWN0IGFuZCBUYWlsd2luZENTU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICB3ZWJzaXRlVVJMOlwiaHR0cHM6Ly9wYW5hdmVyc2Utc2l0ZS10YWlsd2luZC52ZXJjZWwuYXBwL1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICBnaXRodWJVUkw6XCJodHRwczovL2dpdGh1Yi5jb20vSnVuYWlkQWxhbTc4OS9wYW5hdmVyc2Vfc2l0ZV90YWlsd2luZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHsgaW1hZ2VfcHJvcHM6IHsgc3JjOlwiL3VzcmJpbi5wbmdcIiwgaGVpZ2h0OjIwMCAsd2lkdGg6MjAwLCBhbHQ6XCJibG9nXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcmR0aXRsZTpcIlVTUkJJTlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICBjYXJkRGVzY3JpcHRpb246IFwiUHJvamVjdCBEZXZlbG9wZWQgaW4gTmV4dC5qcyAxMyBSZWFjdCBhbmQgVGFpbHdpbmRDU1NcIixcclxuICAgICAgICAgICAgICAgICAgICAgd2Vic2l0ZVVSTDpcImh0dHBzOi8vdXNyYmluLTZxN2kudmVyY2VsLmFwcC9cIixcclxuICAgICAgICAgICAgICAgICAgICAgZ2l0aHViVVJMOlwiaHR0cHM6Ly9naXRodWIuY29tL0p1bmFpZEFsYW03ODkvdXNyYmluXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHsgaW1hZ2VfcHJvcHM6IHsgc3JjOlwiL0Jsb2cuanBnXCIsIGhlaWdodDoyMDAgLHdpZHRoOjIwMCwgYWx0OlwiYmxvZ1wifSxcclxuICAgICAgICAgICAgICAgIGNhcmR0aXRsZTpcIkJsb2dcIixcclxuICAgICAgICAgICAgICAgICBjYXJkRGVzY3JpcHRpb246IFwiUHJvamVjdCBEZXZlbG9wZWQgaW4gTmV4dC5qcyAxMyBSZWFjdCBhbmQgVGFpbHdpbmRDU1NcIixcclxuICAgICAgICAgICAgICAgICB3ZWJzaXRlVVJMOlwiaHR0cHM6Ly9teXdlYnBvcnRhbC5rdm9iamUuY29tXCIsXHJcbiAgICAgICAgICAgICAgICAgZ2l0aHViVVJMOlwiaHR0cHM6Ly9naXRodWIuY29tL0p1bmFpZEFsYW03ODlcIixcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeyBpbWFnZV9wcm9wczogeyBzcmM6XCIvVGFibGUyLmpwZ1wiLCBoZWlnaHQ6MjAwICx3aWR0aDoyMDAsIGFsdDpcIm1hdGh0YWJsZXNcIn0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZHRpdGxlOlwiTWF0aFRhYmxlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgIGNhcmREZXNjcmlwdGlvbjogXCJQcm9qZWN0IERldmVsb3BlZCBpbiBOZXh0LmpzIDEzIFJlYWN0IGFuZCBUYWlsd2luZENTU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICB3ZWJzaXRlVVJMOlwiaHR0cHM6Ly9tYXRodGFibGVuZXh0YXBwLnZlcmNlbC5hcHAvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgIGdpdGh1YlVSTDpcImh0dHBzOi8vZ2l0aHViLmNvbS9KdW5haWRBbGFtNzg5L21hdGh0YWJsZW5leHRhcHBcIixcclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeyBpbWFnZV9wcm9wczogeyBzcmM6XCIvQ29uc3RydWN0aW9uLmpwZ1wiLCBoZWlnaHQ6MjAwICx3aWR0aDoyMDAsIGFsdDpcImNvbnN0cnVjdGlvblwifSxcclxuICAgICAgICAgICAgICAgIGNhcmR0aXRsZTpcIkNvbnN0cnVjdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgIGNhcmREZXNjcmlwdGlvbjogXCJQcm9qZWN0IERldmVsb3BlZCBpbiBOZXh0LmpzIDEzIFJlYWN0IGFuZCBUYWlsd2luZENTU1wiLFxyXG4gICAgICAgICAgICAgICAgIHdlYnNpdGVVUkw6XCJodHRwczovL215d2VicG9ydGFsLmt2b2JqZS5jb21cIixcclxuICAgICAgICAgICAgICAgICBnaXRodWJVUkw6XCJodHRwczovL2dpdGh1Yi5jb20vSnVuYWlkQWxhbTc4OVwiLFxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7IGltYWdlX3Byb3BzOiB7IHNyYzpcIi9CbG9nLmpwZ1wiLCBoZWlnaHQ6MjAwICx3aWR0aDoyMDAsIGFsdDpcImJsb2dcIn0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZHRpdGxlOlwiQmxvZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICBjYXJkRGVzY3JpcHRpb246IFwiUHJvamVjdCBEZXZlbG9wZWQgaW4gTmV4dC5qcyAxMyBSZWFjdCBhbmQgVGFpbHdpbmRDU1NcIixcclxuICAgICAgICAgICAgICAgICAgICAgd2Vic2l0ZVVSTDpcImh0dHBzOi8vY29udGVudGZ1bC1ibG9ncy1zaXRlLm5ldGxpZnkuYXBwL1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICBnaXRodWJVUkw6XCJodHRwczovL2dpdGh1Yi5jb20vSnVuYWlkQWxhbTc4OS9Db250ZW5mdWxfQmxvZ3NcIixcclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXVxyXG5cclxuLy9cclxuLy8gICBUaGVzZSBDYXJkcyBhcmUgbm90IHJlcXVpcmVkIG5vdyA7IGJ1dCBob3cgdG8gdXNlIHVzZVN0YXRlIGl0IGhpZGUgYW5kIHNob3cgcHJvamVjdHNcclxuLy9cclxuXHJcbi8qIGNvbnN0IENhcmQxPTxDYXJkcyBDYXJkSW1hZ2VQcm9wcz17ZGF0YVswXS5pbWFnZV9wcm9wc31cclxuY2FyZHRpdGxlPXtkYXRhWzBdLmNhcmR0aXRsZX0gY2FyZERlc2NyaXB0aW9uPXtkYXRhWzBdLmNhcmREZXNjcmlwdGlvbn0gd2Vic2l0ZVVSTD17ZGF0YVswXS53ZWJzaXRlVVJMfSBnaXRodWJVUkw9e2RhdGFbMF0uZ2l0aHViVVJMfS8+XHJcblxyXG5jb25zdCBDYXJkMj08Q2FyZHMgQ2FyZEltYWdlUHJvcHM9e3tzcmM6XCIvQ29uc3RydWN0aW9uLmpwZ1wiICxoZWlnaHQ6MjAwLCB3aWR0aDoyMDAgLGFsdDpcImJsb2dcIn19XHJcbmNhcmR0aXRsZT1cIkNvbnN0cnVjdGlvblwiIGNhcmREZXNjcmlwdGlvbj17ZGF0YVsxXS5jYXJkRGVzY3JpcHRpb259IHdlYnNpdGVVUkw9e2RhdGFbMV0ud2Vic2l0ZVVSTH0gZ2l0aHViVVJMPXtkYXRhWzFdLmdpdGh1YlVSTH0vPlxyXG5cclxuY29uc3QgQ2FyZDM9PENhcmRzICBDYXJkSW1hZ2VQcm9wcz17e3NyYzpcIi9CbG9nLmpwZ1wiLCBoZWlnaHQ6MjAwLCB3aWR0aDoyMDAsIGFsdDpcImJsb2dcIn19XHJcbmNhcmR0aXRsZT1cIkJsb2dzXCIgY2FyZERlc2NyaXB0aW9uPVwiQ2FyZDYgUG9yamVjdCBpbiBOZXh0IFJlYWN0IFRhaWx3aW5kXCIgd2Vic2l0ZVVSTD1cImh0dHBzOi8vbXl3ZWJwb3J0YWwua3ZvYmplLmNvbVwiIGdpdGh1YlVSTD1cImh0dHBzOi8vZ2l0aHViLmNvbS9KdW5haWRBbGFtNzg5XCIvPlxyXG5cclxuY29uc3QgQ2FyZDQ9PENhcmRzIENhcmRJbWFnZVByb3BzPXt7c3JjOlwiL0Jsb2cuanBnXCIgLGhlaWdodDoyMDAsIHdpZHRoOjIwMCAsYWx0OlwiYmxvZ1wifX1cclxuY2FyZHRpdGxlPVwiQmxvZ3NcIiBjYXJkRGVzY3JpcHRpb249XCJDYXJkNiBQb3JqZWN0IGluIE5leHQgUmVhY3QgVGFpbHdpbmRcIiB3ZWJzaXRlVVJMPVwiaHR0cHM6Ly9teXdlYnBvcnRhbC5rdm9iamUuY29tXCIgZ2l0aHViVVJMPVwiaHR0cHM6Ly9naXRodWIuY29tL0p1bmFpZEFsYW03ODlcIi8+XHJcblxyXG5jb25zdCBDYXJkNT08Q2FyZHMgQ2FyZEltYWdlUHJvcHM9e3tzcmM6XCIvQ29uc3RydWN0aW9uLmpwZ1wiICxoZWlnaHQ6MjAwLCB3aWR0aDoyMDAgLGFsdDpcImJsb2dcIn19XHJcbmNhcmR0aXRsZT1cIkZhYnJpY0NyYWZ0XCIgY2FyZERlc2NyaXB0aW9uPVwiQ2FyZDYgUG9yamVjdCBpbiBOZXh0IFJlYWN0IFRhaWx3aW5kXCIgd2Vic2l0ZVVSTD1cImh0dHBzOi8vbXl3ZWJwb3J0YWwua3ZvYmplLmNvbVwiIGdpdGh1YlVSTD1cImh0dHBzOi8vZ2l0aHViLmNvbS9KdW5haWRBbGFtNzg5XCIvPlxyXG5cclxuY29uc3QgQ2FyZDY9PENhcmRzIENhcmRJbWFnZVByb3BzPXt7c3JjOlwiL0NvbnN0cnVjdGlvbi5qcGdcIiAsaGVpZ2h0OjIwMCwgd2lkdGg6MjAwICxhbHQ6XCJibG9nXCJ9fVxyXG5jYXJkdGl0bGU9XCJDb25zdHJ1Y3Rpb25cIiBjYXJkRGVzY3JpcHRpb249XCJDYXJkNiBQb3JqZWN0IGluIE5leHQgUmVhY3QgVGFpbHdpbmRcIiB3ZWJzaXRlVVJMPVwiaHR0cHM6Ly9teXdlYnBvcnRhbC5rdm9iamUuY29tXCIgZ2l0aHViVVJMPVwiaHR0cHM6Ly9naXRodWIuY29tL0p1bmFpZEFsYW03ODlcIi8+XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0cygpe1xyXG4gIC8vICBsZXQgW2NhcmRzLCBzZXRDYXJkc109dXNlU3RhdGUoW0NhcmQxLCBDYXJkMiwgQ2FyZDMsIENhcmQ0LCBDYXJkNSwgQ2FyZDZdKVxyXG4gICAgICBsZXQgW2NhcmRzLCBzZXRDYXJkc109dXNlU3RhdGUoW3sgaW1hZ2VfcHJvcHM6IHsgc3JjOlwiL0Jsb2cuanBnXCIsIGhlaWdodDoyMDAgLHdpZHRoOjIwMCwgYWx0OlwiYmxvZ1wifSxcclxuICAgICAgY2FyZHRpdGxlOlwiQmxvZ1wiLFxyXG4gICAgICAgY2FyZERlc2NyaXB0aW9uOiBcIlByb2plY3QgRGV2ZWxvcGVkIGluIE5leHQuanMgMTMgUmVhY3QgYW5kIFRhaWx3aW5kQ1NTXCIsXHJcbiAgICAgICB3ZWJzaXRlVVJMOlwiaHR0cHM6Ly9teXdlYnBvcnRhbC5rdm9iamUuY29tXCIsXHJcbiAgICAgICBnaXRodWJVUkw6XCJodHRwczovL2dpdGh1Yi5jb20vSnVuYWlkQWxhbTc4OVwiLFxyXG4gICAgICAgXHJcbiAgfSxdKVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBwcm9qZWN0Q2FyZHMoKXtcclxuICAgICAgICBcclxuICAgICAgICAvL3NldENhcmRzKFtDYXJkMSwgQ2FyZDIsIENhcmQzLCBDYXJkNCwgQ2FyZDUsIENhcmQ2XSlcclxuICAgICAgICBzZXRDYXJkcyhkYXRhKVxyXG4gICAgICAgIC8vYWxlcnQoY2FyZClcclxuICAgICAgICB9XHJcbiAgICBcclxucmV0dXJuKFxyXG48ZGl2IGNsYXNzTmFtZT1cIiBiZy1ncmF5LTEwMFwiPlxyXG48aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlByb2plY3RzPC9oMT5cclxuICAgIHsvKiA8YnV0dG9uIG9uQ2xpY2s9eygpPT57cHJvamVjdENhcmRzKCl9fT5Qcm9qZWN0czwvYnV0dG9uPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTggbS04XCI+XHJcbiAgICB7Y2FyZHMubWFwKChjYXJkLGtleSk9PntyZXR1cm4gKDxkaXYga2V5PXtrZXl9PlxyXG4gICAgICAgIHtcclxuICAgICAgICA8Q2FyZHMgQ2FyZEltYWdlUHJvcHM9e2NhcmQuaW1hZ2VfcHJvcHN9XHJcbiAgICAgICAgY2FyZHRpdGxlPXtjYXJkLmNhcmR0aXRsZX0gY2FyZERlc2NyaXB0aW9uPXtjYXJkLmNhcmREZXNjcmlwdGlvbn0gd2Vic2l0ZVVSTD17Y2FyZC53ZWJzaXRlVVJMfSBnaXRodWJVUkw9e2NhcmQuZ2l0aHViVVJMfS8+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2Pil9KX1cclxuICAgICAgICAgPC9kaXY+ICAqL31cclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTggbS04XCI+XHJcbiAgICB7ZGF0YS5tYXAoKGNhcmQsa2V5KT0+e3JldHVybiAoPGRpdiBrZXk9e2tleX0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICA8Q2FyZHMgQ2FyZEltYWdlUHJvcHM9e2NhcmQuaW1hZ2VfcHJvcHN9XHJcbiAgICAgICAgIGNhcmR0aXRsZT17Y2FyZC5jYXJkdGl0bGV9IGNhcmREZXNjcmlwdGlvbj17Y2FyZC5jYXJkRGVzY3JpcHRpb259IHdlYnNpdGVVUkw9e2NhcmQud2Vic2l0ZVVSTH0gZ2l0aHViVVJMPXtjYXJkLmdpdGh1YlVSTH0vPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+KX0pfVxyXG4gICAgXHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG4pXHJcblxyXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQ2FyZHMiLCJkYXRhIiwiaW1hZ2VfcHJvcHMiLCJzcmMiLCJoZWlnaHQiLCJ3aWR0aCIsImFsdCIsImNhcmR0aXRsZSIsImNhcmREZXNjcmlwdGlvbiIsIndlYnNpdGVVUkwiLCJnaXRodWJVUkwiLCJQcm9qZWN0cyIsImNhcmRzIiwic2V0Q2FyZHMiLCJwcm9qZWN0Q2FyZHMiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm1hcCIsImNhcmQiLCJrZXkiLCJDYXJkSW1hZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/projects.tsx\n"));

/***/ })

});