import { useState } from "react";

export default function App(){
  // let count=0;

  // const incrementNumber=()=>{
  //   count++;
  //   console.log(count);
  //   const para=document.querySelector('p');
  //   para.textContent=`Counter:${count}`;
  // }
let [count,setCount]=useState(0);
function incrementNumber(){
  count++;
  setCount(count);
}

  return (
    <>
      <p>Counter:{count}</p>
     <button onClick={incrementNumber}>Increment:{count}</button>
    </>
  )
}