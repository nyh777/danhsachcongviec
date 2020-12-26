import React, { Component } from 'react';
import {connect} from 'react-redux'
class FormAddRow extends Component {

    constructor(props) {
        super(props);
        this.state={
            name:'',
            status:'kichhoat'
        }
    }
    onChange=(event) => {
        var target=event.target;
        var name= target.name;
        var value=target.type==='checkbox'?target.checked:target.value;
        this.setState({
            [name]:value
        })
    }
    onSubmit=(event) => {
        event.preventDefault();
    }
    onResetFormAdd=() => {
        this.setState({
            name:'',
            status:'kichhoat'
        })
    }
    render() {
        var {isShowForm}=this.props;
    
        return (
            <div className="panel panel-warning" style={{display:isShowForm===true?'block':'none'}}>
                <div className="panel-heading">
                    <h3 className="panel-title">Thêm Công Việc</h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Tên :</label>
                            <input type="text" className="form-control" 
                                name='name'
                                value={this.state.name}
                                onChange={this.onChange}
                            />
                        </div>
                        <label>Trạng Thái :</label>
                        <select className="form-control" required="required"
                            name='status'
                            value={this.state.status}
                            onChange={this.onChange}
                        >
                            <option value={'kichhoat'}>Kích Hoạt</option>
                            <option value={'an'}>Ẩn</option>
                        </select>
                        <br />
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning"
                                onClick={()=>this.props.onSubmitDataAddRow(this.state)}
                            >Thêm</button>&nbsp;
                            <button type="submit" className="btn btn-danger"
                                onClick={this.onResetFormAdd}
                            >Hủy Bỏ</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        isShowForm: state.ReducerTable.isShowForm
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSubmitDataAddRow: (dataAddRow) => {
            dispatch({
                type:'onSubmitDataAddRow',
                dataAddRow
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FormAddRow)

