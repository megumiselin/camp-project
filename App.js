import React from 'react'; 
import ReactDOM from 'react-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {

 return(
 
   <div className='App'>
    <h1>React   Dersleri </h1>

    <Hosgeldiniz isim="Megumi">
        <h3>props.children burdan gelir</h3>
    </Hosgeldiniz>
   </div>

 );  
    
}

export default App ;

function Hosgeldiniz (props)  {
  return <div>  
 <p>Hosgeldiniz , {props.isim}</p> 
 {props.children} 
</div>;

}

