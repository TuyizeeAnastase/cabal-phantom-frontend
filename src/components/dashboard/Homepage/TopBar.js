import React from 'react';
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import '../../../assets/style/dashboard.scss'
import IconButton from '../helpers/IconButton'

const TopBar = () => {
    return (
        <div className="topbar">
            <form action="">
                <InputGroup>
                    <Input placeholder="Search" />
                    <InputGroupAddon addonType="append">
                        <Button color="success"><SearchIcon style={{ fontSize: "2rem" }} /></Button>
                    </InputGroupAddon>
                </InputGroup>
            </form>
            <div className="">
                <IconButton outline Icon={<HomeIcon />} name={"Home"} className="ml-5" href="/admin"/>
                <IconButton color="info" className="ml-5" Icon={<PersonOutlineIcon />} name={"Profile"} />
            </div>
        </div>
    );
}

export default TopBar;
