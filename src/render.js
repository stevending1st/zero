function renderOneCell(arrValue,  rowNum, columnNum) {
  let backgroundColor,
  textContent;
  if (arrValue === 0) {
    backgroundColor = "#ffffff";
    textContent = "";
  } else {
    backgroundColor = colorList[arrValue - 1];
    textContent = arrValue;
  }
  return `<div id="cell-${rowNum}-${columnNum}" class="cell" style="background-color: ${backgroundColor};">${textContent}</div>`;
}

function rederColumn(columnValue, rowNum) {
  let returnCode = `<div class="cell_column">`;
  columnValue.map((items, index) => {
    returnCode += renderOneCell(items, rowNum, index);
  })
  returnCode += `</div>`
  return returnCode
}

function rederRow(rowValue) {
  let returnCode = ``;
  rowValue.map((items, index) => {
    returnCode += rederColumn(items, index);
  })
  returnCode += ``;
  return returnCode
}

function rederModel(){
  
}


