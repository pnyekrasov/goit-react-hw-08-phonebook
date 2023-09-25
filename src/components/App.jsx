import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login';
import Phonebook from 'pages/Phonebook/Phonebook';
import Register from 'pages/Register/Register';
import { NavLink, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
          <li>
            <NavLink to="/login">Log In</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">Phonebook</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        {/* <Route path="/" element={<SharedLayout />}> */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Phonebook />} />
        {/* <Route index element={<Home />} />
      <Route path="movies" element={<Register />} />
      <Route path="/movies/:movieId" element={<Login />}>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route> */}
        {/* </Route> */}
      </Routes>
    </div>
  );
};
