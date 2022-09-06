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

//❗2、数字的千位分隔符表示法: 比如把 "12345678"，变成 "12,345,678"。
// 密码长度 6-12 位，由数字、小写字符和大写字母组成，但必须至少包括 2 种字符。

const regex_password = /^[0-9a-zA-Z]{6,12}$/;
