import React, {useContext} from 'react'
import { store } from './App'

const Counter = () => {
    const [data, setData] = useContext(store);
  return (
   <div className="card">
    <div className="card-body">
         <h2 className='card-title'>Count: {data.length}</h2>
    </div>
   </div>
  )
}

export default Counter