import logo from './logo.svg';
import './App.css';
import Hello from './mycomponents/Hello.js';
import Welcome from './mycomponents/Welcome';

// function App() {
//   // return (
//   //   // <div className="App">
//   //   //   {/* <header className="App-header">
//   //   //     <img src={logo} className="App-logo" alt="logo" />
//   //   //     <p>
//   //   //       Edit <code>src/App.js</code> and save to reload.
//   //   //     </p>

//   //   //     <h3>Bismillahir rahmanir rahim React Practicig start</h3>
//   //   //     <a
//   //   //       className="App-link"
//   //   //       href="https://reactjs.org"
//   //   //       target="_blank"
//   //   //       rel="noopener noreferrer"
//   //   //     >
//   //   //       Learn React Lina
//   //   //     </a>
//   //   //   </header> */}
//   //   // </div>
//   // );


// }


function App(){
   return (
     <div className="App">
         <Hello age = "25" name="Lina"></Hello>  
         <Hello age = "25" name="Haq"></Hello>  
         <Hello  age = "25" name="Kashif"></Hello>  
         <Hello age = "25" name="Kaisan"></Hello>  

         <Welcome></Welcome>
         <Welcome></Welcome>
         <Welcome></Welcome>
     </div>
   );
}

export default App;
