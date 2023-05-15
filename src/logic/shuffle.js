//This follows the Knuth algorithm for shuffling an array

function shuffle(arr) {
	let result = [],
		len = arr.length,
		i;

	while (len) {
		i = Math.floor(Math.random() * arr.length);

		if (i in arr) {
			result.push(arr[i]);
			delete arr[i];
			len--;
		}
	}

	return result;
}

export default shuffle;