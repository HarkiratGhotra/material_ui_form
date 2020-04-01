import React from 'react';
import UserForm from './components/UserForm';
import {useState, useEffect} from 'react';

function App() {
  const [userInfo, setState] = useState({
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
  });

  const nextStep = () => {
   const {step} = userInfo;
    console.log('step', step)
    setState(prevState => ({
      ...prevState, step: step + 1
    }))
    
    console.log(userInfo);
  }

  const prevStep = () => {
    const { step } = userInfo;
    console.log('prev step', step);
    setState(prevState => ({
      ...prevState, step: step - 1
    }))
  }

  const handleChange = input => e => {
    e.persist()
    console.log('input', input)
    setState(prevState => ({
      ...prevState, [input]:e.target.value
    }))

  }
  const { firstName, lastName, email, occupation, city, bio} = userInfo;
  const values ={ firstName, lastName, email, occupation, city, bio};

  return (
    <div>
      <UserForm userInfo = {userInfo} 
                nextStep={nextStep}
                prevStep={prevStep}
                handleChange = {handleChange}
                values = {values}/>
    </div>
  );
}

export default App;
