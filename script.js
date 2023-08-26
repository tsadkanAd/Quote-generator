const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://type.fit/api/quotes";
let getJoke = () => {
    jokeContainer.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item =>{
    	//console.log(item);
    	let num = Math.floor(Math.random() * 16);
    	
        jokeContainer.textContent = `${item[num].text}`;//`${item[0].text}`;

        jokeContainer.classList.add("fade");
    });
}
btn.addEventListener("click", getJoke);
getJoke();