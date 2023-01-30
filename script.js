

// 2fa0563fa1a4419da31dd04077630319

var newsHeading = document.getElementById('newsHeading');

let breaking = document.getElementById('breaking');

function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
  }
  
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }




const data = fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=2fa0563fa1a4419da31dd04077630319');
data.then((res) => {
    console.log(res);
    res.json().then((response) => {
        console.log(response.articles);
        let article = response.articles;
        article.map((e)=>{
            breaking.innerHTML += `<a>${e.title}, </a>`
            let newsHtml = "";
            let news = `
                <div class="accordion-item">
                    <div class="imgDiv">
                        <img src="${e.urlToImage}" alt="" />
                    </div>
                    <div class="newsBody">
                        <h3 class="accordion-header" id="headingOne">${e.title}</h3>
                        <h6 class="author">Published_at ${e.publishedAt
                        }</h6>
                        <div class="accordion-body">
                            <p>${e.description}</p>
                        </div>
                        <a href="${e.url}" target="_blank">Read More here...</a>
                    </div>
                </div>
          `;
            newsHtml += news;
            // console.log(newsHtml);
            newsHeading.innerHTML += newsHtml;
        });
    });
});