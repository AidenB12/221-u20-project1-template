let judy = {firstName: "Judy", lastName: "Smith"};
let brian = {firstName: "Brian", lastName: "Gormanly"};


let myPeps = [judy, brian];

document.addEventListener("load", () => {
    for(let i=o; i<myPeps.length; i++){
        dispayFeed(myPeps[i]);
    }

});

function dispayFeed(person) {
    let feed = document.getElementById('newsFeed');
    feed.innerHTML += "<div>";
    feed.innerHTML += "<h1><a href =''>" + person.link + person.firstName + "</a></h1>"
    feed.innerHTML += "</div>";
}

console.log(myPeps);
