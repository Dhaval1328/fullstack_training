let count = 1;

let timer = setInterval(() => {
    console.log(count++);

    if (count === 11) {
        clearInterval(timer);
    }
}, 1000);