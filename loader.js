document.onreadystatechange = function() { 
    if (document.readyState !== "complete") {
        document.querySelector("header").style.visibility = "hidden";
        document.querySelector("main").style.visibility = "hidden"; 
        document.querySelector("#loader").style.visibility = "visible";
    } else { 
        document.querySelector("#loader").style.display = "none"; 
        document.querySelector("main").style.visibility = "visible";
        document.querySelector("header").style.visibility = "visible";
    } 
};
