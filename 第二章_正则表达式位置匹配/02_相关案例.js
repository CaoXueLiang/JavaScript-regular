// ❗1、数字的千位分隔符表示法: 比如把 "12345678"，变成 "12,345,678"。

// 弄出最后一个逗号
const result1 = "12345678".replace(/(?=\d{3}$)/g, ",");
console.log(result1); //12345,678

// 弄出所有的逗号
const result2 = "123456789".replace(/(?=(\d{3})+$)/g, ",");
console.log(result2); //,123,456,789

// 存在问题：一但是 3 的倍数，就把其前面的位置替换成逗号。
// 因此我们要求匹配的到这个位置不能是开头。
const result3 = "123456789".replace(/(?=(\d{3})+$)/g, ",");
console.log(result3); //,123,456,789

const result4 = "123456789".replace(/(?!^)(?=(\d{3})+$)/g, ",");
console.log(result4);

//支持其他形式
const result5 = "12345678 123456789".replace(/(?!\b)(?=(\d{3})+\b)/g, ",");
console.log(result5);

// 将 1888 格式化成："$ 1,888.00"
function format(num) {
  return num
    .toFixed(2)
    .replace(/\B(?=(\d{3})+\b)/g, ",")
    .replace(/^/, "$ ");
}
console.log(format(1888));

//❗2、验证密码问题
// 密码长度 6-12 位，由数字、小写字符和大写字母组成，但必须至少包括 2 种字符。

const regex_password1 = /^[0-9a-zA-Z]{6,12}$/;
const regex_password2 =
  /((?=.*[0-9])(?=.*[a-z])|(?=.*[0-9])(?=.*[A-Z])|(?=.*[a-z])(?=.*[A-Z]))^[0-9A-Za-z]{6,12}$/;
const regex_password3 =
  /(?!^[0-9]{6,12}$)(?!^[a-z]{6,12}$)(?!^[A-Z]{6,12}$)^[0-9a-zA-Z]{6,12}$/;

console.log(regex_password3.test("1234567")); // false 全是数字
console.log(regex_password3.test("abcdef")); // false 全是小写字母
console.log(regex_password3.test("ABCDEFGH")); // false 全是大写字母
console.log(regex_password3.test("ab23C")); // false 不足6位
console.log(regex_password3.test("ABCDEF234")); // true 大写字母和数字
console.log(regex_password3.test("abcdEF234")); // true 三者都有

/**
 * 疑惑：
 * 对于这个正则，我们只需要弄明白 (?=.*[0-9]^)即可
 * 分开来看就是 (?=.*[0-9]) 和 ^
 * 表示开头前面还有个位置（当然也是开头，即同一个位置，想想之前的空字符类比）
 * (?=.*[0-9]) 表示该位置后面的字符匹配 .*[0-9]，即有任何多个任意字符，后面再跟个数字
 * 翻译成大白话，就是接下来的字符，必须包含个数字
 */
