import React, { Component } from "react";
import {Link} from "react-router-dom";

import "./Reg.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = (event) => {
    alert("Form submitted successfully");
    event.preventDefault();
  };
  render() {
    return (
      <div className="card-container">
        <div className="form-container">
          <form onSubmit={this.handleSubmit}>
            <h1 className="heading">Registation Form</h1>
            <p>Please fill out the following form for registration</p>
            <hr />
            <table>
              <tr>
                <label for="fname">First Name: </label>
              </tr>
              <tr>
                <input
                  className="textbox"
                  type="text"
                  ref={this.input}
                  name="fname"
                  size="45"
                  required
                />
              </tr>
              <br />

              <tr>
                <label for="lname">Last Name:</label>
              </tr>
              <tr>
                <input
                  className="textbox"
                  type="text"
                  ref={this.input}
                  name="lname"
                  size="45"
                  required
                ></input>
              </tr>
              <br />
              <tr>
                <label>Email:</label>
              </tr>
              <tr>
                <input
                  className="textbox"
                  type="email"
                  ref={this.input}
                  name="email"
                  size="45"
                  required
                ></input>
              </tr>
              <br />

              <tr>
                <label for="city">City:</label>
              </tr>
              <tr>
                <select id="city" required>
                  <option value="Ernakulam">Ernakulam</option>
                  <option value="Thrissur">Thrissur</option>
                  <option value="Trivandrum">Trivdandrum</option>
                  <option value="Palakad">Palakad</option>
                  <option value="kozhikode">Kozhikode</option>
                </select>
              </tr>
              <br />

              <tr>
                <label for="gender">Gender:</label>
              </tr>
              <tr>
                <div>
                  <input
                    id="gender"
                    type="radio"
                    name="female"
                    ref={this.input}
                  ></input>
                  <label>Female</label>

                  <input
                    id="gender"
                    type="radio"
                    name="male"
                    ref={this.input}
                  ></input>
                  <label>Male</label>
                </div>
              </tr>
              <br />
              <tr>
                <label for="birthday"> Birthday:</label>
                <input
                  type="date"
                  id="birthday"
                  name="birthday"
                  className="textbox"
                  required
                  ref={this.input}
                ></input>
              </tr>
              <br />
              <tr>
                <label for="hobbies">Hobbies:</label>
              </tr>
              <tr>
                <div>
                  <input
                    type="checkbox"
                    value="reading"
                    name="reading"
                    ref={this.input}
                  ></input>
                  <label>Reading</label>

                  <input
                    type="checkbox"
                    value="sports"
                    name="sports"
                    ref={this.input}
                  ></input>
                  <label>Sports</label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    value="dancing"
                    name="dancing"
                    ref={this.input}
                  ></input>
                  <label>Dancing </label>

                  <input
                    type="checkbox"
                    value="singing"
                    name="singing"
                    ref={this.input}
                  ></input>
                  <label>Singing </label>
                </div>
              </tr>
              <tr>
                <br />
                <label>Address:</label>
              </tr>
              <tr>
                <textarea
                  ref={this.input}
                  className="text"
                  name="address"
                ></textarea>
              </tr>
              <hr />
              <tr>
                <input
                  type="checkbox"
                  id="terms_conditions"
                  name="terms"
                  required
                  ref={this.input}
                />
                <label for="terms_conditions">
                  I agree the terms and conditions
                </label>
              </tr>
              <th>
                <Link to="movies">
                <input className="button" type="submit" value="Submit" />
                </Link>
              </th>
            </table>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
