import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { Footer, Header } from './components';
import { Education, Experience, Home, NotFound, Person, Skills } from './pages';

function App() {
  return (
    <Router>
      <Header />
      <main id="main-content">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/skills"
            element={<Skills />}
          />
          <Route
            path="/experience"
            element={<Experience />}
          />
          <Route
            path="/education"
            element={<Education />}
          />
          <Route
            path="/person"
            element={<Person />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
