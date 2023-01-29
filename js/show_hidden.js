// показ/скрытие колонок
function show_hidden(){
	let id_but = this.id;
	let num_but = id_but.split('but_show').pop();
	if(!this.classList.contains('active')){
   	document.getElementById(id_but).setAttribute('class', 'but_hidden');
		for(let el of document.getElementById('tbody').children){
			// el.children[num_but-1].style.visibility = 'hidden';
			el.children[num_but-1].style.opacity = '0';
			el.children[num_but-1].style.border = '0px solid black';
		}
		this.classList.add('active')
	}else{
		document.getElementById(id_but).setAttribute('class', 'but_show');
		for(let el of document.getElementById('tbody').children){
			el.children[num_but-1].style.opacity = '1';
			el.children[num_but-1].style.border = '1px solid black';
			// el.children[num_but-1].style.visibility = 'visible';
		}
		this.classList.remove('active')
	}
}