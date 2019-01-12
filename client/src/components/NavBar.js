import React, { Component } from 'react';
import userAPI from './../utils/api/user';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';
import SignUp from './SignUpModal';

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            username: "",
            password:"",
            email:""
        };
    }
    toggleModal = () => {
        this.setState({
            modal: !this.state.modal
        });
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    signIn = () => {

    }
    signOut = () => {

    }
    signUp = () => {
        const {username, email, password} = this.state
        userAPI.createUser({username, email,password}).then((res)=>{
            console.log(res);
        });
    }
    inputHandler = (e) =>{
        const {name, value} = e.target;
        this.setState({[name]:value});
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">LoginTest</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                {this.props.signedIn ?
                                    <Button onClick={this.signIn}>SignIn</Button>
                                    :
                                    <Button onClick={this.toggleModal}>SignUp</Button>
                                }
                            </NavItem>
                            <NavItem>
                                {this.props.signedIn ?
                                    <Button onClick={this.signOut}>SignOut</Button>
                                    : null
                                }
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <SignUp 
                modal={this.state.modal} 
                username={this.state.username} 
                email={this.state.email} 
                password={this.state.password}
                inputHandler={this.inputHandler}
                toggleModal={this.toggleModal}
                signUp={this.signUp}
                />
            </div>
        );
    }
}

export default NavBar;

