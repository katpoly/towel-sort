
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if ( matrix === undefined) {
        return  [];
   }
    let arr = [];
    for (let k = 0; k < matrix.length; k++) {
        for (let p = 0; p < matrix[k].length; p++){
             if (k % 2 ===0) {
                 arr.push(matrix[k][p]);
            } else {
                 arr.push(matrix[k][matrix[k].length-p-1]);
            }
        }
    }
    return matrix.length ? arr : [];
}
