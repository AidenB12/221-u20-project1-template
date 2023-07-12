document.getElementById('portal_button').addEventListener('click', (event) => {
    window.location = 'http://my.marist.edu';
    
})


let feedItem1 = {
    title: 'title1',
    body: 'This is the body of a story, it may be longer.',
    linkUrl: 'linkUrl1',
    imageUrl: 'campus.png',
}


let feedItem2 = {
    title: 'title2',
    body: 'This is the body of a story, it may be longer.',
    linkUrl: 'linkUrl2',
    imageUrl: 'news_pic.png',
}


let feedItem3 = {
    title: 'title3',
    body: 'This is the body of a story, it may be longer.',
    linkUrl: 'linkUrl3',
    imageUrl: 'handcock.jpeg',
}


var currentStories = [feedItem1, feedItem2, feedItem3];
console.log(currentStories);


function displayItem(currentStories) {
    document.getElementById(newsfeed).innerHTML = currentStories;
}
