import Header from './components/common/header/header.component';
import List from './components/common/list/list.component';
import { ToastContainer, Flip } from 'react-toastify';
import { DataContextProvider } from './context/DataContext'
import ErrorBoundary from './components/ErrorBoundry.component';
import Theme from "./context/Theme";
import styled from "styled-components";
import * as themes from './theme/schema.json';
import { setToLS } from './utils/storage';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  setToLS('all-themes', themes.default);
  return (
    <Theme>
      <Container>
        <div className='app'>
          <ErrorBoundary>
            <DataContextProvider>
              <Header />
              <List />
            </DataContextProvider>
          </ErrorBoundary>
        </div>
      </Container>
      <ToastContainer
        className="pr-2 pl-2"
        position="bottom-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        transition={Flip}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Theme >
  );
}

export default App;

const Container = styled.div`
  margin: 0;
  padding: 0;
  min-width: 100vw;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: ${props => {
    return props?.theme?.colors?.body
  }} !important;
  .app{
    width: 95%;
    max-width: 1400px;
    margin: auto;
    padding: 10px;
  }
`;
