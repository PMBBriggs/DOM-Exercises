// event listener for clicks
document.querySelector("form").addEventListener("submit", (e) => {
// prevent refresh
    e.preventDefault();
    console.log("money money");
// gather info from form
    let form = document.querySelector("form")
    const data = new FormData(form);
    let quantity = data.get ("quantity");
    let coinType = data.get("coinType");

    console.log(typeof  quantity);
    console.log(coinType);

// make as many coins as qty entered
    for (let i = 0; i < quantity; i++){
        const newCoin = document.createElement("div");
        newCoin.classList.add("coin");
        newCoin.innerText = coinType;                    
        const deposit = document.querySelector(".coinSection");
        deposit.append(newCoin);
    }
// delete coin on click
    document.querySelector(".coinSection").addEventListener("click", (event) => {
        console.log(event.target);
        event.target.remove();
    })

})

