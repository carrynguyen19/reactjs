import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
const Header = props => {
    return (
      <header>
      <div className="row">
        <div className="col-md-4 col-sm-12">
          <h1 className="logo"><i className="glyphicon glyphicon-tag" /> My <span className="primary">Store</span></h1>
          <p className="subtext">Bootstrap Ecommerce Template</p>
        </div> {/* col-md-4 */}
        <div className="col-md-8 col-sm-12">
          <form className="form-inline">
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" placeholder="Enter Email" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Enter Password" />
            </div>
            <button type="submit" className="btn btn-default">Login</button>
          </form>
        </div> {/* col-md-8 */}
      </div> {/* row */}
    </header>
    
    )
}

Header.propTypes = {

}

export default Header
