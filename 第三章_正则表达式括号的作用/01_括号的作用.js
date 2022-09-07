// 3.1.1. 分组
// ()提供分组功能，将(ab)看成一个整体
const regex1 = /(ab)+/g;
var string = "ababa abbb ababab";
console.log(string.match(regex1));

// 3.1.2. 分支结构
// 多选分支结构 (p1|p2) 中
const regex2 = /^I love (JavaScript|Regular Expression)/;
console.log(regex2.test("I love JavaScript"));
console.log(regex2.test("I love Regular Expression"));

// ❗3.2. 分组引用
// 3.2.1. 提取数据
const regex_date = /(\d{4})-(\d{2})-(\d{2})/;
const date_string = "2017-06-12";
console.log(date_string.match(regex_date));

// 另外也可以使用正则实例对象的 exec 方法
console.log(regex_date.exec(date_string));

console.log(regex_date.test(date_string));

// 3.2.2. 替换
// 把 yyyy-mm-dd 格式，替换成 mm/dd/yyyy 怎么做？
const regex_replace = /^(\d{4})-(\d{2})-(\d{2})$/;
const matchResult = "2017-08-23".match(regex_replace);
if (matchResult) {
  const year = matchResult[1];
  const month = matchResult[2];
  const day = matchResult[3];
  const result = `${month}/${day}/${year}`;
  console.log("result", result);
}

const result1 = "2017-08-25".replace(
  regex_replace,
  function (match, year, month, day) {
    return month + "/" + day + "/" + year;
  }
);
console.log(result1);

// ❗3.3. 反向引用
// 除了使用相应API来引用分组，也可以在正则本身里引用分组。但只能引用之前出现的分组，即反向引用。

//比如要写一个正则支持匹配如下三种格式：
// 2016-06-12
// 2016/06/12
// 2016.06.12

const regex_mutileDate = /^(\d{4})(-|\/|\.)(\d{2})(-|\/|\.)(\d{2})$/;
console.log(regex_mutileDate.test("2016-06-12"));
console.log(regex_mutileDate.test("2016/06/12"));
console.log(regex_mutileDate.test("2016.06-12"));

// 注意：\2 表示的引用之前的那个分组 (-|\/|\.)。不管它匹配到什么，(比如：-)，\2都匹配那个同样的具体某个字符
// \1 \2 \3 分别指代第一个、第二个、第三个分组
const regex_mutileDate_1 = /^(\d{4})(-|\/|\.)(\d{2})\2(\d{2})$/;
console.log(regex_mutileDate_1.test("2016.06.12"));
console.log(regex_mutileDate_1.test("2016.06-12"));
