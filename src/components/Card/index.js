import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles.css';

export class Card extends Component {
  static propTypes = {
    location: PropTypes.shape({
      Heading: PropTypes.string,
      Subheading: PropTypes.string,
      Price: PropTypes.number,
      showBridge: PropTypes.bool
    })
  }

  render() {
    const showBridge = this.props.location.showBridge;
    // check if image exist if not display default graphic
    const imgClass = showBridge ? 'image' : 'noimage';
    return <div className="card">
      <div className={imgClass}>
      {showBridge && 
        <img alt="" src="../../static/bridge.jpg" />}
        {!showBridge && 
        <img alt="" className="centered" src={require(`../../static/no_img.png`)} />}
      </div>
      <div className="content">
        <p>{this.props.location.Heading}</p>
        <p>{this.props.location.Subheading}</p>
      </div>
      <div className="price">
        {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(this.props.location.Price)}</div>
    </div>
  }
}

export default Card