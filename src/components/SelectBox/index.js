import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles.css';

export class SelectBox extends Component {
    static propTypes = {
        options: PropTypes.array.isRequired,
        classes: PropTypes.string,
        handleOnChange: PropTypes.func.isRequired
    }

    createOptions(options) {
        return options.map(o => (
            <option value={o.value} key={o.value}>
              {o.label}
            </option>
          ));
    }
  
    render() {
      return <div>
            <select onChange={e => this.props.handleOnChange(e.target.value)} className={this.props.classes}>
            {this.createOptions(this.props.options)}
            </select>
        </div>
    }
  }
  
  export default SelectBox