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

    sortBy(prop = this.state.sortby){
        const sorted = this.sort(locations, prop)
        this.setState({
            sortby: prop,
            sorted: this.refreshCards(sorted, 1),
            currentPage: 1,
        })
    }
    
    handlePageChange(pageNumber){
        const sorted = this.sort(locations, this.state.sortby)
        const sliced = this.refreshCards(sorted, pageNumber)
        this.setState({
            currentPage: pageNumber,
            sorted: sliced
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

    refreshCards(sortedCards, page){
        let pageNum = page ? page : this.state.currentPage
        const start = (pageNum - 1) * this.state.perPage;
        const end = start + this.state.perPage;
        const spliced = sortedCards.slice(start, end);
        return spliced;
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
            <div className="navigation">
                <Pagination handleOnChange={this.handlePageChange} currentPage={this.state.currentPage} itemsPerPage={this.state.perPage} totalRecords={locations.length}/>
            </div>
            
        </div>
    }
}

export default Catalog