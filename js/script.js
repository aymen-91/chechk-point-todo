

var add = document.querySelector('.addButton')
let x = true

    add.addEventListener('click',function(){
      var liste = document.createElement("li")
      liste.classList.add("lst")

      var bouton = document.createElement("button")
      bouton.classList.add("btn")
      bouton.textContent="Complete"
      liste.appendChild(bouton)
      bouton.addEventListener('click',function(){

if(x) {
  taskText.style.textDecoration ="line-through"
  bouton.textContent="undo"
  x=!x
} else if (!x){
  taskText.style.textDecoration ="none"
  bouton.textContent="Complete"
  x=!x
}





          
      })

      var bouton1 = document.createElement("button")
      bouton1.classList.add("btn")
      liste.appendChild(bouton1)
      bouton1.textContent="Delete"
      liste.appendChild(bouton1)
      bouton1.addEventListener('click',function(e){
        e.target.parentElement.remove()    
      })
       
      var task = document.getElementById("task").value
      var taskText = document.createElement("p")
      taskText.textContent = task
      taskText.style.paddingLeft = "10px"
      taskText.style.fontSize = "20px"
      liste.appendChild(taskText)

      document.getElementsByTagName("ul")[0].appendChild(liste); 
    })

        


