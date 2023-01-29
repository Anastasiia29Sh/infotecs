// заполнение таблицы данными
	function table_data(data, num_str){
		window.num_str = num_str;
		// удаление старых строк
		var node = document.getElementById("tbody");
		while (node.hasChildNodes()) {
			node.removeChild(node.lastChild);
		}

		// выделение текущей страницы
		for(let j=0; j < document.getElementsByClassName('str').length; j++){
			document.getElementsByClassName('str')[j].style.fontWeight = 'normal';
		}
		document.getElementById("str"+num_str).style.fontWeight = 'bold';


		let s = 1;
		for(let i=(num_str-1)*10; s <=10; i++){
			let t_row = document.createElement('tr');
			t_row.setAttribute('id', data[i].id);
			let td1 = document.createElement('td');
			let td2 = document.createElement('td'); 
			let td3 = document.createElement('td');
			td3.setAttribute('class', 'part_about');

			
			// открытие/сокрытие колонки about
			td3.addEventListener('click', function(){
				if(!this.classList.contains('active')){
					if(this.style.opacity==='0') {
						td3.setAttribute('class', 'part_about');
					}
					else td3.setAttribute('class', 'all_about');
					this.classList.add('active')
				}else{
					td3.setAttribute('class', 'part_about');
					this.classList.remove('active')
				}
			});


			let td4 = document.createElement('td');

			let div = document.createElement('div');
			div.style.background = data[i].eyeColor;
			div.setAttribute('class', 'eyeColor');
			let p = document.createElement('span');
			p.innerText = "  " + data[i].eyeColor;

			td1.innerText = data[i].name.firstName;
			td2.innerText = data[i].name.lastName;
			td3.innerText = data[i].about;

			// строка для кнопки редактирования
			let td5 = document.createElement('td');
			td5.setAttribute('class', 'edit_table');
			let a_edit = document.createElement('input');
			a_edit.value=" ";
			a_edit.type = 'submit';
			td5.setAttribute('id', 'edit_id_'+data[i].id);
			td5.addEventListener('click', edit);
			a_edit.setAttribute('class', 'a_edit');
			

			document.getElementById('tbody').appendChild(t_row);
			t_row.appendChild(td1);
			t_row.appendChild(td2);
			t_row.appendChild(td3);
			t_row.appendChild(td4);
			t_row.appendChild(td5);

			td4.appendChild(div);
			td4.appendChild(p);

			td5.appendChild(a_edit);

			s++;
		}
	}

// переход по страницам
	function table(data, str){
		window.data = data;
		// удаление 
		var div = document.getElementById("pages");
		while (div.hasChildNodes()) {
			div.removeChild(div.lastChild);
		}

		for(let i=1; i<=Math.ceil(JSON.parse(data).length/10); i++){
			let a = document.createElement('a');
			a.setAttribute('href', "#str" + i);
			a.setAttribute('id', "str" + i);
			a.setAttribute('class', "str");
			a.setAttribute('onclick', "document.getElementById('edit_form').style.display='none'; table_data("+ data + ","+ i+")");
			a.innerText=i;
			div.appendChild(a);
		}

		// заполнение таблицы данными
		table_data(JSON.parse(data), str);
	}





	