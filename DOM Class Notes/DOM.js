console.log("is this thing on?!");

document.querySelector("#example").innerText = "Changing it to something else";

// CREATING AN ELEMENT WITH CREATELEMENT
// create a p tag
// change its innerText
// apend it to the body


let p = document.createElement("p");

p.innerText = "adding a new paragraph with create element" ;

document.body.append(p);

p.remove();

// ADDING AN EVENT LISTENER

// select the element

// addEventListener to it
// addListener needs two things:
// which event

// what do you want it to do 

document.querySelector("button").addEventListener("click",() => {
    console.log("stop clicking me!")
})

// version 2 

let button = document.querySelector("button");
button.addEventListener("click",function(){
    console.log("seriously, don't click the button")
});

function whatever(){
    console.log("fine. whatever its practice anyway.");
}

document.querySelector("button").addEventListener("click", );