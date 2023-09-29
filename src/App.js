import Form from "./auth/Form";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
import "./styles.css";

var isloggedIn = false;
function renderCondition(){
  return(
    (isloggedIn)?
    
      <div>
      <Header />
      <Note />
      <Footer />
      </div>  :<Form/>
  )
  }



export default function App() {
  return (
    <div className="App">

      {renderCondition()}
    </div>
  );
}
