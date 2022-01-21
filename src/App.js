import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Row, Col, Toast} from 'react-bootstrap';
import { useState } from 'react';
import {messaging} from "./firebase"


function App() {

  // getToken();

  const [show, setShow] = useState(false);
  const [isTokenFound, setTokenFound] = useState(false);
  // getToken(setTokenFound);

  // onMessageListener().then(message => {
  //   setShow(true);
  // }).catch(err => console.log('failed: ', err));


const setShoww=async()=>{

// const res=await messaging.getToken();

getStartToken()
}

const getStartToken=()=>{


  messaging.getToken().then(async (currentToken) => {
    if (currentToken) {
     ;
        console.log('currentToken', currentToken);
        // await firestore.collection('users').doc(user?.uid).update({ token: currentToken })
    }
    else {
        // Show permission request.
        await RequestPermission();
        // setTokenSentToServer(false);
    }
   }).catch((err) => {
    // setTokenSentToServer(false);
    console.log(err);
   });
}



  // firebaseMessaging.requestPermission()
      //   .then(function () {
      //     // console.log('Notification permission granted.');
      //     return firebaseMessaging.getToken();
      //   })
      //   .then(async function (tokenFcm) {
      //     // console.log('token',tokenFcm)
      //     await firestore.collection('users').doc(userId).update({ token: tokenFcm })
      //   })
      //   .catch(function (err) {
      //     console.log('Unable to get permission to notify.', err);
      //   });



const RequestPermission = async () => {
  messaging.requestPermission()
      .then(function (permission) {
        console.log(permission);
          if (permission === 'granted') {
              console.log("have Permission");
              //calls method again and to sent token to server
              getStartToken();
          }
          else {
              console.log('permission is denied');
          }
      }).catch((err) => {
          console.log(err);
      })
}



  return (
    <div className="App">
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide animation style={{
          position: 'absolute',
          top: 20,
          right: 20,
        }}>
{isTokenFound && <h1> Notification permission enabled 👍🏻 </h1>}
{!isTokenFound && <h1> Need notification permission ❗️ </h1>}

          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">Notification</strong>
            <small>12 mins ago</small>
          </Toast.Header>
          <Toast.Body>There are some new updates that you might love!</Toast.Body>
        </Toast>
      <header className="App-header">


        <img src={logo} className="App-logo" alt="logo" />
        <Button onClick={() => setShow(true)}>Show Toast</Button>
        <Button onClick={() => setShoww()}>Show Toastdfddsds</Button>

      </header>


    </div>
  );
}

export default App;
