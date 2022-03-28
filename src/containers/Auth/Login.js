import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
// import * as actions from "../store/actions";
import * as actions from "../../store/actions";

import './Login.scss';
import { FormattedMessage } from 'react-intl';
import  { handleLogin }  from '../../services/UserServices';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password: '',
            isshowpass: false,
        }
    }

    handleOnChangeInput = (event) => {
        this.setState({
            username:event.target.value
        })
    }

    handleOnChangepass = (event) => {
        this.setState({
            password:event.target.value
        })
    }

    handleOnClick = async () => {
        console.log(this.state.username, 'pass', this.state.password)
        try {
            await handleLogin(this.state.username, this.state.password);
        } catch (error) {
            console.log(error);
        }
        
    }

    handleShowgidePassword = () => {
        this.setState({
            isshowpass: !this.state.isshowpass
        })
        
    }

    render() {
        return (
          <div className='login-backgrout'>
              <div className='login-container'>
                  <div className='login-content'>
                      <div className='col-12 text-content'>Login</div>
                      <div className=' col-12 form-group'>
                          <label> username</label>
                          <input type='text' className='form-control' placeholder='Enter your username' value={this.state.username}
                          onChange={(event) => this.handleOnChangeInput(event)}
                          />
                      </div>
                      <div className=' col-12 form-group'>
                            <label>Password</label>
                            <div className='pass-worrd'>
                                <input type={this.state.isshowpass ? 'text': 'password'} className='form-control' placeholder='password' value={this.state.password}
                                    onChange={(event) => this.handleOnChangepass(event)}
                                />
                                <div onClick={()=> {this.handleShowgidePassword()}}>Hiện</div>
                            </div>
                      </div>
                      <div className='col-12'>
                      <button className='btn' onClick={(event) => this.handleOnClick()}>Login</button>
                      </div>
                      <div className='col-12'>
                          <span className='forgot-password'>Forgot your password</span>
                      </div>
                      <div className='col-12'>
                          <span className='text-center'>Or login with</span>
                      </div>
                      <div className='col-12 social-login'></div>
                  </div>
              </div>
          </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
