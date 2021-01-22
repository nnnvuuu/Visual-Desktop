import React, { Component,Fragment} from 'react';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/authAction';
import { Nav} from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../NavBar/NavBar.css';

export class Logout extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired
  }


  render() {
    return (
      <Fragment>
        <Nav.Link onClick = {this.props.logout} href = "#">
           <h4 className={"fontSize4"}>Logout</h4>
        </Nav.Link>
      </Fragment>
    );
  }
}

export default connect (null, {logout} )(Logout);