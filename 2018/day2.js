// advent of code day 2

const fs = require("fs");

const parseFile = (err, data) => {
	if (err) throw err;
	const ids = data.split("\r\n");
	const letters = ids.map(str => str.split(''));
	const counts = letters.map(arr => arr.reduce((acc, val) => {acc[val] = (acc[val] || 0) + 1; return acc;}, {}));
	const checkSum = counts.filter(c => Object.values(c).includes(2)).length * counts.filter(c => Object.values(c).includes(3)).length;
	
	console.log(checkSum);
}

fs.readFile('./input_files/day2.txt', 'utf8', parseFile);