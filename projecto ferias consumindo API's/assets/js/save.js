let save=document.querySelector('.save_cliked');

let container=document.querySelector('.none-save');

let cloneSelection=document.querySelector('.posts');

let toggle_save=document.querySelector('.toggle-save');

localStorage.save;

save.addEventListener('click',(event)=>{
    if(event.target.classList.toggle('save')){
        container.style.display='none';
    }
    else{
        container.style.display='block';
    }
})

//let clonePosts=cloneSelection.cloneNode(true);

toggle_save.addEventListener('click',(event)=>{
    console.log(cloneSelection);
})


