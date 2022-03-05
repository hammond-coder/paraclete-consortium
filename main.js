
function menuToggle(){
let links=document.getElementsByClassName("links");

    for(let i=0;i<links.length;i++){
        if (links[i].style.display=='none'){
            links[i].style.display='block';
        }
        else{links[i].style.display='none'}
    } 
}  

function activeLink(evt){
    let navLink=document.getElementsByClassName('link');
    for(let i=0; i<navLink.length; i++){
        navLink[i].classList.remove('active');
        evt.currentTarget.className+= " active";     
    }
}