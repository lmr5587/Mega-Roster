
const getName={
init(){
const personForm = document.querySelector('form')
personForm.addEventListener('submit',(ev) => this.handleSubmit(ev))
},

renderListItem(name, value) {
    const li = document.createElement('li')
    li.innerHTML = `${name}: ${value}`
    return li
  },

    renderList(person) {
    const list = document.createElement('ul')
    Array.from(person).map((input, _i, _elementsArray) => {
      if (input.value) {
        let value = input.value
        let li = this.renderListItem(input.name, value)
        list.appendChild(li)
      }
    })

    return list
  },

  handleSubmit(ev) {
    ev.preventDefault()
    const form = ev.target
    const details = document.querySelector('.details')
    const list = this.renderList(form.elements)

   details.appendChild(list)
  },
}
getName.init()
