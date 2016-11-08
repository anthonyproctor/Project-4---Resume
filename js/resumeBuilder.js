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
    "welcomeMessage": " My name is Anthony Proctor and I create web pages. Welcome to my resume, I hope you enjoy it!",
    "skills": [
        "Buring my mouth on pizza", "Losing sunglasses", "Parallel parking", "Eating leftovers"
    ],
    "bioPic": "images/anthonyproctor.jpg"
};

var work = {
    "jobs": [{
        "employer": "Ctrl + Fn Design Studio",
        "location": "Denver, CO",
        "title": "Web Developer",
        "dates": "Jan 2015 - Present",
        "description": "Freelance web developer > Html, CSS, JavaScript, Bootstrap"
    }, {
        "employer": "Finna Group",
        "location": "Denver, CO",
        "title": "Technical Rep",
        "dates": "Jan 2015 - Present",
        "description": "Techincal Support"
    },
    {
        "employer": "Cree",
        "location": "Racine, WI",
        "title": "Engineering Tech",
        "dates": "Jan 2013 - Jan 2015",
        "description": "R&D Engineering Support"
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
    }],
};

var education = {
    "schools": [{
        "name": "Colorado School of Mines",
        "location": "Golden, CO",
        "degree": "Bachelors",
        "majors": ["CS"],
        "dates": 2018,
        "url": "www.mines.edu"
    },],
    "onlineCourses": [{
        "title": "Front-End Developer Nanodegree",
        "school": "Udacity",
        "dates": 2016,
        "url": "https://www.udacity.com"
    },]
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
  for (job = 0; job < work.jobs.length; job++) {

    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%",
    work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%",
    work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedLocation = HTMLworkLocation.replace("%data%",
    work.jobs[job].location);
    var formattedDates = HTMLworkDates.replace("%data%",
    work.jobs[job].dates);
    var formattedDescription = HTMLworkDescription.replace("%data%",
    work.jobs[job].description);
    $(".work-entry:last").append(formattedLocation);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedDescription);
  }
};

projects.display = function() {
  for (project = 0; project < projects.projects.length; project++) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%",
    projects.projects[project].title);
    // grab and append the last one
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%",
    projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%",
    projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    // check if images are present before appending them
    for (img = 0; img < projects.projects[project].images.length; img++) {
      var formattedImage = HTMLprojectImage.replace("%data%",
      projects.projects[project].images[img]);
      $(".project-entry:last").append(formattedImage);
    }
  }
};

education.display = function() {
  for (edu = 0; edu < education.schools.length; edu++) {

    $("#education").append(HTMLschoolStart);

    var formattedSchool = HTMLschoolName.replace("%data%",
    education.schools[edu].name).replace("#",
    education.schools[edu].url);
    var formattedDegree = HTMLschoolDegree.replace("%data%",
    education.schools[edu].degree);
    $(".education-entry:last").append(formattedSchool);

    var formattedLocation = HTMLschoolLocation.replace("%data%",
    education.schools[edu].location);
    $(".education-entry:last").append(formattedLocation);

    var formattedDates = HTMLschoolDates.replace("%data%",
    education.schools[edu].dates);
    $(".education-entry:last").append(formattedDates);

    var formattedMajor = HTMLschoolMajor.replace("%data%",
    education.schools[edu].majors);
    $(".education-entry:last").append(formattedMajor + formattedDegree);
  }

  $(".education-entry:last").append(HTMLonlineClasses);

  for (online = 0; online < education.onlineCourses.length; online++) {

    var formattedTitle = HTMLonlineTitle.replace("%data%",
    education.onlineCourses[online].title).replace("#",
    education.onlineCourses[online].url);
    var formattedOnline = HTMLonlineSchool.replace("%data%",
    education.onlineCourses[online].school);
    $(".education-entry:last").append(formattedTitle + formattedOnline);

    var formattedOnlineDates = HTMLonlineDates.replace("%data%",
    education.onlineCourses[online].dates);
    $(".education-entry:last").append(formattedOnlineDates);

    var formattedURL = HTMLonlineURL.replace("%data%",
    education.onlineCourses[online].url).replace("#",
    education.onlineCourses[online].url);
    $(".education-entry:last").append(formattedURL);
  }
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
