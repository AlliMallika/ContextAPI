import React, {useContext, useState} from 'react'
import { store } from './App'

const Display = () => {
    const [data, setData] = useContext(store);
    const [name, setName] = useState('');
    const submitHandler = e => {
        e.preventDefault();
        setData([...data, {brandname:name}])
    }
  return (
    <>
    <div className="card" style={ {marginTop: "10px", marginBottom: "10px"}}>
    <div className="card-body">
        { data.map(item => <h3 className='card-title'>{ item.brandname}</h3> )}
        <form className='form' onSubmit={submitHandler}>
           <input type="text" style={{ marginRight: "5px"}} onChange={(e) => setName(e.target.value)} placeholder='Enter brandname'/>
           <input type="submit" className='btn btn-secondary' value="Add" />
        </form>
    </div>
   </div>
   </>
  )
}

export default Display