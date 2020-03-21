import background from "../assets/images/background-dark.png";

export const styles = {
    root: {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    form: {
        maxWidth: '90%',
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: '75%',
        background: 'white',
        color: '#828282',
        fontSize: '18px',
        margin: '10px'
    },
    demoButton: {
        width: '75%',
        background: 'transparent',
        border: '3px solid white',
        color: 'white',
        fontSize: '18px',
        margin: '10px'
    },
    additionalText: {
        fontSize: '14px',
        color: 'white',
        marginTop: '50px'
    },
    createAccount: {
        fontSize: '14px',
        color: 'white',
        fontWeight: 700,
    },
    error: {
        color: 'red',
        fontWeight: 600,
        marginTop: '20px'
    },
    title: {
        color: '#F7B15C',
        fontSize: '28px',
        marginBottom: '100px',
        fontWeight: 600,
    },
    registerTitle: {
        color: '#F7B15C',
        fontSize: '28px',
        marginBottom: '50px',
        fontWeight: 600,
    }
}