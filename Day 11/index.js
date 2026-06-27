function createCounter() {
    let counter = 0;
    
    return function() {
        counter++;
        console.log(counter);
        return counter;
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

counter1(); // 1
counter1(); // 2
counter2(); // 1 (starts from 0 independently)
counter1(); // 3
counter2(); // 2

// Output sequence: 1, 2, 1, 3, 2