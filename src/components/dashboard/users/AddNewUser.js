import React, { Component } from 'react'
import { connect } from "react-redux"
import { Alert, Spinner, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import '../../../assets/style/dashboard.scss'
import { registerUserAction } from '../../../redux/actions/registerUserAction'

class AddNewUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            birthdate: '',
            gender: ''
        };
    }
    registerUserAction
    onSubmit = async (e) => {
        e.preventDefault();
        console.log('form targeted...')
        const data = {
            name: this.state.name,
            email: this.state.email,
            birthdate: this.state.birthdate,
            gender: this.state.gender
        }

        console.log(data)
        await this.props.registerUserAction(data)
    };

    change = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <div>
                <Modal isOpen={this.props.isOpen} centered>
                    <ModalHeader style={{ fontSize: '3rem', fontWeight: 'bold' }} className="text-primary">Add New User</ModalHeader>

                    <div style={{ color: "green", display: this.props.registerState.loading }}>
                        <Spinner color="primary" />
                    </div>

                    <ModalBody>
                        <Form onSubmit={(e) => this.onSubmit(e)}>
                            {
                                this.props.registerState.error ?
                                    <Alert color="warning" style={{ fontSize: '1.3rem'}}>
                                        {this.props.registerState.error}
                                    </Alert> : <span></span>
                            }

                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Name"
                                    onChange={(e) => this.change(e)} />
                            </FormGroup>

                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="E-mail"
                                    onChange={(e) => this.change(e)} />
                            </FormGroup>

                            <FormGroup>
                                <Label for="exampleDate">Birthdate</Label>
                                <Input
                                    type="date"
                                    name="birthdate"
                                    id="birthdate"
                                    placeholder="date"
                                    onChange={(e) => this.change(e)} />
                            </FormGroup>

                            <FormGroup>
                                <Label for="exampleSelect">Gender</Label>
                                <Input
                                    type="select"
                                    name="gender"
                                    id="gender"
                                    defaultValue="defaultInputValue"
                                    onChange={(e) => this.change(e)}>
                                    <option>Male</option>
                                    <option>Female</option>
                                </Input>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" style={{ fontSize: '1.5rem', padding: '.6rem 1.3rem' }} onClick={(e) => this.onSubmit(e)}>Save</Button>
                        <Button color="warning" style={{ fontSize: '1.5rem', padding: '.6rem 1.3rem' }} onClick={this.props.onClick}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        registerState: state.registerUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        registerUserAction: (data) => dispatch(registerUserAction(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddNewUser);
