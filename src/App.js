import logo from './logo.svg';
import './App.css';
import './Button.css';
import  React , {useState} from 'react';

function App() {

  const[my_condition,ChngMycondition]=useState(false)


  let Mydiv=''; //another way of declaring variable;
  const showdiv=()=>
  {
    ChngMycondition(true);
  }
  
  const hidediv=()=>
  {
    ChngMycondition(false);
  }
  

 if(my_condition)
 {
  Mydiv=(

    <div className="MyDiv">
    <h1>current status: {my_condition}</h1>

    </div>
  );
 }

 else
 {

 }

  return (
    <div>
    <button className="myButton"  onClick={showdiv}> Click Here To Show Div </button>
    <button className="myButton"  onClick={hidediv}> Click Here To hide Div </button>
    
    {Mydiv}
        
       
    </div>
  );
}

export default App;
