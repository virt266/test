(function(){
	const openingBtm = document.querySelector(".sidebar__hamburger");
	const closeBtm = document.querySelector(".sidebar__close");
	const sidebar = document.querySelector(".sidebar");


	openingBtm.addEventListener("click", function() {
		sidebar.classList.add('sidebar--opened')
	});

	closeBtm.addEventListener("click", function() {
		sidebar.classList.remove('sidebar--opened')
	});
}())