/*
This is empty on purpose! Your code to build the resume will go here.
 */

 //bio object
var bio = {
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


//education object
var education = {
	"schools": [
		{
			"name": "IVE",
			"location": "Hong Kong",
			"degree": "software engineering",
			"majors": [
				"software engineering",
				"english"
			],
			"dates":"2015 - 2017",
			"url": "https://github.com/EvanFung/frontend-nanodegree-resume"
		},
		{
			"name": "HKU",
			"location": "Hong Kong",
			"degree": "computer science",
			"majors": [
				"computer science",
				"english"
			],
			"dates":"2017 - 2019",
			"url": "https://github.com/EvanFung/frontend-nanodegree-resume"
		}
	],
	"onlineCourses": [
		{
			"title": "udacity front end web developer nanodegree",
			"school": "Udacity",
			"dates": "2017 - 2018",
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	]
	// display function added later since functions shouldn't be part of pure JSON
};


//work object
var work = {
	"jobs": [
		{
			"employer": "cenique",
			"title": "software engineer",
			"location": "Hong Kong Science Park",
			"dates": "in progress",
			"description": "Programmer"
		}
	]
	// display function added later since functions shouldn't be part of pure JSON
};


//projects object
var projects = {
	"projects": [
		{
			"title": "This is just a dummy",
			"dates" : "10.09.2017 - now",
			"description" : "too lazy to write something here",
			"images" : ["images/197x148.gif", "images/197x148.gif", "images/197x148.gif"]
		},
		{
            "title" : "Code Ninja rocking around xD",
            "dates" : "21.07.2015",
            "description" : "from androidify.com",
            "images" : ["images/197x148.gif"]			
		}
	]
	// display function added later since functions shouldn't be part of pure JSON
};