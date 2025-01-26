
import './App.css'
import Counter from './counter';
import Team from './Team';
import EvenHandle from './Persone';
import Users from './User';
import Friends from './Friends';
import Posts from './post';

function App() {

  function handleClick(){
    
    alert('button clicked');
  }

// function buttonClick(){
//   alert('Mokarama Akter');
// }
// function btnClick(){
//   alert('Hubby:Abu SuFyan')
// }

// const addToFive = (num) =>{
//   alert(num + 5);
// }

  return (
    <>
      <h3>React core concept 2 </h3>
      <Posts></Posts>
     <Friends></Friends>
      <Users></Users>
      <EvenHandle></EvenHandle>
      <Team></Team>
     <Counter></Counter>
      <button onClick={handleClick} className='btn'>Click Me</button>
  
      {/* <button onClick={buttonClick} className='button'>Bye Now</button>
      <button onClick={btnClick} className='btn'>Log In</button>
      <button onClick={() =>{alert('third click')}} className='button'>Third </button>
      <button onClick={() => {alert('Fourth')}} className='button'>Fourth Click</button>
      <button onClick={() => {alert('Five Click')}}>Five Click</button>
      <button onClick={() => {alert('Six click')}} className='button'>Six Click</button> */}
      {/* <button onClick={() => addToFive(3)}>Seven</button> */}
      
    </>
  )
}

export default App
