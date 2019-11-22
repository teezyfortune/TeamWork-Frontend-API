import React, {Component} from 'react';

class Login extends Component {
    
    render() { 
        return (
            <div>
        <h2>SignIn</h2>
        <div>
        <form  action="mysuperscript.php" autocomplete="on"> 
        <h1>Log in</h1> 
        <p> 
            <label for="username" class="uname" data-icon="u" > Your email or username </label>
            <input id="username" name="username" required="required" type="text" placeholder="myusername or mymail@mail.com"/>
        </p>
        <p> 
            <label for="password" class="youpasswd" data-icon="p"> Your password </label>
            <input id="password" name="password" required="required" type="password" placeholder="eg. X8df!90EO" /> 
        </p>
        <p class="keeplogin"> 
            <input type="checkbox" name="loginkeeping" id="loginkeeping" value="loginkeeping" /> 
            <label for="loginkeeping">Keep me logged in</label>
        </p>
        <p class="login button"> 
            <input type="submit" value="Login" /> 
        </p>
        <p class="change_link">
            Not a member yet ?
            <a href="#toregister" class="to_register">Join us</a>
        </p>
    </form>

</div>

</div>
        )
        }
    }
export default Login;