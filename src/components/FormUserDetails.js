import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

function FormUserDetails (props) {

    const continueButton = (e) => {
        e.preventDefault();
        props.nextStep();
    }

    const { values, handleChange } = props;
    console.log('values', values)

    const styles = {
        button: {
            margin: 15
        }
    }
    return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Enter USer Details" />
                <TextField 
                    hintText = "Enter your First Name"
                    floatingLabelText = "First Name"
                    onChange ={handleChange('firstName')}
                    defaultValue = {values.firstName}
                />
                <TextField 
                    hintText = "Enter your Last Name"
                    floatingLabelText = "Last Name"
                    onChange ={handleChange('lastName')}
                    defaultValue = {values.lastName}
                />
                <TextField 
                    hintText = "Enter your Email"
                    floatingLabelText = "Email"
                    onChange ={handleChange('email')}
                    defaultValue = {values.email}
                />
                <RaisedButton 
                 label="Continue"
                 primary = {true}
                 style = {styles.button}
                 onClick = {continueButton}
                />
            </React.Fragment>
        </MuiThemeProvider>
    )
}

export default FormUserDetails;