async function fetchPokemon(){
    const divElem=document.getElementById("Display")
    const id=document.getElementById("num").value
    const response=await axios.get("https://pokeapi.co/api/v2/pokemon/"+id)
    console.log("https://pokeapi.co/api/v2/pokemon/"+id)
    console.log(response.data.forms[0].name)
    const name=response.data.forms[0].name
    const newPara=document.createElement("p")
    newPara.innerHTML+=`<img id="img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png" alt="Pikachu" />`
    newPara.innerHTML+=`<h1 style="color:red; position: sticky;">The Pokemon Selected is: ${name.toUpperCase()}</h1>`
    newPara.innerHTML+=`<h2>All attacks of ${name.toUpperCase()} are:</h2>`
    for(let i=0;i<response.data.moves.length;i++){
        newPara.innerHTML+=`<h3 style="color:yellow">${response.data.moves[i].move.name}</h3>`
    }
    divElem.innerHTML=""
    divElem.appendChild(newPara)
}