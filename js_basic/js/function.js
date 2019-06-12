console.log('関数');
// function命令
// function getRectangle(height,width){
//   return height*width;
// }
//
// console.log(getRectangle(3,5));

// 関数リテラル
// var getRectangle = function(height,width){
//   return height * width;
// }
// console.log(getRectangle(3,5));


// Functionコンストラクター
var getRectangle = new Function('height','width','return height * width');

console.log(getRectangle(3,5));
