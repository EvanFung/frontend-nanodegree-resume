/*
This is empty on purpose! Your code to build the resume will go here.
 */
//bio object
var bio = {
    "name": "Evan Fung",
    "role": "Web Developer",
    "contacts": {
        "mobile": "<a href='tel:99999999'>999-99999</a>",
        "email": "<a href='mailto:evanfungv@gmail.com'>evanfungv@gmail.com</a>",
        "github": "<a href='https://github.com/EvanFung' target='_blank'>EvanFung</a>",
        "twitter": "<a href='https://twitter.com/ho_wen' target='_blank'>@EvanFung</a>",
        "location": "<a href='#'>Hong Kong</a>"
    },
    "welcomeMessage": "Hello World, welcome to my resume page!",
    "skills": [
        "HTML", "CSS", "JavaScript", "Java", "Node.js", "Project Management"
    ],
    "bioPic": "images/fry.jpg"
};

bio.display = function() {
    var topContacts = $('#topContacts');
    var footerContacts = $('#footerContacts');
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
            footerContacts.append(            	
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

//education object
var education = {
    "schools": [{
            "name": "The Hong Kong Institute of Vocational Education",
            "location": "Hong Kong",
            "degree": "Software engineering",
            "majors": [
                "Software engineering"
            ],
            "dates": "2015 - 2017",
            "url": "https://github.com/EvanFung/frontend-nanodegree-resume"
        },
        {
            "name": "The University of Hong Kong",
            "location": "Pok Fu Lam, Hong Kong",
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

		$(".education-entry:last").append(formattedName,formattedDegree,formattedDate,formattedLocation,majorStr);
		$(".education-entry:last a").attr("href",school.url).attr("target","_blank");
	}

	$("#education").append(HTMLonlineClasses);

	for(course of education.onlineCourses) {
		$("#education").append(HTMLschoolStart);

		var formattedTitle = HTMLonlineTitle.replace("%data%",course.title).replace("#",course.url);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",course.school);
		var formattedDates = HTMLonlineDates.replace("%data%",course.dates);
		var formattedURL = HTMLonlineURL.replace("%data%",course.url).replace("#",course.url);

		var formattedTitleSchool = formattedTitle + formattedOnlineSchool;

		$(".education-entry:last").append(formattedTitleSchool,formattedDates,formattedURL);


	}	
}

//work object
var work = {
    "jobs": [{
            "employer": "Cenique information company",
            "title": "Software engineer",
            "location": "Hong Kong Science Park",
            "dates": "In progress",
            "description": "Develops information systems by designing, developing, and installing software solutions.",
            "url": "http://www.inreality.com/"
        },
        {
            "employer": "Chubb Insurance (Hong Kong)",
            "title": "Software engineer",
            "location": "33/F., Windsor House, 311 Gloucester Road, Causeway Bay, Hong Kong, Hong Kong",
            "dates": "2016-2017",
            "description": "Develops information systems by designing, developing, and installing software solutions.",
            "url": "https://www.chubb.com/"
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
		$(".work-entry:last").append(formattedEmployerTitle,formattedDate,formattedLocation,formattedDescription);
		$(".work-entry:last a").attr("href",job.url).attr("target","_blank");

	}
}

//projects object
var projects = {
    "projects": [{
            "title": "This is just a dummy",
            "dates": "10.09.2017 - now",
            "description": "too lazy to write something here",
            "url": "https://github.com/EvanFung/frontend-nanodegree-resume",
            "images": ["images/197x148.gif", "images/197x148.gif", "images/197x148.gif"]
        },
        {
            "title": "Code Ninja rocking around xD",
            "dates": "21.07.2015",
            "description": "from androidify.com",
            "url": "https://github.com/EvanFung/frontend-nanodegree-resume",
            "images": ["images/197x148.gif"]
        },
        {
            "title": "Freelance Matching System",
            "dates": "30.05.2017",
            "description": "An easier way to find a job or find a freelancer",
            "url": "https://github.com/EvanFung/Freelance-Matching-System-Client-Side",
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

        $(".project-entry:last").append(formattedTitle,formattedDate,formattedDescription);
        $(".project-entry:last a").attr("href",project.url).attr("target","_blank");

        for (image of project.images) {
            var formattedImage = HTMLprojectImage.replace("%data%", image);
            $(".project-entry:last").append(formattedImage);
        }
    }
}

bio.display();
education.display();
work.display();
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