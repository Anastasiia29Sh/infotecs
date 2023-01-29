function sort(){
	let id_but = this.id;
	let num_but = id_but.split('but_sort').pop(); // индекс колонки
	if(!this.classList.contains('active')){
		sortTable(num_but-1, 'ascending');
		this.classList.add('active')
	}else{
		sortTable(num_but-1, 'descending');
		this.classList.remove('active')
	}
}


   function sortTable(n, direction) {
      var switching = true;
      var i = 0;
      while (switching) {
         switching = false;
			var rows = document.getElementById('tbody').children;
         // приходим по всем строкам
         for (i = 0; i < rows.length-1; i++) {
				var Switch = false;
         	// получаем два элемента для сравнения
				let el1 = rows[i].children[n];
				let el2 = rows[i + 1].children[n];
				// сортировка от A до Z
				if (direction == "ascending"){
					// проверяем нужно ли поменять местами две строки
					if (el1.innerHTML.toLowerCase() > el2.innerHTML.toLowerCase()){
						// меняем местами две строки, прерываем цикл и опять начинаем сначала проверять попарно все строки
						rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
						switching = true;
						break;
					}
				} 
				// сортировка от Z до A
				else if (direction == "descending") {
					if (el1.innerHTML.toLowerCase() < el2.innerHTML.toLowerCase()){
						rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
						switching = true;
						break;
					}
				}
			}
		}
	}