import React from 'react';

class Login extends React.Component {

    constructor(){
        super();
        this.state={
            err:''
        }
    }

    login(e){
        e.preventDefault();
        var username=e.target.elements.username.value;
        var password=e.target.elements.password.value;
        if(username ===  'pranay' && password === '123' ){
            this.props.history.push('/home');

        } 
        else {
            this.setState({
                err:'Invalid Username or Password!'
            });

        }
    }

    render(){
        let format={
            color:"red"
        };
        

        return(
            <div>
            <br/>
            
           <span   style={format}> {this.state.err !== '' ? alert( this.state.err):''}</span>
           <div className="login">
           <form method="post" onSubmit={this.login.bind(this)}>
           Username <input type="text" required name="username"/>
           <br/>
           Password <input type="password"  required name="password"/>
           <br/>
           <input type="submit" value="Login"/>


           </form>

           </div>
          
            
            </div>
        )
    }



}
export default Login;