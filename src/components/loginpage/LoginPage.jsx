import React, { useState } from 'react';
import FormInput from '../FormInput';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import logo from '../../images/illustration.png';
import "./loginPage.css"


export const LoginPage = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
      });
    
      const inputs = [
        {
          id: 1,
          name: "email",
          type: "email",
          placeholder: "Enter your valid email!",
          errorMessage: "It should be a valid email address!",
          label: "Email",
          required: true,
        },
        {
          id: 4,
          name: "password",
          type: "password",
          placeholder: "Enter your password!",
          errorMessage:
            "Please enter the password!",
          label: "Password",
          required: true,
        },
      ];
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values)
      };
    
      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
  return (
    <div className='LoginPage'>
        <Container fluid>
          <Row>
            <Col lg={7} className='leftSide'>
              <div className='leftText'>
                <h3>Register as Architechture?</h3>
                <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quidem.</small>
              </div>
            </Col>
            <Col className='rightSide'>
              <div>
              <div className='logoSection'>
                <h1>LOGO</h1>
              </div>
              <form onSubmit={handleSubmit}>
                <h3>Login your Account!</h3>
                <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>

                <div className='mainForm'>
                  <div className='googleLogin'>Google</div>
                  <small>or Login with Email</small>

                  {inputs.map((input) => (
                    <FormInput
                      key={input.id}
                      {...input}
                      value={values[input.name]}
                      onChange={onChange}
                    />
                  ))}
                </div>

                <button type='submit' className='loginBtn'>Login</button>
            </form>
              </div>
              
            </Col>
          </Row>
        </Container>
    </div>
  )
}
