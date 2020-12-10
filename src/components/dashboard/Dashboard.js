import React, { useState } from 'react';
import { Container, TabContent, TabPane, Navbar, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import DirectionsSubwayIcon from '@material-ui/icons/DirectionsSubway';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import '../.././assets/style/dashboard.scss'
import IconButton from './helpers/IconButton'
import IconNavbar from './helpers/IconNavbar'
import Content from './Homepage/Content'
import TopBar from './Homepage/TopBar'
import Users from './users/DisplayUsers'

const Dashboard = () => {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) {
            setActiveTab(tab)
        }
    }

    return (
        <Container fluid>
            <Row>
                <Col className="hei-100 leftside p-0" sm={3} lg={2}>
                    <div className="sidebar">
                        <h1 className="logo text-center font-weight-bold m-3">Phantom</h1>
                        <div className="d-flex flex-column align-items-center justify-content-between">
                            <div className="sidebar__profile">
                                <AccountCircleIcon style={{ fontSize: "4rem" }} />
                                <h3>ADMIN</h3>
                            </div>

                            <Navbar className="vertical-nav p-0">
                                <NavLink
                                    className={classnames({ active: activeTab === '2' })}
                                    onClick={() => { toggle('2') }}
                                >
                                    <IconNavbar Icon={AccountBoxIcon} title="Users"/>
                                </NavLink>

                                <NavLink
                                    className={classnames({ active: activeTab === '3' })}
                                    onClick={() => { toggle('3') }}
                                >
                                    <IconNavbar Icon={AirportShuttleIcon} title="Buses" />
                                </NavLink>

                                <NavLink
                                    className={classnames({ active: activeTab === '4' })}
                                    onClick={() => { toggle('4') }}
                                >
                                    <IconNavbar Icon={DirectionsSubwayIcon} title="Routes" />
                                </NavLink>
                            </Navbar>
                            <IconButton Icon={<ExitToAppIcon />} name={"Logout"} color="danger" />
                        </div>
                    </div>
                </Col>

                <Col sm={9} lg={10} className="hei-100 rightside p-0">
                    <TopBar />
                    <TabContent activeTab={activeTab} className="p-2">
                        <TabPane tabId="1">
                            <Content />
                        </TabPane>

                        <TabPane tabId="2">
                            {/* <h1>Users</h1> */}
                            <Users />
                        </TabPane>

                        <TabPane tabId="3">
                            <h1>Buses</h1>
                        </TabPane>

                        <TabPane tabId="4">
                            <h1>Routes</h1>
                        </TabPane>
                    </TabContent>
                </Col>
            </Row>
        </Container>
    );
}

export default Dashboard;
