// Функции

// 1 (Estimated time:30min     Actual time:15 min)
function max(val1, val2) {
    return val1 > val2 ? val1: val2;
}
console.log(max(1, 2));

// 2 (Estimated time:70min     Actual time:90 min)
function mathMin(...values) {
    return values.reduce((prev, current) => prev < current ? prev: current);
}
console.log(mathMin(1, -2, 3, -94, 5));

// 3 (Estimated time: 80min     Actual time:90 min)

const users = [
    {
        firstname: 'Ann',
        lastname: 'Smitt',
        age: 21,
    },
    {
        firstname: 'Bill',
        lastname: 'Smitt',
        age: 2,
    },
    {
        firstname: 'Hon',
        lastname: 'Smitt',
        age: 11,
    },
    {
        firstname: 'Stue',
        lastname: 'Smitt',
        age: 18,
    },
    {
        firstname: 'Bob',
        lastname: 'Smitt',
        age: 20,
    },
    {
        firstname: 'Scot',
        lastname: 'Smitt',
        age: 33,
    },
    {
        firstname: 'Liza',
        lastname: 'Smitt',
        age: 44,
    },
    {
        firstname: 'Mary',
        lastname: 'Smitt',
        age: 55,
    },
    {
        firstname: 'Sonya',
        lastname: 'Smitt',
        age: 66,
    },
    {
        firstname: 'Garold',
        lastname: 'Smitt',
        age: 77,
    },
];

function usersSort(array) {
    const filtereble = array.filter((arr) => arr.age < 18);
    array.forEach((obj) => {
        obj["fullName"] = obj.firstname + ' ' + obj.lastname;
    });
    const modifiedArray = array;
    const fullNameArray = modifiedArray.map(obj => ({ fullName: obj.fullName }));
    console.log(filtereble);
    console.log(modifiedArray);
    console.log(fullNameArray);
}
usersSort(users);

// 4 (Estimated time:60min     Actual time:110 min)

const shiftEmulationArray = ["One", "Two", "Three"];
function shiftEmulation(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++ ) {
        if (i === 0) continue;
        newArr[newArr.length] = arr[i];
    }
    console.log(newArr);
    return newArr;
}
shiftEmulation(shiftEmulationArray);

// 5 (Estimated time:40min     Actual time:40 min)

const pushEmulationArray = ["One", "Two", "Three"];

function pushEmulation(arr, ...values) {
    for (let i = 0; i < values.length; i++ ) {
        arr[arr.length] = values[i];
    }
    console.log(arr);
    return arr;
}
pushEmulation(pushEmulationArray, 'Fourth', 'Fifth', 'Six');

// 6 (Estimated time:90min     Actual time:230 min)

const assignEmulationObject = { firstname: 'Tom', age: 10 };
const assignEmulationObject1 = { firstname: 'Emi', age: 44 };
const assignEmulationObject2 = { firstname: 'John', code: 123231, pass: 3123123, age: 12 };
const assignEmulationObject3 = { lastname: 'Doe' };

function assignEmulation(targetObj, ...values) {
    values.forEach((obj) => {
        Object.keys(obj).forEach((key) => {
            targetObj[key] = obj[key];
        });
    });
    console.log(targetObj);
    return targetObj;
}

assignEmulation(assignEmulationObject, assignEmulationObject1, assignEmulationObject2, assignEmulationObject3);

// 7 (Estimated time:40min     Actual time:30 min)

function setComment(date, message, author) {
    if(!date || !message) {
        alert('Данные переданы некорректно');
        return;
    }
    if (!author) {
        author = 'Anonymous';
    }
    date = new Date(date).toLocaleDateString().split('/').join('-');
    console.log(`${author}, ${date}\n${message}`);
}

setComment('2016-11-02', 'Everything is ok', 'John');


// Замыкания

// 1 (Estimated time: 120min     Actual time:310 min)

function checkTimer() {
    function createTimer() {
        const start = performance.now();
        return function() {
            const end = performance.now();
            return end - start;
        }
    }
    for(let i = 0; i <= 10000000; i++) {
        i++;
    }
    var timer = createTimer();
    alert(timer());
}
checkTimer();

// 2 (Estimated time: 150min     Actual time:360 min)

function createAdderFunc() {

    function createAdder(value) {
        const firstValue = value;
        return function(secondValue) {
            return firstValue + secondValue;
        }
    }

    const hello = createAdder('Hello, ');
    alert( hello('John') );
    alert( hello('Harry') );
    var plus = createAdder(5);
    alert( plus(1) );
    alert( plus(5) );
}

createAdderFunc();