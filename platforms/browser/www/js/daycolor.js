function ReadJson(num) {
	
	//Limpando as divs
	$( ".days" ).empty();
	$( ".day" ).empty();
	$( ".description" ).empty();

	//Carregando o JSON
	$.getJSON('days.json', function(data) {
		
		// Verificando se temos que mostrar uma cor específica ou a cor principal do dia
		if (num == undefined) {
			num = 0;
		}

		// Recupera qual o dia da semana
		var numDay = new Date().getDay();
	
		$(".days").append("<h2>"+(data.days[numDay].day)+"</h2><br/>");		

		for (var i = 0; i <= data.days[numDay].colors.length - 1; i++) {
			
			var link = '<a href="#" onclick="'+(data.days[numDay].colors[i].onclick)+'">'; 
			link += '<div class="'+(data.days[numDay].colors[i].class)+'" '; 			

			if (num == i) {
				link += 'style="'+(data.days[numDay].colors[i].style)+' border:solid 2px #000; left:20%;">';
			} else {
				link += 'style="'+(data.days[numDay].colors[i].style)+' left:22%;">';
			}
			
			link += "</div></a>";

			$(".day").append(link);

		}
		
		$(".description").append("<h1>"+(data.days[numDay].colors[num].text)+"</h1>");
		$(".description").append("<p>"+(data.days[numDay].colors[num].description)+"</p>");
	});
}