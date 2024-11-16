import { createContext, useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Counter from './Counter'
import Display from './Display'

export const store = createContext();

const App = () => {
  const [data, setData] = useState([
    {
       brandname: "Nokia"
    },
    {
      brandname: "Samsung"
    }
]);

  return (
    <>
      <store.Provider value={[data, setData]}>
      <div>
        <Counter/>
        <Display/>
      </div>
      </store.Provider>
    </>
  )
}

export default App
