document.querySelector('#show-login').addEventListener('click',(event)=>{
    document.querySelector('.popup').classList.add('active');
});

document.querySelector('.popup .close-btn').addEventListener('click',(event)=>{
    document.querySelector('.popup').classList.remove('active');
});
    
function getInfoLogin(usereUmail,userPassword) {

}



