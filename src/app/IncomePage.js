import React, { Component } from 'react';
// import { Row, Col } from 'antd'
import MainMenu from './other/MainMenu'
import Header from './other/Header'
import Incomes from './other/Incomes'
import IncomeData from './IncomeData'

class IncomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            IncomeData : IncomeData.dataArray
        }
    }

    render() {
        return (
            <div>
                <Header />
                <MainMenu selectedKey='income' />

                <Incomes data={ this.state.IncomeData } />
            </div>
        );
    }
}

export default IncomePage;