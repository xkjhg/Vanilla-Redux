import { createStore } from "redux"

const form = document.querySelector("form")
const input = document.querySelector("input")
const ul = document.querySelector("ul")

const ADD_TODO = "add_todo"
const DELETE_TODO = "delete_todo"

const addToDo = text => {
  return {
    type: ADD_TODO,
    text
  }
}

const deleteToDo = id => {
  return {
    type: DELETE_TODO,
    id
  }
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      const newToDoObj = { text: action.text, id: Date.now() }
      return [newToDoObj, ...state]
    case DELETE_TODO:
      const cleaned = state.filter(toDo => toDo.id !== action.id)
      return cleaned
    default:
      return state
  }
}

const store = createStore(reducer)

const dispatchAddToDo = text => {
  store.dispatch(addToDo(text))
}

const dispatchDeleteToDo = event => {
  const id = parseInt(event.target.parentNode.id)
  store.dispatch(deleteToDo(id))
}

const paintToDo = () => {
  const toDos = store.getState()
  ul.innerText = ""
  toDos.forEach(toDo => {
    const li = document.createElement("li")
    const btn = document.createElement("button")
    btn.innerText = "X"
    btn.addEventListener("click", dispatchDeleteToDo)
    li.id = toDo.id
    li.innerText = toDo.text
    li.appendChild(btn)
    ul.appendChild(li)
  })
}

store.subscribe(paintToDo)

const onSubmit = event => {
  event.preventDefault()
  const toDo = input.value
  input.value = ""
  dispatchAddToDo(toDo)
}

form.addEventListener("submit", onSubmit)
