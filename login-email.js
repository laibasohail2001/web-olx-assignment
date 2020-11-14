// import React  from 'react';

// import firebase from '../config/firebase';

// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';


// class Login2 extends React.Component {
//     state = { isSignedIn: false}
//     uiConfig = {
//         signInFlow: "popup",
//         signInOptions: [
//             firebase.auth.GoogleAuthProvider.PROVIDER_ID
//         ],
//         callbacks: {
//             signInSuccess: () => false
//         }
//     }
//     componentDidMount = () => {
//         firebase.auth().onAuthStateChanged(user => {
//             this.setState({ isSignedIn: !!user})
//             console.log("user",user)
//     })

//     }
    
// render() {
//     return (
//         <div>
//             {this.state.isSignedIn ? (
//                 <span>
//                     <button onClick={() => firebase.auth.signOut()}>SinOut</button>
//                     <h1>Welcome {firebase.auth().currentUser.displayName}</h1>

//                 </span>)
//                 : (
//                     <StyledFirebaseAuth
//                         uiConfig={this.uiConfig}
//                         firebaseSuth={firebase.auth()}
//                     />
//                 )
//                 }
//         </div>
//     )
//             }
//         }
//         export default Login2;
