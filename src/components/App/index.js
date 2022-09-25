// import React, { Component } from 'react';

// import { BrowserRouter, Route, Routes } from 'react-router-dom';

//  import * as ROUTES from '../constants/routes'

// // import LandingPage from '../Landing/index';
// // import SignUpPage from '../SignUp/index';
// // import SignInPage from '../SignIn/index';
// // import PasswordForgetPage from '../PasswordForget/index';
// // import HomePage from '../Home/index';
// // import AccountPage from '../Account/index';
// // import AdminPage from '../Admin/index';
// // import Navigation from '../Navigation/index';
// // import { withFirebase } from '../Firebase/context';

// // class AppComponent extends Component {
// //   constructor(props) {
// //     super(props);

// //     this.state = {
// //       authUser: null,
// //     };
// //   }
// //   componentDidMount() {
// //     this.listener = this.props.firebase.auth.onAuthStateChanged(
// //       authUser => {
// //         authUser
// //           ? this.setState({ authUser })
// //           : this.setState({ authUser: null });
// //       },
// //     );
// //   }

// //   componentWillUnmount() {
// //     this.listener();
// //   }

// //   componentWillUnmount() {
// //     this.listener();
// //   }

//   render() {
//     return (
//       <React.StrictMode>
//           <BrowserRouter>
//               <Navigation authUser={this.state.authUser}/>
//               <hr />
//               <Routes>
//                 <Route exact path={ROUTES.LANDING} element={<LandingPage />} />
//                 <Route path={ROUTES.SIGN_UP} element={<SignUpPage/>} />
//                 <Route path={ROUTES.SIGN_IN} element={<SignInPage/>} />
//                 <Route path={ROUTES.PASSWORD_FORGET} element={<PasswordForgetPage/>} />
//                 <Route path={ROUTES.HOME} element={<HomePage />} />
//                 <Route path={ROUTES.ACCOUNT} element={<AccountPage/>} />
//                 <Route path={ROUTES.ADMIN} element={<AdminPage/>} />
//               </Routes>
//           </BrowserRouter>  
//       </React.StrictMode>
//     );
//   };


// const App1 = withFirebase(AppComponent);
// export default App1;