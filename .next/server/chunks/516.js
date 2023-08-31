exports.id = 516;
exports.ids = [516];
exports.modules = {

/***/ 826:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 954, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3380, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 656))

/***/ }),

/***/ 9683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DashboardLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(4178);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(5124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./app/components/haber-logo.png
/* harmony default export */ const haber_logo = ({"src":"/_next/static/media/haber-logo.dd24bad3.png","height":174,"width":339,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAbklEQVR42mOAgaziesHcgjn8IHZFyH+L8rB/zVCJBk4g3pZd3PA/q6QeiOsWVoT+nwzEtkXJV5lACpYD8UkgTskubszMKqm9np+99WBlwP/a8vBfQSAFk4BYhgEKMktzNLOLuiZX+f0XZGBgYAAALsQwy3euFoAAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./app/components/Navbar.jsx




function Navbar() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: haber_logo,
                alt: "Haber Logo",
                width: 70,
                quality: 100,
                placeholder: "blur"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: " Marcos Helpdesk "
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                children: "Dashboard"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/tickets",
                children: "Tickets"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./app/(dashboard)/layout.jsx


function DashboardLayout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
            children
        ]
    });
}


/***/ }),

/***/ 5215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Loading() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        className: "text-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "text-primary",
                children: "Loading..."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "Hopefully not for to long"
            })
        ]
    });
}


/***/ }),

/***/ 9439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotFound)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5124);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


function NotFound() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        className: "text-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "text-3xl",
                children: " There was a problem"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "We couldn't find the page you were looking for."
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                children: [
                    "Go back to the ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/",
                        children: "dashboard"
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 656:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/haber-logo.dd24bad3.png","height":174,"width":339,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAbklEQVR42mOAgaziesHcgjn8IHZFyH+L8rB/zVCJBk4g3pZd3PA/q6QeiOsWVoT+nwzEtkXJV5lACpYD8UkgTskubszMKqm9np+99WBlwP/a8vBfQSAFk4BYhgEKMktzNLOLuiZX+f0XZGBgYAAALsQwy3euFoAAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":4});

/***/ })

};
;