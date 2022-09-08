// 1. 匹配固定电话
// 区号是 "0" 开头的 3 到 4 位数字，对应的正则是：0\d{2,3}，
// 号码是非 "0" 开头的 7 到 8 位数字，对应的正则是：[1-9]\d{6,7}，

const regex_phont = /^(0\d{2,3}-?|\(0\d{2,3}\))[1-9]\d{6,7}$/;
console.log(regex_phont.test("055188888888"));
console.log(regex_phont.test("0551-88888888"));
console.log(regex_phont.test("(0551)88888888"));

// 2. 匹配浮点数
const regex_float = /^(\+|\-)?(\d*\.\d+|\d+)$/;
console.log("--flot--", regex_float.test("-.2"));

var regex = /\d+/g;
console.log(regex.lastIndex, regex.exec("123abc34def"));
console.log(regex.lastIndex, regex.exec("123abc34def"));
console.log(regex.lastIndex, regex.exec("123abc34def"));
console.log(regex.lastIndex, regex.exec("123abc34def"));
