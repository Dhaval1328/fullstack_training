let count = 1;

let timer = setInterval(() => {
    console.log(count++);

    if (count === 11) {
        break;
    }
}, 1000);