import  { useState } from 'react'


const Counter = () => {
    const [count, setCount] = useState(0);
    const handleTambah = () => {
        setCount(count + 1);
    }

    const handleKurang = () => {
        setCount(count - 1);
    }
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleKurang} style={{marginRight: "10px", backgroundColor: "red", color: "white"}}>Kurang</button>
      <button onClick={handleTambah} style={{marginLeft: "10px", backgroundColor: "green", color: "white"}}>Tambah</button>
    </div>
  )
}

export default Counter
