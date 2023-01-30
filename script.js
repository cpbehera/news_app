

// 2fa0563fa1a4419da31dd04077630319

var newsHeading = document.getElementById('newsHeading');

let breaking = document.getElementById('breaking');

function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
  }
  
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }




const data = fetch('http://api.mediastack.com/v1/news?access_key=c0784f8cc1668a76b2196276a83fc0b6');
data.then((res) => {
    console.log(res);
    res.json().then((response) => {
        console.log(response);
        let article = response.data;
        article.map((e)=>{
            breaking.innerHTML += `<a>Today's Breaking:-${e.title}, </a>`
            let newsHtml = "";
            let news = `
                <div class="accordion-item">
                    <div class="imgDiv">
                        <img src="${e.image}" alt="" />
                    </div>
                    <div class="newsBody">
                        <h3 class="accordion-header" id="headingOne">${e.title}</h3>
                        <h6 class="author">Published_at ${e.published_at}</h6>
                        <div class="accordion-body">
                            <p>${e.description}</p>
                        </div>
                        <a href="" target="_blank">Read More here...</a>
                    </div>
                </div>
          `;
            newsHtml += news;
            // console.log(newsHtml);
            newsHeading.innerHTML += newsHtml;
        });
    });
});