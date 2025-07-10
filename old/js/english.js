/* WINBOX SETTINGS*/

//DOM query selectors
const english = document.querySelector('#english');
const englishMobile = document.querySelector('#english-mobile');
const englishContent = document.querySelector('#english-content');

//flag for creating/dispatching winbox
var openEnglish = false;

//winbox settings
var englishSettings = {
	title: '/english',
	background: '#1a1a1a',
	max: true,
	class: 'modern',
	x: "center",
	y: "center",
	border: 4,
	top: 55,
	left: 0,
	right: 0,
	bottom: "90px",
	mount: englishContent,
	onclose: function(){
		openEnglish = false;
		english.classList.remove("active");
		englishMobile.classList.remove("active");
	}
}

//winbox (initially null)
englishBox = null;

//event listener
english.addEventListener('click', () => {
	if(!openEnglish){
		//open window
		englishBox = new WinBox(englishSettings);
		openEnglish = true;
		english.classList.add("active");
	}
	else{
		//dispatch
		englishBox.close();
		openEnglish = false;
		english.classList.remove("active");
	}
});



//MOBILE VERSION

//event listener
englishMobile.addEventListener('click', () => {
	if(!openEnglish){
		//open window
		englishBox = new WinBox(englishSettings);
		openEnglish = true;
		englishMobile.classList.add("active");
	}
	else{
		//dispatch
		englishBox.close();
		openEnglish = false;
		englishMobile.classList.remove("active");
	}
});