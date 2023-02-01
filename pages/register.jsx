import React from 'react';
import authFirebase from "../services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { 
    Button,
    Form,
    Input
 } from 'reactstrap';
import StaticModal from '../components/modal';
import Link from 'next/link';

const {Component} = require("react")
    
class Register extends Component {

    state= {
        email: '',
        password: '',
        flagginglogin: false,
        isError: false
    }
    handleRegister= () => {
        console.log(this.state);

        this.setState({flagginglogin:true})
    
        createUserWithEmailAndPassword (authFirebase, this.state.email, this.state.password)
            .then((userCredential) => {
                window.location.href= './login'
            })
            .catch((error) => {
                this.setState({flagginglogin:false})
                this.setState({isError:true})
            });
    
        }
    
    handleOnChange= (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

        render() {
    return (
        <>
            <div className='container-fluid boardRegister'>
                <div className="container d-flex row Register">
                    <h2 className="fw-bold  text-uppercase text-center text-dark mt-4">Register</h2>
                    <p className="text-dark-50 text-center text-dark mt-2" >Please enter your email and password!</p>
                    <Form className=''>
                        <div className='inputEmail mb-3'>
                            <Input  onChange={this.handleOnChange} placeholder='Enter email' id='email' type='email' size="md" />
                        </div>
                        <div className='inputPassword mb-5'>
                            <Input onChange={this.handleOnChange} placeholder='Enter password' id='password' type='password' size="md" />
                        </div>
                        <Button className='buttonRegister mb-5' color="primary" onClick={this.handleRegister} size="md" >
                            { this.state.flagginglogin && 
                            <span className="spinner-border spinner-border-lg " role="status" aria-hidden="true"></span>} Sign Up
                        </Button>
                    </Form>
                    <div>
                        <p className="paraf text-dark">
                            You have an account?
                            <Link href="/login" className='signin'>
                                Sign In
                            </Link>
                        </p>
                    </div>
                </div>
                { 
                    (
                        <StaticModal toogleModal={(value)=> this.setState({isError:value})} isShowModal={this.state.isError}/>
                    )
                }
            </div>
        </>
    );
}
}

export default Register;