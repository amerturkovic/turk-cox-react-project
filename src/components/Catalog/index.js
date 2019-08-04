import React, { Component } from 'react'
import locations from '../../services/data/locations.json'
import Card from '../Card'
import Pagination from '../Pagination'
import SelectBox from '../SelectBox'
import './styles.css';

export class Catalog extends Component {
    constructor(props){
        super(props)
        this.handleSortChange = this.handleSortChange.bind(this)
        this.handlePageChange = this.handlePageChange.bind(this)
        this.state = {
            sortby: "Heading",
            currentPage: 1,
            sorted: locations,
            perPage: 5
        }
    }

    componentDidMount() {
        this.sortBy(this.state.sortby)
    }

    handleSortChange(event){
        this.sortBy(event)
    }

    sortBy(prop){
        const sorted = this.sort(locations, prop)
        this.setState({
            sorted: this.pageCards(sorted)
        })
    }
    
    handlePageChange(pageNumber){
        this.setState({
            currentPage: pageNumber
        })
    }
    /**
     * 
     * @param arr Array to be sorted
     * @param objProp Object property to ne used for sorting
     * @return order num
     */
    sort(arr, objProp) {
        return arr.sort((a, b) => {
        const sortA = a[objProp];
        const sortB = b[objProp];
        if (sortA < sortB) {
            return -1;
        } else if (sortA > sortB) {
            return 1;
        } else {
            return 0;
        }
        });
    }

    pageCards(sortedCards){
        const start = (this.state.currentPage - 1) * this.state.perPage;
        const end = start + this.state.perPage;
        const spliced = sortedCards.slice(start, end);
        return spliced;
    }
    /**
     * Calculate Total Pages value
     */
    getTotalPages() {
        return Math.ceil(this.state.sorted.length / this.state.perPage);
    }

    render() {
        const sortByOptions = [
            { value: 'Heading', label: 'Heading' },
            { value: 'Subheading', label: 'Subheading' },
            { value: 'Price', label: 'Price' }
        ];
        return <div>
            <div className="sorter">
                <SelectBox options={sortByOptions} handleOnChange={this.handleSortChange}/>
            </div>
            <div className="catalog">
                {this.state.sorted.map((obj, index) =>
                    <Card key={index} location={obj} />
                )}
            </div>
            <Pagination handleOnChange={this.handlePageChange} currentPage={this.state.currentPage} itemsPerPage={this.state.perPage} totalPages={this.getTotalPages()} />
        </div>
    }
}

export default Catalog