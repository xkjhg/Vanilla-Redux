import { createStore } from "redux"

const add = document.getElementById("add")
const minus = document.getElementById("minus")
const number = document.querySelector("span")

const ADD = "add"
const MINUS = "minus"

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1
    case MINUS:
      return count - 1
    default:
      return count
  }
}

const countStore = createStore(countModifier)

const onChange = () => {
  number.innerText = countStore.getState()
}

const handleAdd = () => {
  countStore.dispatch({ type: ADD })
  onChange()
}

const handleMinus = () => {
  countStore.dispatch({ type: MINUS })
  onChange()
}

add.addEventListener("click", handleAdd)
minus.addEventListener("click", handleMinus)
