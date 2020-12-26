import React, { Component } from 'react';
import {connect} from 'react-redux';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:''
        }
    }
    

    onChange=(event) => {
        var target=event.target;
        var name=target.name;
        var value= target.type==='checkbox'?target.checked:target.value;
        this.setState({
            [name]:value
        })
    }
    render() {
        return (
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Nhập từ khóa..." 
                    name='name'
                    value={this.state.name}
                    onChange={this.onChange}
                />
                <span className="input-group-btn">
                    <button className="btn btn-primary" type="button"
                        onClick={()=>this.props.onClickSearch(this.state.name)}
                    >
                        <span className="fa fa-search mr-5">Tìm</span>
                    </button>
                </span>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {

    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClickSearch: (txtSearch) => {
            dispatch({
                type:'onClickSearch',
                txtSearch
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search)
