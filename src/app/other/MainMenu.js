import React from 'react'
import { Menu } from 'antd'
import * as Icon from 'react-icons/lib/fa'
import {Link} from 'react-router-dom'

class MainMenu extends React.Component 
{
    handleClick(event) {
        //event.preventDefault();
        console.log(event);
    }

    render () {
        return (
            <Menu 
                selectedKeys={[ this.props.selectedKey ]} 
                mode="horizontal"
                onClick={ this.handleClick }
                >
                <Menu.Item key="home">
                    {/* <a href="/current"  style={{ display: 'inline-block' }}>وضعیت فعلی</a> */}
                     <Link to="/" style={{ display: 'inline-block' }}>خانه</Link> 
                    <Icon.FaHome />
                </Menu.Item>
                <Menu.Item key="current">
                    {/* <a href="/current"  style={{ display: 'inline-block' }}>وضعیت فعلی</a> */}
                     <Link to="/current" style={{ display: 'inline-block' }}>وضعیت فعلی</Link> 
                    <Icon.FaAdn />
                </Menu.Item>
                <Menu.Item key="saving">
                    <a href="/saving"  style={{ display: 'inline-block' }}>پس انداز</a>
                    <Icon.FaMoney />
                </Menu.Item>
                <Menu.Item key="income">
                    <a href="/income" style={{ display: 'inline-block' }}>درآمد</a>
                    <Icon.FaInbox />
                </Menu.Item>
                <Menu.Item key="cost">
                    <a href="/cost" style={{ display: 'inline-block' }}>خرج</a>
                    <Icon.FaSignOut />
                </Menu.Item>
            </Menu>
        );
    }
}

MainMenu.defaultProps = {
    selectedKey : 'current'
}

export default MainMenu;