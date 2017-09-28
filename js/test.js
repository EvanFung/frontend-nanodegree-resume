/*
This is empty on purpose! Your code to build the resume will go here.
 */
//  var awesomeThoughts = "I am evan and I am AWESOME!";
//  console.log(awesomeThoughts);

//  var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
// $('#main').append(funThoughts);

// var formattedName = HTMLheaderName.replace("%data%","Evan");
// var formattedRole = HTMLheaderRole.replace("%data%","Web Developer");
// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);

// var str = "audacity";
// var udacity = capitalizeFirstLetter(str.slice(1));
// console.log(udacity);

// function capitalizeFirstLetter(str) {
// 	return str.charAt(0).toUpperCase() + str.slice(1);
// }

// var name = "AlbERt EINstEiN";

// function nameChanger(oldName) {
//     var finalName = oldName;
//     // Your code goes here!
//     //Cameron PITTMAN
//     var arr = name.split(" ",2);
//     var firstName = arr[0];
//     var surName = arr[1];
//     firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
//     surName = surName.toUpperCase();
    
//     arr[0] = firstName;
//     arr[1] = surName;
//     finalName = arr.join(" ");
//     return finalName;
// };

// console.log(nameChanger(name));


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

//answer - control flow 1

// var formattedName = HTMLheaderName.replace("%data%",bio.name);
// $("#header").append(formattedName);
// if(bio.skills.length > 0) {
// 	$("#header").append(HTMLskillsStart);
// 	bio.skills.forEach(function(skill) {
// 	$("#skills").append(HTMLskills.replace("%data%",skill));	
// 	});
// }


//answer - control flow 2
// for(job in work.jobs) {
// 	$("#workExperience").append(HTMLworkStart);
// 	var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
// 	var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
// 	var formattedEmployerTitle = formattedEmployer + formattedTitle;
// 	$(".work-entry:last").append(formattedEmployerTitle);
// }


//answer - function 
function displayWork() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		var formattedDate = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedDate);
		$(".work-entry:last").append(formattedDescription);
	}
}

// displayWork();

// function locationizer(work_obj) {
// 	var locations = [];

// 	for(work of work_obj.jobs) {
// 		locations.push(work.location);
// 	}

// 	return locations;
// }


// function inName(name) {
// 	name = name.trim().split(" ");
// 	console.log(name);
// 	name[1] = name[1].toUpperCase();
// 	name[0] = name[0].slice(0,1).toUpperCase() +
// 	name[0].slice(1).toLowerCase();
// 	return name[0] + " " + name[1];
// }

// var name = inName("Evan Fung");
// console.log(name);
// $("#main").append(internationalizeButton);