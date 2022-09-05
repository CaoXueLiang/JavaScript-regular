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
/**
 * {m,} 表示至少出现 m 次
 * {m} 等价于 {m,m} 表示出现 m 次
 * ？等价于{0,1}，表示出现或者不出现
 * + 等价于 {1,}, 表示至少出现一次
 * *
 */
