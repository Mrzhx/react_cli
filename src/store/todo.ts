import { observable, action } from 'mobx'


class TaskStore {
  @observable Test = [{ name: 'xiaoming', key: 'xxxx' }]
  @action addTask() { /* ... */ }
}

export default new TaskStore()