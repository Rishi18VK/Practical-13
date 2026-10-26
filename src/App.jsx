import { HashRouter, MemoryRouter, Routes, Route, Link } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import { renderToString } from "react-dom/server";
const Pages = () => (
  <>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
    <Routes>
      <Route path="/" element={<p>Home page content</p>} />
      <Route path="/about" element={<p>About page content</p>} />
    </Routes>
  </>
);
export default function App() {
  const html = renderToString(
    <StaticRouter location="/about"><Pages /></StaticRouter>
  );
  return (
    <div className="app">
      <h1>Router Types</h1>
      <div className="card">
        <h2>1. HashRouter</h2>
        <p>Keeps the route after # in the URL. Use: static hosting where server cannot redirect.</p>
        <HashRouter><Pages /></HashRouter>
      </div>
      <div className="card">
        <h2>2. MemoryRouter</h2>
        <p>Keeps history in memory, URL never changes. Use: testing, React Native, embedded widgets.</p>
        <MemoryRouter><Pages /></MemoryRouter>
      </div>
      <div className="card">
        <h2>3. StaticRouter</h2>
        <p>Renders a fixed location, no navigation. Use: server-side rendering (SSR). HTML generated for /about:</p>
        <pre>{html}</pre>
      </div>
    </div>
  );
}
