import React from "react";

import React from "react";

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN": {
      return { currentUser: action.payload };
    }
    case "LOGOUT": {
      return { currentUser: null };
    }
    default:
      state;
  }
};

export default AuthReducer;
