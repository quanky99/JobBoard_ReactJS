import React, { Component } from 'react';
import Header from './/components/header';
import Search from './components/search';
import SimilarSearches from './components/similarSearches';
import Job from './components/job';
import JobPanel from './components/jobPanel';
import Footer from './components/footer';
import './App.css';
import './jobBoard.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [
        {
          id: 1,
          logo: 'https://cdn.itviec.com/employers/codelynx/logo/social/jt5A3qgBoa3XU3LQgFLVU6uy/codelynx-logo.jpg',
          position: '.NET SENIOR DEVELOPER',
          description: '  You will get to develop state of the art mobile applications using the latest technologies and being able to further grow your skills in your preferred',
          salary: 'project bonus',
          address: 'HCMC',
          tags: [
            'HTML5', 'CSS3', 'ReactJS', 'React-Native'
          ]
        },
        {
          id: 2,
          logo: 'https://cdn.itviec.com/employers/codelynx/logo/social/jt5A3qgBoa3XU3LQgFLVU6uy/codelynx-logo.jpg',
          position: 'JAVA SENIOR DEVELOPER',
          description: '  You will get to develop state of the art mobile applications using the latest technologies and being able to further grow your skills in your preferred',
          salary: 'project bonus',
          address: 'Dong Nai',
          tags: [
            'HTML5', 'CSS3', 'ReactJS', 'NodeJS'
          ]
        },
        {
          id: 3,
          logo: 'https://cdn.itviec.com/employers/codelynx/logo/social/jt5A3qgBoa3XU3LQgFLVU6uy/codelynx-logo.jpg',
          position: '.NET SENIOR DEVELOPER',
          description: '  You will get to develop state of the art mobile applications using the latest technologies and being able to further grow your skills in your preferred',
          salary: 'project bonus',
          address: 'Da Nang',
          tags: [
            'HTML5', 'CSS3', 'ReactJS', 'React-Native', 'TypeScript'
          ]
        },
        {
          id: 4,
          logo: 'https://cdn.itviec.com/employers/codelynx/logo/social/jt5A3qgBoa3XU3LQgFLVU6uy/codelynx-logo.jpg',
          position: '.NET JUNIOR DEVELOPER',
          description: '  You will get to develop state of the art mobile applications using the latest technologies and being able to further grow your skills in your preferred',
          salary: 'project bonus',
          address: 'HCMC',
          tags: [
            'HTML5', 'CSS3', 'ReactJS', 'React-Native'
          ]
        },
        {
          id: 5,
          logo: 'https://cdn.itviec.com/employers/codelynx/logo/social/jt5A3qgBoa3XU3LQgFLVU6uy/codelynx-logo.jpg',
          position: '.NET SENIOR DEVELOPER',
          description: '  You will get to develop state of the art mobile applications using the latest technologies and being able to further grow your skills in your preferred',
          salary: 'project bonus',
          address: 'HCMC',
          tags: [
            'HTML5', 'CSS3', 'ReactJS', 'React-Native'
          ]
        },
        {
          id: 6,
          logo: 'https://cdn.itviec.com/employers/codelynx/logo/social/jt5A3qgBoa3XU3LQgFLVU6uy/codelynx-logo.jpg',
          position: '.NET SENIOR DEVELOPER',
          description: '  You will get to develop state of the art mobile applications using the latest technologies and being able to further grow your skills in your preferred',
          salary: 'project bonus',
          address: 'HCMC',
          tags: [
            'HTML5', 'CSS3', 'ReactJS', 'React-Native'
          ]
        }
      ],
      // isActive: true,
      keyword: '',
      search: {
        pos: '',
        address: 'All'
      }
    }
  }

  onSearch = (SearchPos, SearchAddress) => {
    console.log(SearchPos, '-', SearchAddress);
    console.log('ok');
    this.setState({
      search: {
        pos: SearchPos.toLowerCase(),
        address: SearchAddress
      }
    });

  }
  render() {
    var { jobs, key, search } = this.state;
    //console.log(search);
    if (search) {
      if (search.pos) {
        jobs = jobs.filter((job) => {
          return job.position.toLowerCase().indexOf(search.pos) !== -1;

        });
      }

      jobs = jobs.filter((job) => {
        if (search.address === 'All') {
          return job;
        } else
          return job.address.indexOf(search.address) !== -1;

      });

    }
    return (

      <div className="App">
        <Header />
        <Search onSearch={this.onSearch} />
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 ">
              <SimilarSearches onSearch={this.onSearch} />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-7 col-lg-8 ">
              <Job jobs={jobs} />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-2 ">
              <JobPanel />
            </div>
          </div>

        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
