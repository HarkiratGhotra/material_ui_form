import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

function Success () {

    const styles = {
        button: {
            margin: 15
        }
    }
    return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Success Page" />
                <h1>THank you for your submission </h1>
                <p>you will get email</p>
            </React.Fragment>
        </MuiThemeProvider>
    )
}

export default Success;