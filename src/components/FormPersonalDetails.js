import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


function FormPersonalDetails (props) {

    const continueButton = (e) => {
        e.preventDefault();
        props.nextStep();
    }

    const backButton = (e) => {
        e.preventDefault();
        props.prevStep();
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
                <AppBar title="Enter Personal Details" />
                <TextField 
                    hintText = "Enter Your Occupation"
                    floatingLabelText = "Occupation"
                    onChange ={handleChange('occupation')}
                    defaultValue = {values.occupation}
                />
                <TextField 
                    hintText = "Enter your City"
                    floatingLabelText = "City"
                    onChange ={handleChange('city')}
                    defaultValue = {values.city}
                />
                <TextField 
                    hintText = "Enter your bio"
                    floatingLabelText = "Bio"
                    onChange ={handleChange('bio')}
                    defaultValue = {values.bio}
                />
                <RaisedButton 
                 label="Continue"
                 primary = {true}
                 style = {styles.button}
                 onClick = {continueButton}
                />
                <RaisedButton 
                 label="Back"
                 primary = {false}
                 style = {styles.button}
                 onClick = {backButton}
                />
            </React.Fragment>
        </MuiThemeProvider>
    )
}
export default FormPersonalDetails;