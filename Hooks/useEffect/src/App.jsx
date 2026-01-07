import { useEffect, useState } from "react";

function App(){

  const [user,setUser]=useState([]);
  const [name,setName]=useState("");
  const [count,setCount]=useState(30);
 
  useEffect(()=>{
 async function GithubProfile() {
      const response=await fetch(`https://api.github.com/users?per_page=${count}`);
      const data=await response.json();

      setUser(data);
  }
  GithubProfile();
  },[count])

  function handleChange(e){
    setName(e.target.value.toUpperCase())
  }
  return (
    <>
    <input type="number" value={count} onChange={(e)=>setCount(e.target.value)} />
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap",gap:"10px"}}>
      {user.map(user=>(
        <img src={user.avatar_url} height={"100px"} width={"100px"} key={user.login}/>
      ))}
    </div>
    </>
  )
}
export default App;