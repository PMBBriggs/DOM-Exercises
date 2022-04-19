console.log("is this on?");

// function main(){

// }
// OR

const main = () => {
    console.log("hey this works!")
   
    document.querySelector("#grow-me").classList.add("big");
   
    document.querySelector("#shrink-me").classList.remove("big");
    
    document.querySelectorAll("li").forEach(function(listItems){
        console.log(listItems.innerText);
    });
    // loops through each list item - like with an array 

    document.querySelector(".link").href = "https:www.example.com";
    // could use querySelectorAll for .link or <a>  or []
    // could use .setAttribute("href" , example.com)
    document.querySelector(".link").innerText = "somewhere";

    // let element = document.querySelector(".link")
    // element.innerText = "somewhere"
    // setting a variable for "element"- enables "dry code" so you dont
    // have to repeat yourself more than once. saves it to use later


    document.querySelector("#hide-me").style.display = "none";

    document.querySelector("#show-me").style.display = "block";


    let name = document.querySelector("#name").value
    document.querySelector("h1").innerText = `Welcome ${name}`;




}