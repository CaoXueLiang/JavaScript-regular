// 贪婪量词
const regex_1 = /\d{1,3}/;
console.log("12345".match(regex_1));

// 惰性量词
// 惰性量词就是在贪婪量词后面加个问号。表示尽可能少的匹配
const regex_2 = /\d{1,3}?/;
console.log("12345".match(regex_2));
