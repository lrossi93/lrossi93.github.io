//DOM query selectors
const contacts = document.querySelector('#contacts');
const contactsMobile = document.querySelector('#contacts-mobile');
const contactsContent = document.querySelector('#contacts-content');

//flag for creating/dispatching winbox
var openContacts = false;

//winbox settings
var contactsSettings = {
	title: '/contacts',
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
	mount: contactsContent,
	onclose: function(){
		openContacts = false;
		contacts.classList.remove("active");
		contactsMobile.classList.remove("active");
	}
}

//winbox (initially null)
contactsBox = null;

//event listener
contacts.addEventListener('click', () => {
	if(!openContacts){
		//open window
		contactsBox = new WinBox(contactsSettings);
		openContacts = true;
		contacts.classList.add("active");
	}
	else{
		//dispatch
		contactsBox.close();
		openContacts = false;
		contacts.classList.remove("active");
	}
});



//MOBILE VERSION
//DOM query selectors


//event listener
contactsMobile.addEventListener('click', () => {
	if(!openContacts){
		//open window
		contactsBox = new WinBox(contactsSettings);
		openContacts = true;
		contactsMobile.classList.add("active");
	}
	else{
		//dispatch
		contactsBox.close();
		openContacts = false;
		contactsMobile.classList.remove("active");
	}
});