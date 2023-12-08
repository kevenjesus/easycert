import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyle } from './styles/global';
import Routes from './routes';


function App() {
  
  
  return (
    
    <div>
      <GlobalStyle />
      <Routes />
      <div>
       
        <ToastContainer 
          theme='colored'
          hideProgressBar={true}
        />
      </div>
    </div>
  );
}

export default App;
