

import useState from React;

export default function Form() {
    const[fName,setFName]=useState('');
    const[lName,setLname]=useState('');
  
    function handleFirstNameChange(e) {
      setFName =( e.target.value);
    }
  
    function handleLastNameChange(e) {
    setLname = (e.target.value);
    }
  
    function handleReset() {
        setFirstName('');
        setLastName('');
    }
  
    return (
      <form onSubmit={e => e.preventDefault()}>
        <input
          placeholder="First name"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <input
          placeholder="Last name"
          value={lastName}
          onChange={handleLastNameChange}
        />
        <h1>Hi, {firstName} {lastName}</h1>
        <button onClick={handleReset}>Reset</button>
      </form>
    );
  }
  