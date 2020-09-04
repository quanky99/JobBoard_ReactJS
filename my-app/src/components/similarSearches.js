import React, { Component } from 'react';


class SimilarSearches extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searches: [
                {
                    id: 1,
                    content: '.NET Senior Dev'
                },
                {
                    id: 2,
                    content: 'Java'
                },
                {
                    id: 3,
                    content: 'Senior'
                },
                {
                    id: 4,
                    content: '.NET Developer.'
                },
                {
                    id: 5,
                    content: '.NET Software Eng.'
                },
                {
                    id: 6,
                    content: '.NET Principal Eng.'
                }
            ], isActive: true
        };
    }
    onChange = (name, value) => {

        // var target = event.target;
        // var name = target.name;
        // var value = target.value;
        this.props.onSearch(
            name === 'SearchPos' ? value : this.state.searches.content, "All"
        )
        this.setState({
            [name]: value,

        });

    }
    render() {
        let elementSearch = this.state.searches.map((search, index) => {
            let result = '';

            result =

                <div className="contentSearch" key={index} onClick={() => this.onChange("SearchPos", search.content)}>
                    <a className="searchContent" href="#">{search.content}</a>
                </div>

            return result;
        });
        return (
            <div className="SimilarSearches">
                <h5>Similar Searches</h5>
                <div className="eachSearch" >
                    {elementSearch}
                </div>
            </div>
        );
    }

}

export default SimilarSearches;
