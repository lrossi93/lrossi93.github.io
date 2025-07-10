//DOM query selectors
const credits = document.querySelector('#credits');
const creditsMobile = document.querySelector('#credits-mobile');
const creditsContent = document.querySelector('#credits-content');

//flag for creating/dispatching winbox
var openCredits = false;

//winbox settings
var creditsSettings = {
	title: '/credits',
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
	mount: creditsContent,
	onclose: function(){
		openCredits = false;
		credits.classList.remove("active");
		creditsMobile.classList.remove("active");
	}
}

//winbox (initially null)
creditsBox = null;

//event listener
credits.addEventListener('click', () => {
	if(!openCredits){
		//open window
		creditsBox = new WinBox(creditsSettings);
		openCredits = true;
		credits.classList.add("active");
	}
	else{
		//dispatch
		creditsBox.close();
		openCredits = false;
		credits.classList.remove("active");
	}
});



//MOBILE VERSION

//event listener
creditsMobile.addEventListener('click', () => {
	if(!openCredits){
		//open window
		creditsBox = new WinBox(creditsSettings);
		openCredits = true;
		creditsMobile.classList.add("active");
	}
	else{
		//dispatch
		creditsBox.close();
		openCredits = false;
		creditsMobile.classList.remove("active");
	}
});
