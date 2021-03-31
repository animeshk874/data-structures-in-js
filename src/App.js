import { Fragment } from 'react';
import Header from './components/common/header/header.component';
import List from './components/common/list/list.component';
import { ToastContainer, Flip } from 'react-toastify';
import { DataContextProvider } from './context/DataContext'

import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import ErrorBoundary from './components/ErrorBoundry.component';

function App() {
  return (
    <Fragment>
      <div className="App">
        <ErrorBoundary>
          <DataContextProvider>
            <Header />
            <List />
          </DataContextProvider>
        </ErrorBoundary>
      </div>
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
    </Fragment >
  );
}

export default App;
