import React,{useState} from "react";

const RandomBox = () => {
    const [size, setSize] = useState({ width: 200, height: 200 });
  
    const GenerateRandomSize = () => {
      const randomWidth = Math.floor(Math.random() * 1001);
      const randomHeight = Math.floor(Math.random() * 1001);
      setSize({ width: randomWidth, height: randomHeight });
    };



  return (
    <div>
    <button onClick={GenerateRandomSize}>Random Width-Height</button>
    <div style={{ marginTop: '20px', border: '1px solid black', padding: '10px', width: 'fit-content' }}>
      <div style={{ width: size.width, height: size.height, backgroundColor: '#ccc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {size.width}*{size.height}
      </div>
    </div>
  </div>
  )
}

export default RandomBox