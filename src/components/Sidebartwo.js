import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebartwo = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/login" activeClassName="active">
          Login
        </NavLink>
      </li>
      <li>
        <NavLink to="/register" activeClassName="active">
          Register
        </NavLink>
      </li>
      <li>
        <NavLink to="/services" activeClassName="active">
          Services
        </NavLink>
      </li>
      <li>
        <NavLink to="/my-reservations" activeClassName="active">
          My Reservations
        </NavLink>
      </li>
      <li>
        <NavLink to="/add-service" activeClassName="active">
          Add Service
        </NavLink>
      </li>
      <li>
        <NavLink to="/delete-service" activeClassName="active">
          Delete Service
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Sidebartwo;
