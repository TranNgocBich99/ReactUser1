import React, { Component } from 'react';

class AddUser extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         trangThaiChinhSua: true
    //     }
    // }
    // hienThiNut = () => {
    //     if(this.state.trangThaiChinhSua === true) {
    //         return <div className="btn btn-block btn-outline-secondary" onClick={() => this.thayDoiTrangThai()}>
    //         Đóng lại
    //     </div>
    //     }
    //     else {
    //         return <div className="btn btn-block btn-outline-info" onClick={() => this.thayDoiTrangThai()}>
    //                                 Thêm mới
    //                             </div>
    //     }
    // }

    // thayDoiTrangThai = () => {
    //     this.setState({
    //         trangThaiChinhSua: !this.state.trangThaiChinhSua
    //     })
        
    // }

    // hienThiForm = () => {
    //     if(this.state.trangThaiChinhSua === true) {
    //         return (
                
    //         )
    //     }
    //     else {
            
    //     }
    // }

    constructor(props) {
        super(props)
        this.state = {
            id: "",
            name: "",
            tel: "",
            permission: ""
        }
    }
    

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log("name: " + name + "value: " + value);

        this.setState({
            [name]: value
        });
        //package to item
        // var item = {};
        // item.id = this.state.id;
        // item.name = this.state.name;
        // item.tel = this.state.tel;
        // item.permission = this.state.permission;
        // console.log(item);
    }

    kiemTraTrangThai = () => {
        if(this.props.hienThiForm === true) {
            return (
                <div className="col">
                    <div className="card border-primary mb-3 mt-3" >
                        <div className="card-header">Thêm mới User</div>
                        <div className="card-body text-primary">
                        <div className="form-group">
                            <label htmlFor>Tên user</label>
                            <input type="text" name="name" 
                            onChange = {(event) => this.isChange(event)} className="form-control"  placeholder="Tên user" />
                        </div>
                        <div className="form-group">
                            <label htmlFor>SĐT</label>
                            <input type="text" name = "tel"
                            onChange = {(event) => this.isChange(event)}
                             className="form-control"  placeholder="SĐT" />
                        </div>
                        <div className="form-group">
                            <label htmlFor>Phân quyền</label>
                            <select className="form-control" name="permission" 
                            onChange = {(event) => this.isChange(event)} required>
                                <option value>Chọn quyền mặc định</option>
                                <option value={1}>Admin</option>
                                <option value={2}>Modrator</option>
                                <option value={3}>Normal</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input 
                                type="reset"
                                className="btn btn-block btn-primary"
                                onClick={(name, tel, permission) => this.props.add(this.state.name, this.state.tel, this.state.permission)} value="Thêm mới"/>
                        </div>
                        </div>
                    </div>
                </div>
                
            );
        }
    }
    render() {
        // console.log(this.state);
        return (
              <div>
                  {this.kiemTraTrangThai()}
              </div>  
          
        );
    }
}

export default AddUser;