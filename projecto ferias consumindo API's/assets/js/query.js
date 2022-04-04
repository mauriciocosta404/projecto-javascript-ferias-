let _users, _photos, _posts;

//Aqui vem o fecth, para fazer a requisição
const endpoints = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/photos',
    'https://jsonplaceholder.typicode.com/posts'
];

const promises = endpoints.map(url=>fetch(url)
    .then(response => response.json()));
Promise.all(promises)
    .then(body=>begin(body[0],body[1],body[2]))

//Inicio do uso da API
function begin(usersResponse,photosResponse,postsResponse) {
    _users = usersResponse;
    _photos = photosResponse;
    _posts = postsResponse;

    _users.map((user,index)=>{
        const userItem = createUserItem(user);
        //veficinfoLogin()
    
        //Envento no click da foto do usuario
        userItem.querySelector('img').addEventListener('click',(e)=>{
            //selecionar o item
            selectItem(e.target.closest('.user'))
    
            //Preeencher Profile
            fillUserProfile(user);

            //Preencher o Sammary
            fillUserSammary(user);

            //Criar os Hobbies
            createUserHobbies(user);
           
            //criar a area de Paginas
            createUserPages(user);

            //criar Os Posteres
            createUserPosts(user);
    
            //Preencher o Detail
            fillUserDetails(user);
        });
        
        //Colocar Os usuarios no Managers
        setUserItem(userItem);
    });
}

//--Obter as fotos, posts, hobbies e pages especificos de cada usuario
const getUserPhotos = (user)=>_photos.filter((photo)=>photo.albumId === user.id);
const getUserInfo = (user,infos) =>infos.filter(info=>info.userId == user.id);

//const getUserPosts = (user)=>_posts.filter((post)=>post.userId === user.id);
//const getUserHobbies = (user)=>_hobbies.filter((hobbi)=>hobbi.userId === user.id);
//const getUserPages = (user)=>_pages.filter((page)=>page.userId === user.id);