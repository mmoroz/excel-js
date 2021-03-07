const CODES = {
  A: 65,
  Z: 90
}

function createCol(col, index) {
  return `
    <div class="column" data-type="resizable" data-col="${index + 1}">${col}<div class="col-resize" data-resize="col"></div></div>
  `
}

function createCell(cell, index) {
  return `
    <div class="cell" contenteditable="true" data-col="${index + 1}">${cell}</div>
  `
}

function createRow(content, i = 0) {
  const resizer = i > 0 ? '<div class="row-resize" data-resize="row"></div>' : ''
  return `
    <div class="row" data-type="resizable">
        <div class="row-info">
            ${i ? i : ''}
            ${resizer}
        </div>
        <div class="row-data">${content}</div>
    </div>
  `
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []
  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(createCol)
      .join('')

  rows.push(createRow(cols))

  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount)
        .fill('')
        .map(createCell)
        .join('')
    rows.push(createRow(cells, i+1))
  }

  return rows.join('')
}
