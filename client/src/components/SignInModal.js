import React, { Component } from 'react';
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
    ModalFooter, InputGroup, InputGroupAddon, Input
} from 'reactstrap';

const SignUp = (props) =>
    <div>
        <Modal isOpen={props.modal} toggle={props.toggleModal} className={props.className}>
            <ModalHeader toggle={props.toggleModal}>{props.modalTitle}</ModalHeader>
            <ModalBody>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                    <Input placeholder="username" name="username" value={props.username} onChange={props.inputHandler}/>
                </InputGroup>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                    <Input placeholder="password" type="password" name="password" value={props.password} onChange={props.inputHandler} />
                </InputGroup>
            </ModalBody>
        <ModalFooter>
            <Button color="primary" onClick={props.signIn}>SignIn</Button>
            <Button color="secondary" onClick={props.toggleModal}>Cancel</Button>
        </ModalFooter>
        </Modal>
    </div >

export default SignUp;

