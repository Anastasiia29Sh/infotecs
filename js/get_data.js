// получение данных из json файла
	function get_data(callback){
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.open("GET", "../data.json", true);
		xmlhttp.send();
		var myObj;
		xmlhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				myObj = JSON.parse(this.responseText);
				callback(JSON.stringify(myObj), 1);
			}
		};
	}