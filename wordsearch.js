function transpose(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
  
    let grid = [];
    for (let col = 0; col < cols; col++) {
      grid[col] = [];
    }
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        grid[col][row] = matrix[row][col]
      }
    }
    return grid;
  }


const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(element => element.join(''));
    const verticalJoin = transpose(letters).map(element => element.join(''));
    for (const l of horizontalJoin) {
        if (l.includes(word)) return true;
    }
    for (const v of verticalJoin) {
        if (v.includes(word)) return true;
    }
    return false;
};


module.exports = wordSearch;