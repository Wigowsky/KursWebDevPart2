import './App.css';
import React, { createRef, PureComponent} from 'react';
import Counter from './Counter';

class App extends PureComponent {
  state = { 
    isCounterVisible: true, 
  }

  textInput = createRef();
  paragraphElement = createRef();

//   render() {
    
//     console.log(this.textInput);
    
//     return ( 
//     <div>
//       <input ref={this.textInput}
//       type="text"/>
//       <input
//       type="number"
//       ></input>
//       <p ref={this.paragraphElement}>hello ref tutaj !</p>
//       <button onClick={this.focusTextInput}>Ustaw focus na input</button>
//       <button onClick={this.addChar}>Add Char</button>
//       {/* focus nastepuje na input z ref */}
//     </div>  );
//   }

//   focusTextInput = () => this.textInput.current.focus();

//   addChar = () => this.paragraphElement.current.textContent += '!';
// }
 

render() {

  const counterElement = this.state.isCounterVisible ? <Counter/> : null;
  
  return ( 
  <div>
    <p ref={this.paragraphElement}>hello ref tutaj !</p>
    <button onClick={this.addChar}>Add Char</button>
    {/* focus nastepuje na input z ref */}
    {counterElement}
    <button onClick={this.showHideCounter}>Pokaż/Ukryj Counter</button>
  </div>  );
}

addChar = () => this.paragraphElement.current.textContent += '!';

showHideCounter = () => this.setState(prevState => ({
 isCounterVisible: !prevState.isCounterVisible,
}));

}


export default App;

