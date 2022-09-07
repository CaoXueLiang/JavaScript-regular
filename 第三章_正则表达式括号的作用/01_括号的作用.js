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

// ❗3.2. ==========================分组引用==========================
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

// ❗3.3. ==========================反向引用==========================
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

// 3.3.1. 括号嵌套怎么办？
// 以左括号（开括号）为准
const regex_1 = /^((\d)(\d(\d)))\1\2\3\4$/;
console.log("1231231233".match(regex_1));

// 3.3.2. \10 表示什么呢？
// 即 \10 是表示第 10 个分组，还是 \1 和 0 呢？ 答案是前者

// 3.3.3. 引用不存在的分组会怎样？
// 因为反向引用，是引用前面的分组，但我们在正则里引用了不存在的分组时，此时正则不会报错，只是匹配
// 反向引用的字符本身。例如 \2，就匹配 "\2"。注意 "\2" 表示对 "2" 进行了转义
console.log("22\2".match(/^(\d)\1\2/));

// 3.3.4. 分组后面有量词会怎样？
// 分组后面有量词的话，分组最终捕获的数据是最后一次的匹配。
const regex_3 = /^(\d)+/;
console.log("12345".match(regex_3));

const regex_4 = /(\d)+ \1/;
console.log(regex_4.test("12345 1"));
console.log(regex_4.test("12345 5"));

// ❗3.4. ==========================非捕获括号==========================
// 之前文中出现的括号，都会捕获它们匹配到的数据，以便后续引用，因此也称它们是捕获型分组和捕获型分支。
// 如果只想要括号最原始的功能，但不会引用它，即，既不在 API 里引用，也不在正则里反向引用。
// 此时可以使用非捕获括号 (?:p) 和 (?:p1|p2|p3)
const regex_5 = /^I love (?:JavaScript|Regular Expression)$/;
console.log(regex_5.test("I love JavaScript"));
console.log(regex_5.test("I love Regular Expression"));
