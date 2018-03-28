/**
 * 删除数组某一个元素
 * @param val
 */
Array.prototype.removeByValue = function (val) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] === val) {
      this.splice(i, 1)
      break
    }
  }
}
