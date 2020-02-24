import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";

function Home() {
  return <h2>Halaman Home</h2>;
}

function ListView() {
  return (
    <div>
      <h2>Halaman Users</h2>
      <ul>
        <Link to='users/irfan'>Irfan</Link>
        <br />
        <Link to='users/bob'>Bob</Link>
      </ul>
    </div>
  );
}

function DetailView({ match }) {
  return <h2>Ini halaman {match.params.name}</h2>;
}

function NotFound() {
  return <h2>404, Halaman tidak ditemukan</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">User</Link>
          </li>
        </nav>

        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/users" exact component={ListView} />
            <Route path="/users/:name" exact component={DetailView} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
