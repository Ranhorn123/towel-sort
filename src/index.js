
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
 
let a = [];
if (matrix == null){
  return [];
}
  for (let i = 0; i < matrix.length; i++) {
      if (i % 2 === 1) {
          a.push(matrix[i].reverse());
      } else a.push(matrix[i]);
  }

  a = a.flat();

  return a

}
