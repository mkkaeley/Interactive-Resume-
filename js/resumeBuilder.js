/* globals $:true, HTMLheaderName:true, HTMLheaderRole:true, HTMLmobile:true, HTMLemail:true,
HTMLgithub:true, HTMLtwitter:true, HTMLlocation:true, HTMLbioPic:true, HTMLwelcomeMsg:true,
HTMLskillsStart:true, HTMLskills:true, HTMLworkStart:true, HTMLworkEmployer:true, HTMLworkTitle:true,
HTMLworkDates:true, HTMLworkDescription:true, HTMLprojectStart:true, HTMLprojectTitle:true, HTMLprojectDates:true,
HTMLprojectDescription:true, HTMLprojectImage:true, HTMLschoolStart:true, HTMLschoolName:true,
HTMLschoolDegree:true, HTMLschoolDates:true, HTMLschoolLocation:true, HTMLschoolMajor:true, HTMLonlineClasses:true,
HTMLonlineSchool:true, HTMLonlineTitle:true, HTMLonlineDates:true, HTMLonlineURL:true, internationalizeButton:true,
googleMap:true*/
var bio = {
    'name': 'Meenakshi Kaeley',
    'role': 'Web Developer',
    'contacts': {
        'mobile': '630-396-0497',
        'email': 'mkkaeley@gmail.com',
        'github': 'mkkaeley',
        'twitter': '@mkkaeley',
        'location': 'Westmont'
    },
    'welcomeMessage': ' Welcome to my site!',
    'skills': [
     /*   'project management', 'delivering things', 'team leadership', 'customer relationship' */
     'HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Knockout', 'AJAX', 'Bootstrap'
    ],
    'biopic': 'images/meen.jpg'
};

bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedName).append(formattedRole).append(formattedMobile).append(formattedPic).append(formattedMessage);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $(".flex-item:last").append(formattedEmail).append(formattedGithub).append(formattedTwitter).append(formattedLocation);

    if (bio.skills.length > 0) {

        $("#header").append(HTMLskillsStart);
        for (var i = 0, len = bio.skills.length; i < len; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }

    $("#lets-connect").append(formattedMobile).append(formattedEmail);
};
bio.display();

var education = {

    'schools': [{
            'school': 'Udacity',
            'location': 'online, USA',
            'degree': 'Nanodegree',
            'major': ['Front End Web Development'],
            'dates': 2016,
            'url': 'http://www.udacity.com/course/ud804'
        },
        {
            'school': 'Sikkim Manipal University',
            'location': 'Sikkim, India',
            'degree': 'Masters of Business Administration',
            'major': ['Marketing'],
            'dates': 2010,
            'url': 'http://example.com'
        },

        {
            'school': 'Sikkim Manipal University',
            'location': 'Gangtok, India',
            'degree': 'Masters of Science',
            'major': ['Telecom Technology'],
            'dates': 2008,
            'url': 'http://example.com'
        },

        {
            'school': 'GGSIPU',
            'location': 'Delhi, India',
            'degree': 'Bachelor of Technology',
            'major': ['Electronics and Communication', 'Electrical'],
            'dates': 2004,
            'url': 'http://example.com'
        }

    ],

    'onlineCourses': [

        {
            'title': 'Full Stack Web Development Certification',
            'school': 'Free Code Camp',
            'dates': 2016,
            'url': 'http://www.freecodecamp.com/map'
        }

    ]
};



var work = {
    'jobs': [{
            'employer': 'Nokia Pvt. Limited',
            'title': 'Project Coordinator',
            'location': 'India',
            'dates': 'February 2007 - November 2014',
            'description': 'Delivered projects as per schedule and budget, managing scope, quality and performance of the projects, leading meetings, handling change requests, maintaining status reports, stakeholder management, client management conducting client needs analysis and deploying solutions. '
        },

        {
            'employer': 'Siemens Pvt. Limited',
            'title': 'Telecom Specialist',
            'location': 'India',
            'dates': 'December 2004 - January 2007',
            'description': 'Implemented installation, commissioning and testing of GSM mobile core network elements to make the mobile wireless network live and functioning. Installed wireless network nodes and performed acceptance testing. '
        }
    ]
};

var projects = {
    'projects': [{
            'title': 'Feed Reader testing',
            'dates': 'Jan 2016',
            'description': 'Wrote comprehensive unit tests, using the Jasmine testing framework, for an RSS Feed Reader application that uses Google RSS API.',
            'url': 'https://github.com/mkkaeley/feedreader-master.git',
            'images': [
                'images/sky.jpg',
            ]
        },
        {
            'title': 'Neighborhood Map',
            'dates': 'Dec 2015',
            'description': 'Built a single-page, responsive application built with Knockout framework and hosted on GitHub Pages. A full-page map that loads 5 popular places in Chicago, IL. Users can search all included landmarks and, when selected, additional information about a landmark is presented from Wikipedia APIs.',
            'url': 'https://github.com/mkkaeley/neighborhood-map-project',
            'images': [
                'images/map.jpg',
            ]
        },
        {
            'title': 'Website Optimization',
            'dates': 'Dec 2015',
            'description': 'Optimized an inefficient web application by modifying its JavaScript, CSS and assets delivery, ensuring it runs at 60fps and achieves a PageSpeed score of at least 90.',
            'url': 'https://github.com/mkkaeley/Website-Optimization',
            'images': [
                'images/abstract.jpg',
            ]
        },
        {
            'title': 'Classic Arcade Game Clone',
            'dates': 'Nov 2015',
            'description': 'Created a clone of the classic game, Frogger. Coded player, enemies, and other game entities in JavaScript object-oriented pseudo-classical style',
            'url': 'https://github.com/mkkaeley/Classic-Arcade-Game-Clone.git',
            'images': [
                'images/game.jpg',
            ]
        },
  /*      {
            'title': 'GSM Railways',
            'dates': '2006-2014',
            'description': 'Managed GSM-Railways project for Indian Railways, controlling all phases of Core Network Deployment project with $8M budget from initiation to closing. Planned, implemented and maintained railways wireless network and infrastructure project  and catered to future requirements.Acted as a Resource Planner for project’s on-site activities and managed 9 resources across different geographical locations.Mentored and coached 6 onsite engineers Managed subcontractors to carry out installations of customer network.Managed third party vendors for the installation and maintenance support of their hardware and devices.',
            'images': [
                'images/sky.jpg',
            ]
        },

        {
            'title': 'Vodafone',
            'dates': '2009-2014',
            'description': 'Delivered warranty support for 21 GSM NSS nodes for 4 years generating revenue of $5M per year .Initiated and closed data center migration project on a live network simultaneously with Network Roll-out on the same network; managed budget of $1.8M, and completed project with minimum downtime. •	Recommended solutions, linking customer requests/needs to services and service development; mediated between client and sales teams both in business and technical capacity. Performed project tender analysis from services standpoint and assisted sales team to prepare a documented statement of compliance in respect to services offers.',
            'images': [
                'images/abstract.jpg',

            ]
        }*/

    ]
};

work.display = function() {
    for (var i = 0, len = work.jobs.length; i < len; i++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedEmployerTitle).append(formattedDates).append(formattedDescription);
    }
};

work.display();


projects.display = function() {
    for (var i = 0, len = projects.projects.length; i < len; i++) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        var formattedprojectURL = HTMLprojectURL.replace("%data%", projects.projects[i].url)
        $(".project-entry:last").append(formattedTitle).append(formattedDates).append(formattedDescription).append(formattedprojectURL);


        if (projects.projects[i].images.length > 0) {
            for (var j = 0, n = projects.projects[i].images.length; j < n; j++) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
                $(".project-entry:last").append(formattedImage);
            }

        }
    }
};

projects.display();


education.display = function() {
    for (var i = 0, len = education.schools.length; i < len; i++) {
        $("#education").append(HTMLschoolStart);
        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[i].school);
        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
        $(".education-entry:last").append(formattedschoolName).append(formattedschoolDegree).append(formattedschoolDates).append(formattedschoolLocation).append(formattedschoolMajor);

    }

};

education.display();

education.onlineCourses.display = function() {
    for (var i = 0, len = education.onlineCourses.length; i < len; i++) {
        $("#onlineClasses").append(HTMLonlineClasses);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
        var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
        $(".onlineClasses-entry:last").append(formattedonlineSchool).append(formattedonlineTitle).append(formattedonlineDates).append(formattedonlineURL);
    }
};
education.onlineCourses.display();


function inName(name) {
    name = bio.name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}


$("#main").append(internationalizeButton);
console.log(inName(bio.name));

$("#mapDiv").append(googleMap);