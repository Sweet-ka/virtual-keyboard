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

export function letter(caps, shift, textarea, newLetter) {
  let start = textarea.selectionStart;
  let end = textarea.selectionEnd;
  let letter;
  (caps || shift) && !(caps && shift) ? (letter = newLetter.toUpperCase()) : (letter = newLetter.toLowerCase());
  textarea.value = textarea.value.substring(0, start) + letter + textarea.value.substring(end, textarea.value.length);
  textarea.selectionStart = textarea.selectionEnd = start + 1;
}

export function empty() {}

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

function createClone(textarea) {
  let span = this.clone.span.element;
  span.textContent = textarea.value;

  let arrChar = span.textContent.split("");
  span.textContent = "";
  arrChar.forEach((item, index) => {
    let htmlElem;
    if (item == "\n") {
      htmlElem = "<span><br></span>";
    } else {
      htmlElem = `<span>${item}</span>`;
    }
    if (index === arrChar.length - 1) {
      htmlElem = `<span>${item}</span><span></span>`;
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
  return rows;
}

function setNewRow(direction, curentRow, rows) {
  let newRow;
  if (direction === "ArrowUp") {
    newRow = curentRow - 1;
    if (newRow < 0) {
      newRow = 0;
    }
  } else if (direction === "ArrowDown") {
    newRow = curentRow + 1;
    if (newRow > rows.length - 1) {
      newRow = rows.length - 1;
    }
  }
  return newRow;
}

export function goUpDown(textarea, letter, direction) {
  let rows = createClone.call(this, textarea);

  let start = textarea.selectionStart;
  let curentRow, newRow, newPos;

  rows.forEach((item, index) => {
    if (item.includes(start)) {
      curentRow = index;
      if (this.firstPos === undefined) this.firstPos = item.indexOf(start);
    }
  });

  newRow = setNewRow(direction, curentRow, rows);

  if (rows[newRow].length - 1 <= this.firstPos) {
    newPos = rows[newRow].length - 1;
  } else {
    newPos = this.firstPos;
  }

  textarea.selectionStart = textarea.selectionEnd = rows[newRow][newPos];
}
