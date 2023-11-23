let sidebar= document.querySelector(".sidebar");
let closebtn= document.querySelector("#btn");
let searchbtn= document.querySelector(".bx-search");


closebtn.addEventListener("click",()=> {
    sidebar.classList.toggle("open");
    menuBtnChange();

 } )

 function menuBtnChange() {
    if(sidebar.classList.contains("open")){
        closebtn.classList.replace("bx-menu", "bx-menu-alt-right");
    }
    else{(closebtn.classList.replace("bx-menu-alt-right", "bx-menu"))
 }
}

searchbtn.addEventListener("click",()=>{
    sidebar.classList.toggle("open");
    menuBtnChange();
})