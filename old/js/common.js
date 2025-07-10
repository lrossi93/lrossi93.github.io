//open navigation bar (mobile view)
var isNavClosed = true;
function openNav() {
	if(isNavClosed)
		isNavClosed = false;
	document.getElementById("curtain-menu").style.height = "100%";
}

//close navigation bar (mobile view)
function closeNav() {
	if(!isNavClosed)
		isNavClosed = true;
	document.getElementById("curtain-menu").style.height = "0%";
}
/*
var codeNav = document.getElementById("code-mobile");
var musicNav = document.getElementById("music-mobile");
var englishNav = document.getElementById("english-mobile");
var aboutNav = document.getElementById("about-mobile");
var contactsNav = document.getElementById("contacts-mobile");
var creditsNav = document.getElementById("credits-mobile");
*/

//make cursor blink
function blinker() {
	$('.blinking').fadeOut(500);
	$('.blinking').fadeIn(500);
}
blinker();
setInterval(blinker, 1000);

//typing effect
var iTw, jTw;
var strings = [
	'god save the beer', 
	'the footer contains links to my social pages', 
	'my favourite videogame is chrono trigger', 
	'i have three beautiful dogs',
	'bagpipes dislikers are not allowed on this website',
	'hi! my name is lorenzo rossi',
	'welcome to my website!',
	'i like programming',
	'my grandmother\'s pumpkin tortelli are the best',
	'i am lazy enough to spend days automatizing quick manual computer tasks',
	'i like music',
	'i like playing the piano',
	'i like playing the great highland bagpipe',
	'i like metal music',
	'i like orchestral music',
	'my favourite music notation software is musescore',
	'cubase is the daw i use',
	'this website was proudly coded without any frameworks',
	'climate change is a real issue',
	'a functional brain is more elegant than a fancy dress',
	'the cool web window manager i used in this website is called winbox.js',
	'if you are a musician, go practice',
	'my favourite superhero is spiderman',
	'my favourite superpower is green lantern\'s',
	'not choosing is a choice',
//	'as a master procrastinator, i will tell you how to quit procrastinating... tomorrow',
	'turtoises are not really the most brilliant animals on earth',
	'sometimes, i go play the bagpipe in the middle of the countryside',
	'if you haven\'t read kenshiro, we cannot be friends',
	'i am a lucky person',
	'the world is full of weird people - i am no exception',
	'try linux'
];

var tSpeed = 75;

var terminalText = document.getElementById("terminal-text");
var lrossi = document.getElementById("lrossi");
lrossi.addEventListener('click', eraseAndWrite);
function eraseAndWrite(){
	terminalText.innerHTML = "";
    jTw = Math.floor(Math.random() * strings.length);
    console.log(jTw);
    iTw = 0;
    setTimeout(typeWriter, tSpeed);
}

function typeWriter() {	
	if(iTw < strings[jTw].length) {
    	terminalText.innerHTML += strings[jTw].charAt(iTw);
    	iTw++;
    	setTimeout(typeWriter, tSpeed);
  	}
}