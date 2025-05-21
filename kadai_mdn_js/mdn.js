const today = new Date //オブジェクト宣言

const [month, day, year] = [
    today.getMonth() + 1, // 月は0から始まるため、+1
    today.getDate(),
    today.getFullYear(),
];
console.log(`${year}年${month}月${day}日`);