// function Profile() {
//     return (
//       <img
//         src="https://i.imgur.com/MK3eW3As.jpg"
//         alt="Katherine Johnson"
//       />
//     );
//   }
  
//   export default function Gallery() {
//     return (
//       <section>
//         <h1>Amazing scientists</h1>
//         <Profile />
//         <Profile />
//         <Profile />
//       </section>
//     );
//   }
  
const listItems=people.map(person=><li>{person}</li>);
const items=people.map((person,index)=>(<li key={index}>{person]</li>));
const chemist=people.filter(person=>person.profession==='chemist');

const listchemist=chemist.map(person=><li></li>);

import React ,{useState} from "react";

const ExampeComponent =()=>{

  const [count ,setCount]=useState(0);




const increament=()=>{
  setCount(preCount=>prevCount+1);
}


return (<div>
  <p>count:{count}</p>
  <button onClick={increament}>increament</button>
</div>)

}

