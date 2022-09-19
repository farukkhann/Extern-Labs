import { useEffect } from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let data=[
    {img:"https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800&h=500"},
    {img:"https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=500"},
    {img:"https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800&h=500"},
    {img:"https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg?auto=compress&cs=tinysrgb&w=800&h=500"},
    {img:"https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=800&h=500"}    
  ]



  useEffect(()=>{

  },[],)
  function handleclick(){
    if(count<4){
      setCount(count+1)
    }
    else{
      setCount(0)
    }
  }
  function handleback(){
    if(count>0){
      setCount(count-1)
    }
    else{
      setCount(3)
    }
  }
  return (
    <div className="App">
      <div id='container'>
        <button onClick={handleback}>prev</button>
      <img src={data[count].img} alt="image" />
      <button onClick={handleclick}>Next</button>
      </div>
    </div>
  )
}

export default App
