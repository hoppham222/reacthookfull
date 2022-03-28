import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
// import * as actions from "../store/actions";
import * as actions from "../../store/actions";

import './Login.scss';
import { FormattedMessage } from 'react-intl';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:'',
        }
    }

    handleOnChangeInput = (event) => {
        this.setState({
            username:event.target.value
        })
        console.log(event.target.value)
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
                          <input type='password' className='form-control' />
                      </div>
                      <div className='col-12'>
                      <button>Login</button>
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
