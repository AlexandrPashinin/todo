let todo= document.querySelector('.todo')

let text = document.querySelector('.conteiner_text')

let todoButton = document.querySelector('.button').onclick = addingValue

let value;

count= 1
//  создание и  добавление нового элемента  в класс ' todo '
  function addingValue() {
        value = text.value
        if (value == ''){
          value.remove()
         } /* проверка на пустую строку  */

         let newTodo= todo.insertAdjacentHTML('afterbegin',
         `<div class = 'addbutton'>  ${count ++}
         ${value}  <input type="button"
          class = "button_remove"
          value = 'x'
          onclick="remove(this)">   
         </div>`); 
         
        let addButton = document.querySelector('.addbutton')
      
        function oneClick(){
          this.style.textDecoration = 'line-through'
        }

        function dblClick (){
          this.style.textDecoration = 'none'
        }

      addButton.addEventListener ('click' , oneClick)
      
      addButton.addEventListener ('dblclick' , dblClick) 
  } 
 
//   удаление элемента  
function remove (input) {
    input.parentNode.remove()
    count --   
}

