import { createStore } from "redux"

const add = document.getElementById("add")
const minus = document.getElementById("minus")
const number = document.querySelector("span")

const countModifier = (count = 0, action) => {
  if (action.type === "add") {
    return count + 1
  } else if (action.type === "minus") {
    return count - 1
  } else {
    return count
  }
}

const countStore = createStore(countModifier)

const onChange = () => {
  number.innerText = countStore.getState()
}

const handleAdd = () => {
  countStore.dispatch({ type: "add" })
  onChange()
}

const handleMinus = () => {
  countStore.dispatch({ type: "minus" })
  onChange()
}

add.addEventListener("click", handleAdd)
minus.addEventListener("click", handleMinus)
