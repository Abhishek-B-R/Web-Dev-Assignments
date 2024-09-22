function submit(){
    const div=document.getElementById("preview")
    const label=document.getElementById("label").value
    const input=document.getElementById("inputs").value

    if(input==='checkbox' || input==='radio')
        div.innerHTML+=`<div><h3><input type="${input}" name="x">${label}</h3></div>`
    else
        div.innerHTML+=`<div><h3>${label}:  <input type="${input}"></h3></div>`
    document.getElementById("label").value=""
}