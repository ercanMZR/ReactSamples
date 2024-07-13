import React,{useState} from 'react'
import './Backround.css';


function ChangeColor() {
    
        const [color, setColor] = useState('black');
      
        const handleChangeColor = () => {
          setColor('red');
        }

  return (
    <div className="container">
      <button onClick={handleChangeColor}>Change Color</button>
      <div className="box" style={{ backgroundColor: color }}></div>
      <div className="box" style={{ backgroundColor: color }}></div>
    </div>
  )
}

export default ChangeColor