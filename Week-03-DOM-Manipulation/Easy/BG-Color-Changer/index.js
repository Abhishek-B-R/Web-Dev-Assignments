function change(color){
    const bodyElem=document.body
    bodyElem.style.backgroundColor=color
}
function addColor(){
    const span=document.getElementById("span")
    span.innerHTML=`<input id="something" type="text" placeholder="Type color ...">
                    <button onclick="submit()">Submit</button>`
}
function submit(){
    const color=document.getElementById("something").value.trim().toLowerCase()
    const div=document.getElementById("colors")
    document.getElementById("something").value=""
    const span=document.getElementById("span")
    span.innerHTML=""
    div.innerHTML+=`<button class="color" style="background-color:${color}" onclick="change('${color}')">
                    ${color.toUpperCase()}
                    </button>`
        
}