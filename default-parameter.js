function add(n1, n2 = 0) {
    //n2 = n2 || 0;
    const sum = n1 + n2;
    return sum;
}
const result = add(9);
console.log(result);