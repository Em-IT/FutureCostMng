import React from 'react';
import { Row, Col } from 'antd'
import MainMenu from './other/MainMenu'
import Header from './other/Header'

class CurrentPage extends React.Component {
    render() {

        return (
            <div>
                <Header />
                <MainMenu selectedKey='current' />
                
                <Row>
                    <Col>
                        <span>Current Page</span>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default CurrentPage;