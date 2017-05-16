
const getName={
init(){
const personForm = document.querySelector('form')
personForm.addEventListener('submit',(ev) => this.handleSubmit(ev))
},

renderListItem(value) {
    const li = document.createElement('li')
    li.innerHTML = `${value}`
    return li
  },

    renderList(person) {
   const list = document.createElement('ul')
    Array.from(person).map((input, _i, _elementsArray) => {
      if (input.value) {
          var count = 0
        let value = input.value
        let li = this.renderListItem(value)
        var textnode = document.createTextNode(value)
    //    if (count === 0){
       list.appendChild(textnode)
    //     count++
    //    }
    //    else{
        // list.insertBefore(li, list.childNodes[0]);
     //  }
        

        
       
      }
    })

    return list
  },

  handleSubmit(ev) {
    ev.preventDefault()
    const form = ev.target
    const details = document.querySelector('.details')
    const list = this.renderList(form.elements)
    form.reset()
   details.appendChild(list)
  },
}
getName.init()
