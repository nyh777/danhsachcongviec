import React, { Component } from 'react';
import {connect} from 'react-redux'
class Filter extends Component {
    constructor(props) {
        super(props);
        this.state={
            filterName:'',
            filterStatus:'all'
        }
    }
    onChange=(event) => {
        var target=event.target;
        var name=target.name;
        var value=target.type==='checkbox'?target.checked:target.value;
        if(name==='filterName'){
            this.props.onFilter(value,this.state.filterStatus)
        }else if(name==='filterStatus'){
            this.props.onFilter(this.state.filterName,value)
        }

        this.setState({
            [name]:value
        })
    }
    render() {
        return (
            <tr>
                <td />
                <td>
                    <input type="text" className="form-control" 
                        name='filterName'
                        value={this.state.filterName}
                        onChange={this.onChange}
                    />
                </td>
                <td>
                    <select className="form-control"
                        name='filterStatus'
                        value={this.state.filterStatus}
                        onChange={this.onChange}
                    >
                        <option value="all">Tất Cả</option>
                        <option value="an">Ẩn</option>
                        <option value="kichhoat">Kích Hoạt</option>
                    </select>
                </td>
                <td />
            </tr>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onFilter: (filterName, filterStatus) => {
            dispatch({
                type:'onFilter',
                filterName,
                filterStatus
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Filter)
