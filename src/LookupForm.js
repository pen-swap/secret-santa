import './LookupForm.css'
import React, { Component } from 'react'
import { render } from '@testing-library/react'

const apiUrl = 'http://pen-swap-secret-santa.us-e2.cloudhub.io/secretsanta'

class LookupForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      submitting: false,
      dotdotdot: '..',
      message: undefined,
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.doDotDotDot = this.doDotDotDot.bind(this)
  }

  onSubmit(event) {
    event.preventDefault()
    const username = document.getElementById('name').value

    if (username === undefined || username === null || username.trim() === '') {
      this.props.setMessage(
        'Hey now! You need to type in your reddit username!'
      )
      return
    }

    this.setState({ submitting: true })
    this.doDotDotDot()

    fetch(`${apiUrl}?giver=${username}`)
      .then(response => response.json())
      .then(data => {
        this.props.setMessage(`${data.message}!`)
        document.getElementById('name').value = ''
      })
      .catch(error => this.props.setMessage('Ruh-roh! An error occured! Contact the mods?'))
    
    this.setState({ submitting: false })
  }

  doDotDotDot() {
    this.setState((curState) => {
      let newLength = curState.dotdotdot.length % 3
      return { dotdotdot: '.'.repeat(newLength + 1) }
    })
    setTimeout(this.doDotDotDot, 500)
  }

  render() {
    return (
      <div className='LookupForm'>
        {this.state.message ? (
          <div></div>
        ) : (
          <form className='LookupForm-form'>
            <input
              placeholder='Enter Reddit username..'
              className='LookupForm-input'
              id='name'
            />
            <button
              type='submit'
              className='LookupForm-button'
              onClick={this.onSubmit}
              disabled={this.state.submitting}
            >
              {this.state.submitting ? this.state.dotdotdot : 'Lookup'}
            </button>
          </form>
        )}
      </div>
    )
  }
}

export default LookupForm
