import { NativeAdapter } from "./lib/adapter/native.adapter.class";
import { Clipboard } from "./lib/clipboard.class";
import { Keyboard } from "./lib/keyboard.class";
import { Mouse } from "./lib/mouse.class";
import { createMovementApi } from "./lib/movement.function";
import { LineHelper } from "./lib/util/linehelper.class";
import { createWindowApi } from "./lib/window.function";

export { jestMatchers } from "./lib/expect/jest.matcher.function";
export { sleep } from "./lib/sleep.function";
export { Key } from "./lib/key.enum";
export { Button } from "./lib/button.enum";
export { centerOf, randomPointIn } from "./lib/location.function";
export { LocationParameters } from "./lib/locationparameters.class";
export { OptionalSearchParameters } from "./lib/optionalsearchparameters.class";
export { linear } from "./lib/movementtype.function";
export { Point } from "./lib/point.class";
export { Region } from "./lib/region.class";
export { Window } from "./lib/window.class";

const nativeActions = new NativeAdapter();
const lineHelper = new LineHelper();

const clipboard = new Clipboard(nativeActions);
const keyboard = new Keyboard(nativeActions);
const mouse = new Mouse(nativeActions);

const {straightTo, up, down, left, right} = createMovementApi(nativeActions, lineHelper);
const {getWindows, getActiveWindow } = createWindowApi(nativeActions);

export {
  clipboard,
  keyboard,
  mouse,
  straightTo,
  up,
  down,
  left,
  right,
  getWindows,
  getActiveWindow,
};
