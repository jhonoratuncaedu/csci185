const containerEl = document.querySelector("#output_container");

async function showSong() {
    const searchTerm = "Childish Gambino";
    const url = `https://www.apitutor.org/spotify/simple/one/v1/search?q=${searchTerm}&type=track`;
    const response = await fetch(url);
    const song = await response.json();
    console.log(song);


    const songTemplate = `<section class="song">
        <h2>${song.name}</h2>
        <img src="${song.album.image_url}">
            <p>${song.artist.name}</p>
            <audio controls src="https://p.scdn.co/mp3-preview/669fd8752..."></audio>
    </section>`;
    containerEl.insertAdjacentHTML("beforeend" , songTemplate);
}

function clearContainer() {
    containerEl.innerHTML = "";
}
