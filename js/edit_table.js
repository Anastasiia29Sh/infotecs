// при нажатии на кнопку редактирования появляется форма
	function edit(){
		let id_row = this.id.split('edit_id_').pop();
		document.getElementById('edit_form').style.display='block';
		document.getElementById('firstName').value = document.getElementById(id_row).children[0].innerText;
		document.getElementById('lastName').value = document.getElementById(id_row).children[1].innerText;
		document.getElementById('about_text').value = document.getElementById(id_row).children[2].innerText;
		document.getElementById('eyeColor').value = document.getElementById(id_row).children[3].innerText;

		document.getElementById('save').setAttribute('name', 'save_'+id_row);
		document.getElementById('cancel').setAttribute('name', 'cancel_'+id_row);
	}


	var start = new Array();
	var start_firstName = " ";
	var start_lastName = " ";
	var start_about_text = " ";
	var start_eyeColor = " ";
		// при нажатии на кнопку "сохранить" данные обновляются
		document.getElementById('save').addEventListener('click', function(){
			var id_row = this.name.split('save_').pop(); 

			// запоминаем данные до их изменения
			start_firstName = document.getElementById(id_row).children[0].innerText;
			start_lastName = document.getElementById(id_row).children[1].innerText;
			start_about_text = document.getElementById(id_row).children[2].innerText;
			start_eyeColor = document.getElementById(id_row).children[3].children[1].innerText;
			if(start.length!=0){
				let s = 0;
				for(let i = 0; i < start.length; i++){
					if(start[i][0]==id_row){
						start[i][1] = start_firstName;
						start[i][2] = start_lastName;
						start[i][3] = start_about_text;
						start[i][4] = start_eyeColor;
						s++;
					}
				}
				if(s==0) start.push([id_row, start_firstName, start_lastName, start_about_text, start_eyeColor]);
			}else start.push([id_row, start_firstName, start_lastName, start_about_text, start_eyeColor]);
			

			document.getElementById(id_row).children[0].innerText = document.getElementById('firstName').value;
			document.getElementById(id_row).children[1].innerText = document.getElementById('lastName').value;
			document.getElementById(id_row).children[2].innerText = document.getElementById('about_text').value;
			document.getElementById(id_row).children[3].children[0].style.background = document.getElementById('eyeColor').value;
			document.getElementById(id_row).children[3].children[1].innerText = document.getElementById('eyeColor').value;


			data = JSON.parse(data);
			for(let el=0; el<data.length; el++){
				if(data[el].id==id_row){
					data[el].name.firstName = document.getElementById('firstName').value;
					data[el].name.lastName = document.getElementById('lastName').value;
					data[el].about = document.getElementById('about_text').value;
					data[el].eyeColor = document.getElementById('eyeColor').value;
				}
			}
			table(JSON.stringify(data), num_str);
		});

		// при нажатии на кнопку "отменить" 
		document.getElementById('cancel').addEventListener('click', function(){
			let id_row = this.name.split('cancel_').pop(); 

			for(let i = 0; i < start.length; i++){
				if(start[i][0]==id_row){
					document.getElementById('firstName').value = start[i][1];
					document.getElementById('lastName').value = start[i][2];
					document.getElementById('about_text').value = start[i][3];
					document.getElementById('eyeColor').value = start[i][4];

					data = JSON.parse(data);
					for(let el=0; el<data.length; el++){
						if(data[el].id==id_row){
							data[el].name.firstName = start[i][1];
							data[el].name.lastName = start[i][2];
							data[el].about = start[i][3];
							data[el].eyeColor = start[i][4];
						}
					}
					table(JSON.stringify(data), num_str);

					start.splice(i, 1);
				}
			}
		});

		// при нажатии на "X", форма закрывается
		document.getElementById('close').addEventListener('click', function(){
			document.getElementById('edit_form').style.display='none';
		});