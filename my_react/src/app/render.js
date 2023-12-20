
import {useState} from 'react';
export default function Counter (){


    const[number,setNumber]=useState(0);


    return (

        <>

        <h1> {number }</h1>
        
        
        
        
        
        </>
    )
}



export default fucnction Form(){

    const {isSEnt,setSent}=useState(false);


    const [messsage,setMesssage]=useState("hii");


    if (isSent){


        return <h1> hiii ur message is sent</h1>
    }


    return (

        <form OnSubmit={(e)=>{
            e.pereventDefault();
            SpeechSynthesisEvent(true);
            sendMessage(message);

        }}
        Placeholder="Message"
        value={message}
        onChange={e=>setMesssage(e.target.value)/>
        <buttton type="submit">send</buttton>
    )

    } 




    
}


