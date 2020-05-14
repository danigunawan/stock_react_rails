import React from 'react'

import { Redirect } from 'react-router'

import userFunctions from '../../../utility/userFunctions'

import './deleteProfile.css'

export default class DeleteProfile extends React.Component {

  state = {
    deleteSuccess: false,
    hoverConfirm: false,
    hoverCancel: false,
    cancel: false
  }

  componentDidMount(){ this.props.onPageLoadFunctions('delete_profile') }

  onClickConfirm = (event) => {
    userFunctions('delete', `http://localhost:3001/users/${this.props.user_id}`)
    .then( this.setState({ deleteSuccess: true }, this.props.logOut(), this.props.onClickTrafficFunctions(event)) )
  }

  onClickCancel = (event) => {
    this.props.onClickTrafficFunctions(event)
    this.setState({ cancel: true })
  }

  onHoverConfirm = () => { this.setState({ hoverConfirm: true }) }

  offHoverConfirm = () => { this.setState({ hoverConfirm: false }) }

  onHoverCancel = () => { this.setState({ hoverCancel: true }) }

  offHoverCancel = () => { this.setState({ hoverCancel: false}) }

  render(){

    const confirmation_buttons = [
      <button
        key={"b1"}
        name="delete_profile_form"
        interaction="submit"
        className="confirm_button"
        onClick={ this.onClickConfirm }
        onMouseEnter={this.onHoverConfirm}
        onMouseLeave={this.offHoverConfirm}
      >
        {this.state.hoverConfirm ? "✔" : "Yes"}
      </button>,
      <button
        key={"b2"}
        name="delete_profile_form"
        interaction="cancel"
        className="cancel_button"
        onClick={ this.onClickCancel }
        onMouseEnter={this.onHoverCancel}
        onMouseLeave={this.offHoverCancel}
      >
        {this.state.hoverCancel ? "✘" : "No"}
      </button>
    ]

    const deleteForm =
    <>
      <div className="alt_header">
        <h3>Are you sure you want to delete your profile?</h3>
      <div className="delete_buttons_container">
        {
          {
            true: <Redirect to="/dashboard/profile" />,
            false: (() => {
              switch(this.state.deleteSuccess) {
                case true: return <Redirect to="/" />;
                case false: return confirmation_buttons;
                default: return <></>;
              }
            })()
          }[this.state.cancel]
        }
      </div>
      </div>
    </>

    return(
      <div className="default_wrapper">
        {localStorage.length === 0 ? <Redirect to="/" /> : deleteForm }
      </div>
    )
  }
}