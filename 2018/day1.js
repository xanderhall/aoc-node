// advent of code 2018 day 1
// written on mobile, excuse the spacing

const fs = require('fs');

const parseFile = (err, data) => {
	if (err) throw err;
	
	const frequencies =
		data.split("\r\n")
		.map(val => parseInt(val));
		
		const sum = frequencies.reduce((cur, val) => cur + val);
	
	const seenValues = [];
	let freq = frequencies[0], i = 1, len = frequencies.length;
	while (!seenValues.includes(freq)) {
		seenValues.push(freq);
		freq += frequencies[i % len];
 i++;
	}
	
	console.log(`Day 1:\n Solution 1: ${sum}\n Solution 2: ${freq}`);
}

fs.readFile('./input_files/day1.txt', 'utf8', parseFile);