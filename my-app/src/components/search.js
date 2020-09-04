import React, { Component } from 'react';


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {

            SearchPos: '',
            SearchAddress: 'All',
        };
    }
    onChange2 = (event) => {
       
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.props.onSearch(
            name === 'SearchPos' ? value : this.state.SearchPos,
            name === 'SearchAddress' ? value : this.state.SearchAddress)
        this.setState({
            [name]: value,

        });
      
    }
    onChange = (name,value) => {
       
       // var target = event.target;
        // var name = target.name;
        // var value = target.value;
        this.props.onSearch(
            name === 'SearchPos' ? value : this.state.SearchPos,
            name === 'SearchAddress' ? value : this.state.SearchAddress)
        this.setState({
            [name]: value,

        });
      
    }
    // onSearch = () => {
    //     this.props.onSearch(this.state.SearchPos, this.state.SearchAddress)
    // }
    render() {
        var { SearchPos, SearchAddress } = this.state;
        // console.log(this.state);
        return (
            <div className="search">
                <div className="container">
                    <form className="form">
                        <div className="row">
                            <div className="col-xs-7 col-sm-7 col-md-7 col-lg-10 ">
                                <div className="searchInput">
                                    <input className="form-control mr-sm-2"
                                        name="SearchPos"
                                        value={SearchPos}
                                        onChange={this.onChange2}
                                        type="text"
                                        placeholder="Search Keyword Skilss(Java, .Net, React...), Job Title..."
                                        aria-label="Search" />
                                    <div className="iconSearch"><i className="fa fa-search"></i></div>
                                </div>
                            </div>
                            {/* <div className="col-xs-7 col-sm-7 col-md-7 col-lg-3 ">
                                <input style={{ backgroundColor: 'white' }} className="form-control mr-sm-2" type="text" value={this.state.valueAdd} aria-label="Search" readOnly />
                            </div> */}
                            <div className="col-xs-7 col-sm-7 col-md-7 col-lg-2 ">
                                {/* <select id="inputState" className="form-control filter " name="SearchAddress" value={SearchAddress} onChange={this.onChange}>
                                    <option defaultValue value={'All'}>All</option>
                                    <option value={'HCMC'}>HCMC</option>
                                    <option value={'Dong Nai'}>Dong Nai</option>
                                    <option value={'Da Nang'}>Da Nang</option>
                                </select> */}
                                <ul className="menu">
                                    <li>
                                        <a  className="init" href="#">{this.state.SearchAddress}<i class="fa fa-chevron-down"></i><i class="fa fa-chevron-up"></i></a>

                                        <ul>
                                        <li onClick={ ()=>this.onChange("SearchAddress","All")}><a href="#">All </a></li>
                                            <li onClick={ ()=>this.onChange("SearchAddress","HCMC")}><a href="#">HCMC</a></li>
                                            <li onClick={ ()=>this.onChange("SearchAddress","Dong Nai")}><a href="#">Dong Nai</a></li>
                                            <li onClick={ ()=>this.onChange("SearchAddress","Da Nang")}><a href="#">Da Nang</a></li>
                                           
                                        </ul>
                                    </li>
                                </ul>
                               
                            </div>
                            {/* <div className="col-xs-7 col-sm-7 col-md-7 col-lg-1 ">
                                <button className="btn-search" type="button" onClick={this.onSearch}><div className="z">SEARCH</div> </button>
                            </div> */}
                        </div>


                        {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                    </form>
                </div>
            </div>
        );
    }

}

export default Search;
