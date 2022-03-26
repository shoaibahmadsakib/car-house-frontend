import "./App.css";
import Header from "./component/Shop/Header/Header";

import Shop from "./component/Shop/Shop";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <div className="para_style">
      <h1>Question and answer</h1>
      <b>How react work?</b>
      <p>React is a JavaScript Libarary for building user interfaces.

        React has a virtual Dome. It has a one Root directory.
        It has a JSX element. React use Props by passing data parents to children, and It work just like a block element ,which is component
        and a bable complier can create jsx to pure JavaScript.
        
      </p>
      <b>How UseState work?</b>
      <p>Use state is a Hook. Here Have a initial state and a update value state. Behind the seen It's look like a array, and a function.
        Here You can create a value and Update by using "useState" hook.
      </p>
      </div>
    

    </div>
  );
}

export default App;
