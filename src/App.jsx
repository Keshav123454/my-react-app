import { useState } from 'react'

function App() {
  const [data, setData] = useState([])

  const fetchData = async () => {
    try {
      const response = await fetch('https://dummyjson.com/users')
      const result = await response.json()
      const dataArray = Object.values(result)
      setData(result.users)
    } 
    catch (error){
      console.error("Error:", error)
    }
  }
  return (
  <>
    <div>
      <button onClick={fetchData}>Fetch Data</button>
    </div>
    <h2>User List</h2>
    <ul>
      {data.map((user, index) => (<li key={index}>
                                  <b>id:</b> {user.id}, 
                                  <b>name:</b> {user.firstName}, 
                                  <b>age:</b> {user.age}</li>))}
    </ul>
  </>
    )
}

export default App
