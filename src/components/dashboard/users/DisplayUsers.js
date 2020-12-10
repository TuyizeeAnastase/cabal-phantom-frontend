import React, { Component } from 'react';
import { getUsersAction } from '../../../redux/actions/getUsersAction'
import { Table } from 'reactstrap'
import BorderColorIcon from '@material-ui/icons/BorderColor';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from "react-redux";
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import ContentHeader from '../helpers/ContentHeader'
import '../../../assets/style/dashboard.scss'
import AddNewUser from './AddNewUser'


class DisplayUsers extends Component {

    constructor() {
        super();
        this.state = {
            showHide: false,
            bgColor: ''
        }
    }

    handleModalShowHide() {
        this.setState({ showHide: !this.state.showHide })
    }

    componentDidMount() {
        this.props.getUsersAction()
    }

    render() {
        return (
            <div className="p-4">
                <ContentHeader
                    title="Users"
                    Icon={AddRoundedIcon}
                    name="Add"
                    onClick={() => this.handleModalShowHide()}
                />

                <Table bordered striped className="h4 table-responsive-sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th colSpan={2}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {console.log(this.props.getUsers.data)}
                        
                        {/* {this.props.getUsers.data.users.map(user => {
                            <tr key={user.id}>
                                <th scope="row">{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td style={{ color: 'blue', fontSize: '1.8rem' }}><BorderColorIcon /></td>
                                <td style={{ color: 'red', fontSize: '1.8rem' }}><DeleteIcon /></td>
                            </tr>
                        })} */}
                    </tbody>
                </Table>
                <AddNewUser
                    isOpen={this.state.showHide}
                    onClick={() => this.handleModalShowHide()}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        getUsers: state.getUsers.items
    };
};

export default connect(mapStateToProps, { getUsersAction })(DisplayUsers);
