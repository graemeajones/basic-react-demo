import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout.js';
import Home from './components/views/Home.js';
import Modules from './components/views/Modules.js';
import Students from './components/views/Students.js';

function App() {
  const loggedInUser = 'Graeme';

  return (
    <BrowserRouter>
      <Layout loggedInUser={loggedInUser}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/modules' element={<Modules />} />
          <Route path='/students' element={<Students />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
