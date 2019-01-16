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
import SignIn from './SignInModal';
import { FaUser } from 'react-icons/fa';
import './NavBar.css';

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            username: "",
            password: "",
            email: "",
            first_name: "",
            last_name: "",
            signUpModal: false,
            signInModal: false,
            signedUp: false
        };
    }
    toggleSignInModal = () => {
        this.setState({
            signInModal: !this.state.signInModal,
            username: "",
            password: "",
        });
    }
    toggleSignUpModal = () => {
        this.setState({
            signUpModal: !this.state.signUpModal,
            username: "",
            password: "",
            email: "",
            first_name: "",
            last_name: "",
            signedUp: false
        });
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    signIn = () => {
        const { username, password } = this.state;
        userAPI.loginUser({ username, password }).then(({ data }) => {
            this.props.signInUser(data);
            this.toggleSignInModal();
        })
    }
    signOut = () => {
        this.props.signOutUser();
    }
    signUp = () => {
        const { username, email, password, first_name, last_name } = this.state
        userAPI.createUser({ username, email, password, first_name, last_name }).then((res) => {
            this.setState({ signedUp: true });
            setTimeout(() => {
                this.toggleSignUpModal();
                this.toggleSignInModal();
            }, 2000)
        });
    }
    inputHandler = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
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
                                    <div className="user-info">
                                        <FaUser/><p>{this.props.user.username}</p>
                                        <Button onClick={this.signOut}>SignOut</Button>
                                    </div>
                                    :
                                    <div>
                                        <Button onClick={this.toggleSignInModal}>SignIn</Button>
                                        <Button onClick={this.toggleSignUpModal}>SignUp</Button>
                                    </div>
                                }
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <SignUp
                    modal={this.state.signUpModal}
                    modalTitle={"Enter in information to sign up"}
                    toggleModal={this.toggleSignUpModal}
                    username={this.state.username}
                    email={this.state.email}
                    first_name={this.state.first_name}
                    last_name={this.state.last_name}
                    password={this.state.password}
                    inputHandler={this.inputHandler}
                    signUp={this.signUp}
                    signedUp={this.state.signedUp}
                />
                <SignIn
                    modalTitle={"Enter in information to sign in"}
                    modal={this.state.signInModal}
                    toggleModal={this.toggleSignInModal}
                    username={this.state.username}
                    email={this.state.email}
                    password={this.state.password}
                    inputHandler={this.inputHandler}
                    signIn={this.signIn}
                />
            </div>
        );
    }
}

export default NavBar;

