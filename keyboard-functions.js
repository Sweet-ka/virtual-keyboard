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
  let start = textarea.selectionStart;
  let end = textarea.selectionEnd;
  textarea.value = textarea.value.substring(0, start) + "\n" + textarea.value.substring(end, textarea.value.length);
  textarea.selectionStart = textarea.selectionEnd = start + 1;
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
  let end = textarea.selectionEnd;
  if (start === end) {
    if (start > 0) textarea.selectionStart = textarea.selectionEnd = start - 1;
  } else {
    if (start > 0) textarea.selectionStart = textarea.selectionEnd = start;
  }
}

export function goRight(textarea) {
  let start = textarea.selectionStart;
  let end = textarea.selectionEnd;
  if (start === end) {
    if (end < textarea.value.length) textarea.selectionStart = textarea.selectionEnd = end + 1;
  } else {
    if (end < textarea.value.length) textarea.selectionStart = textarea.selectionEnd = end;
  }
}

export function goUp(textarea) {
  let span = document.getElementById("sp");
  span.textContent = textarea.value;

  let arrChar = span.textContent.split("");
  span.textContent = "";
  arrChar.forEach((item) => {
    let htmlElem;
    if (item == "\n") {
      htmlElem = "<span><br></span>";
    } else {
      htmlElem = `<span>${item}</span>`;
    }
    span.innerHTML += htmlElem;
  });

  let spans = span.querySelectorAll("span");
  let rows = [];
  let rowY = spans[0].offsetTop;
  let arrItem = [];

  spans.forEach((item, index) => {
    if (item.offsetTop === rowY) {
      arrItem.push(index);
    } else if (item.offsetTop !== rowY) {
      rows.push(arrItem);
      arrItem = [];
      arrItem.push(index);
      rowY = item.offsetTop;
    }
    if (index === spans.length - 1) {
      rows.push(arrItem);
    }
  });

  let start = textarea.selectionStart;
  let curentRow, newRow, newPos;

  rows.forEach((item, index) => {
    if (item.includes(start - 1)) {
      curentRow = index;
      if (this.firstPos === undefined) this.firstPos = item.indexOf(start - 1) + 1;
    }
  });

  newRow = curentRow - 1;
  if (newRow < 0) {
    newRow = 0;
  }
  if (rows[newRow].length <= this.firstPos) {
    newPos = rows[newRow].length;
  } else {
    newPos = this.firstPos;
  }
  if (spans[rows[newRow][newPos - 1]].innerHTML === "<br>") {
    newPos = newPos - 1;
  }

  textarea.selectionStart = textarea.selectionEnd = rows[newRow][newPos];
}
