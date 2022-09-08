// 1.验证 (search、test、match、exec) 最常用的是 test
// 判断一个字符串中是否有数字
const string = "abc123";
const regex_1 = /\d/;
console.log(!!string.search(regex_1));
console.log(!!regex_1.test(string));
console.log(!!string.match(regex_1));
console.log(!!regex_1.exec(string));

// 2.切分
// 所谓“切分”，就是把目标字符串，切成一段一段的。在 JavaScript 中使用的是 split
const date_string = "html,css,javascript";
console.log(date_string.split(/\,/));
console.log("2017/06/26".split(/\//));

// 3.提取
// 提取部分匹配的数据,通常要使用分组引用（分组捕获）功能。
// 最常用的是 match
var string2 = "2017-06-26";
const regex_2 = /^(\d{4})-(\d{2})-(\d{2})$/;
console.log(string2.match(regex_2));
console.log(regex_2.exec(string2));
regex_2.test(string2);

// 4.替换
// 在 JavaScript 中，使用 replace 进行替换。
// 比如把日期格式，从 yyyy-mm-dd 替换成 yyyy/mm/dd：
const string3 = "2018-08-27";
const regex_replace = /(\-)/g;
function replaceStr(str) {
  return str.replace(regex_replace, (m) => {
    return "/";
  });
}
console.log(replaceStr(string3));
