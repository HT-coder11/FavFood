var foods = ["Roti","Garlic Bread", "Pork Belly"]
var num = 0;
var pics = ["ROTI.jpg","breb.jpg","prok.jpg"]



function openWeb(){
    if(num == 0){
        window.open("https://www.mygingergarlickitchen.com/how-to-make-soft-roti-phulka-recipe-chapati-video-recipe/#recipe-here")
    }
    if(num == 1){
        window.open("https://www.yourhomebasedmom.com/quick-easy-garlic-bread/")
    }
    if(num == 2){
        window.open("https://kirbiecravings.com/crispy-golden-pork-belly/")
    }
    
}

function next(){
    
    document.getElementById("name").innerHTML = foods[num];
    document.getElementById("name2").src = pics[num];
    num = num+1;

    if(num > 2){
        num = 2
    }

}

function back(){
    document.getElementById("name").innerHTML = foods[num];
    document.getElementById("name2").src = pics[num];
    num = num-1;

    if(num < 0){
        num = 0
    }
}


