"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const native_adapter_class_1 = require("./lib/adapter/native.adapter.class");
const clipboard_class_1 = require("./lib/clipboard.class");
const keyboard_class_1 = require("./lib/keyboard.class");
const mouse_class_1 = require("./lib/mouse.class");
const movement_function_1 = require("./lib/movement.function");
const linehelper_class_1 = require("./lib/util/linehelper.class");
const window_function_1 = require("./lib/window.function");
var jest_matcher_function_1 = require("./lib/expect/jest.matcher.function");
exports.jestMatchers = jest_matcher_function_1.jestMatchers;
var sleep_function_1 = require("./lib/sleep.function");
exports.sleep = sleep_function_1.sleep;
var key_enum_1 = require("./lib/key.enum");
exports.Key = key_enum_1.Key;
var button_enum_1 = require("./lib/button.enum");
exports.Button = button_enum_1.Button;
var location_function_1 = require("./lib/location.function");
exports.centerOf = location_function_1.centerOf;
exports.randomPointIn = location_function_1.randomPointIn;
var locationparameters_class_1 = require("./lib/locationparameters.class");
exports.LocationParameters = locationparameters_class_1.LocationParameters;
var optionalsearchparameters_class_1 = require("./lib/optionalsearchparameters.class");
exports.OptionalSearchParameters = optionalsearchparameters_class_1.OptionalSearchParameters;
var movementtype_function_1 = require("./lib/movementtype.function");
exports.linear = movementtype_function_1.linear;
var point_class_1 = require("./lib/point.class");
exports.Point = point_class_1.Point;
var region_class_1 = require("./lib/region.class");
exports.Region = region_class_1.Region;
var window_class_1 = require("./lib/window.class");
exports.Window = window_class_1.Window;
const nativeActions = new native_adapter_class_1.NativeAdapter();
const lineHelper = new linehelper_class_1.LineHelper();
const clipboard = new clipboard_class_1.Clipboard(nativeActions);
exports.clipboard = clipboard;
const keyboard = new keyboard_class_1.Keyboard(nativeActions);
exports.keyboard = keyboard;
const mouse = new mouse_class_1.Mouse(nativeActions);
exports.mouse = mouse;
const { straightTo, up, down, left, right } = movement_function_1.createMovementApi(nativeActions, lineHelper);
exports.straightTo = straightTo;
exports.up = up;
exports.down = down;
exports.left = left;
exports.right = right;
const { getWindows, getActiveWindow } = window_function_1.createWindowApi(nativeActions);
exports.getWindows = getWindows;
exports.getActiveWindow = getActiveWindow;
//# sourceMappingURL=index.js.map