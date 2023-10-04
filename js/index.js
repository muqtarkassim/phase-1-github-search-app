const form=document.getElementById('github-form')
form.addEventListener('submit',(e)=>submitData(e))

function submitData(e){
    const input =e.target.search.value;

    console.log(input)

  e.preventDefault()

  fetch(`https://api.github.com/search/users?q=${input}`/*,
  {
    method:'POST',
    headers:{
        'Content-Type': 'application/json',
        Accept: application/vnd.github.v3+json
    },
    body:JSON.stringify()
  })*/)
  .then(res =>res.json())
  .then(data =>{usedata(data.items), console.log('Server response:', data)})
}



function usedata(data){
    const divparent=document.getElementById('user-list')
const divparent2=document.getElementById('repos-list')
divparent.innerHTML = '';
divparent2.innerHTML = '';
    
data.forEach(dataObj =>{
        const createli=document.createElement('li');
        const profileLink = document.createElement('a');
        profileLink.textContent = dataObj.login;
        profileLink.href = `https://github.com/${dataObj.login}`;
        profileLink.target = "_blank"; 
        
        const AvatarImage=document.createElement('li');
        createli.appendChild(profileLink);

         AvatarImage.innerHTML=`<img src="${dataObj.avatar_url}" alt="Avatar Image">`;
        divparent.appendChild(createli)
        divparent.appendChild(AvatarImage)

       
             
       
    })

}


//document.addEventListener('DOMContentLoaded')