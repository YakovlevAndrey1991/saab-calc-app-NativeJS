/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./classes/inputClass/inputClass.js":
/*!******************************************!*\
  !*** ./classes/inputClass/inputClass.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InputWindow)
/* harmony export */ });
class InputWindow {
    constructor(title, inputID, value, parentSelector) {
        this.title = title
        this.inputID = inputID
        this.value = value
        this.parent = document.querySelector(parentSelector)

    }

    render() {
        const element = document.createElement('div')

        element.innerHTML = `
         <div class="container hide">
            <p>${this.title}</p>
            <input id="${this.inputID}" value="${this.value}" type="number" placeholder="Введите значение" class="input">
        </div>
        `
        this.parent.append(element)
    }
}

/***/ }),

/***/ "./classes/inputClass/inputHeightPressure.js":
/*!***************************************************!*\
  !*** ./classes/inputClass/inputHeightPressure.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inputClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputClass */ "./classes/inputClass/inputClass.js");

const inputHeightPressure = new _inputClass__WEBPACK_IMPORTED_MODULE_0__["default"](
    "Высота установки датчика давления",
    "heightPressureTransmitter",
"500",
    ".wrapper-pressure-content"
).render()
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inputHeightPressure);

/***/ }),

/***/ "./classes/inputClass/inputLevel.js":
/*!******************************************!*\
  !*** ./classes/inputClass/inputLevel.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inputClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputClass */ "./classes/inputClass/inputClass.js");

const inputLevel = new _inputClass__WEBPACK_IMPORTED_MODULE_0__["default"](
    "Введите значение уровня",
    "currentLevel",
    "",
    ".wrapper-level-content"
).render()
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inputLevel);

/***/ }),

/***/ "./classes/inputClass/inputPressure.js":
/*!*********************************************!*\
  !*** ./classes/inputClass/inputPressure.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inputClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputClass */ "./classes/inputClass/inputClass.js");

const inputPressure = new _inputClass__WEBPACK_IMPORTED_MODULE_0__["default"](
    "Давление в Па",
    "currentPressure",
    "",
    ".wrapper-pressure-content"
).render()
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inputPressure);

/***/ }),

/***/ "./classes/inputClass/inputTemp.js":
/*!*****************************************!*\
  !*** ./classes/inputClass/inputTemp.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inputClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputClass */ "./classes/inputClass/inputClass.js");

const inputTemp = new _inputClass__WEBPACK_IMPORTED_MODULE_0__["default"](
    "Значение температуры в грудасах Цельсия",
    "currentTemp",
    "",
    ".wrapper-temp-content"
).render()
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inputTemp);

/***/ }),

/***/ "./classes/inputClass/inputVolume.js":
/*!*******************************************!*\
  !*** ./classes/inputClass/inputVolume.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inputClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputClass */ "./classes/inputClass/inputClass.js");

const inputVolume = new _inputClass__WEBPACK_IMPORTED_MODULE_0__["default"](
    "Введите объем",
    "currentVolume",
    "",
    ".wrapper-volume-content",
).render()
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inputVolume);

/***/ }),

/***/ "./classes/selectClass/selectClass.js":
/*!********************************************!*\
  !*** ./classes/selectClass/selectClass.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SelectWindow)
/* harmony export */ });
class SelectWindow {
    constructor(title, selectID, selectedValue, selectedValueTitle, parentSelector, value1, value2,value3, titleValue1, titleValue2, titleValue3, titleValue4, titleValue5,titleValue6) {
        this.title = title
        this.selectID = selectID
        this.parent = document.querySelector(parentSelector)
        this.selectedValue = selectedValue
        this.selectedValueTitle = selectedValueTitle
        this.value1 = value1
        this.value2 = value2
        this.value3 = value3
        this.titleValue1 = titleValue1
        this.titleValue2 = titleValue2
        this.titleValue3 = titleValue3
        this.titleValue4 = titleValue4
        this.titleValue5 = titleValue5
        this.titleValue6 = titleValue6
    }

    render() {
        const element = document.createElement('div');

        element.innerHTML = `
               <div class="container hide">
            <div class="content">
                <p>${this.title}</p>
            </div>
            <div class="content">
                <select class="select" id="${this.selectID}">
                    <option selected value="${this.selectedValue}">${this.selectedValueTitle}</option>
                    <option value="${this.value1}">${this.titleValue1}</option>
                    <option value="${this.value2}">${this.titleValue2}</option>
                    <option value="${this.value3}">${this.titleValue3}</option>
                    <option value="${this.value3}">${this.titleValue4}</option>
                    <option value="${this.value3}">${this.titleValue5}</option>
                    <option value="${this.value3}">${this.titleValue6}</option>
                </select>
            </div>
        </div>
       `
        this.parent.append(element)
    }
}

/***/ }),

/***/ "./classes/selectClass/selectLevel.js":
/*!********************************************!*\
  !*** ./classes/selectClass/selectLevel.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _selectClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectClass */ "./classes/selectClass/selectClass.js");

const selectLevel = new _selectClass__WEBPACK_IMPORTED_MODULE_0__["default"](
    "Выберите уровнемер",
    "selectLevel",
    "Выберите уровнемер",
    "Выберите уровнемер",
    ".wrapper-level-content",
    "1",
    "2",
    "3",
    "5900S",
    "5900C",
    "REX",
    "PRO",
    "5300",
    "5400",
).render()
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (selectLevel);

/***/ }),

/***/ "./classes/selectClass/selectPressure.js":
/*!***********************************************!*\
  !*** ./classes/selectClass/selectPressure.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _selectClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectClass */ "./classes/selectClass/selectClass.js");

const selectPressure = new _selectClass__WEBPACK_IMPORTED_MODULE_0__["default"](
    "Выберите датчик",
    "selectPressure",
    "0",
    "Выберите датчик",
    ".wrapper-pressure-content",
    "UFF",
    "U",
    "C",
    "3051S Ultra for flow",
    "3051S Ultra",
    "3051S Classic",
    "2051T",
    "3051",
    "3051SAL"
).render()
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (selectPressure);

/***/ }),

/***/ "./classes/selectClass/selectTable.js":
/*!********************************************!*\
  !*** ./classes/selectClass/selectTable.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _selectClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectClass */ "./classes/selectClass/selectClass.js");

const selectTable = new _selectClass__WEBPACK_IMPORTED_MODULE_0__["default"](
    "Выберите погрешность таблицы",
    "selectTableAcc",
    "Выберите значение",
    "Выбрать значение",
    ".wrapper-volume-content",
    "0.05",
    "0.1",
    "0.2",
    "0.05",
    "0.1",
    "0.2",
    "",
    "",
    "",
).render()
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (selectTable);

/***/ }),

/***/ "./classes/selectClass/selectTemp.js":
/*!*******************************************!*\
  !*** ./classes/selectClass/selectTemp.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _selectClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectClass */ "./classes/selectClass/selectClass.js");

const selectTemp= new _selectClass__WEBPACK_IMPORTED_MODULE_0__["default"](
    "Выберите датчик",
    "selectTemp",
    "Выберите датчик",
    "Выберите датчик",
    '.wrapper-temp-content',
    "0.5",
    "0.25",
    "0.15",
    "2240S",
    "NLI/WLS",
    "Rosemount 565",
    "Rosemount 644",
    "Rosemount 765",
    "Rosemount 766"


).render()
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (selectTemp);

/***/ }),

/***/ "./classes/spanClass/SpanClass.js":
/*!****************************************!*\
  !*** ./classes/spanClass/SpanClass.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SpanClass)
/* harmony export */ });
class SpanClass {
    constructor(title, divClass, parentSelector, cssClass) {
        this.title = title
        this.divClass = divClass
        this.parent = document.querySelector(parentSelector)
        this.cssClass = cssClass
    }

    render() {
        const element = document.createElement('div')

        element.innerHTML = `
        <div class="container hide ${this.cssClass}">
            <p>${this.title}</p>
            <div class=${this.divClass}>
                <span></span>
            </div>
        </div>
        `
        this.parent.append(element)
    }
}

/***/ }),

/***/ "./classes/spanClass/spanAbsDensityAcc.js":
/*!************************************************!*\
  !*** ./classes/spanClass/spanAbsDensityAcc.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SpanClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SpanClass */ "./classes/spanClass/SpanClass.js");

const spanAbsDensityAcc = new _SpanClass__WEBPACK_IMPORTED_MODULE_0__["default"](
    "&#916 плотности, кг/м3",
    "span",
    ".wrapper-pressure-content",
    "absDensityAcc"
).render()
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (spanAbsDensityAcc);

/***/ }),

/***/ "./classes/spanClass/spanDensity.js":
/*!******************************************!*\
  !*** ./classes/spanClass/spanDensity.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SpanClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SpanClass */ "./classes/spanClass/SpanClass.js");

const spanDensity = new _SpanClass__WEBPACK_IMPORTED_MODULE_0__["default"](
    "Плотность продукта, кг/м3",
    "span",
    ".wrapper-pressure-content",
    "resultAutoDensity"
).render()
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (spanDensity);

/***/ }),

/***/ "./classes/spanClass/spanDensityAcc.js":
/*!*********************************************!*\
  !*** ./classes/spanClass/spanDensityAcc.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SpanClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SpanClass */ "./classes/spanClass/SpanClass.js");

const spanDensityAcc = new _SpanClass__WEBPACK_IMPORTED_MODULE_0__["default"](
    "&#948 плотности, %",
    "span",
    ".wrapper-pressure-content",
    "densityAcc",
).render()
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (spanDensityAcc);

/***/ }),

/***/ "./classes/spanClass/spanLevel.js":
/*!****************************************!*\
  !*** ./classes/spanClass/spanLevel.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SpanClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SpanClass */ "./classes/spanClass/SpanClass.js");

const spanLevel = new _SpanClass__WEBPACK_IMPORTED_MODULE_0__["default"](
    "&#948 уровня, %",
    "span__result__level",
    ".wrapper-level-content"
).render()
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (spanLevel);

/***/ }),

/***/ "./classes/spanClass/spanPressure.js":
/*!*******************************************!*\
  !*** ./classes/spanClass/spanPressure.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SpanClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SpanClass */ "./classes/spanClass/SpanClass.js");

const spanPressure = new _SpanClass__WEBPACK_IMPORTED_MODULE_0__["default"](
    "&#948 давления, %",
    "span",
    ".wrapper-pressure-content",
    "pressure"

).render()
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (spanPressure);

/***/ }),

/***/ "./classes/spanClass/spanTemp.js":
/*!***************************************!*\
  !*** ./classes/spanClass/spanTemp.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SpanClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SpanClass */ "./classes/spanClass/SpanClass.js");

const spanTemp = new _SpanClass__WEBPACK_IMPORTED_MODULE_0__["default"](
    "&#948 температуры, %",
    "span",
    ".wrapper-temp-content"
).render()
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (spanTemp);

/***/ }),

/***/ "./classes/spanClass/spanVolume.js":
/*!*****************************************!*\
  !*** ./classes/spanClass/spanVolume.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SpanClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SpanClass */ "./classes/spanClass/SpanClass.js");

const spanVolume = new _SpanClass__WEBPACK_IMPORTED_MODULE_0__["default"](
    "&#948 объема, %",
    "span",
    ".wrapper-volume-content",
    "volumeAcc",
).render()
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (spanVolume);

/***/ }),

/***/ "./classes/spanClass/spanWeight.js":
/*!*****************************************!*\
  !*** ./classes/spanClass/spanWeight.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SpanClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SpanClass */ "./classes/spanClass/SpanClass.js");

const spanWeight = new _SpanClass__WEBPACK_IMPORTED_MODULE_0__["default"](
    "Масса, тонн",
    "span",
    ".wrapper-weight-content",
    "currentWeight"
).render()
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (spanWeight);

/***/ }),

/***/ "./classes/spanClass/spanWeightAcc.js":
/*!********************************************!*\
  !*** ./classes/spanClass/spanWeightAcc.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SpanClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SpanClass */ "./classes/spanClass/SpanClass.js");

const spanWeightAcc = new _SpanClass__WEBPACK_IMPORTED_MODULE_0__["default"](
    "&#948 массы, %",
    "span",
    ".wrapper-weight-content",
    "weightAcc"
).render()
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (spanWeightAcc);

/***/ }),

/***/ "./modules/animation/showHideAnimation.js":
/*!************************************************!*\
  !*** ./modules/animation/showHideAnimation.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showHideAnimation)
/* harmony export */ });
// export default function showHideAnimation(parentElementSelector, contentSelector, parentElementClassName) {
//     const element = document.querySelector(parentElementSelector)
//     const content = document.querySelectorAll(contentSelector)
//
//     element.addEventListener('click', (e) => {
//
//         const target = e.target
//         if (target.classList.contains(parentElementClassName) || target.classList.contains('title') || target.parentElement.classList.contains('title') || target.parentElement.classList.contains(parentElementClassName)) {
//             content.forEach(elem => {
//                 if (elem.classList.contains('hide')){
//                     elem.classList.remove('hide')
//                     elem.classList.add('show')
//                     elem.style.cssText = 'height: 150px'
//                 } else {
//                     elem.classList.remove('show')
//                     elem.classList.add('hide')
//                     elem.style.cssText = 'height: 50px'
//                 }
//
//             })
//         }})
// }

function showHideAnimation(parentElementSelector, contentSelector) {
    const element = document.querySelector(parentElementSelector)
    const content = document.querySelectorAll(contentSelector)

    element.addEventListener('click', (e) => {

        const target = e.target
        if (target.parentElement.classList.contains('title')) {
            content.forEach(elem => {
                if (elem.classList.contains('hide')){
                    elem.classList.remove('hide')
                    elem.classList.add('show')
                    elem.style.cssText = 'height: 150px'
                } else {
                    elem.classList.remove('show')
                    elem.classList.add('hide')
                    elem.style.cssText = 'height: 25px'
                }

            })
        }})
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_selectClass_selectLevel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/selectClass/selectLevel */ "./classes/selectClass/selectLevel.js");
/* harmony import */ var _classes_inputClass_inputLevel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/inputClass/inputLevel */ "./classes/inputClass/inputLevel.js");
/* harmony import */ var _classes_spanClass_spanLevel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/spanClass/spanLevel */ "./classes/spanClass/spanLevel.js");
/* harmony import */ var _classes_selectClass_selectTemp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/selectClass/selectTemp */ "./classes/selectClass/selectTemp.js");
/* harmony import */ var _classes_inputClass_inputTemp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../classes/inputClass/inputTemp */ "./classes/inputClass/inputTemp.js");
/* harmony import */ var _classes_spanClass_spanTemp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../classes/spanClass/spanTemp */ "./classes/spanClass/spanTemp.js");
/* harmony import */ var _classes_selectClass_selectPressure__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../classes/selectClass/selectPressure */ "./classes/selectClass/selectPressure.js");
/* harmony import */ var _classes_inputClass_inputPressure__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../classes/inputClass/inputPressure */ "./classes/inputClass/inputPressure.js");
/* harmony import */ var _classes_spanClass_spanPressure__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../classes/spanClass/spanPressure */ "./classes/spanClass/spanPressure.js");
/* harmony import */ var _classes_spanClass_spanDensity__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../classes/spanClass/spanDensity */ "./classes/spanClass/spanDensity.js");
/* harmony import */ var _classes_inputClass_inputHeightPressure__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../classes/inputClass/inputHeightPressure */ "./classes/inputClass/inputHeightPressure.js");
/* harmony import */ var _classes_spanClass_spanDensityAcc__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../classes/spanClass/spanDensityAcc */ "./classes/spanClass/spanDensityAcc.js");
/* harmony import */ var _classes_spanClass_spanAbsDensityAcc__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../classes/spanClass/spanAbsDensityAcc */ "./classes/spanClass/spanAbsDensityAcc.js");
/* harmony import */ var _classes_selectClass_selectTable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../classes/selectClass/selectTable */ "./classes/selectClass/selectTable.js");
/* harmony import */ var _classes_inputClass_inputVolume__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../classes/inputClass/inputVolume */ "./classes/inputClass/inputVolume.js");
/* harmony import */ var _classes_spanClass_spanVolume__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../classes/spanClass/spanVolume */ "./classes/spanClass/spanVolume.js");
/* harmony import */ var _classes_spanClass_spanWeight__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../classes/spanClass/spanWeight */ "./classes/spanClass/spanWeight.js");
/* harmony import */ var _classes_spanClass_spanWeightAcc__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../classes/spanClass/spanWeightAcc */ "./classes/spanClass/spanWeightAcc.js");
/* harmony import */ var _modules_animation_showHideAnimation__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../modules/animation/showHideAnimation */ "./modules/animation/showHideAnimation.js");




























const resultLevel = document.querySelector('.level span')
const resultTemp = document.querySelector('.temperature span')
const resultPressure = document.querySelector('.pressure span')
const resultAutoDensityCalc = document.querySelector('.resultAutoDensity span')
const resultDensityAcc = document.querySelector('.densityAcc span')
const resultAutoAbsDensityAccCalc = document.querySelector('.absDensityAcc span')
const resultVolumeAcc = document.querySelector('.volume span')
const resultWeight = document.querySelector('.currentWeight span')
const resultWeightAcc = document.querySelector('.weightAcc span')

let level, levelTransmitter,
    temp, tempTransmitter,
    pressureTransmitter, pressure, height, tempCorrection,
    density, densityAcc,
    volume, tableAcc,
    weight, weightAcc


let total1, total2, h, p


function levelCalc() {

    if (levelTransmitter === 'Выберите уровнемер') {
        resultLevel.textContent = 'Уровнемер не выбран'
        return
    }
    if (levelTransmitter === '1') {
        resultLevel.textContent = ((1 * 100) / level).toFixed(4)

    }
    if (levelTransmitter === '2') {
        resultLevel.textContent = ((2 * 100) / level).toFixed(4)
    }
    if (levelTransmitter === '3') {
        resultLevel.textContent = ((3 * 100) / level).toFixed(4)
    }
    if (!level) {
        resultLevel.textContent = 'Значение уровня не введено!'
        return
    }
    h = resultLevel.textContent
    total1 = resultLevel.textContent
    densityAccCalc()
}

levelCalc()

function tempCalc() {

    if (tempTransmitter === 'Выберите датчик') {
        resultTemp.textContent = 'Датчик не выбран'
        return
    }
    if (tempTransmitter === '0.5') {
        resultTemp.textContent = ((0.5 * 100) / temp).toFixed(4)
    }
    if (tempTransmitter === '0.25') {
        resultTemp.textContent = ((0.25 * 100) / temp).toFixed(4)
    }
    if (tempTransmitter === '0.15') {
        resultTemp.textContent = ((0.15 * 100) / temp).toFixed(4)
    }
    if (!temp) {
        resultTemp.textContent = 'Значение температуры не введено!'
        return
    }
    total2 = resultTemp.textContent
}

tempCalc()

function pressureCalc() {

    if (pressureTransmitter === '0') {
        resultPressure.textContent = 'Датчик давления не выбран'
        return
    }
    if (pressureTransmitter === 'UFF' && tempCorrection === false) {
        resultPressure.textContent = Math.sqrt(((Math.pow((pressure / pressure), 2)) * (Math.pow(0.04, 2))))
    }
    if (pressureTransmitter === 'UFF' && tempCorrection === true) {
        resultPressure.textContent = Math.sqrt(((Math.pow((pressure / pressure), 2)) * (Math.pow(0.17, 2))))
    }
    if (pressureTransmitter === 'U') {
        resultPressure.textContent = ((0.025 * 100) / pressure).toFixed(4)
    }
    if (pressureTransmitter === 'C') {
        resultPressure.textContent = ((0.035 * 100) / pressure).toFixed(4)
    }
    if (!pressure) {
        resultPressure.textContent = 'Давление не введено!'
        return
    }
    p = resultPressure.textContent
    densityAccCalc()


}

pressureCalc()


function densAutoCalc() {

    if (!level) {
        resultAutoDensityCalc.textContent = 'Уровень не введен!'
        return
    }
    if (!pressure) {
        resultAutoDensityCalc.textContent = 'Давление не введено!'
        return
    } else {
        resultAutoDensityCalc.textContent = (1.21 + (((pressure) / ((level - height)) * 9.81) * 10)).toFixed(4)
    }
    density = resultAutoDensityCalc.textContent

    absDensityAcc()
    // weightCalc()
}

function weightCalc() {
    if (!density) {
        resultWeight.textContent = 'Плотность неизвестна'
        return
    }
    if (!volume) {
        resultWeight.textContent = 'Объем не введен'
        return;
    } else {
        resultWeight.textContent = ((volume * density) / 1000).toFixed(4)

    }
    weight = resultWeight.textContent
}

weightCalc()

function densityAccCalc() {
    if (!pressure) {
        resultDensityAcc.textContent = 'Давление не введено'
        return
    }
    if (levelTransmitter === 'Выберите уровнемер') {
        resultDensityAcc.textContent = 'Уровнемер не выбран'
        return
    }
    if (!level) {
        resultDensityAcc.textContent = 'Уровень не введен'
        return
    } else {
        resultDensityAcc.textContent = ((+h) + (+p)).toFixed(4)
    }
    densityAcc = resultDensityAcc.textContent
    absDensityAcc()
}


function absDensityAcc() {
    resultAutoAbsDensityAccCalc.textContent = ((density / 100) * densityAcc).toFixed(4)
}

function volumeAccCalc() {
    if (tableAcc === 'Выберите значение') {
        resultVolumeAcc.textContent = 'Погрешность таблицы не выбрана'
        return
    }
    if (tableAcc === '0.05') {
        resultVolumeAcc.textContent = (0.05 * volume).toFixed(4)
    }
    if (tableAcc === '0.1') {
        resultVolumeAcc.textContent = (0.1 * volume).toFixed(4)
    }
    if (tableAcc === '0.2') {
        resultVolumeAcc.textContent = (0.2 * volume).toFixed(4)
    }
    if (!volume) {
        resultVolumeAcc.textContent = 'Объем не введен'
        return
    }
}

volumeAccCalc()

function getChecked() {
    let tempCorrectionForm = document.querySelector('.tempCorrection')
    let chbox = document.querySelector('#tempCorrection')
    if (chbox.checked === false) {
        tempCorrection = false
    }
    tempCorrectionForm.addEventListener('change', () => {
        if (chbox.checked) {
            tempCorrection = true
        } else {
            tempCorrection = false
        }
        pressureCalc()
    })

}

getChecked()


function getRadioChecked() {
    const choose = document.querySelector('.form')
    let densRadio = document.getElementsByName('dens')
    let autoDens = document.querySelector('.wrapper__auto__dens')
    let handleDens = document.querySelector('.wrapper__handle__dens')

    choose.addEventListener('change', () => {
        densRadio.forEach((elem) => {
            if (elem.checked && elem.value === 'handle') {
                autoDens.style.display = 'none'
                handleDens.style.display = 'inline-flex'
            }
            if (elem.checked && elem.value === 'auto') {
                autoDens.style.display = 'inline-flex'
                handleDens.style.display = 'none'
            }
        })
    })

}

getRadioChecked()

function getDynamicInfo(selector) {
    const input = document.querySelector(selector)
    height = input.value
    input.addEventListener('input', () => {
        switch (input.getAttribute('id')) {
            case 'currentLevel':
                level = +input.value
                levelCalc()
                densityAccCalc()
                densAutoCalc()
                absDensityAcc()
                break
            case 'currentTemp':
                temp = +input.value
                tempCalc()
                break
            case 'currentPressure':
                pressure = input.value
                pressureCalc()
                densAutoCalc()
                densityAccCalc()
                absDensityAcc()
                break
            case 'currentVolume':
                volume = +input.value
                volumeAccCalc()
                weightCalc()
                break
            case 'heightPressureTransmitter':
                height = +input.value
                pressureCalc()
                densAutoCalc()
                densityAccCalc()
                break
        }
    })
}

function getStaticInfo(selector) {
    const transmitter = document.querySelector(selector)

    transmitter.addEventListener('change', () => {
        switch (transmitter.getAttribute('id')) {
            case 'selectLevel':
                levelTransmitter = transmitter.value
                levelCalc()
                break
            case 'selectTemp':
                tempTransmitter = transmitter.value
                tempCalc()
                break
            case 'selectPressure':
                pressureTransmitter = transmitter.value
                pressureCalc()
                break
            case 'selectTableAcc':
                tableAcc = transmitter.value
                break

        }
    })
}

getDynamicInfo('#currentLevel')
getDynamicInfo('#currentTemp')
getDynamicInfo('#currentVolume')
getDynamicInfo('#currentPressure')
getDynamicInfo('#heightPressureTransmitter')
getStaticInfo('#selectLevel')
getStaticInfo('#selectTemp')
getStaticInfo('#selectPressure')
getStaticInfo('#selectTableAcc')

;(0,_modules_animation_showHideAnimation__WEBPACK_IMPORTED_MODULE_18__["default"])('.level', '.level .container', 'level')
;(0,_modules_animation_showHideAnimation__WEBPACK_IMPORTED_MODULE_18__["default"])('.temperature', '.temperature .container', 'temperature')
;(0,_modules_animation_showHideAnimation__WEBPACK_IMPORTED_MODULE_18__["default"])('.chose__density_type', '.chose__density_type .container', 'chose__density_type')
;(0,_modules_animation_showHideAnimation__WEBPACK_IMPORTED_MODULE_18__["default"])('.wrapper__auto__dens', '.wrapper__auto__dens .container', 'wrapper__auto__dens')
;(0,_modules_animation_showHideAnimation__WEBPACK_IMPORTED_MODULE_18__["default"])('.volume', '.volume .container', 'volume')
;(0,_modules_animation_showHideAnimation__WEBPACK_IMPORTED_MODULE_18__["default"])('.weight', '.weight .container', 'weight')


// newElement.innerHTML = `
//         <div class="container show">
//             <div class="content">
//                 <p>Выберите уровнемер</p>
//             </div>
//             <div class="content">
//                 <select class="select" id="selectLevel" onchange="getStaticInfo('#selectLevel')">
//                     <option selected value="Выберите уровнемер">Выберите уровнемер</option>
//                     <option value="1">5900S</option>
//                     <option value="2">5900С</option>
//                     <option value="1">REX</option>
//                     <option value="3">PRO</option>
//                     <option value="3">5300</option>
//                     <option value="3">5400</option>
//                 </select>
//             </div>
//         </div>
// `
//
// element.appendChild(newElement)
// element.addEventListener('click', (e) => {
//     const target = e.target
//     if (target.classList.contains('level') || target.parentElement.classList.contains('title')) {
//         if (newElement.classList.contains('hide'))
//         {
//             newElement.classList.add('show')
//             newElement.style.cssText = 'height: 150px'
//         } else {
//             newElement.classList.remove('show')
//             newElement.classList.add('hide')
//             newElement.style.cssText = 'height: 50px'
//         }
//     }
// })


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map