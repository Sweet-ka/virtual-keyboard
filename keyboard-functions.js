export function backspace(textarea) {
  var start = textarea.selectionStart;
  var end = textarea.selectionEnd;

  if (start === end) {
    textarea.value = textarea.value.substring(0, start - 1) + textarea.value.substring(end, textarea.value.length);
    textarea.selectionStart = textarea.selectionEnd = start - 1;
  } else {
    textarea.value = textarea.value.substring(0, start) + textarea.value.substring(end, textarea.value.length);
    textarea.selectionStart = textarea.selectionEnd = start;
  }
}

export function letter(caps, textarea, newLetter) {
  var start = textarea.selectionStart;
  var end = textarea.selectionEnd;
  let letter;
  caps ? (letter = newLetter.toUpperCase()) : (letter = newLetter.toLowerCase());
  textarea.value = textarea.value.substring(0, start) + letter + textarea.value.substring(end, textarea.value.length);
  textarea.selectionStart = textarea.selectionEnd = start + 1;
}

export function del(textarea) {
  var start = textarea.selectionStart;
  var end = textarea.selectionEnd;
  textarea.value = textarea.value.substring(0, start) + textarea.value.substring(end + 1, textarea.value.length);
  textarea.selectionStart = textarea.selectionEnd = start;
}

export function enter(textarea) {
  textarea.value += "\n";
}

export function caps() {}
