console.log("This is News Website");

// API Key: a8c1d518dc1343d4aad77c693d179cde

// grab the news container
let newsAccordian = document.getElementById("newsAccordion");

// initialize the news ap parameters
let country = "in";
let apiKey = "a5eb5b63a4be7d013ba9f67202674929";

// create a ajax get request
const xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  `https://gnews.io/api/v4/top-headlines?country=${country}&token=${apiKey}`,
  true
);

xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    // console.log(json);
    let articles = json.articles;
    // console.log(articles);

    let newsHtml = "";
    articles.forEach(function(element, index){

            // console.log(element, index);
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}"> <b>Breaking News ${index+1} :</b>
                                ${element["title"]}
                                </button>
                            </h5>
                            </div>
                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                            <div class="card-body">
                                ${element["content"]}. <a href="${element["url"]}">Read more here.</a>
                            </div>
                            </div>
                        </div>`;
            newsHtml += news;
           
    });
    
    newsAccordion.innerHTML = newsHtml;
  } else {
    console.log("Some error occured");
  }
};

xhr.send();
