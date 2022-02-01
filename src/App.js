import React from 'react';
import './App.css';

// function Helloworld(props){
//   console.log(props)
//   return(
//     <div id="hello">
//       <h3>{props.subtitle}</h3>
//       {props.mytext}
//     </div>
//   )
// }

class Helloworld extends React.Component {

  state = {
    show: true
  }

  toggleShow = ()=> {
    this.setState({show: !this.state.show})
  }

  render(){
    if(this.state.show){
      return(
      <div id="hello">
      <h3>{this.props.subtitle}</h3>
      {this.props.mytext}
      <button onClick={this.toggleShow}>Cambiar estado</button>
      </div>
      )
    }else{
      return <h1>
        No existen elementos
        <button onClick={this.toggleShow}>
          Toggle Show
        </button>
      </h1>
    }
  }
}
function App() {
  return (
    <div>This is my componet: 
      <Helloworld mytext="Hello" subtitle="loremp" /> 
      <Helloworld mytext="Hola" subtitle="loremp 2" /> 
      <Helloworld mytext="Hello!" subtitle="loremp 3" /> 
    </div>
  );
}

export default App;
