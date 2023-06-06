import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout.js';
import Modules from './components/pages/Modules.js';
import Students from './components/pages/Students.js';

function App() {
  const loggedInUser = 'Graeme';

  return (
    <BrowserRouter>
      <Layout loggedInUser={loggedInUser}>
        <Routes>
          <Route path='/' element={<Modules />} />
          <Route path='/students' element={<Students />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
