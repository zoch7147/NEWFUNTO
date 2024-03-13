// index.js

// 有趣的名人名言数组
const quotes = [
  "成功不是偶然的，是日复一日的努力的成果。 - 马克·吐温",
  "生活中最重要的事情不是所站的位置，而是所朝的方向。 - 奥利弗·温德尔·霍姆斯",
  "一个人能够走多远，取决于他愿意付出多少努力。 - 文森特·梵高",
  "做自己认为正确的事情，不必在意别人的眼光。 - 巴勃罗·毕加索",
  "只有经历风雨，才能见彩虹；只有经历努力，才能得自由。 - 霍伊特",
];

// 随机返回一个名言
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

// 导出函数以便其他文件或模块使用
module.exports = getRandomQuote;
