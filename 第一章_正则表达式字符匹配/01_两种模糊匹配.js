console.log(/hello/.test("hello"));
console.log(/hello/.test("helloworld"));

// 模糊匹配分为两种：
// 1. 横向模糊：一个正则可匹配的字符串的长度不是固定的，可以是多种情况的。
// 2. 纵向模糊：一个正则匹配的字符串，具体到某一位字符时，可以有多种可能。

// 表示匹配的字符串是：第一个字符是"a",接下来是2到5个字符"b",最后是字符"c"
// g 修饰符，表示全局匹配
const regex1 = /ab{2,5}c/g;
var string1 = "abc abbc abbbc abbbbc abbbbbc abbbbbbc";
console.log(string1.match(regex1));

const regex2 = /a[123]b/g;
var string2 = "a0b a1b a2b a3b a4b a5b a6b";
console.log(string2.match(regex2));
