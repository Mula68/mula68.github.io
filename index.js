let body = document.querySelector("main");

body.style.backgroundColor = "#dce6f5";

// title formatting

var heading = document.getElementById("mainheading");

heading.innerHTML = "EDU Prep vi Meeting Agenda";

heading.style.textAlign= "center";

heading.style.color = "#730314";

// description formatting

let desc = document.getElementsByClassName("description");

for (let i = 0; i <= desc.length; i++) {

    var description = document.getElementsByClassName("description")[i];

    description.style.color = "blue";   
}

