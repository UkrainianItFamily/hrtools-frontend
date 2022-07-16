import { useState } from 'react';
import { useSelector } from 'react-redux';

import FormSubmitText from './form-submit-text';
import SignUpForm from './sign-up-form';

const SignUp = () => {
  const [formSubmit, setformSubmit] = useState(false);
  const authLoader = useSelector((state) => state.authReducer.waiter);
  const [formData, setformData] = useState({});

  return !formSubmit ? (
    <SignUpForm
      setformSubmit={setformSubmit}
      setformData={setformData}
      authLoader={authLoader}
      formData={formData}
    />
  ) : (
    <FormSubmitText formData={formData} authLoader={authLoader} />
  );
};

export default SignUp;
