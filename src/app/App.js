import React from 'react';
// import { Row, Col } from 'antd'
import MainMenu from './other/MainMenu'
import Header from './other/Header'

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <MainMenu selectedKey='' />

                <div style={{ textAlign: 'center' , marginTop: '50px' }}>
                    <h1>خوش آمدید</h1>
                </div>
                {/* <br /><br /><br />
                <Row>
                    <Col span={6}>
                        <a href="/current">وضعیت فعلی</a>
                    </Col>
                    <Col span={6}>
                        <a href="/saving">پس انداز</a>
                    </Col>
                    <Col span={6}>
                        <a href="/income">درآمد</a>
                    </Col>
                    <Col span={6}>
                    <a href="/cost">خرج</a>
                    </Col>
                </Row> */}
            </div>
        );
    }
}

export default App;