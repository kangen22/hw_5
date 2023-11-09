let landPerimeter = arr => {
    const rows = arr.length;
    const cols = arr[0].length;
    let perimeter = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (arr[i][j] === 'X') {
                if (i === 0 || arr[i - 1][j] === 'O') perimeter += 1;

                if (i === rows - 1 || arr[i + 1][j] === 'O') perimeter += 1;

                if (j === 0 || arr[i][j - 1] === 'O') perimeter += 1;

                if (j === cols - 1 || arr[i][j + 1] === 'O') perimeter += 1;
            }
        }
    }
    return `Total land perimeter: ${perimeter}`;
}

const input1 = [
    'XOOXO',
    'XOOXO',
    'OOOXO',
    'XXOXO',
    'OXOOO'
];

const input2 = [
    'XOOO',
    'XOXO',
    'XOXO',
    'OOXX',
    'OOOO'
];

console.log(landPerimeter(input1)); 
console.log(landPerimeter(input2)); 
