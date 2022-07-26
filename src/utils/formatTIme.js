function leadingZero(i) {
	return i < 10 ? "0" + i : i;
}

function addDays(date, days) {
	let result = new Date(date);
	result.setDate(result.getDate() + days);
	return result;
}

function formatDate(i) {
	let date = new Date();
	const newDay = addDays(date, i);

	return (
		leadingZero(newDay.getDate()) +
		"." +
		leadingZero(newDay.getMonth() + 1) +
		"." +
		leadingZero(newDay.getFullYear())
	);
}

export default formatDate;
