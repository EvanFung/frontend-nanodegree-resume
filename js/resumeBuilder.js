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
        "HTML", "CSS", "JavaScript", "Java", "Node.js", "Driving"
    ],
    "bioPic": "images/fry.jpg"
};

bio.display = function() {
    var topContacts = $('#topContacts');
    var header = $("#header");
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedWelMes = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  	header.prepend(formattedName, formattedRole);
    for (var property in bio.contacts) {
        if (bio.contacts.hasOwnProperty(property)) {
            topContacts.append(
            	HTMLcontactGeneric
            					.replace("%contact%", property)
            					.replace("%data%", bio.contacts[property])
            	);
        }
    }
    header.append(formattedPic,formattedWelMes,HTMLskillsStart);
    bio.skills.forEach(function(skill) {
		$("#skills").append(HTMLskills.replace("%data%",skill));	
	});
}
bio.display();
//education object
var education = {
    "schools": [{
            "name": "The Hong Kong Institute of Vocational Education",
            "location": "Hong Kong",
            "degree": "Software engineering",
            "majors": [
                "Software engineering",
                "English"
            ],
            "dates": "2015 - 2017",
            "url": "https://github.com/EvanFung/frontend-nanodegree-resume"
        },
        {
            "name": "The University of Hong Kong",
            "location": "Hong Kong",
            "degree": "Computer Science",
            "majors": [
                "Computer Science",
                "English"
            ],
            "dates": "2017 - 2019",
            "url": "https://github.com/EvanFung/frontend-nanodegree-resume"
        }
    ],
    "onlineCourses": [{
        "title": "Udacity Front End Web Deloper Nanodegree",
        "school": "Udacity",
        "dates": "Future",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }]
    // display function added later since functions shouldn't be part of pure JSON
};

education.display = function() {
	for(school of education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%",school.name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",school.degree);
		var formattedDate = HTMLschoolDates.replace("%data%",school.dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%",school.location);
		var majorStr = "";
		for(major of school.majors) {
			majorStr += HTMLschoolMajor.replace("%data%",major);
		}
		$(".education-entry:last").append(formattedName);
		$(".education-entry:last").append(formattedDegree);
		$(".education-entry:last").append(formattedDate);
		$(".education-entry:last").append(formattedLocation);
		$(".education-entry:last").append(majorStr);
	}

	$("#education").append(HTMLonlineClasses);
	for(course of education.onlineCourses) {
		$("#education").append(HTMLschoolStart);

		var formattedTitle = HTMLonlineTitle.replace("%data%",course.title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",course.school);
		var formattedDates = HTMLonlineDates.replace("%data%",course.dates);
		var formattedURL = HTMLonlineURL.replace("%data%",course.url);

		$(".education-entry:last").append(formattedTitle);
		$(".education-entry:last").append(formattedOnlineSchool);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedURL);

	}	
}
education.display();
//work object
var work = {
    "jobs": [{
            "employer": "Cenique information company",
            "title": "Software engineer",
            "location": "Hong Kong Science Park",
            "dates": "In progress",
            "description": "Develops information systems by designing, developing, and installing software solutions."
        },
        {
            "employer": "Chubb Insurance (Hong Kong)",
            "title": "Software engineer",
            "location": "33/F., Windsor House, 311 Gloucester Road, Causeway Bay, Hong Kong, Hong Kong",
            "dates": "2016-2017",
            "description": "Develops information systems by designing, developing, and installing software solutions."
        }
    ]
    // display function added later since functions shouldn't be part of pure JSON
};

work.display = function () {
	var workExperience = $("#workExperience");
	for(job of work.jobs) {
		workExperience.append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",job.employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",job.title);
		var formattedLocation = HTMLworkLocation.replace("%data%",job.location);
		var formattedDescription = HTMLworkDescription.replace("%data%",job.description);
		var formattedDate = HTMLworkDates.replace("%data%",job.dates);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedDate);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);
	}
}
work.display();
//projects object
var projects = {
    "projects": [{
            "title": "This is just a dummy",
            "dates": "10.09.2017 - now",
            "description": "too lazy to write something here",
            "images": ["images/197x148.gif", "images/197x148.gif", "images/197x148.gif"]
        },
        {
            "title": "Code Ninja rocking around xD",
            "dates": "21.07.2015",
            "description": "from androidify.com",
            "images": ["images/197x148.gif"]
        },
        {
            "title": "Freelance Matching System",
            "dates": "30.05.2017",
            "description": "An easier way to find a job or find a freelancer",
            "images": ["images/197x148.gif"]
        }
    ]
    // display function added later since functions shouldn't be part of pure JSON
};

projects.display = function() {
    for (project of projects.projects) {

        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedDate = HTMLprojectDates.replace("%data%", project.dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);

        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDate);
        $(".project-entry:last").append(formattedDescription);

        for (image of project.images) {
            var formattedImage = HTMLprojectImage.replace("%data%", image);
            $(".project-entry:last").append(formattedImage);
        }
    }
}

projects.display();

$('#mapDiv').append(googleMap);

function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() +
    name[0].slice(1).toLowerCase();
  return name[0] + " " + name[1];
}