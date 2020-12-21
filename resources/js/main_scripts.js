setHeight();
function setHeight() {
    var height = $(window).height() - document.getElementById("main").offsetTop;
    if (height > document.getElementById("main").offsetHeight) {
        document.getElementById("main").style.height = `${height}px`;
    }
}

function toggleNav() {
    if (document.getElementById("mySidebar").style.width != "325px") {  
        document.getElementById("mySidebar").style.width = "325px";
        document.getElementById("main").style.marginLeft = "24%";
        document.getElementById("main").style.marginRight = "6%";
    } else {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft= "16%";
        document.getElementById("main").style.marginRight = "14%";
    }
}

function selectSchool() {
    var school = document.getElementById("selected_school").value;
    if ( school == 0 ) {
        document.getElementById("school").innerHTML = "";
        document.getElementById("degree").innerHTML = "";
        document.getElementById("attended").innerHTML = "";
        document.getElementById("gpa").innerHTML = "";
        document.getElementById("notes").innerHTML = "";
        document.getElementById("school_img").setAttribute( "src", "../resources/img/school.png" );
        document.getElementById("list_grades_button").style.visibility = 'hidden';
    } else {
        if (school == 1) {
            document.getElementById("school").innerHTML = "University of Colorado, Boulder";
            document.getElementById("degree").innerHTML = "Bachelor of Science: Computer Science";
            document.getElementById("attended").innerHTML = "August 2020 - May 2022";
            document.getElementById("gpa").innerHTML = "4.0";
            document.getElementById("notes").innerHTML = "Currently enrolled.";
            document.getElementById("school_img").setAttribute( "src", "../resources/img/CUBoulder.png" );
            document.getElementById("list_grades_button").style.visibility = 'visible';
            document.getElementById("list_grades_button").setAttribute( "onclick", `listGrades(${school})` );
            document.getElementById("transcript_button").setAttribute( "href", '../resources/pdf/CU Boulder Transcript.pdf' );
        } else if (school == 2) {
            document.getElementById("school").innerHTML = "Santa Barbara City College";
            document.getElementById("degree").innerHTML = "Associates of Science: Computer Science and Mathematics";
            document.getElementById("attended").innerHTML = "August 2018 - May 2020";
            document.getElementById("gpa").innerHTML = "3.61";
            document.getElementById("notes").innerHTML = "Member of Phi Theta Kappa Honors Society. Graduated with honors.";
            document.getElementById("school_img").setAttribute( "src", "../resources/img/sbcc.png" );
            document.getElementById("list_grades_button").style.visibility = 'visible';
            document.getElementById("list_grades_button").setAttribute( "onclick", `listGrades(${school})` );
            document.getElementById("transcript_button").setAttribute( "href", '../resources/pdf/SBCC Transcript.pdf' );
        } else {
            document.getElementById("school").innerHTML = "Tesoro High School";
            document.getElementById("degree").innerHTML = "High School Diploma";
            document.getElementById("attended").innerHTML = "September 2014 - June 2018";
            document.getElementById("gpa").innerHTML = "3.91";
            document.getElementById("notes").innerHTML = "AP Scholar Award. Honor Roll all semesters.";
            document.getElementById("school_img").setAttribute( "src", "../resources/img/tesoro.png" );
            document.getElementById("list_grades_button").style.visibility = 'hidden';
        }
    }
}

function listGrades(school) {
    if(school == 1){
        document.getElementById("transcript_pdf").innerHTML = '<embed src="../resources/pdf/CU Boulder Transcript.pdf" frameborder="0" width="100%" height="800px">';
        document.getElementById("transcript_title").innerHTML = 'CU Boulder Transcript'
    } else {
        document.getElementById("transcript_pdf").innerHTML = '<embed src="../resources/pdf/SBCC Transcript.pdf" frameborder="0" width="100%" height="800px">';
        document.getElementById("transcript_title").innerHTML = 'SBCC Transcript'
    }
}