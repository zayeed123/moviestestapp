const searchInput = document.getElementById('sbar1');


const getMovies = () => { 
    const searchTerm = searchInput.value;
    const con = document.getElementById("movie-list-con");
    con.innerHTML= '';

    fetch(`https://www.omdbapi.com/?apikey=f1bdf8cf&s=${searchTerm}`)
    .then(data => {
        return data.json();
    })
        .then(response => {
                        
            console.log(response);
            

            response.Search.forEach(res => {
                let movieCard = document.createElement("div");
                movieCard.className = "grid1"
                movieCard.innerText = res.Title;
                movieCard.style.backgroundImage = "url('"+res.Poster+"')";

                con.appendChild(movieCard);
            });


        })
        .catch(error => {
            console.log(error);
        });
}
searchInput.addEventListener("change", getMovies);

