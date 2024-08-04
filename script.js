let clock=document.querySelector("#clock");

let heading=document.querySelector("#heading");

function change(){
        if(heading.innerHTML.trim()==="CLOCK"){
            heading.innerHTML='घड़ी';
        } 
        else if(heading.innerHTML.trim()==='घड़ी'){
            heading.innerHTML='CLOCK';
        }
}
setInterval(change,3000);
setInterval(() => {
    let date=new Date();
    clock.innerHTML=date.toLocaleTimeString();
}, 1000);