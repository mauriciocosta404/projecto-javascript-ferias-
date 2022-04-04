var porcent = document.querySelector('.porcent');
var none = document.querySelectorAll('.none');
var loading = document.querySelector('.loading');
var count = 4;

var load = setInterval(animate,50)

function animate() {
    if(count==100){

        clearInterval(load);
        loading.parentElement.removeChild(loading)
        none.forEach((elem)=>{
            elem.style.display = "block"; 
        });
    
    }else{
        count++;
        porcent.textContent=`${count}%`;
    }
}

/*
@ modal
*/

addLink_select.addEventListener('click',(event)=>{
    s('.modal_form').style.display='flex'
})
s('.close-modal_form').addEventListener('click',(e)=>{
    s('.modal_form').style.display = 'none';
})

s('.modal--add button').addEventListener('click',(event)=>{
    const text=s('.modal_form_body textarea').value;
    if(text){
        const link_select = s('.hobbies ul');
        link_select.innerHTML +=`<li>${text}</li>`;
    }
    s('.modal_form').style.display = 'none';

})
//---------------summary------------------------
const clone = s('.modal_form_summary')
const add_paragraph = clone.cloneNode(true);

s('.summary .icon-action').addEventListener('click',(event)=>{
    s('.modal_form_summary').style.display = 'flex';
})

s('.modal_form_summary .modal--add button').addEventListener('click',(event)=>{
    const paragraph = s('.modal_form_summary .modal_form_body textarea').value;
    if(paragraph){
       s('.summary .section-body p').innerHTML+=`<p>${paragraph}</p>`;
       s('.modal_form_summary').style.display = 'none';
    }
});
s('.modal_form_summary .close-modal').addEventListener('click',(e)=>{
    s('.modal_form_summary').style.display = 'none';
})