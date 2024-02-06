
function showNavBarList(dad,son){
    next  = dad.nextSibling.nextSibling;
    if(next.children.length != dad.children.length){
        console.log("O número de itens difere do cabeçalho");
        return;
    }
    for(let a = 0 ; a < dad.children.length; a++){ 
        dad.children[a].classList.remove("nav-bar-list-active");
        next.children[a].style.display = "none";
        if(dad.children[a] == son){
            son.classList.add("nav-bar-list-active");
            next.children[a].style.display = "";
        }
    }
}

function initialize(){
    let elem = document.querySelectorAll('.nav-bar-list');

    elem.forEach(function(elem) { 
       for(let a = 0 ; a < elem.children.length; a++){ 
             elem.children[a].addEventListener("click",function(){showNavBarList(elem,this)})
        }
    });
}

initialize();