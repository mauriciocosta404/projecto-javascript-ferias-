//-------------------------
const s = (el)=>document.querySelector(el);
const sll = (el)=>document.querySelectorAll(el);

//Obter a Estrutura da Pagina
const profileArea = s('.container-main .profile');
const summaryArea = s ('.summary .section-body');
const hobbiesArea = s ('.hobbies .section-body .hobbies-list');
const pagesArea = s ('.pages .section-body');
const postsArea = s('.posts .section-body');
const detailsArea = s('.details .section-body');
const modalArea = s('.modal');
const addLink_select=s('.hobbies .icon-action');

/*
    @Blocos funcionais da pagina
    ______________________________
*/

//criar um item ddo tipo usúario
function createUserItem(user) {
    //Clonar a estrutura do Usuario
    let userItem = s('.models .user').cloneNode(true);
    
    //preencher as informaçoes em na estrutura dos Usuario
    fillUserItem(userItem,user);

    return userItem;
}

//colocar informações no item  usurio criado
function fillUserItem(userItem,user) {
    //Dados do Usuario;
    const {company} = user;
    const userPhotos = getUserPhotos(user);

    userItem.querySelector('.user-info .name').innerHTML = user.name
    userItem.querySelector('.user-info .craft').innerHTML = company.bs;
    userItem.querySelector('img').src = `${userPhotos[0].url}`;
    userItem.setAttribute('data-key',user.id);
}

//colocar um item na pagina
function setUserItem(userItem) {
    s('.users .section-body').append(userItem);
}

//colocar informações no layout profile
function fillUserProfile(user) {
    const userPhotos = getUserPhotos(user);
    const {address,company} = user;

    profileArea.querySelector('.cover-photo img').src = `${userPhotos[1].url}`;
    profileArea.querySelector('.photo img').src = `${userPhotos[0].url}`;
    profileArea.querySelector('.details .name').innerHTML = user.name;
    profileArea.querySelector('.details .craft').innerHTML = company.bs;
    profileArea.querySelector('.details .address').innerHTML = `${address.street}, ${address.city}`;
    profileArea.querySelector('.details .links').style.display = 'flex';
}

//colocar informações no layout summary
function fillUserSammary(user) {
    summaryArea.querySelector('p').innerHTML = _sumarry[user.id].body;
}

// criar e colocar informações no layout Hobbies
function createUserHobbies(user) {
    hobbiesArea.innerHTML = '';
    
    const userHobbies = getUserInfo(user, _hobbies);

    userHobbies.map((hobbi,index)=>{
        let hobbiItem = document.createElement('li');

        //Preencher as informações
        hobbiItem.innerHTML = hobbi.name;

        //Inserir o post na Area de Post
        hobbiesArea.append(hobbiItem);
    });
}

// criar os item das paginas
function createUserPages(user) {
    pagesArea.innerHTML = '';
    const userPages = getUserInfo(user,_pages);

    userPages.map((page,index)=>{
        //Clonar a estrutura do Post
        let pageItem = s('.models .page').cloneNode(true);

        //Preencher as informações na estrutura de um post
        fillUserPage(pageItem, page,getUserPhotos(user)[index]);

        //Inserir o post na Area de Post
        pagesArea.append(pageItem);
    });
}

//colocar informações no layout page
function fillUserPage(pageItem,page,photo) {
    pageItem.querySelector('.page-info .page-info--name').innerHTML = `${page.name}`;
    pageItem.querySelector('.page-info .page-info--type').innerHTML = `${page.type}`;
    pageItem.querySelector('.page-icon').style.backgroundImage = `url(${photo.thumbnailUrl})`;
}

//criar os item dos posts
function createUserPosts(user) {
    postsArea.innerHTML = '';
    const userPosts = getUserInfo(user,_posts)

    userPosts.map((post,index)=>{
        //Clonar a estrutura do Post
        let postItem = s('.models .post').cloneNode(true);

        //Preencher as informações na estrutura de um post
        fillUserPost(postItem, post,getUserPhotos(user)[index]);

        //Inserir o post na Area de Post
        postsArea.append(postItem);
    });
}

//colocar informações no layout posts
function fillUserPost(postItem,post,photo) {
    postItem.querySelector('.post-info .post-info--title').innerHTML = `${post.title}`;
    postItem.querySelector('.post-info .post-info--body').innerHTML = `${post.body}`;
    postItem.querySelector('.post-media img').src = photo.thumbnailUrl;
}

//colocar informações no layout Details
function fillUserDetails(user) {
    detailsArea.querySelector('.detail .email').innerHTML = `${user.email}`;
    detailsArea.querySelector('.detail .phone').innerHTML = `${user.phone}`;
    detailsArea.querySelector('.detail .username').innerHTML = `${user.username}`;
    detailsArea.querySelector('.detail .website').innerHTML = `${user.website}`;
    //details.querySelector('.detail .joinDate').innerHTML = `${user.joinDate}`;
}

//Ação na seleção de um usúario
function selectItem(item) {
    if (isSomeItemActive()) {
        isSomeItemActive().classList.remove('active')
    }
    item.classList.add('active');
}

//mostrar o modal
function showModal(isInfo) {
    if (isInfo) {
        modalArea.style.opacity = 0;
        modalArea.style.display = "flex";
        setTimeout(()=>{
            modalArea.style.opacity = 1;
        },300);
    }
}

function closeModal() {
    modalArea.style.opacity = 0;
    setTimeout(()=>{
        modalArea.style.display = "none";
    },300);
        
}

function isSomeItemActive(){
    return s('.users .user.active');
}

/*
    @Eventos na Pagina
    ______________________________
*/
sll('.title-btn').forEach(btn=>{
   btn.addEventListener('click',e=>{
        let areaInfo = e.target.closest('.default-section');
       
        //clonar as informaçoes para o modal
        modalArea.querySelector('.modal--title h2').innerHTML = areaInfo.querySelector('.title h2').innerHTML;
        let bodyInfo = areaInfo.querySelector('.section-body').innerHTML;
        modalArea.querySelector('.modal__body').innerHTML = bodyInfo;
        
        //mostrar o modal
        showModal(bodyInfo.trim());
   })
});

document.addEventListener('keydown',(k)=>{
    if(k.key == 'Escape')
        closeModal();
});

/*
@Evento do modo light dark
*/
//const darkColor = document.querySelectorAll('.darkColor');

document.querySelector('.ball').addEventListener('click',(e)=>{
    e.target.classList.toggle('ball-move');
    togglelight();  
})
function togglelight() {
    document.documentElement.classList.toggle('light');
}