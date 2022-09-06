// 1.4 多选分支
// 一个模式可以实现横向和纵向模糊匹配，而多选分支可以支持多个子模式任选其一。
// 分支结构也是惰性的，即当前面的匹配上了，后面的就不再尝试了

const regex1 = /good|nice/g;
var string1 = "good idea, nice try.";
console.log(string1.match(regex1));

var regex2 = /good|goodbye/g;
var string2 = "goodbye";
console.log(string2.match(regex2));

var regex3 = /goodbye|good/g;
var string3 = "goodbye";
console.log(string3.match(regex3));
