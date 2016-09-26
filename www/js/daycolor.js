function ReadJson() {
	$.getJSON('days.json', function(data) {
		alert(data.days[0].day + data.days[1].day + data.days[2].day + data.days[3].day);
	});
}