import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

function Confirm (props) {

    const continueButton = (e) => {
        e.preventDefault();
        // Process your form
        props.nextStep();
    }

    const backButton = (e) => {
        e.preventDefault();
        props.prevStep();
    }

    // const { values, handleChange } = props;
    const {values: {
        firstName, lastName, email, occuation, city, bio
    }} = props;

    const styles = {
        button: {
            margin: 15
        }
    }
    return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Confirmation Page" />
                <List>
                    <ListItem
                     primaryText="First Name"
                     secondaryText = { firstName }/>
                      <ListItem
                     primaryText="Last Name"
                     secondaryText = { lastName }/>
                      <ListItem
                     primaryText="email"
                     secondaryText = { email }/>
                      <ListItem
                     primaryText="occupation"
                     secondaryText = { occuation }/>
                      <ListItem
                     primaryText="city"
                     secondaryText = { city }/>
                      <ListItem
                     primaryText="bio"
                     secondaryText = { bio }/>
                </List>
                <RaisedButton 
                 label="Continue & save"
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

export default Confirm;