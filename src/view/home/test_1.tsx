import { Store } from '@store/index'
import { useEffect } from 'react'

const MyApp =  () => {
  useEffect(()=> {
    console.log(Store.TaskStore.Test)
  }, [])
  
  return <div>hello</div>
}

export default MyApp