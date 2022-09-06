// 匹配字符，无非就是字符组、量词和分支结构的组合使用罢了。

//1.5.1. 匹配 16 进制颜色值
const regex_color = /#[0-9a-fA-F]{6}|#[0-9a-fA-F]{3}/g; //分支结构是惰性匹配注意使用顺序
var stringColor = "#ffbbad #Fc01DF #FFF #ffE";
console.log(stringColor.match(regex_color));

// 1.5.2. 匹配时间
const regex_time = /^([01][0-9]|[2][0-3]):[0-5][0-9]$/;
console.log(regex_time.test("23:59"));
console.log(regex_time.test("02:07"));
console.log(regex_time.test("24:07"));

const regex_time1 = /^(0?[0-9]|[1][0-9]|[2][0-3]):(0?[0-9]|[1-5][0-9])$/;
console.log(regex_time1.test("7:9"));

// 1.5.3. 匹配日期 yyyy-mm-dd
const regex_date = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[0-9]|[12][0-9]|3[01])$/;
console.log("regex_date", regex_date.test("2017-06-10"));

// 1.5.4. window 操作系统文件路径
// F:\study\javascript\regex\regular expression.pdf
// F:\study\javascript\regex\
// F:\study\javascript
// F:\

// 盘符:\文件夹\文件夹\文件夹\

var regex_folder = /^[a-zA-Z]:\\([^\\:*<>|"?\r\n/]+\\)*([^\\:*<>|"?\r\n/]+)?$/;
console.log("----------");
console.log(
  regex_folder.test("F:\\study\\javascript\\regex\\regular expression.pdf")
);
console.log(regex_folder.test("F:\\study\\javascript\\regex\\"));
console.log(regex_folder.test("F:\\study\\javascript"));
console.log(regex_folder.test("F:\\"));

// 1.5.5. 匹配 id
// <div id="container" class="main"></div>  提取出 id="container"
var regex_id = /id="[^"]*"/;
var string = '<div id="container" class="main"></div>';
console.log(string.match(regex_id)[0]);
