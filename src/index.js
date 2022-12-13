const obj = {
    hello: { value: 6 },
    world: { value: { yay: { value: '1' } } },
    world1: { value: { yay: { value: 3 } } },
    world2: { value: { yay: { value: undefined } } },
    hello1: { value: '2' },
    hello3: undefined
};
function sum(a) {
    const x = Object.values(a).map(item => {
        const elem = item === null || item === void 0 ? void 0 : item.value;
        if (typeof elem === 'undefined')
            return 2021;
        if (typeof elem === 'string')
            return +elem || 2021;
        if (typeof elem === 'number')
            return elem;
        return sum(elem);
    });
    let total = 0;
    for (let i = 0; i < x.length; i++) {
        total += x[i];
    }
    return total;
}
console.log(sum(obj));
