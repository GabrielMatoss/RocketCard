async function getProfileInfo (){
    const urlApi = "https://api.github.com/users/GabrielMatoss";

    try {
        const profileResponse = await fetch(urlApi);
        const dataJson = await profileResponse.json();

        profile.src = dataJson.avatar_url;
        userName.textContent = dataJson.login;
        numberFollowers.textContent = `${dataJson.followers} Seguidores`;
        numberFollowing.textContent = `${dataJson.following} Seguindo`;
        numberRepo.textContent = `${dataJson.public_repos} Repositórios`;
        localization.textContent = `${dataJson.location}`;
    } catch (error) {
        console.log(error);
    }
    
}

getProfileInfo();


//Botao que troca a cor da borda do card

const btn = document.getElementById("btnChangeColor")

btn.addEventListener("click", () => {
        let mainStyle = document.getElementById("card");

        switch (mainStyle.className) {
            case "":
                mainStyle.classList.add("green");
                break;
            case "green":
                mainStyle.classList.remove("green");
                mainStyle.classList.add("red");
                break;
            case "red":
                mainStyle.classList.remove("red");
                mainStyle.classList.add("purple");
            break;
            case "purple":
                mainStyle.classList.remove("purple");
                mainStyle.classList.add("blue");
                break;
            default:
                mainStyle.classList.remove("blue");
            break;
        }
})
 
