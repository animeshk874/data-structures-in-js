import './App.css';
import {Header} from './components/common/header.component';
import List from './components/common/list/list.component';
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <div className="App">
      <Header></Header>
      <List></List>
    </div>
    <ToastContainer className="pr-2 pl-2" position="bottom-right"
      autoClose={2000}
      hideProgressBar
      newestOnTop={false}
      transition={Flip}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover>
    </ToastContainer>
    </>
  );
}

export default App;
