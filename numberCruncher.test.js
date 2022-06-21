function isPrime(n) {
    try{
        return factorsOf(n).length === 2;
    } catch(error) {
        return false;
    }
}