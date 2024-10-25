import Form from "./Form";
import Home from "./Home";
import {BrowserRouter,Route,Routes} from "react-router-dom"

function App() {
  return (
    <div
      className="bg-gradient-to-r from-purple-300 to-purple-700 h-screen
                    flex items-center justify-center"
    >
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Form/>} />
          <Route path = '/home' element = {<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
