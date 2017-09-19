/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bios = {
	"name": "Evan Fung",
	"role": "Web Developer",
	"contacts": {
		"mobile": "1234567",
		"email": "evanfung@gmail.com",
		"github": "evanfung",
		"twitter": "@evanfung",
		"location": "Hong Kong"
	},
	"welcomeMessage": "Hello World, welcome to my resume page!",
	"skills": [
	"HTML","CSS","JavaScript","Java","Awesomeness","Driving"
	],
	"bioPic": "images/fry.jpg"
};
var formattedName = HTMLheaderName.replace("%data%",bios.name);
var formattedRole = HTMLheaderRole.replace("%data%",bios.role);
var formattedPic = HTMLbioPic.replace("%data%",bios.bioPic);
var formattedWelMes = HTMLwelcomeMsg.replace("%data%",bios.welcomeMessage);

$("#header").append(formattedName);
$("#header").append(formattedRole);
for(var property in bios.contacts) {
	if(bios.contacts.hasOwnProperty(property)) {
		$("#header").append($("#topContacts").append(HTMLcontactGeneric.replace("%contact%",property).replace("%data%",bios.contacts[property])));
	}
}
$("#header").append(formattedPic);
$("#header").append(formattedWelMes);
$("#header").append(HTMLskillsStart);

bios.skills.forEach(function(skill) {
	$("#skills").append(HTMLskills.replace("%data%",skill));	
});

//work object
var work = {};
work.position = 'Hong Kong Science Park';
work.employer = 'Cenique';
work.years = 0;
work.city = 'Hong Kong';

$("#main").append(work.position);
$("#main").append(work.employer);
$("#main").append(work.years);
$("#main").append(work.city);

//education
var education = {};
education["name"] = "IVE";
education["years"] = 2;
education["city"] = "Hong Kong";

$("#main").append(education["name"]);
$("#main").append(education["years"]);
$("#main").append(education["city"]);