function changeH1(){
    let h1=document.getElementsByTagName('h1')[0];
    h1.innerHTML = "changed title!";
}
function changeBackground(){
    let body = document.getElementsByTagName('body')[0];
    body.classList.add("background-to-blue");
}
function changeFooterAddress(){
    let footerAddress = document.getElementsByTagName('h2')[0];
    footerAddress.innerHTML = "123 fakestreet, fakesville, fakeland"
}

function addClassToAmazonLinks(){
    let links = document.getElementsByTagName('a');
    for(i=0;i<links.length;i++){
        links[i].classList.add("wavy");
    } 
}
function hideImages(){
    let images = document.getElementsByTagName('img');
    for(i=0;i<images.length;i++){
        images[i].classList.toggle("hideImages");
    } 
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function changePriceColour(){
    let price = document.getElementsByClassName("price");
    for(i=0;i<price.length;i++){
        price[i].style.color=getRandomColor();
    }
}