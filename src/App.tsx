import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import {
  CookieConsent,
  Footer,
  Header,
  ScrollToTop,
  SkipLink,
} from './components';
import {
  CookiePolicy,
  Education,
  Experience,
  Home,
  NotFound,
  Person,
  Skills,
} from './pages';

function App() {
  return (
    <Router>
      <SkipLink />
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
            path="/cookie-policy"
            element={<CookiePolicy />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </main>
      <Footer />
      <CookieConsent />
      <ScrollToTop />
    </Router>
  );
}

export default App;
