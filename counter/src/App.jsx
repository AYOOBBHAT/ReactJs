import './App.css'

function App(){
  let counter ;

  const addVal=()=>{
    
    console.log("clicked",counter);
    counter=counter+1;
  }
  return (
  <>
  
  <h1>react </h1>
  <h2>counter:{counter}</h2>
  <button onclick={addVal}>Add val</button>
  
  <button >decr val</button>
  
  </>)
}

export default App;