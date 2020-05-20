import React, {Component} from 'react';
import './login.css';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
         credentials: {
            username: '',
            password: '',
            error: 'Incorrect Login Credentials'},
            isLoading: false   
        }
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
    }
    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    login = e => {
        e.preventDefault();
        this.setState({
            ...this.state,
            isLoading: true
        })
        axiosWithAuth()
        .post('/api/login', this.state.credentials)
        .then(res => {
            localStorage.setItem('token', res.data.payload)
            this.props.history.push('/friendsList');
        })
        .catch(err => console.log(this.state.credentials.error))
        this.setState({
            isLoading: false
        })
    }
    render(){
        return (

            
            <div>
                {this.state.isLoading ? "...loading" : <>
                <h1 className="friends-header">Friends Book</h1>
                <h2 className='friends-sub-header'>(A Totally New Idea)</h2>
                <form className="login" onSubmit={this.login}>
                    <input
                    type='text'
                    name='username'
                    value={this.state.credentials.username}
                    onChange={this.handleChange}
                    placeholder="username"
                    />
                    <input
                    type='password'
                    name='password'
                    value={this.state.credentials.password}
                    onChange={this.handleChange}
                    placeholder="password"
                    />
                    <button>Submit Form</button>
                </form></>}
                <img className="Friends-Pic" src="https://www.rollingstone.com/wp-content/uploads/2019/09/FriendsLead.jpg" alt="Friends characters"/>
            </div>


        )


    }
}

export default Login; 