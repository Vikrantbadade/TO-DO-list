// const newEl = document.createElement("div")
// newEl.innerHTML = "fuck you"
// document.querySelector("body").appendChild(newEl)
// const del = document.getElementById("fake")
// del.parentNode.removeChild(del)
let crt = 1;

function del_task(index){
    const del = document.getElementById(index);
    del.parentNode.removeChild(del)

}

function add_task(){
    const inputEl = document.querySelector("input")
    const value = inputEl.value



    const NewEl = document.createElement("div");
    
    crt = crt + 1;

    NewEl.innerHTML = "<div class = 'etask'id = '"+crt+"'><div id='"+crt+"'>"+value+"</div><button onclick='del_task("+crt+")'>delete</button></div>"
    document.getElementById("kal").appendChild(NewEl)

}