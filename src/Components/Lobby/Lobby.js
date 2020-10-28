import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Lobby.scss';
import PropTypes from 'prop-types'

class Lobby extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <section className='Lobby'>
        <h1>Welcome Back, it's TODAY!</h1>
        <h2>How are you feeling today?</h2>
        <section className='moodContainer'>
          <button className='moodButton' onClick={this.props.setMood}>Sad</button>
          <button className='moodButton' onClick={this.props.setMood}>Angry</button>
          <button className='moodButton' onClick={this.props.setMood}>Anxious</button>
          <button className='moodButton' onClick={this.props.setMood}>Fine</button>
        </section>
        <h2>What do you want do do about it?</h2>
        <nav>
          <Link to='/reflecting'>
            <button className='roomButton'>Reflect</button>
          </Link>
          <Link to='/feeling'>
            <button className='roomButton'>Feel</button>
          </Link>
          <Link to='/breathing'>
            <button className='roomButton'>Breathe</button>
          </Link>
        </nav>
      </section>
    )
  }
}
export default Lobby;

Lobby.propTypes = {
  setMood: PropTypes.func.isRequired
}
