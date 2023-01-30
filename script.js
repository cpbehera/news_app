var newsHeading = document.getElementById('newsHeading');
let breaking = document.getElementById('breaking');

const apiKey = "2fa0563fa1a4419da31dd04077630319";

const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=in&apiKey=";
const GENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=";
const BUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=";
const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=";
const ENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=";
const TECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=technology&pageSize=8&apiKey=";

var newsArr = [];




window.onload = function() {
    fetchHeadlineNews();
};





    function fetchHeadlineNews(){
        const data = fetch(HEADLINES_NEWS+apiKey);
        newsArr = [];
        data.then((res) => {
            res.json().then((response) => {
                newsArr = response.articles;
                
                // console.log(newsArr);
                displayNews();
            });
        });
    }


    function fetchGeneralNews(){
        const data = fetch(GENERAL_NEWS+apiKey);
        newsArr = [];
        data.then((res) => {
            res.json().then((response) => {
                // console.log(response.articles);
                newsArr = response.articles;
                
                // console.log(newsArr);
                displayNews();
            });
        });
    }


    function fetchBusinessNews(){
        const data = fetch(BUSINESS_NEWS+apiKey);
        newsArr = [];
        data.then((res) => {
            res.json().then((response) => {
                // console.log(response.articles);
                newsArr = response.articles;
                
                // console.log(newsArr);
                displayNews();
            });
        });

    }

    function fetchSportsNews(){
        const data = fetch(SPORTS_NEWS+apiKey);
        newsArr = [];
        data.then((res) => {
            res.json().then((response) => {
                // console.log(response.articles);
                newsArr = response.articles;
                
                // console.log(newsArr);
                displayNews();
            });
        });

    }


    function fetchEntertainmentNews(){
        const data = fetch(ENTERTAINMENT_NEWS+apiKey);
        newsArr = [];
        data.then((res) => {
            res.json().then((response) => {
                // console.log(response.articles);
                newsArr = response.articles;
                
                // console.log(newsArr);
                displayNews();
            });
        });

    }

    function fetchTechnologyNews(){
        const data = fetch(TECHNOLOGY_NEWS+apiKey);
        newsArr = [];
        data.then((res) => {
            res.json().then((response) => {
                // console.log(response.articles);
                newsArr = response.articles;
                
                // console.log(newsArr);
                displayNews();
            });
        });

    }


    function displayNews(){
        let newsHtml = "";
        newsArr.map((e) => {
            // console.log(e);
            breaking.innerHTML += `<a>${e.title}, </a>`

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
        });
        newsHeading.innerHTML = newsHtml;
    }
