import { backspace, enter, del, tab, goLeft, goRight, goUpDown } from "./keyboard-functions.js";

export const width_base = 80;
export const height_base = 80;

export const gap = 8;

export const style_base_button = "gray";
export const style_active_button = "gold";
export const style_space_button = "darkgray";

export const arr = [
  //////////////  1 ряд /////////////////////////
  {
    width: width_base,
    height: height_base,
    style: style_space_button,
    x: gap,
    y: 10,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "IntlBackslash",
    letter: "`",
  },
  {
    width: width_base,
    height: height_base,
    style: style_base_button,
    x: (width_base + gap) * 1 + gap,
    y: 10,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "Digit1",
    letter: "1",
  },
  {
    width: width_base,
    height: height_base,
    style: style_base_button,
    x: (width_base + gap) * 2 + gap,
    y: 10,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "Digit2",
    letter: "2",
  },
  {
    width: width_base,
    height: height_base,
    style: style_base_button,
    x: (width_base + gap) * 3 + gap,
    y: 10,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "Digit3",
    letter: "3",
  },
  {
    width: width_base,
    height: height_base,
    style: style_base_button,
    x: (width_base + gap) * 4 + gap,
    y: 10,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "Digit4",
    letter: "4",
  },
  {
    width: width_base,
    height: height_base,
    style: style_base_button,
    x: (width_base + gap) * 5 + gap,
    y: 10,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "Digit5",
    letter: "5",
  },
  {
    width: width_base,
    height: height_base,
    style: style_base_button,
    x: (width_base + gap) * 6 + gap,
    y: 10,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "Digit6",
    letter: "6",
  },
  {
    width: width_base,
    height: height_base,
    style: style_base_button,
    x: (width_base + gap) * 7 + gap,
    y: 10,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "Digit7",
    letter: "7",
  },
  {
    width: width_base,
    height: height_base,
    style: style_base_button,
    x: (width_base + gap) * 8 + gap,
    y: 10,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "Digit8",
    letter: "8",
  },
  {
    width: width_base,
    height: height_base,
    style: style_base_button,
    x: (width_base + gap) * 9 + gap,
    y: 10,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "Digit9",
    letter: "9",
  },
  {
    width: width_base,
    height: height_base,
    style: style_base_button,
    x: (width_base + gap) * 10 + gap,
    y: 10,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "Digit0",
    letter: "0",
  },
  {
    width: width_base,
    height: height_base,
    style: style_base_button,
    x: (width_base + gap) * 11 + gap,
    y: 10,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "Minus",
    letter: "-",
  },
  {
    width: width_base,
    height: height_base,
    style: style_base_button,
    x: (width_base + gap) * 12 + gap,
    y: 10,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "Equal",
    letter: "=",
  },
  {
    width: width_base * 2.5,
    height: height_base,
    style: style_space_button,
    x: (width_base + gap) * 13 + gap,
    y: 10,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "Backspace",
    letter: "backspace",
    function: backspace,
  },
  //////////////  2 ряд /////////////////////////
  {
    width: width_base * 1.5 + gap / 2,
    height: height_base,
    style: style_space_button,
    x: gap,
    y: gap + height_base + gap,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "Tab",
    letter: "tab",
    function: tab,
  },
  {
    width: width_base,
    height: height_base,
    style: style_base_button,
    x: gap * 2.5 + width_base * 1.5,
    y: gap + height_base + gap,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "KeyQ",
    letter: "q",
  },
  {
    width: width_base,
    height: height_base,
    style: style_base_button,
    x: gap * 2.5 + width_base * 1.5 + (width_base + gap) * 1,
    y: gap + height_base + gap,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "KeyW",
    letter: "w",
  },
  {
    width: width_base,
    height: height_base,
    style: style_base_button,
    x: gap * 2.5 + width_base * 1.5 + (width_base + gap) * 2,
    y: gap + height_base + gap,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "KeyE",
    letter: "e",
  },
  {
    width: width_base,
    height: height_base,
    style: style_base_button,
    x: gap * 2.5 + width_base * 1.5 + (width_base + gap) * 3,
    y: gap + height_base + gap,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "KeyR",
    letter: "r",
  },
  {
    width: width_base,
    height: height_base,
    style: style_base_button,
    x: gap * 2.5 + width_base * 1.5 + (width_base + gap) * 4,
    y: gap + height_base + gap,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "KeyT",
    letter: "t",
  },
  {
    width: width_base,
    height: height_base,
    style: style_base_button,
    x: gap * 2.5 + width_base * 1.5 + (width_base + gap) * 5,
    y: gap + height_base + gap,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "KeyY",
    letter: "y",
  },
  {
    width: width_base,
    height: height_base,
    style: style_base_button,
    x: gap * 2.5 + width_base * 1.5 + (width_base + gap) * 6,
    y: gap + height_base + gap,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "KeyU",
    letter: "u",
  },
  {
    width: width_base,
    height: height_base,
    style: style_base_button,
    x: gap * 2.5 + width_base * 1.5 + (width_base + gap) * 7,
    y: gap + height_base + gap,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "KeyI",
    letter: "i",
  },
  {
    width: width_base,
    height: height_base,
    style: style_base_button,
    x: gap * 2.5 + width_base * 1.5 + (width_base + gap) * 8,
    y: gap + height_base + gap,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "KeyO",
    letter: "o",
  },
  {
    width: width_base,
    height: height_base,
    style: style_base_button,
    x: gap * 2.5 + width_base * 1.5 + (width_base + gap) * 9,
    y: gap + height_base + gap,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "KeyP",
    letter: "p",
  },
  {
    width: width_base,
    height: height_base,
    style: style_base_button,
    x: gap * 2.5 + width_base * 1.5 + (width_base + gap) * 10,
    y: gap + height_base + gap,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "BracketLeft",
    letter: "[",
  },
  {
    width: width_base,
    height: height_base,
    style: style_base_button,
    x: gap * 2.5 + width_base * 1.5 + (width_base + gap) * 11,
    y: gap + height_base + gap,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "BracketRight",
    letter: "]",
  },
  {
    width: width_base * 1.95,
    height: height_base,
    style: style_space_button,
    x: gap * 2.5 + width_base * 1.5 + (width_base + gap) * 12,
    y: gap + height_base + gap,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "Delete",
    letter: "del",
    function: del,
  },
  //////////////  3 ряд /////////////////////////
  {
    width: width_base * 1.8,
    height: height_base,
    style: style_space_button,
    x: gap,
    y: gap + (height_base + gap) * 2,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "CapsLock",
    letter: "caps lock",
    active: false,
    function: null,
  },
  {
    width: width_base,
    height: height_base,
    style: style_base_button,
    x: gap * 2 + width_base * 1.8 + (width_base + gap) * 0,
    y: gap + (height_base + gap) * 2,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "KeyA",
    letter: "a",
  },
  {
    width: width_base,
    height: height_base,
    style: style_base_button,
    x: gap * 2 + width_base * 1.8 + (width_base + gap) * 1,
    y: gap + (height_base + gap) * 2,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "KeyS",
    letter: "s",
  },
  {
    width: width_base,
    height: height_base,
    style: style_base_button,
    x: gap * 2 + width_base * 1.8 + (width_base + gap) * 2,
    y: gap + (height_base + gap) * 2,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "KeyD",
    letter: "d",
  },
  {
    width: width_base,
    height: height_base,
    style: style_base_button,
    x: gap * 2 + width_base * 1.8 + (width_base + gap) * 3,
    y: gap + (height_base + gap) * 2,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "KeyF",
    letter: "f",
  },
  {
    width: width_base,
    height: height_base,
    style: style_base_button,
    x: gap * 2 + width_base * 1.8 + (width_base + gap) * 4,
    y: gap + (height_base + gap) * 2,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "KeyG",
    letter: "g",
  },
  {
    width: width_base,
    height: height_base,
    style: style_base_button,
    x: gap * 2 + width_base * 1.8 + (width_base + gap) * 5,
    y: gap + (height_base + gap) * 2,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "KeyH",
    letter: "h",
  },
  {
    width: width_base,
    height: height_base,
    style: style_base_button,
    x: gap * 2 + width_base * 1.8 + (width_base + gap) * 6,
    y: gap + (height_base + gap) * 2,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "KeyJ",
    letter: "j",
  },
  {
    width: width_base,
    height: height_base,
    style: style_base_button,
    x: gap * 2 + width_base * 1.8 + (width_base + gap) * 7,
    y: gap + (height_base + gap) * 2,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "KeyK",
    letter: "k",
  },
  {
    width: width_base,
    height: height_base,
    style: style_base_button,
    x: gap * 2 + width_base * 1.8 + (width_base + gap) * 8,
    y: gap + (height_base + gap) * 2,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "KeyL",
    letter: "l",
  },
  {
    width: width_base,
    height: height_base,
    style: style_base_button,
    x: gap * 2 + width_base * 1.8 + (width_base + gap) * 9,
    y: gap + (height_base + gap) * 2,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "Semicolon",
    letter: ";",
  },
  {
    width: width_base,
    height: height_base,
    style: style_base_button,
    x: gap * 2 + width_base * 1.8 + (width_base + gap) * 10,
    y: gap + (height_base + gap) * 2,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "Quote",
    letter: "'",
  },
  {
    width: width_base,
    height: height_base,
    style: style_base_button,
    x: gap * 2 + width_base * 1.8 + (width_base + gap) * 11,
    y: gap + (height_base + gap) * 2,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "Backslash",
    letter: "\\",
  },
  {
    width: width_base * 1.7,
    height: height_base,
    style: style_space_button,
    x: gap * 2 + width_base * 1.8 + (width_base + gap) * 12,
    y: gap + (height_base + gap) * 2,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "Enter",
    letter: "enter",
    function: enter,
  },
  //////////////  4 ряд /////////////////////////
  {
    width: width_base * 2.5,
    height: height_base,
    style: style_space_button,
    x: gap,
    y: gap + (height_base + gap) * 3,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "ShiftLeft",
    letter: "shift",
    function: undefined,
  },
  {
    width: width_base,
    height: height_base,
    style: style_base_button,
    x: gap * 2.5 + width_base * 2.5 + (width_base + gap) * 0,
    y: gap + (height_base + gap) * 3,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "KeyZ",
    letter: "z",
  },
  {
    width: width_base,
    height: height_base,
    style: style_base_button,
    x: gap * 2.5 + width_base * 2.5 + (width_base + gap) * 1,
    y: gap + (height_base + gap) * 3,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "KeyX",
    letter: "x",
  },
  {
    width: width_base,
    height: height_base,
    style: style_base_button,
    x: gap * 2.5 + width_base * 2.5 + (width_base + gap) * 2,
    y: gap + (height_base + gap) * 3,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "KeyC",
    letter: "c",
  },
  {
    width: width_base,
    height: height_base,
    style: style_base_button,
    x: gap * 2.5 + width_base * 2.5 + (width_base + gap) * 3,
    y: gap + (height_base + gap) * 3,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "KeyV",
    letter: "v",
  },
  {
    width: width_base,
    height: height_base,
    style: style_base_button,
    x: gap * 2.5 + width_base * 2.5 + (width_base + gap) * 4,
    y: gap + (height_base + gap) * 3,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "KeyB",
    letter: "b",
  },
  {
    width: width_base,
    height: height_base,
    style: style_base_button,
    x: gap * 2.5 + width_base * 2.5 + (width_base + gap) * 5,
    y: gap + (height_base + gap) * 3,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "KeyN",
    letter: "n",
  },
  {
    width: width_base,
    height: height_base,
    style: style_base_button,
    x: gap * 2.5 + width_base * 2.5 + (width_base + gap) * 6,
    y: gap + (height_base + gap) * 3,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "KeyM",
    letter: "m",
  },
  {
    width: width_base,
    height: height_base,
    style: style_base_button,
    x: gap * 2.5 + width_base * 2.5 + (width_base + gap) * 7,
    y: gap + (height_base + gap) * 3,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "Comma",
    letter: ",",
  },
  {
    width: width_base,
    height: height_base,
    style: style_base_button,
    x: gap * 2.5 + width_base * 2.5 + (width_base + gap) * 8,
    y: gap + (height_base + gap) * 3,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "Period",
    letter: ".",
  },
  {
    width: width_base,
    height: height_base,
    style: style_base_button,
    x: gap * 2.5 + width_base * 2.5 + (width_base + gap) * 9,
    y: gap + (height_base + gap) * 3,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "Slash",
    letter: "/",
  },
  // {
  //   width: width_base,
  //   height: height_base,
  //   x: gap * 2.5 + width_base * 2.5 + (width_base + gap) * 10,
  //   y: gap + (height_base + gap) * 3,
  //   x_shadow: 0,
  //   y_shadow: 0,
  //   x_delta: 0,
  //   y_delta: 0,
  //   code: "ArrowUp",
  //   letter: "up",
  // },
  {
    width: width_base * 3.15,
    height: height_base,
    style: style_space_button,
    x: gap * 2.5 + width_base * 2.5 + (width_base + gap) * 10,
    y: gap + (height_base + gap) * 3,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "ShiftRight",
    letter: "shift",
    function: undefined,
  },
  //////////////  5 ряд /////////////////////////
  {
    width: width_base * 1.5,
    height: height_base,
    style: style_space_button,
    x: gap,
    y: gap + (height_base + gap) * 4,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "ControlLeft",
    letter: "ctrl",
    function: undefined,
  },
  {
    width: width_base,
    height: height_base,
    style: style_space_button,
    x: gap * 2 + width_base * 1.5 + (width_base + gap) * 0,
    y: gap + (height_base + gap) * 4,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "AltLeft",
    letter: "alt",
    function: undefined,
  },
  {
    width: width_base * 1.5,
    height: height_base,
    style: style_space_button,
    x: gap * 2 + width_base * 1.5 + (width_base + gap) * 1,
    y: gap + (height_base + gap) * 4,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "MetaLeft",
    letter: "win",
    function: undefined,
  },
  {
    width: width_base * 5.95,
    height: height_base,
    style: style_space_button,
    x: gap * 3 + width_base * 1.5 * 2 + (width_base + gap) * 1,
    y: gap + (height_base + gap) * 4,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "Space",
    letter: " ",
  },
  {
    width: width_base * 1.5,
    height: height_base,
    style: style_space_button,
    x: gap * 4 + width_base * 1.5 * 2 + width_base * 5.95 + (width_base + gap) * 1,
    y: gap + (height_base + gap) * 4,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "MetaRight",
    letter: "ctrl",
    function: undefined,
  },
  {
    width: width_base,
    height: height_base,
    style: style_space_button,
    x: gap * 5 + width_base * 1.5 * 3 + width_base * 5.95 + (width_base + gap) * 1,
    y: gap + (height_base + gap) * 4,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "AltRight",
    letter: "alt",
    function: undefined,
  },
  {
    width: width_base,
    height: height_base / 2,
    style: style_space_button,
    x: gap * (5 + 1.8) + width_base * 1.5 * 3 + width_base * 5.95 + (width_base + gap) * 2,
    y: gap + (height_base + gap) * 4 + height_base / 2,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "ArrowLeft",
    letter: "left",
    function: goLeft,
  },
  {
    width: width_base,
    height: height_base / 2,
    style: style_space_button,
    x: gap * (5 + 1.8 * 2) + width_base * 1.5 * 3 + width_base * 5.95 + (width_base + gap) * 3,
    y: gap + (height_base + gap) * 4,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "ArrowUp",
    letter: "",
    function: goUpDown,
  },
  {
    width: width_base,
    height: height_base / 2,
    style: style_space_button,
    x: gap * (5 + 1.8 * 2) + width_base * 1.5 * 3 + width_base * 5.95 + (width_base + gap) * 3,
    y: gap + (height_base + gap) * 4 + height_base / 2,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "ArrowDown",
    letter: "",
    function: goUpDown,
  },
  {
    width: width_base,
    height: height_base / 2,
    style: style_space_button,
    x: 1352 - width_base,
    y: gap + (height_base + gap) * 4 + height_base / 2,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "ArrowRight",
    letter: "right",
    function: goRight,
  },
];
