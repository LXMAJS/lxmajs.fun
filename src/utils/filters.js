// 格式化价格为一位小数
let formatMoney = val => {
  if (checkRate(val)) {
    val = Number(val)
    return /* '￥'+ */ val.toFixed(2)
  }
}

// 判断是否是数字
let checkRate = (input) => {
  let numReg = /^[0-9]+$/
  let numRe = new RegExp(numReg)
  if (!numRe.test(input)) {
    return false
  } else {
    return true
  }
}

export default ({
  formatMoney
})
