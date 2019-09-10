import React from 'react';
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      //email
      //full name
    };
  }
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <div className="username-input">
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
                placeholder="username"
              />
            </div>
            <br />
            <div className="password-input">
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                placeholder="password"
              />
            </div>

            <br />
            <input className="session-submit" type="submit" value="Login" />
            <br/>
            <br/>
            <br/>
            <Link to='/login'>Don't have an account?</Link>
          </div>

        </form>
      </div>
    )
  }
}
export default LoginForm;