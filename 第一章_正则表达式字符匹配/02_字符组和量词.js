//1.2 [abc]，表示匹配一个字符，它可以是 "a"、"b"、"c" 之一。
const regex1 = /[abc]/g;
console.log("abcdef".match(regex1));

// 1.2.1 范围表示法
const regex2 = /[123456abcdefGHIJKLM]/;
const regex2Another = /[1-6a-fG-M]/;

// 1.2.2. 排除字符组
// 字符组的第一位放 ^（脱字符），表示求反的概念
const regex3 = /[^abc]/; //表示除 "a","b","c"之外的任意一个字符

// 1.2.3 常见的简写形式
const regex4 = /\d/; // [0-9]
const regex5 = /\D/; // [^0-9]
const regex6 = /w/; // [0-9a-zA-Z_] 表示字母、大小写字母、下划线
const regex7 = /\W/; // [^0-9a-zA-Z_]
const regex8 = /\s/; // [ \t\v\n\r\f] 表示空白符
const regex9 = /\S/; // [^ \t\v\n\r\f] 非空白字符
const regex10 = /./; // 通配符，表示几乎任意字符

// 1.3 量词

// 1.3.1 简写形式
/**
 * {m,} 表示至少出现 m 次
 * {m} 等价于 {m,m} 表示出现 m 次
 * ？等价于{0,1}，表示出现或者不出现
 * + 等价于 {1,}, 表示至少出现一次
 * * 等价于 {0,}, 表示出现任意次，有可能不出现
 */

// 1.3.2 贪婪匹配与惰性匹配
const regex_1 = /\d{2,5}/g;
const string_1 = "123 1234 12345 123456";
console.log(string_1.match(regex_1));

// 惰性匹配
// 表示虽然 2到5次都行，当2个就够的时候，就不再往下尝试了
const regex_2 = /\d{2,5}?/g;
console.log(string_1.match(regex_2));

// 通过在量词后面加上问号就能实现惰性匹配,因此所有的惰性匹配情况如下：
// 惰性量词     贪婪量词
// {m,n}?       {m,n}
// {m,}?        {m,}
// ??           ?
// +?           +
// *?           *
