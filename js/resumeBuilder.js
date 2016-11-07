/*
 This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name": "Anthony Proctor",
    "role": "Web Developer",
    "contacts": {
        "mobile": "262-994-2344",
        "email": "anthonyproctor@gmail.com",
        "github": "anthonyproctor",
        "twitter": "@anthony_proctor",
        "location": "Denver, CO"
    },
    "welcomeMessage": " Loren ipsum dolor sit amet etc etc etc.",
    "skills": [
        "awesomeness", "delivering things", "cryogenic sleep", "saving the world"
    ],
    "bioPic": "images/fry.jpg"
};

var work = {
    "jobs": [{
        "employer": "Finna Group",
        "location": "Denver, CO",
        "title": "Technical Rep",
        "dates": "Jan 2015 - Present",
        "description": " Loren ipsum dolor ...."
    }, {
        "employer": "Finna Group",
        "location": "Denver, CO",
        "title": "Technical Rep",
        "dates": "Jan 2015 - Present",
        "description": " Loren ipsum dolor ...."
    }]
};

var projects = {
    "projects": [{
        "title": "Sample Project 1",
        "dates": "2014",
        "description": "Loren ipsum ...",
        "images": [
            "images/197x148.gif", "images/197x148.gif"
        ]
    }, {
        "title": "Sample Project 1",
        "dates": "2014",
        "description": "Loren ipsum ...",
        "images": [
            "images/197x148.gif"
        ]
    }]
};

var education = {
    "schools": [{
        "name": "Colorado School of Mines",
        "location": "Golden, CO",
        "degree": "Bachelors",
        "majors": ["CS"],
        "dates": 2018,
        "url": "www.mines.edu"
    }, {
        "name": "Colorado School of Mines",
        "location": "Golden, CO",
        "degree": "Bachelors",
        "majors": ["CS"],
        "dates": 2018,
        "url": "www.mines.edu"
    }],
    "onlineCourses": [{
        "title": "JavaScript Crash Course",
        "school": "Udacity",
        "dates": 2016,
        "url": "www.udacity.com"
    }, {
        "title": "JavaScript Crash Course",
        "school": "Udacity",
        "dates": 2016,
        "url": "www.udacity.com"
    }]
};


bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBioPic = HTMLbioPic.replace('%data%', bio.bioPic);
    var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
    var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
    var formattedwelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $('#header').append(formattedBioPic);
    $('#topContacts').append(formattedMobile);
    $('#footerContacts').append(formattedMobile);
    $('#topContacts').append(formattedEmail);
    $('#footerContacts').append(formattedEmail);
    $('#topContacts').append(formattedGithub);
    $('#footerContacts').append(formattedGithub);
    $('#topContacts').append(formattedTwitter);
    $('#footerContacts').append(formattedGithub);
    $('#topContacts').append(formattedLocation);
    $('#footerContacts').append(formattedGithub);
    $('#header').append(formattedwelcomeMsg);
    $('#header').append(HTMLskillsStart);


    bio.skills.forEach(function(skill) {
        console.log(skill);
        var formattedSkill = HTMLskills.replace("%data%", skill);
        $("#skills").append(formattedSkill);

    });
};

work.display = function() {
    //noinspection JSUnresolvedFunction
    if (work.jobs) {
        for (var job in work.jobs) {
            //create div "work-entry"
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

            var formattedEmployerTitle = formattedEmployer + formattedTitle;

            $(".work-entry:last").append(formattedEmployerTitle);
            $(".work-entry:last").append(formattedWorkDates);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedWorkDescription);
        }
    }
};

projects.display = function() {
    if (projects.projects) {
        for (var project in projects.projects) {
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            $(".project-entry:last").append(formattedTitle);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            $(".project-entry:last").append(formattedDates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $(".project-entry:last").append(formattedDescription);

            if (projects.projects[project].images) {
                for (var image in projects.projects[project].images) {
                    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                    $(".project-entry:last").append(formattedImage);
                }
            }
        }
    }
};

education.display = function() {
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedNameDegree = formattedName + formattedDegree;
        $(".education-entry:last").append(formattedNameDegree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedDates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedLocation);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(formattedMajor);
    }
    $("#education").append(HTMLonlineClasses);
    for (onlineCourse in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
        var formattedOnlineTitleOnlineSchool = formattedOnlineTitle + formattedOnlineSchool;
        $(".education-entry:last").append(formattedOnlineTitleOnlineSchool);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
        $(".education-entry:last").append(formattedOnlineDates);
        var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
        $(".education-entry:last").append(formattedOnlineUrl);
    }

};



bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);