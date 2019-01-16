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
    ModalFooter, InputGroup, InputGroupAddon, Input,Alert
} from 'reactstrap';

const SignUp = (props) =>
    <div>
        <Modal isOpen={props.modal} toggle={props.toggleModal} className={props.className}>
            <ModalHeader toggle={props.toggleModal}>{props.modalTitle}</ModalHeader>
            <ModalBody>
                {props.signedUp ?
                    <Alert color="success">
                     Account Created for {props.first_name} {props.last_name}
                   </Alert>
                :
                    <div>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                            <Input placeholder="username" name="username" value={props.username} onChange={props.inputHandler} />
                        </InputGroup>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                            <Input placeholder="password" type="password" name="password" value={props.password} onChange={props.inputHandler} />
                        </InputGroup>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                            <Input placeholder="email" type="email" name="email" value={props.email} onChange={props.inputHandler} />
                        </InputGroup>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                            <Input placeholder="first_name" type="first_name" name="first_name" value={props.first_name} onChange={props.inputHandler} />
                        </InputGroup>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                            <Input placeholder="last_name" type="last_name" name="last_name" value={props.last_name} onChange={props.inputHandler} />
                        </InputGroup>
                    </div>}
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={props.signUp}>SignUp</Button>
                <Button color="secondary" onClick={props.toggleModal}>Cancel</Button>
            </ModalFooter>
        </Modal>
    </div >

export default SignUp;

