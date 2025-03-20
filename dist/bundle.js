/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Hotel = __webpack_require__(/*! ./modules/Hotel */ \"./src/modules/Hotel.js\");\r\nconst Room = __webpack_require__(/*! ./modules/Room */ \"./src/modules/Room.js\");\r\nconst UI = __webpack_require__(/*! ./modules/UI */ \"./src/modules/UI.js\");\r\n\r\nconst hotel = new Hotel(\"Grand Hotel\");\r\nconst room101 = new Room(101, \"Standard\");\r\nconst room102 = new Room(102, \"Deluxe\");\r\nconst room103 = new Room(103, \"Suite\");\r\nconst room104 = new Room(104, \"Standard\");\r\n\r\nhotel.addRoom(room101);\r\nhotel.addRoom(room102);\r\nhotel.addRoom(room103);\r\nhotel.addRoom(room104);\r\n\r\n\r\nconst ui = new UI(hotel);\r\nui.renderRooms();\r\n\r\n__webpack_require__.g.bookRoom = function(number){\r\n    const room = hotel.rooms.find(r => r.number === number);\r\n    if (room){\r\n        alert(room.book());\r\n        ui.renderRooms();\r\n    }\r\n};\r\n\r\n__webpack_require__.g.cancelBooking = function(number){\r\n    const room = hotel.rooms.find(r => r.number === number);\r\n    if (room){\r\n        alert(room.cancelBooking());\r\n        ui.renderRooms();\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://hotel_booking_system/./src/index.js?");

/***/ }),

/***/ "./src/modules/Hotel.js":
/*!******************************!*\
  !*** ./src/modules/Hotel.js ***!
  \******************************/
/***/ ((module) => {

eval("  function Hotel(name) {\r\n    this.name = name;\r\n    this.rooms = [];\r\n  }\r\n\r\n  Hotel.prototype.addRoom = function (room) {\r\n    this.rooms.push(room);\r\n  };\r\n\r\n  Hotel.prototype.getAvailableRooms = function() {\r\n    return this.rooms.filter(room => room.isAvailable);\r\n  };\r\n\r\n\r\nmodule.exports = Hotel;\r\n\n\n//# sourceURL=webpack://hotel_booking_system/./src/modules/Hotel.js?");

/***/ }),

/***/ "./src/modules/Room.js":
/*!*****************************!*\
  !*** ./src/modules/Room.js ***!
  \*****************************/
/***/ ((module) => {

eval("    function Room(number, type) {\r\n      this.number = number;\r\n      this.type = type;\r\n      this.isAvailable = true;\r\n    }\r\n  \r\n    Room.prototype.book = function() {\r\n        this.isAvailable = false;\r\n        return \"Room \" + this.number + \" has been reserved.\";\r\n    };\r\n  \r\n    Room.prototype.cancelBooking = function() {\r\n        this.isAvailable = true;\r\n        return \"Room \" + this.number + \" is now open for booking.\";\r\n    };\r\n\r\n  \r\n module.exports = Room;\r\n  \n\n//# sourceURL=webpack://hotel_booking_system/./src/modules/Room.js?");

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((module) => {

eval("function UI(hotel){\r\n    this.hotel = hotel;\r\n}\r\n\r\nUI.prototype.renderRooms = function(){\r\n    const roomList = document.getElementById(\"room-list\");\r\n    roomList.innerHTML = \"\";\r\n\r\n    this.hotel.rooms.forEach(room => {\r\n        const roomDiv = document.createElement(\"div\");\r\n        roomDiv.className = `room ${room.isAvailable ? \"\" : \"booked\"}`;\r\n        roomDiv.innerHTML =`\r\n        <h3>Room ${room.number} (${room.type})</h3>\r\n        <p>Status: ${room.isAvailable ? \"Available\" : \"Booked\"}</p>\r\n        <button onclick=\"bookRoom(${room.number})\" ${room.isAvailable ? \"\" : \"disabled\"}>Book</button>\r\n        <button onclick=\"cancelBooking(${room.number})\" ${room.isAvailable ? \"disabled\" : \"\"}>Cancel</button>\r\n        `;\r\n        roomList.appendChild(roomDiv);\r\n    });\r\n};\r\n\r\nmodule.exports = UI;\n\n//# sourceURL=webpack://hotel_booking_system/./src/modules/UI.js?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;