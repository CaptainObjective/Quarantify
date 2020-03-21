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
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmedPassword, setConfirmedPassword] = useState('')
    const [error, setError] = useState('')

    console.log({user})

    if (user) return <Redirect to="/" />;

    const getError = () => {
        console.log({error})
        switch (error) {
            case 'auth/invalid-email':
                return 'Provided email is invalid'
            case 'name-required':
                return 'Name is required'
            case 'auth/wrong-password':
                return 'Provided password is invalid'
            case 'auth/weak-password':
                return 'Password should contain at least 8 characters'
            case 'password-mismatch':
                return 'Provided passwords are not the same'
            default:
                return ''
        }
    }

    const handleSignUp = () => {
        if (!name) {
            setError('name-required')
            return
        }

        if (password !== confirmedPassword) {
            setError('password-mismatch')
        }

        if (password === confirmedPassword) {
            firebase.auth().createUserWithEmailAndPassword(email, password).then(userCredential => {
                const userId = userCredential.user.uid

                firebase.firestore().collection('Users').add({
                    userId,
                    username: name,
                    email,
                })
            }).catch(error => setError(error.code))
        }
    }

    return (
        <div style={styles.root}>
            <div style={styles.registerTitle}>Quarantify</div>
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
                type="name"
                value={name}
                placeholder="Name"
                icon='user'
                iconPosition='left'
                size="huge"
                onChange={(e) => setName(e.target.value)}
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
            <Input
                type="password"
                value={confirmedPassword}
                placeholder="Confirm password"
                icon='lock'
                iconPosition='left'
                size="huge"
                onChange={(e) => setConfirmedPassword(e.target.value)}
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
            <Button onClick={handleSignUp} style={styles.button} circular>
                Sign Up
            </Button>
            <div style={styles.error}>{error && getError(error)}</div>
            <p style={styles.additionalText}>
                Already have an account? <span onClick={() => history.push('/login')} style={styles.createAccount}>Sign In</span>
            </p>
        </div>
    )
};

export default Login;
