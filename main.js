
function menuToggle(){
let links=document.getElementsByClassName("links");

    for(let i=0;i<links.length;i++){
        if (links[i].style.display=='none'){
            links[i].style.display='block';
        }
        else{links[i].style.display='none'}
    }
}  