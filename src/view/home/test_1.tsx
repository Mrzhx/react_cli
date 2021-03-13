import { observer } from 'mobx-react'
import { change_date } from '@store/todo'

const MyComponent = observer(() => (
  <div>
    <span onClick={change_date}>aaaa</span>
  </div>
))

export default MyComponent;