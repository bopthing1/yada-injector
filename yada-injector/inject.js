// lets inject shit

let readyStateInterval = setInterval(() => {
    if (document.readyState == "complete") {
        clearInterval(readyStateInterval);
    }
}, 10);

console.log("page loaded: " + window.location.hostname);

const hostName = window.location.hostname;

// alert(hostName);

const urlFunctions = {};

urlFunctions["www.youtube.com"] = () => {
    document.querySelector("body").style.backgroundColor = "black";
    const allElems = document.querySelectorAll("*");
    for(let i = 0; i < allElems.length; i++) {
        setInterval(() => {
            allElems[i].style.borderRadius = "0px";
        }, 1000);
    }
}

if (urlFunctions[hostName]) {
    console.log("this page abouta get injected");
    urlFunctions[hostName]();
} else {
    console.log("this page is lucky. its not gonna get injected")
}