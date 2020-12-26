import React, { Component } from 'react';
import Filter from './Filter';
import TableRow from './TableRow';
// const uuidv1 = require('uuid/v1'); 
import {connect} from 'react-redux'
class Table extends Component {

    render() {
        var {dataTable,filter,txtSearch,sortBy}=this.props;
        if(filter){
            if(filter.name){
                dataTable=dataTable.filter((dataRow,index)=>{
                    return dataRow.name.toLowerCase().indexOf(filter.name.toLowerCase())!==-1
                })
            }
            if(filter.status){
                dataTable=dataTable.filter((dataRow,index)=>{
                    if(filter.status==='all'){
                        return dataRow
                    }else return dataRow.status.indexOf(filter.status)!==-1
                })
            }
            
        }
        if(txtSearch){
            dataTable=dataTable.filter((dataRow)=>{
                return dataRow.name.toLowerCase().indexOf(txtSearch.toLowerCase())!==-1;
            })
        }
        if(sortBy){
            if(sortBy.name==='name'){
                dataTable=dataTable.sort((a,b)=>{
                    if(a.name>b.name){
                        return sortBy.value;
                    }else if(a.name<b.name){
                        return -sortBy.value;
                    }else return 0
                })
            }
            if(sortBy.name==='status'){
                dataTable=dataTable.sort((a,b)=>{
                    if(a.status>b.status){
                        return -sortBy.value;
                    }else if(a.status<b.status){
                        return sortBy.value
                    }else return 0
                })
            }
        }
        var elmTable=dataTable.map((dataRow,index)=>{
            return(
                <TableRow
                    key={index}
                    index={index}
                    dataRow={dataRow}
                    onClickChangeStatus={()=>this.props.onClickChangeStatus(index)}
                    beforeDataRow={() => this.props.beforeDataRow(dataRow)}
                    onDeleteDataRow={() => this.props.onDeleteDataRow(index)}
                ></TableRow>
            )
            
        })
        return (
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Tên</th>
                        <th className="text-center">Trạng Thái</th>
                        <th className="text-center">Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    <Filter/>
                    {elmTable}
                </tbody>
            </table>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        dataTable: state.ReducerTable.dataTable,
        filter:state.ReducerTable.filter,
        txtSearch:state.ReducerTable.txtSearch,
        sortBy:state.ReducerTable.sortBy
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClickChangeStatus: (index) => {
            dispatch({
                type:'onClickChangeStatus',
                index

            })
        },
        onDeleteDataRow: (index) => {
            dispatch({
                type:'onDeleteDataRow',
                index

            })
        },
        beforeDataRow: (beforeDataRow) => {
            dispatch({
                type:'beforeDataRow',
                beforeDataRow

            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Table)
