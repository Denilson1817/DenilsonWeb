let VisibleMenu = false;
function menuResponsive(){
    if(VisibleMenu){
        document.getElementById("nav-bar").classList = "";
        VisibleMenu = false;
    }else{
        document.getElementById("nav-bar").classList="responsive";
        VisibleMenu = true;
    }
}

function select(){
    document.getElementById("nav-bar").classList="";
    VisibleMenu=false;
}

function barSkills(){
    var skills = document.getElementById("skills");
    var distance_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distance_skills >= 300){
        let skill = document.getElementsByClassName("progress");
        skill[0].classList.add("javascript");
        skill[1].classList.add("htmlcss");
        skill[2].classList.add("cplus");
        skill[3].classList.add("python");
        skill[4].classList.add("php");
        skill[5].classList.add("reactjs");
        skill[6].classList.add("angular");
        skill[7].classList.add("communication");
        skill[8].classList.add("english");
        skill[9].classList.add("teamWork");
        skill[10].classList.add("creativity");
        skill[11].classList.add("dedication");
        skill[12].classList.add("adminProjects");
        skill[13].classList.add("methodologies");
    }
}
window.onscroll = function(){
    barSkills();
} 
