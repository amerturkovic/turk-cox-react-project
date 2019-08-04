import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles.css';

export class Pagination extends Component {
    static propTypes = {
        handleOnChange: PropTypes.func.isRequired,
        itemsPerPage: PropTypes.number,
        totalPages: PropTypes.number,
        currentPage: PropTypes.number
    }
     /**
	 * Triggered by nav arrow or input directly
	 * @param event 
	 */
	pageChangeAction(event) {
        let totalPages = this.props.data.totalPages
		let currentPage = this.props.data.currentPage;
		if (event === 'up') {
			currentPage += 1;
		} else if (event === 'down') {
			currentPage -= 1;
		} else {
			if ( event <= 0 ) {
				currentPage = 1;
			} else if (event > totalPages) {
				currentPage = totalPages;
			}
        }
        this.props.handleOnChange(currentPage);
	}

	/**
	 * disable arrows if page number is outside of the range
	 * @param direction 
	 * @return boolean
	 */
	disablePageNav(direction) {
        let returnVal = false
        let currentPage = this.props.data.currentPage
        let totalPages = this.props.data.totalPages;
		if (currentPage >= 1 && totalPages > 0) {
			if (direction === "back" ) {
				if (currentPage === 1) {
					returnVal = true;
				}
			}
			if (direction === "next") {
				if (currentPage === totalPages) {
					returnVal = true;
				}
			}
		} else {
			returnVal = true;
		}
		return returnVal;
	}

    render() {
        return <div className="pagination">
        
        </div>
    }
}

export default Pagination