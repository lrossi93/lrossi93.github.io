//DOM query selectors
const about = document.querySelector('#about');
const aboutMobile = document.querySelector('#about-mobile');
const aboutContent = document.querySelector('#about-content');

//flag for creating/dispatching winbox
var openAbout = false;

//winbox settings
var aboutSettings = {
	title: '/about',
	background: '#1a1a1a',
	class: 'modern',
	x: "center",
	y: "center",
	max: true,
	border: 4,
	top: 55,
	left: 0,
	right: 0,
	bottom: "90px",
	mount: aboutContent,
	onclose: function(){
		openAbout = false;
		about.classList.remove("active");
		aboutMobile.classList.remove("active");
	}
}

//winbox (initially null)
aboutBox = null;

//event listener
about.addEventListener('click', () => {
	if(!openAbout){
		//open window
		aboutBox = new WinBox(aboutSettings);
		openAbout = true;
		about.classList.add("active");
	}
	else{
		//dispatch
		aboutBox.close();
		openAbout = false;
		about.classList.remove("active");
	}
});



//MOBILE VERSION

//event listener
aboutMobile.addEventListener('click', () => {
	if(!openAbout){
		//open window
		aboutBox = new WinBox(aboutSettings);
		openAbout = true;
		aboutMobile.classList.add("active");
	}
	else{
		//dispatch
		aboutBox.close();
		openAbout = false;
		aboutMobile.classList.remove("active");
	}
});