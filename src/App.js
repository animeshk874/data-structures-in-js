import Header from './components/common/header/header.component';
import List from './components/common/list/list.component';
import { ToastContainer, Flip } from 'react-toastify';
import { DataContextProvider } from './context/DataContext'
import ErrorBoundary from './components/ErrorBoundry.component';
import Theme from "./context/Theme";
import styled from "styled-components";

import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <Theme>
      <Container>
        <ErrorBoundary>
          <DataContextProvider>
            <Header />
            <List />
          </DataContextProvider>
        </ErrorBoundary>
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
  width: 95%;
  max-width: 1400px;
  margin: auto;
  padding: 10px;
`;
