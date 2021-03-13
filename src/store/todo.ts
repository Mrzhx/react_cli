import { observable, action } from "mobx"

const todosById = observable({
  "TODO-123": {
    title: "find a decent task management system",
    done: false
  }
})

const change_date = action(() => {
  console.log('修改了todosByIdxxxx')
  todosById["TODO-123"].title = 'hello-tom'

  console.log(Object(todosById["TODO-123"]))
})

export { change_date }