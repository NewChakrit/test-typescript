type Combinable = number | string;
type ConversionDscriptor = 'as-number' | 'as-text';

function combine(
	input1: Combinable,
	input2: Combinable,
	resultConvertion: ConversionDscriptor
) {
	let result;
	if (
		(typeof input1 === 'number' && typeof input2 === 'number') ||
		resultConvertion === 'as-number'
	) {
		result = +input1 + +input2;
	} else {
		result = input1.toString() + input2.toString();
	}

	// if (resultConvertion === 'as-number') {
	// 	return +result;
	// } else {
	// 	return result.toString();
	// }
}

const combineAges = combine(30, 26, 'as-number');
console.log(combineAges);

const combineStringAges = combine('30', '26', 'as-number');
console.log(combineStringAges);

const combineName = combine('Max', 'Anna', 'as-text');
console.log(combineName);
