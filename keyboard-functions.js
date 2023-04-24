export function backspace(textarea) {
  let start = textarea.selectionStart;
  let end = textarea.selectionEnd;

  if (start === end) {
    textarea.value = textarea.value.substring(0, start - 1) + textarea.value.substring(end, textarea.value.length);
    textarea.selectionStart = textarea.selectionEnd = start - 1;
  } else {
    textarea.value = textarea.value.substring(0, start) + textarea.value.substring(end, textarea.value.length);
    textarea.selectionStart = textarea.selectionEnd = start;
  }
}

export function letter(caps, textarea, newLetter) {
  let start = textarea.selectionStart;
  let end = textarea.selectionEnd;
  let letter;
  caps ? (letter = newLetter.toUpperCase()) : (letter = newLetter.toLowerCase());
  textarea.value = textarea.value.substring(0, start) + letter + textarea.value.substring(end, textarea.value.length);
  textarea.selectionStart = textarea.selectionEnd = start + 1;
}

export function del(textarea) {
  let start = textarea.selectionStart;
  let end = textarea.selectionEnd;
  textarea.value = textarea.value.substring(0, start) + textarea.value.substring(end + 1, textarea.value.length);
  textarea.selectionStart = textarea.selectionEnd = start;
}

export function enter(textarea) {
  textarea.value += "\n";
}

export function tab(textarea) {
  let start = textarea.selectionStart;
  let end = textarea.selectionEnd;
  const nSpaces = 3;
  textarea.value =
    textarea.value.substring(0, start) + " ".repeat(nSpaces) + textarea.value.substring(end, textarea.value.length);
  textarea.selectionStart = textarea.selectionEnd = start + nSpaces;
}

export function goLeft(textarea) {
  let start = textarea.selectionStart;
  if (start > 0) textarea.selectionStart = textarea.selectionEnd = start - 1;
}

export function goRight(textarea) {
  let end = textarea.selectionEnd;
  if (end < textarea.value.length) textarea.selectionStart = textarea.selectionEnd = end + 1;
}

export function goUp(textarea) {
  let end = textarea.selectionEnd;
  let row = textarea.getAttribute("cols");
  if (end - row >= 0) {
    textarea.selectionStart = textarea.selectionEnd = end - row;
  }
}
