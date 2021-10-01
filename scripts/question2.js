const gamesConatiner = document.querySelector(".gamesList");
const loadingDiv = document.querySelector(".loading");


const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=95bd00fdf49c424b8bc8241b49143e2d"

loadingDiv.innerHTML += "";

let dotCounter = 0
let dot ="."

function showLoading() {

dotCounter++;

if(dotCounter === 4) {
    async function getGames() {
        try {
            const response = await fetch(url);
            const result = await response.json();
            const games = result.results;            
            
            setTimeout(function() {
                gamesConatiner.innerHTML = "";
                for(let i = 0; i < games.length; i++) {
                
        
                    tags = games[i].tags.length;
                    // console.log(tags);
                    
                    if (i === 8) {
                        break;
                    }
            
                    gamesConatiner.innerHTML += `<div class="gamebox"><p>name: ${games[i].name}</p><br> <p>rating: ${games[i].rating}</p> <br><p>tags ${tags}<p/></div>`;
                }
        

            }, 1000);

        }
        catch(error) {
            console.log("Something went wrong");
            gamesConatiner.innerHTML ="Something went wrong";
        }
    
    }
    getGames();
}

loadingDiv.innerHTML += `<h3 class ="dot">${dot}</h3>`;
}
const interval = setInterval(showLoading, 500);
