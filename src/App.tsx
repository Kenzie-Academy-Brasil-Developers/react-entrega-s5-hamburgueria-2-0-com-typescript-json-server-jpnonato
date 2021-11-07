import './App.css';
import Routes from './routes'
import { GlobalStyle } from './styles';
import { ToastContainer } from "react-toastify"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GlobalStyle />
        <Routes />
        <ToastContainer theme='light' position="top-center" autoClose={2000}/>
      </header>
    </div>
  );
}

export default App;
