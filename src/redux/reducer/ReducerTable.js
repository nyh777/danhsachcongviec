const uuidv1 = require('uuid/v1'); 
var findIndex=(dataTable,id) => {
    var result=-1;
    dataTable.forEach((dataRow,index)=>{
        if(dataRow.id===id){
            result=index;
            return result;
        }
    }) 
    return result;
}

var dataTable=JSON.parse(localStorage.getItem('dataTable'));
const oldState = {
    dataTable:     dataTable?dataTable:[],
    isShowForm:true,
    beforeDataRow:{
        id:'',
        name:'',
        status:'kichhoat'
    },
    filter:{
        name:'',
        status:'all'
    },
    txtSearch:'',
    sortBy:{
        name:'',
        value:''
    }
}
const ReducerTable = (state = oldState, action) => {
    switch (action.type) {
        case 'onClickChangeStatus':
            state.dataTable[action.index].status=state.dataTable[action.index].status==='kichhoat'?'an':'kichhoat';
            return {...state,dataTable:[...state.dataTable]}
        case 'onClickShowForm':
            return {...state,isShowForm:true}
        case 'onDeleteDataRow':
            state.dataTable.splice(action.index,1);
            return {...state,dataTable:[...state.dataTable]}
        case 'onSubmitDataAddRow':
            //action.dataAddRow
            return {...state,dataTable:[...state.dataTable,{id:uuidv1(),name:action.dataAddRow.name,status:action.dataAddRow.status}]}
        case 'beforeDataRow':
            state.isShowForm=false;
            state.beforeDataRow=action.beforeDataRow;
            return {...state}
        case 'onClickUpdateDataNewRow':
            //action.afterDataRow
            var index=findIndex(state.dataTable,action.afterDataRow.id);
            state.dataTable[index]=action.afterDataRow;
            return {...state,dataTable:[...state.dataTable]}
        case 'onFilter':
            // action.filterName, action.filterStatus
            state.filter.name=action.filterName;
            state.filter.status=action.filterStatus;
            return {...state,filter:{...state.filter}}
        case 'onClickSearch':
            state.txtSearch=action.txtSearch;
            return {...state}
        case 'onSort':
            state.sortBy.name=action.sortBy;
            state.sortBy.value=action.sortValue;

           return {...state,sortBy:{...state.sortBy}} 
        default:
            return state
    }
}
export default ReducerTable;
