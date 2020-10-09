import React, { Component } from 'react';

import './../App.css';
import AddUser from './AddUser';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import DataUser from './Data.json';


const { v4: uuidv4 } = require('uuid');

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      hienThiForm: false,
      data: [],
      searchText: '',
      editUserStatus: false,
      userEditObject: {}
    }
  }

  componentWillMount() {
    if(localStorage.getItem('userData') === null){
      localStorage.setItem('userData', JSON.stringify(DataUser));
    }
    else {
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data: temp
      });
      
    }
  }

  getUserEditInfoApp = (info) => {
    console.log("tt "+ info);
    this.state.data.forEach((value, key) => {
        if(value.id === info.id){
          value.name = info.name;
          value.tel = info.tel;
          value.permission = info.permission;
        }
    })
    localStorage.setItem('userData',JSON.stringify(this.state.data));
  }

  deleteUser = (idUser) => {
    var tempData = this.state.data;

    tempData = tempData.filter(item => item.id !== idUser);
    this.setState({
      data: tempData //sau khi xoa thi cap nhat lai state
    })
    //day vao du lieu
    localStorage.setItem('userData', JSON.stringify(tempData));
  }

  changeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    })
    
  }

  doiTrangThai = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm
    });
  }

  getTextSearch = (dl) => {
    this.setState({
      searchText: dl
    })
    
    console.log("Dl nhan dc la: "+ this.state.searchText);
  }

  getNewUserData = (name, tel, permission) => {
    var item = {};
    item.id = uuidv4();
    item.name = name;
    item.tel = tel;
    item.permission = permission;
  
    var items = this.state.data;
    
    
    items.push(item);

    this.setState({
      data:items
    })
    localStorage.setItem('userData',JSON.stringify(items));
    console.log(this.state.data);
  }

  editUser = (user) => {
    console.log("Da ket noi oke");
    this.setState({
      userEditObject: user
    })
    
  }
  render() {
 
    var ketqua = [];

    this.state.data.forEach((item) => {
      if(item.name.indexOf(this.state.searchText) !== -1) {
        ketqua.push(item);
      }
    })

    // console.log(ketqua);
    
    return (
      <div>
        <Header></Header>
        <div className="searForm">
          <div className="container">
            <div className="row">
              <Search 
                getUserEditInfoApp = {(info) => this.getUserEditInfoApp(info)}
                userEditObject={this.state.userEditObject}
                checkConnectProps= {(dl) => this.getTextSearch(dl)}
                ketNoi={() => this.doiTrangThai()} 
                hienThiForm={this.state.hienThiForm}
                editUserStatus={this.state.editUserStatus}
                changeEditUserStatus = {() => this.changeEditUserStatus()}></Search>
              <TableData 
                deleteUser = {(idUser) => this.deleteUser(idUser)}
                editFun = {(user) => this.editUser(user)} 
                dataUserProps={ketqua}
                changeEditUserStatus = {() => this.changeEditUserStatus()}></TableData>
              <AddUser 
                add = {(name, tel, permission) => this.getNewUserData(name, tel, permission)}
                hienThiForm={this.state.hienThiForm}></AddUser>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
