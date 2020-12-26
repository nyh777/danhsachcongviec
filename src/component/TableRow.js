import React, { Component } from 'react';

class TableRow extends Component {
    render() {
        var {dataRow,index}=this.props;
        return (
            <tr>
                <td>{index+1}</td>
                <td>{dataRow.name}</td>
                <td className="text-center">
                    <span className={dataRow.status==='kichhoat'?"label label-success":"label label-warning"}
                          onClick={this.props.onClickChangeStatus}                      
                    >{dataRow.status==='kichhoat'?'Kích Hoạt':'Ẩn'}</span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning"
                        onClick={this.props.beforeDataRow}
                    >
                        <span className="fa fa-pencil mr-5">Sửa</span>
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-danger"
                        onClick={this.props.onDeleteDataRow}
                    >
                        <span className="fa fa-trash mr-5">Xóa</span>
                    </button>
                </td>
            </tr>
        );
    }
}

export default TableRow;