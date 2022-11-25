import React from 'react';
// import logo from './logo.svg';
import './App.css';

const Test = ({title}) => {
  return(
    <h1>{title}</h1>
  )
}

function App() {

  const Kaiser = ['1', '2', '3']

  return (  
    <div className="App">
      <Test title={'Titre test'}></Test>
      {
        Kaiser.map((e, i) => {
          return <span key={i}>{e}</span>
        })
      }
    </div>
  );
}

// export default App;
export {App}
