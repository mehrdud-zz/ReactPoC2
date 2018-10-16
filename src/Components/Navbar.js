import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#" onClick={this.showLandingPage}>
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" onClick={this.showAssets}>
                Assets
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" onClick={this.showStrategies}>
                Strategies
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
