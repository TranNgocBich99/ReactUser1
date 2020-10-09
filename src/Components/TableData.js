import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {

    
    deleteButtonClick = (idUser) => {
        this.props.deleteUser(idUser);
    }
    mappingDataUser = () => 
        this.props.dataUserProps.map((value, key) => (
            <TableDataRow 
                deleteButtonClick = {(idUser) => this.deleteButtonClick(idUser)}
                changeEditUserStatus = {() => this.props.changeEditUserStatus()}
                editFunClick={(user) => this.props.editFun(value)} 
                userName={value.name} 
                key={key} 
                stt={key} 
                tel={value.tel} 
                permission={value.permission}
                id={value.id}
                ></TableDataRow>
        ))
        
    
    render() {
        return (
           
                <div className="col">
                    <table className="table table-striped table-hover table-inverse table">
                        <thead className="thead-inverse">
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>SĐT</th>
                            <th>Quyền</th>
                            <th>Thao tác</th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.mappingDataUser()}

                      
                       </tbody>
                    </table>
                </div>

         
        );
    }
}

export default TableData;