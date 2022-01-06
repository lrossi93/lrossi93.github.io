//DOM query selectors
const code = document.querySelector('#code');
const codeMobile = document.querySelector('#code-mobile');
const codeContent = document.querySelector('#code-content');

//flag for creating/dispatching winbox
var openCode = false;

//winbox settings
var codeSettings = {
	title: '/code',
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
	mount: codeContent,
	onclose: function(){
		openCode = false;
		code.classList.remove("active");
		codeMobile.classList.remove("active");
	}
}

//winbox (initially null)
codeBox = null;

//event listener
code.addEventListener('click', () => {
	if(!openCode){
		//open window
		codeBox = new WinBox(codeSettings);
		openCode = true;
		code.classList.add("active");
	}
	else{
		//dispatch
		codeBox.close();
		openCode = false;
		code.classList.remove("active");
	}
});

//MOBILE VERSION

//event listener
codeMobile.addEventListener('click', () => {
	if(!openCode){
		//open window
		codeBox = new WinBox(codeSettings);
		openCode = true;
		codeMobile.classList.add("active");
	}
	else{
		//dispatch
		codeBox.close();
		openCode = false;
		codeMobile.classList.remove("active");
	}
});
