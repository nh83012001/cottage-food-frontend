import React from 'react';
import { NavLink } from "react-router-dom";

const UserPartiesButton = (props) => {


    return(
      <div>
      <NavLink to='/myparties'>
        <button>
          My Parties
        </button>
      </NavLink>
      </div>

  )

}

export default UserPartiesButton