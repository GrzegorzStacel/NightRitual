function leadingZero(i) {
	return i < 10 ? "0" + i : i;
}

function getMonday(actualDate) {
	const increasingDate = new Date();

	if (actualDate.getDay() === 0) {
		increasingDate.setDate(actualDate.getDate() - 6);
	} else if (actualDate.getDay() > 1 && actualDate.getDay() < 7) {
		increasingDate.setDate(actualDate.getDate() - actualDate.getDay() + 1);
	} else {
		console.log("Something went wrong in formatTime.js - setMonday()");
	}

	return increasingDate;
}

function formatDate(date, i) {
	let newDate = date;

	if (i != 0) {
		newDate.setDate(date.getDate() + 1);
	}

	return (
		leadingZero(newDate.getDate()) +
		"." +
		leadingZero(newDate.getMonth() + 1) +
		"." +
		leadingZero(newDate.getFullYear())
	);
}

export { formatDate, getMonday };
