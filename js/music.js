function showTab(index){
	var tabs = document.getElementsByClassName("tab");
	var icons = document.getElementsByClassName("tab-icon");
	var buttons = document.getElementsByClassName("tab-button");
	for(i=0; i<tabs.length; ++i){
		if(i == index){
			tabs.item(i).style.display="block";
			icons.item(i).style.opacity="100%";
		}
		else{
			tabs.item(i).style.display="none";
			icons.item(i).style.opacity="50%";
		}
	}
};

//show first tab when document loads
showTab(0);



/* WINBOX SETTINGS*/

//DOM query selectors
const music = document.querySelector('#music');
const musicMobile = document.querySelector('#music-mobile');
const musicContent = document.querySelector('#music-content');

//flag for creating/dispatching winbox
var openMusic = false;

//winbox settings
var musicSettings = {
	title: '/music',
	background: '#1a1a1a',
	class: 'modern',
	max: true,
	x: "center",
	y: "center",
	border: 4,
	top: 55,
	left: 0,
	right: 0,
	bottom: "90px",
	mount: musicContent,
	onclose: function(){
		openMusic = false;
		music.classList.remove("active");
		musicMobile.classList.remove("active");
	}
}

//winbox (initially null)
musicBox = null;

//event listener
music.addEventListener('click', () => {
	if(!openMusic){
		//open window
		musicBox = new WinBox(musicSettings);
		openMusic = true;
		music.classList.add("active");
	}
	else{
		//dispatch
		musicBox.close();
		openMusic = false;
		music.classList.remove("active");
	}
});



//MOBILE VERSION

//event listener
musicMobile.addEventListener('click', () => {
	if(!openMusic){
		//open window
		musicBox = new WinBox(musicSettings);
		openMusic = true;
		musicMobile.classList.add("active");
	}
	else{
		//dispatch
		musicBox.close();
		openMusic = false;
		musicMobile.classList.remove("active");
	}
});