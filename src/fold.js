// const {colorNum,} = require("../constant");

function dye(color1, color2) {
  if(color1 === 0 || color2 === 0) {
    return [color1 + color2, color1 + color2];
  } else {
    let newColor = color1 + color2;
    if(newColor === colorNum * 2){
      return [1, 1];
    } else if(newColor > colorNum){
      return [newColor - colorNum, newColor - colorNum];
    } else {
      return [newColor, newColor];
    }
  }
}

function fold(arrs, axis) {
  // 入值检查
  //console.log("axis:", axis[0], axis[1]);
  if((axis[0] !== 0 && axis[1] !== 0) || (axis[0] === 0 && axis[1] === 0)) {
    // throw new Error("the axis error");
    return "the axis error";
  }
  if(axis.includes(arrs.length)){
    return arrs
  }

  // 数组拷贝
  let newArrs = arrs.map(items => {
    return [...items];
  })
  //console.log("new:", newArrs);
  let axisNum = axis[0] ? axis[0] : axis[1]; //几号后的那根线
  //console.log("axisNum:", axisNum);
  if (axisNum < arrs.length / 2){
    if (axis[0] === 0) {
      // 横
      for(let i = 0; i < newArrs.length; i++){
        for(let j = 0; j < axisNum; j++){
          // console.log("i:", i, ";j:", j);
          // console.log("newArrs[i][j]", newArrs[i][j], ";newArrs[i][2*axisNum-j-1]:", newArrs[i][2 * axisNum - j - 1]);

          [newArrs[i][j], newArrs[i][2 * axisNum - j - 1]] = dye(newArrs[i][j], newArrs[i][2 * axisNum - j - 1]);

          // console.log("newArrs[i][j]", newArrs[i][j], ";newArrs[i][2*axisNum-j-1]:", newArrs[i][2 * axisNum - j - 1]);
          // console.log("------------");
        }
      }
      return newArrs;
    } else {
      // 竖
      for(let i = 0; i < axisNum; i++){
        for(let j = 0; j < newArrs[0].length; j++){
          // console.log("i:", i, ";j:", j);
          // console.log("newArrs[i][j]", newArrs[i][j], ";newArrs[2*axisNum-i-1][j]:", newArrs[2 * axisNum - i - 1][j]);

          [newArrs[i][j], newArrs[2 * axisNum - i - 1][j]] = dye(newArrs[i][j], newArrs[2 * axisNum - i - 1][j]);
          
          // console.log("newArrs[i][j]", newArrs[i][j], ";newArrs[2*axisNum-i-1][j]:", newArrs[2 * axisNum - i - 1][j]);
          // console.log("------------");
        }
      }
      return newArrs;
    }
  } else {
    if (axis[0] === 0) {
      // 横
      for(let i = 0; i < newArrs.length; i++){
        for(let j = newArrs[0].length - 1; j >= axisNum; j--){
          // console.log("i:", i, ";j:", j);
          // console.log("newArrs[i][j]", newArrs[i][j], ";newArrs[i][2*axisNum-j-1]:", newArrs[i][2 * axisNum - j - 1]);

          [newArrs[i][j], newArrs[i][2 * axisNum - j - 1]] = dye(newArrs[i][j], newArrs[i][2 * axisNum - j - 1]);

          // console.log("newArrs[i][j]", newArrs[i][j], ";newArrs[i][2*axisNum-j-1]:", newArrs[i][2 * axisNum - j - 1]);
          // console.log("------------");
        }
      }
      return newArrs;
    } else {
      // 竖
      for(let i = newArrs.length - 1; i >= axisNum; i--){
        for(let j = 0; j < newArrs[0].length; j++){
          // console.log("i:", i, ";j:", j);
          // console.log("newArrs[i][j]", newArrs[i][j], ";newArrs[2*axisNum-i-1][j]:", newArrs[2 * axisNum - i - 1][j]);

          [newArrs[i][j], newArrs[2 * axisNum - i - 1][j]] = dye(newArrs[i][j], newArrs[2 * axisNum - i - 1][j]);
          
          // console.log("newArrs[i][j]", newArrs[i][j], ";newArrs[2*axisNum-i-1][j]:", newArrs[2 * axisNum - i - 1][j]);
          // console.log("------------");
        }
      }
      return newArrs;
    }
  }
}

function isWin(arrs, checkinfo){
  const filterArr = checkinfo.filter(items => {
    const {coordinate, value} = items;
    return arrs[coordinate[0]][coordinate[1]] !== value;
  })
  return filterArr.length === 0
}

// module.exports = {
//   fold
// };
