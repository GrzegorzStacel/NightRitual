function leadingZero(i) {
	return i < 10 ? "0" + i : i;
}

function addDays(days) {
	let result = new Date();
	console.log(days);
	return result;
}

function formatDate(i) {
	const newDay = addDays(i);

	return (
		leadingZero(newDay.getDate()) +
		"." +
		leadingZero(newDay.getMonth() + 1) +
		"." +
		leadingZero(newDay.getFullYear())
	);
}

export default formatDate;
