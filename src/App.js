import React, { Component } from 'react';
import './App.css';
import FormAddRow from './component/FormAddRow';
import Search from './component/Search';
import Sort from './component/Sort';
import Table from './component/Table';
import {connect} from 'react-redux'
import FormChangeRow from './component/FormChangeRow';

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1>
                    <hr />
                </div>
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <FormAddRow/>
                        <FormChangeRow/>
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <button type="button" className="btn btn-primary mb5"
                            onClick={this.props.onClickShowForm}
                        >
                            <span className="fa fa-plus mr-5">Thêm Công Việc</span>
                        </button>
                        <div className="row mb5">
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <Search/>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                               <Sort/>
                            </div>
                        </div>
                        <div className="row mt-15">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <Table/>
                            </div>
                        </div>
                    </div>
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
        onClickShowForm: () => {
            dispatch({
                type: 'onClickShowForm'
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
