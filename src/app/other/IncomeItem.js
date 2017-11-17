import React, { Component } from 'react';
// import { Icon } from 'antd'
import * as Icon from 'react-icons/lib/fa'
import eh from '../../emitHelper'

class IncomeItem extends Component {
    state = {  }
    render() {
        let gregorianDate = this.props.income.Year + '/' + this.props.income.Month + '/' + this.props.income.Day;

        return (
            <li>
                <span style={{ width: '30px' }}>
                    <Icon.FaArrowsV className='moveIcon' />
                </span>
                <span style={{ width: '30px' }}>
                    <div className='doneCheck'></div>
                </span>
                <span style={{ width: '200px' }}>
                    {this.props.income.Title}
                </span>
                <span style={{ width: '80px' }}>
                    { eh.commaSeparate(this.props.income.Price) }
                </span>
                <span style={{ width: '100px' }}>
                    {gregorianDate}
                </span>
                <span style={{ width: '30px' }}>
                    <Icon.FaEllipsisH className='menuIcon' />
                </span>
            </li>
        );
    }
}

export default IncomeItem;