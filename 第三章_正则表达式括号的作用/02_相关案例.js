// 1. 字符串 trim 方法模拟, 去掉字符串的开头和结尾的空白符
function trim(str) {
  return str.replace(/^\s+|\s+$/g, "");
}
console.log(trim("  foobar  "));

// 这里使用了惰性匹配 *?，不然也会匹配最后一个空格之前的所有空格的。
function trim1(str) {
  return str.replace(/^\s*(.*?)\s*$/, "$1");
}
console.log(trim1("  foobar  "));

// 2. 将每个单词的首字母转换为大写
function titleize(str) {
  let lowStr = str.toLocaleLowerCase();
  return lowStr.replace(/(?:^|\s)\w/g, (e) => {
    return e.toUpperCase();
  });
}
console.log(titleize("my name is epeli"));

// 3. 驼峰化
function camelize(str) {
  return str.replace(/[-_\s]+(\w)/g, (match, c) => {
    // console.log(`===${match}===${c}`);
    return c.toUpperCase();
  });
}
console.log(camelize("-moz-transform"));
console.log(camelize("-moz-transform "));

// 4. 中划线化
function dasherize(str) {
  return str
    .replace(/([A-Z])/g, (match, c) => {
      return `-${c}`;
    })
    .toLocaleLowerCase();
}
// => "-moz-transform
console.log("==dasherize==", dasherize("MozTransform"));

// 5. 匹配成对标签
// 匹配一个开标签 <[^>]+>，匹配一个闭标签 <\/[^>]+>
// 但是要求匹配成对标签，那就需要使用反向引用
// const regex_tag = /<(\w+)>[\d\D]*<\/\1>/;
const regex_tag = /<([^>]+)>[\d\D]*<\/\1>/;
console.log("<title>regular expression</title>".match(regex_tag));
console.log("<p>laoyao bye bye</p>".match(regex_tag));
console.log("<title>wrong!</p>".match(regex_tag));
