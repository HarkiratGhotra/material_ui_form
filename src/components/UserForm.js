import React from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

function UserForm (props) {
    console.log('props', props)
    const {step} = props.userInfo;
    // return (
    //     <FormUserDetails 
    //             nextStep ={props.nextStep}
    //             handleChange = {props.handleChange}
    //             values = {props.values} />
    // )

    const renderSwitch = (step) => {
        switch(step) {
            case 1 :
                return (
                    <FormUserDetails 
                    nextStep ={props.nextStep}
                    handleChange = {props.handleChange}
                    values = {props.values} />
                )
            case 2: 
                return (
                    <FormPersonalDetails 
                    nextStep ={props.nextStep}
                    prevStep = {props.prevStep}
                    handleChange = {props.handleChange}
                    values = {props.values} />
                )
            case 3:
            return (
                <Confirm 
                    nextStep ={props.nextStep}
                    prevStep = {props.prevStep}
                    values = {props.values} />
            )
            case 4:
            return (
                <Success />
            )
            default:
                return;
        }
    }

    return (
        <React.Fragment>
            {renderSwitch(step)}
        </React.Fragment>
    )
}

export default UserForm;