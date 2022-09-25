import React from 'react';
import { withFirebase } from '../Firebase';

const signOutButton = ({ firebase}) => (
  <button type="Button" onClick={firebase.doSignOut}>
    Sign Out

  </button>
)

export default  withFirebase(signOutButton);