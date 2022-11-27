
const imgList = document.querySelector("#imgList");

function f1(){
    /*filter: sepia(1);*/
    imgList.style.filter  = "sepia(0)";
}

function f2(){
    /*filter: sepia(1);*/
    imgList.style.filter  = "sepia(1)";
}


function f3(){
    /*shadow OFF*/
    imgList.style.filter  =  "drop-shadow(0px 0px 0px #ffffff)";
    }

function f4(){
    /*shadow ON*/
    imgList.style.filter  =  "drop-shadow(30px 10px 4px #4444dd)";
    }