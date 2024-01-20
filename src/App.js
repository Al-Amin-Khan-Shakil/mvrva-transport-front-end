import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import BasicExample from './components/nav';
import BasicExample2 from './components/services';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <>
          <BasicExample />

          <Routes>
            <Route path="/api/v1/services" element={<BasicExample2 />} />
            <Route path="/reserve-form" element={<div>Link Content</div>} />
            <Route path="/my-reservations" element={<div>Action 3.1 Content</div>} />
            <Route path="/add-reservation" element={<div>Link Content</div>} />
            <Route path="/" element={<BasicExample2 />} />
          </Routes>
        </>
      </Router>
    </Provider>
  );
}

export default App;
