import React, {useState} from 'react';
import firebase from 'firebase'
import { Redirect, useHistory } from 'react-router-dom';
import {useAuthorization} from "../hooks/useAuthorization";
import {Input, Button} from 'semantic-ui-react'
import {styles} from "./styles";

import './forms.css'

const Login = () => {
  const user = useAuthorization()
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

  if (user) return <Redirect to="/" />;

  const getError = () => {
      switch (error) {
          case 'auth/invalid-email':
              return 'Provided email is invalid'
          case 'auth/wrong-password':
              return 'Provided password is invalid'
          default:
              return ''
      }
  }

  const handleSignIn = async () => {
      try {
          await firebase.auth().signInWithEmailAndPassword(email, password)
      } catch (error) {
          console.log({error})
          setError(error.code)
      }
  }

    const handleDemo = async () => {
        try {
            await firebase.firestore().collection('Users').doc('k7BillLP8pJmpC3MOvbZ').update({
                localization: null,
            })
            await firebase.auth().signInWithEmailAndPassword('demo@demo.com', 'demo1234')
        } catch (error) {
            console.log({error})
            setError(error.code)
        }
    }

  return (
      <div style={styles.root}>
          <div style={styles.title}>Quarantify</div>
          <div style={styles.form}>x
              <Input
                type="email"
                value={email}
                placeholder="E-mail"
                icon='user'
                iconPosition='left'
                size="huge"
                onChange={(e) => setEmail(e.target.value)}
                input={{
                    style: {
                        background: 'transparent',
                        borderRadius: 0,
                        borderBottom: '3px solid white',
                        width: '90%',
                        color: 'white',
                        margin: '20px'
                    }
                }}
              />
              <Input
                  type="password"
                  value={password}
                  placeholder="Password"
                  icon='lock'
                  iconPosition='left'
                  size="huge"
                  onChange={(e) => setPassword(e.target.value)}
                  input={{
                      style: {
                          background: 'transparent',
                          borderRadius: 0,
                          borderBottom: '3px solid white',
                          width: '90%',
                          color: 'white',
                          margin: '20px'
                      }
                  }}
              />
              <Button onClick={handleSignIn} style={styles.button} circular>
                Sign In
              </Button>
              <Button onClick={handleDemo} style={styles.demoButton} circular>
                  Try demo
              </Button>
              <div style={styles.error}>{error && getError(error)}</div>
          </div>
          <p style={styles.additionalText}>
              Don't have an account yet? <span onClick={() => history.push('/register')} style={styles.createAccount}>Create an account</span>
          </p>
      </div>
  )
};

export default Login;
