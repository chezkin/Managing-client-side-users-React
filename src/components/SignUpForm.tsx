import React from 'react';
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Checkbox,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormHelperText,
} from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface FormValues {
  name: string;
  email: string;
  gender: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  termsAndConditions: boolean;
}

const SignupForm: React.FC = () => {
  const paperStyle = { padding: 20, width: 300, margin: '0 auto' };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: '#1bbd7e' };
  const marginTop = { marginTop: 5 };

  const initialValues: FormValues = {
    name: '',
    email: '',
    gender: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    termsAndConditions: false,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "It's too short").required('Required'),
    email: Yup.string().email('Enter valid email').required('Required'),
    gender: Yup.string().oneOf(['male', 'female'], 'Required').required('Required'),
    phoneNumber: Yup.number().typeError('Enter valid Phone Number').required('Required'),
    password: Yup.string().min(8, 'Password minimum length should be 8').required('Required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Password not matched').required('Required'),
    termsAndConditions: Yup.boolean().oneOf([true], 'Accept terms & conditions').required('Required'),
  });

  const onSubmit = (values: FormValues, props: any) => {
    console.log(values);
    console.log(props);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {(props) => (
        <Form>
          <Field as={TextField} fullWidth name="name" label="Name" placeholder="Enter your name" />
          <ErrorMessage name="name" component="div" />
          <Field as={TextField} fullWidth name="email" label="Email" placeholder="Enter your email" />
          <ErrorMessage name="email" component="div" />
          <FormControl component="fieldset" style={marginTop}>
            <FormLabel component="legend">Gender</FormLabel>
            <Field as={RadioGroup} aria-label="gender" name="gender">
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </Field>
          </FormControl>
          <ErrorMessage name="gender" component="div" />
          <Field
            as={TextField}
            fullWidth
            name="phoneNumber"
            label="Phone Number"
            placeholder="Enter your phone number"
          />
          <ErrorMessage name="phoneNumber" component="div" />
          <Field
            as={TextField}
            fullWidth
            name="password"
            type="password"
            label="Password"
            placeholder="Enter your password"
          />
          <ErrorMessage name="password" component="div" />
          <Field
            as={TextField}
            fullWidth
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            placeholder="Confirm your password"
          />
          <ErrorMessage name="confirmPassword" component="div" />
          <FormControlLabel
            control={<Field as={Checkbox} name="termsAndConditions" />}
            label="I accept the terms and conditions."
          />
          <ErrorMessage name="termsAndConditions" component="div" />
          <Button
            type="submit"
            variant="contained"
            disabled={props.isSubmitting}
            color="primary"
          >
            {props.isSubmitting ? 'Loading' : 'Sign up'}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
