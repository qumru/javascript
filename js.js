
// 1-ci sual

function sumArray(array) {
    let sum = 0;
    for (let arr of array) {
        sum = sum + arr;
    }
    return sum;
}

//  2-ci sual

function Random(lower, upper) {
    const rand = Math.floor(Math.random() * upper + lower);
    return rand;
}

// 3-cu sual

function arithmeticMean(arrayy) {
    let summ = 0;
    const length = arrayy.length;
    for (let arith of arrayy) {
        summ = summ + arith;
    }
    return (summ / length);
}

// 4-cu sual

function geometricMean(array) {
    let hasil = 1;

    for (let geo of array) {
        hasil = hasil * geo;
    }
    return Math.pow(hasil, 1 / array.length)
}

// 5-ci sual

function evcluid([x1, y1], [x2, y2]) {
    const dx = Math.pow(x2 - x1, 2);
    const dy = Math.pow(y2 - y1, 2);
    return dx + dy;
}

// 6-ci sual


function pickone(array) {
    const randomIndex = random(0, array.length - 1);
    return array[randomIndex];
}



// 7-ci sual

function includes(array, num) {
    for (let a of array) {
        if (a === num) {
            return true;
        }
    }
    return false;
}



// 8-ci sual

function unique(array) {
    let copy = [];
    for (let b of array) {
        if (b != copy)
            copy.push(b);
    }
    return copy;
}


// 9-cu sual

function intersection(arr1, arr2) {
    let copyarr = [];
    for (let c of arr1) {
        for (let d of arr2) {
            if (c === d) {
                copyarr.push(c);
            }
        }
    }
    return copyarr;
}

//  10-cu sual

function flat2D(array) {
    let combin = [];
    for (let f = 0; f <= array.length - 1; f++) {

        for (let w = 0; w <= array.length - 1; w++) {
            combin.push(array[f][w]);
        }
    }
    return combin;
}


//  11-ci sual

function union(array1, array2) {
    let combination = [];
    for (let arg1 of array1) {
        combination.push(arg1);
    }
    for (let arg2 of array2) {
        combination.push(arg2);
    }

    return combination;
}

// 12-ci sual

function reverse(arr) {
    let reserv = [];

    for (let i = arr.length; i >= 0; i--) {
        reserv.push(arr[i]);
    }

    return reserv;
}

// 13-cü sual

function map(array = [], func) {
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        let result = func(array[i], i, array);
        arr.push(result);
    }

    return arr;
}

//  14-cü sual


function filter(array = [], func) {
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        let result = func(array[i], i, array)
        if (result === true) {
            arr.push(array[i]);
        }
    }
    return arr;
}


// 15-ci sual

function find(array = [], func) {
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        let result = func(array[i], i, array)
        if (result === true) {
            arr.push(array[i]);
            return arr;
        }

    }
}

// 16-cı sual

function some(array = [], func) {
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        let result = func(array[i], i, array)
        if (result === true) {
            return true;
        }

    }
    return false;
}

// 17-ci sual 

function every(array = [], func) {
    let arr = [];
    let say = 0;
    for (let i = 0; i < array.length; i++) {
        let result = func(array[i], i, array)
        if (result === true) {
            say++;
        }
        if (say === array.length) {
            return true;
        }
    }
    return false;
}


// 18ci sual 

function reduce(array = [], func) {
    let arr = [];
    let say = 0;
    for (let i = 0; i < array.length; i++) {
        let result = func(array[i], i, array)
        {
            say = say + array[i];
        }
    }
    return say;

}


// 19-cu sual

function generatePassword(passwordLength) {
    var res = '';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
        '0123456789abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i <= passwordLength - 1; i++) {
        var char = Math.floor(Math.random()
            * str.length + 1);

        res = res + str.charAt(char)
    }

    return res;
}





