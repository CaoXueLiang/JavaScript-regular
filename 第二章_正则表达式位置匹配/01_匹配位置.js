// 位置：指的是相邻字符间的位置
// 在 ES5中，共有6个锚
const regex1 = /^$\b\B(?=a)(?!b)/;
// ^匹配开头，在多行匹配中匹配行开头
// $匹配结尾，在多行匹配中匹配行结尾。

var result = "hello".replace(/^|$/g, "#");
console.log(result);

var result1 = "I\nlove\njavascript".replace(/^|$/gm, "#");
console.log(result1);

// \b是单词边界，具体就是 \w与\W之间的位置，也包括 \w与^之间的位置，和\w与$之间的位置。
// \B 就是 \b 的反面的意思，非单词边界。具体就是 \w与\w，\W与\W，^与\W，\W与$之间的位置
var result2 = "[JS] Lesson_01.mp4".replace(/\b/g, "#");
console.log(result2);

var result3 = "[JS] Lesson_01.mp4".replace(/\B/g, "#");
console.log(result3);

// (?=p),其中 p 是一个子模式，即p前面的位置。或者说，该位置后面的字符要匹配p
// 比如(?=l),表示"l"字符前面的位置
var result4 = "hello".replace(/(?=l)/g, "#");
console.log(result4);

//(?!p) 就是 (?=p) 的反面意思
var result5 = "hello".replace(/(?!l)/g, "#");
console.log(result5);

var result6 = /^^hello$$$/.test("hello");
console.log(result6);
