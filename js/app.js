$(document).foundation()

const megaroster = {
    students:[],
  init(listSelector) {
      this.studentList=document.querySelector(listSelector)
      this.max=0
    document
      .querySelector('#new-student')
      .addEventListener('submit', this.addStudent.bind(this))
  },

  addStudent(ev) {
    ev.preventDefault()
    const f=ev.target
    const student = {
        id: this.max + 1,
        name:f.stidentName.value,
    }
    const listItem = this.buildListItem(student)
    this.studentList.appendChild(listItem)
    this.max++
  },
  buildListItem(student){
    const li =document.createElement('li')
    li.textContent=student.name
    return li
  }
}
megaroster.init('#studentList')