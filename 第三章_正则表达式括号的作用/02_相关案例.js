// 1. 字符串 trim 方法模拟, 去掉字符串的开头和结尾的空白符
function trim(str) {
  return str.replace(/^\s+|\s+$/g, "");
}
console.log(trim("  foobar  "));

// 这里使用了惰性匹配 *?，不然也会匹配最后一个空格之前的所有空格的。
function trim1(str) {
  return str.replace(/^\s*(.*?)\s*$/, "$1");
}
console.log(trim1("  foobar  "));

// 2.  将每个单词的首字母转换为大写
const str1 = "my name is epeli";
