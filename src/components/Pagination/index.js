import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles.css';

export class Pagination extends Component {
	constructor(props){
        super(props)
        this.pageChangeAction = this.pageChangeAction.bind(this)
		this.pageChangeButtonAction = this.pageChangeButtonAction.bind(this)
		this.state = {
			totalPages: Math.ceil(this.props.totalRecords / this.props.itemsPerPage)
		}
	}
	
    static propTypes = {
        handleOnChange: PropTypes.func.isRequired,
        itemsPerPage: PropTypes.number,
		totalRecords: PropTypes.number,
        currentPage: PropTypes.number
	}
     /**
	 * Triggered by nav arrow or input directly
	 * @param event 
	 */
	pageChangeAction(ev) {
		const event = ev.target.value
        const totalPages = this.props.totalPages
		let currentPage = this.props.currentPage
		if ( event <= 0 ) {
			currentPage = 1;
		} else if (event > totalPages) {
			currentPage = totalPages;
		}
        this.props.handleOnChange(currentPage);
	}
	
	pageChangeButtonAction(direction) {
		let currentPage = this.props.currentPage
		if (direction === 'up') {
			currentPage += 1;
		} else if (direction === 'down') {
			currentPage -= 1;
		}
        this.props.handleOnChange(currentPage);
	}

    render() {
        return <div className="pagination">
			<button onClick={() => this.pageChangeButtonAction('down')} disabled={this.props.currentPage === 1}>previous</button>
			<button onClick={() => this.pageChangeButtonAction('up')} disabled={this.props.currentPage === this.state.totalPages}>next</button>
			<div>Page {this.props.currentPage} of {this.state.totalPages} | {this.props.totalRecords} records</div>
        </div>
    }
}

export default Pagination