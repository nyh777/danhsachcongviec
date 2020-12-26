import React, { Component } from 'react';
import { connect } from 'react-redux';
class Sort extends Component {
    render() {
        return (
            <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span className="fa fa-caret-square-o-down ml-5">Sắp Xếp</span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li>
                        <button
                            onClick={()=>this.props.onSort('name',1)} className="btnnone"
                        >
                            <span className="fa fa-sort-alpha-asc pr-5">Tên A-Z</span>
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={()=>this.props.onSort('name',-1)} className="btnnone"
                        >
                            <span className="fa fa-sort-alpha-desc pr-5">Tên Z-A</span>
                        </button></li>
                    <li role="separator" className="divider" />
                    <li><button
                        onClick={()=>this.props.onSort('status',1)} className="btnnone"
                    >Trạng Thái Kích Hoạt</button></li>
                    <li><button
                        onClick={()=>this.props.onSort('status',-1)} className="btnnone"
                    >Trạng Thái Ẩn</button></li>
                </ul>
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
        onSort: (sortBy,sortValue) => {
            dispatch({
                type:'onSort',
                sortBy,
                sortValue
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Sort)