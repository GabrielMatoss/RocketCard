
function getProfileInfo (){
    const urlApi = "https://api.github.com/users/GabrielMatoss"

    fetch(urlApi).then(resposta => resposta.json()).then(retornoJson =>{
        profile.src = retornoJson.avatar_url
        userName.textContent = retornoJson.login
        numberFollowers.textContent = `${retornoJson.followers} Seguidores`
        numberFollowing.textContent = `${retornoJson.following} Seguindo`
        numberRepo.textContent = `${retornoJson.public_repos} Repositórios`
        localization.textContent = `${retornoJson.location}`
    })
}
getProfileInfo()


//Botao que troca a cor da borda do card

const btn = document.getElementById("btnChangeColor")

btn.addEventListener("click", () => {
        let mainStyle = document.getElementById("card")

        if(mainStyle.className == ""){
            mainStyle.classList.add("green")
        }else if(mainStyle.className == "green"){
            mainStyle.classList.remove("green")
            mainStyle.classList.add("red")
        }else if(mainStyle.className == "red"){
            mainStyle.classList.remove("red")
            mainStyle.classList.add("purple")
        }else if(mainStyle.className == "purple"){
            mainStyle.classList.remove("purple")
            mainStyle.classList.add("blue")
        }else{
            mainStyle.classList.remove("blue")
        }
})
 
