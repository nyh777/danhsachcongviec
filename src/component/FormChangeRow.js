import React, { Component } from 'react';
import {connect} from 'react-redux'
class FormChangeRow extends Component {
    constructor(props) {
        super(props);
        this.state={
            beforeDataRow:{
                id:this.props.beforeDataRow.id,
                name:this.props.beforeDataRow.name,
                status:this.props.beforeDataRow.status
            }
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.beforeDataRow!==this.props.beforeDataRow){
            this.setState({
                beforeDataRow:nextProps.beforeDataRow
            })
        }
    }
    onChange=(event) => {
        var target=event.target;
        var name=target.name;
        var value=target.type==='checkbox'?target.checked:target.value;
        this.setState({
            beforeDataRow:{
                ...this.state.beforeDataRow,
                [name]:value
            }
        })
    }
    onSubmit=(event) => {
        event.preventDefault();
    }
    render() {
        var {isShowForm}=this.props;
        return (
            <div className="panel panel-warning" style={{display:isShowForm===true?'none':'block'}}>
                <div className="panel-heading">
                    <h3 className="panel-title">Update Công Việc</h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Tên :</label>
                            <input type="text" className="form-control" 
                                name='name'
                                value={this.state.beforeDataRow.name}
                                onChange={this.onChange}
                                
                            />
                        </div>
                        <label>Trạng Thái :</label>
                        <select className="form-control" required="required"
                            name='status'
                            value={this.state.beforeDataRow.status}
                            onChange={this.onChange}
                        >
                            <option value={'kichhoat'}>Kích Hoạt</option>
                            <option value={'an'}>Ẩn</option>
                        </select>
                        <br />
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning"
                                onClick={()=>this.props.onClickUpdateDataNewRow(this.state.beforeDataRow)}
                            >Update</button>&nbsp;
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        isShowForm: state.ReducerTable.isShowForm,
        beforeDataRow:state.ReducerTable.beforeDataRow
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClickUpdateDataNewRow: (afterDataRow) => {
            dispatch({
                type:'onClickUpdateDataNewRow',
                afterDataRow
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FormChangeRow)