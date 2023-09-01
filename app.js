const todoInput = document.querySelector(".todo-input")
const parentOfLi = document.querySelector(".task-box")
const deleteButton = document.querySelector("span")
const time = document.querySelector("#time")

const month = ['Jan','Fab',"March","April","May","June","july","Aug","Sep","Oct","Nov","Dec"]
const d = new Date()
const Month = month[d.getMonth()]
const year = d.getFullYear()
const day = d.getDate()
const result = `${day} ${Month} ${year}`
const h3 = document.createElement("h3")
h3.innerHTML= result
h3.style.textAlign="center"
time.append(h3)



todoInput.addEventListener("keyup",function(e){
    if(e.key=="Enter"){
            addTodo(this.value)
              todoInput.value=''
   }
})

const addTodo = (item) =>{
       const newLi = document.createElement("li")
       const newTodo = `
       <li >${item}<span class="material-symbols-outlined">
       delete_forever
       </span></li>`
       newLi.addEventListener('click',function(){
        this.classList.toggle("done")
       })
       newLi.innerHTML = newTodo
       parentOfLi.appendChild(newLi)


       newLi.querySelector('span').addEventListener('click',function(){
              newLi.remove();

       })
}

