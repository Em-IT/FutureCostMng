import React, { Component } from 'react';
import Income from './IncomeItem';
// import { Icon } from 'antd'
import * as Icon from 'react-icons/lib/fa'

class Incomes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isInAddMode : false
        };

        this.renderIncome = this.renderIncome.bind(this);
    }

    renderIncome(income)
    {
        return (
            <Income income={ income } key={income.IncomeID} />
        );
    }


    render() {
        let btnsStyle = (this.state.isInAddMode ? {display : "none"} : {});
        let fieldsStyle = (this.state.isInAddMode ? {} : {display : "none"});

        return (
            <div className='incomePanel'>
                <ul className='headers'>
                    <li>
                        <span style={{ width: '30px' }}>
                        </span>
                        <span style={{ width: '30px' }}>
                        </span>
                        <span style={{ width: '200px' }}>
                            عنوان
                        </span>
                        <span style={{ width: '80px' }}>
                            قیمت
                        </span>
                        <span style={{ width: '100px' }}>
                            تاریخ
                        </span>
                        <span style={{ width: '30px' }}>
                        </span>
                    </li>
                </ul>
                <ul className='incomes'>
                    { this.props.data.map(this.renderIncome) }
                </ul>
                <ul>
                    <li className='addRow' onClick={() => { this.setState({ isInAddMode: true }); }}  style={ btnsStyle }>
                        <span style={{ width: '30px' }}>
                        </span>
                        <span style={{ width: '30px' }}>
                            <Icon.FaPlusCircle />
                        </span>                        
                        افزودن درآمد جدید
                    </li>
                    <li className='addFieldsRow' style={ fieldsStyle }>
                        <div>
                        <div className='fields'>
                            <div>
                                <input type='text' placeholder='عنوان درآمد' style={{ width: '200px' }} />
                            </div>
                            <div>
                                <input type='text' placeholder='مبلغ' />
                            </div>
                            <div>
                                <input type='text' placeholder='تاریخ' />
                            </div>
                        </div>
                        <div className='buttons'>
                            <div style={{ backgroundColor: 'red' }}>
                                <Icon.FaClose />
                            </div>
                            <div style={{ backgroundColor: '#00f000' }}>
                                <Icon.FaCheckCircle />
                            </div>
                        </div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Incomes;