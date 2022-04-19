// select and element

// add an event listener

// choose the event

//  write the function


// when you click the menu
// addEventListener will take a placeholder/Event in function- looking for "event.target" when console logging event tells you what is being targeted (what did the event happen on)
document.querySelector(".fa-solid.fa-bars").addEventListener("click", (event) => {
    console.log("you clicked the menu");
    document.querySelector("ul").classList.toggle("show");
})

// when you click on Letters
document.querySelector("#lettersLink").addEventListener("click", (event) => {
    event.preventDefault();
    // show letters
    document.querySelector("#letters").style.display = "block";
    // hide numbers
    document.querySelector("#numbers").style.display = "none";

    document.querySelector("ul").classList.toggle("show");

})

// when you click on Numbers
document.querySelector("#numbersLink").addEventListener("click", (event) => {
    event.preventDefault();
    // show numbers
    document.querySelector("#numbers").style.display = "block";
    // hide letters
    document.querySelector("#letters").style.display = "none";

    document.querySelector("ul").classList.toggle("show");
    
})

// to animate the menu - look up the css property @keyframes in w3scools