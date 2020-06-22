const calculateSupply = function calculateSupply(age, dayAmount) {
    const maxAge = 88;
    let totalNeeded = (dayAmount * 365) * (maxAge - age);
    console.log('You will need ' + totalNeeded + ' to last you until the ripe old age of ' + maxAge + '.');

}
calculateSupply(70, 2)