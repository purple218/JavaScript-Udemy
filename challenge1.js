const markWeight = 95
const markHeight = 1.88
const johnWeight = 85
const johnHeight = 1.76

const markBMI = markWeight / (markHeight ** 2);
const johnBMI = johnWeight / (johnHeight * johnHeight);

const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI)
