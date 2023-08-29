const accessKey = '-IiOOvP0_JMAM5gfN1tXxuA4SFjbTtH4UXNj8ZvUd1I';

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const searchMoreBtn = document.getElementById("search-more-btn");

let keyword = "";
let page = 1;


async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch (url);

    const data = await response.json();

    if(page === 1){
        searchResult.innerHTML = "";
    }

    const results = data.results
    results.map((result) => {
        const image = document.createElement('img');
        image.src = result.urls.small;
        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        
        imageLink.appendChild(image)
        searchResult.appendChild(imageLink)
    })
    console.log(searchMoreBtn)
    searchMoreBtn.style.display = "block";
    
}


searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    page = 1;
    searchImages()
})

searchMoreBtn.addEventListener("click", () => {
    page++;
    searchImages();
})