import * as React from 'react';

// This import loads the firebase namespace along with all its type information.
import * as firebase from 'firebase/app';

// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/storage';

import { Route } from 'react-router-dom';
import './App.css';

const firebaseConfig = {
  apiKey: "AIzaSyBv-TWH4zOPRmacKenP84TGGL5pMmH32fQ",
  authDomain: "muncoordinated-94981.firebaseapp.com",
  databaseURL: "https://muncoordinated-94981.firebaseio.com",
  projectId: "muncoordinated-94981",
  storageBucket: "muncoordinated-94981.appspot.com",
  messagingSenderId: "515236498921"
};

firebase.initializeApp(firebaseConfig);

import Onboard from './components/Onboard';
import Homepage from './components/Homepage';
import Committee from './components/Committee';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/onboard" component={Onboard} />
        <Route exact path="/committees" component={Onboard} />
        <Route path="/committees/:committeeID" component={Committee} />
      </React.Fragment>
    );
  }
}

export default App;
