import React, { Component } from 'react';


class Job extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         jobs: [
    //             {
    //                 id: 1,
    //                 logo: 'https://cdn.itviec.com/employers/codelynx/logo/social/jt5A3qgBoa3XU3LQgFLVU6uy/codelynx-logo.jpg',
    //                 position: '.NET SENIOR DEVELOPER',
    //                 description: '  You will get to develop state of the art mobile applications using the latest technologies and being able to further grow your skills in your preferred',
    //                 salary: 'project bonus',
    //                 address: 'HCMC',
    //                 tags: [
    //                     'HTML5', 'CSS3', 'ReactJS', 'React-Native'
    //                 ]
    //             },
    //             {
    //                 id: 2,
    //                 logo: 'https://cdn.itviec.com/employers/codelynx/logo/social/jt5A3qgBoa3XU3LQgFLVU6uy/codelynx-logo.jpg',
    //                 position: '.NET SENIOR DEVELOPER',
    //                 description: '  You will get to develop state of the art mobile applications using the latest technologies and being able to further grow your skills in your preferred',
    //                 salary: 'project bonus',
    //                 address: 'Dong Nai',
    //                 tags: [
    //                     'HTML5', 'CSS3', 'ReactJS', 'NodeJS'
    //                 ]
    //             },
    //             {
    //                 id: 3,
    //                 logo: 'https://cdn.itviec.com/employers/codelynx/logo/social/jt5A3qgBoa3XU3LQgFLVU6uy/codelynx-logo.jpg',
    //                 position: '.NET SENIOR DEVELOPER',
    //                 description: '  You will get to develop state of the art mobile applications using the latest technologies and being able to further grow your skills in your preferred',
    //                 salary: 'project bonus',
    //                 address: 'Da Nang',
    //                 tags: [
    //                     'HTML5', 'CSS3', 'ReactJS', 'React-Native', 'TypeScript'
    //                 ]
    //             },
    //             {
    //                 id: 4,
    //                 logo: 'https://cdn.itviec.com/employers/codelynx/logo/social/jt5A3qgBoa3XU3LQgFLVU6uy/codelynx-logo.jpg',
    //                 position: '.NET SENIOR DEVELOPER',
    //                 description: '  You will get to develop state of the art mobile applications using the latest technologies and being able to further grow your skills in your preferred',
    //                 salary: 'project bonus',
    //                 address: 'HCMC',
    //                 tags: [
    //                     'HTML5', 'CSS3', 'ReactJS', 'React-Native'
    //                 ]
    //             },
    //             {
    //                 id: 5,
    //                 logo: 'https://cdn.itviec.com/employers/codelynx/logo/social/jt5A3qgBoa3XU3LQgFLVU6uy/codelynx-logo.jpg',
    //                 position: '.NET SENIOR DEVELOPER',
    //                 description: '  You will get to develop state of the art mobile applications using the latest technologies and being able to further grow your skills in your preferred',
    //                 salary: 'project bonus',
    //                 address: 'HCMC',
    //                 tags: [
    //                     'HTML5', 'CSS3', 'ReactJS', 'React-Native'
    //                 ]
    //             },
    //             {
    //                 id: 6,
    //                 logo: 'https://cdn.itviec.com/employers/codelynx/logo/social/jt5A3qgBoa3XU3LQgFLVU6uy/codelynx-logo.jpg',
    //                 position: '.NET SENIOR DEVELOPER',
    //                 description: '  You will get to develop state of the art mobile applications using the latest technologies and being able to further grow your skills in your preferred',
    //                 salary: 'project bonus',
    //                 address: 'HCMC',
    //                 tags: [
    //                     'HTML5', 'CSS3', 'ReactJS', 'React-Native'
    //                 ]
    //             }
    //         ],
    //          isActive: true
    //     };
    // }
    render() {
        let { jobs } = this.props;
        let elementJob = jobs.map((job, index) => {
            let result = '';
            let elementTag = job.tags.map((tag, index) => {
                let result = '';
                result =
                    <button type="button" className="btn-tag" key={index}>
                        <div className="z2"> {tag} </div>
                    </button>

                return result;
            });
            result =
                <div className="row eachJob" key={index}>
                    <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 ">
                        <img src={job.logo} alt="LogoCompany" style={{ width: '70px' }} />
                    </div>
                    <div className="aboutJob col-xs-12 col-sm-12 col-md-2 col-lg-10 ">
                        <div className="position">{job.position}</div>
                        <div className="description">
                            {job.description}
                        </div>
                        <div className="salary">
                            <i class="fa fa-dollar"></i>{job.salary}
                        </div>

                        <div className="address">
                        <i class="fa fa-map-marker"></i>{job.address}
                        </div>
                        <div className="tag">
                            {elementTag}
                        </div>

                    </div>
                </div>
            return result;
        });

        return (
            <div className="Job">
                {/* <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 ">
                        <img src="https://cdn.itviec.com/employers/codelynx/logo/social/jt5A3qgBoa3XU3LQgFLVU6uy/codelynx-logo.jpg" alt="LogoCompany" style={{ width: '70px' }} />
                    </div>
                    <div className="aboutJob col-xs-12 col-sm-12 col-md-2 col-lg-10 ">
                        <div className="position">.NET SENIOR DEVELOPER</div>
                        <div className="description">
                            You will get to develop state of the art mobile applications using the latest technologies and being able to further grow your skills in your preferred
                            <br />project bonus
                        </div>
                        <div className="address">
                            HCM City
                        </div>
                        <div className="tag">
                            <button type="button" className="btn-tag btn btn-warning">ReactJS</button>
                        </div>
                    </div>
                </div> */}
                {elementJob}
            </div>
        );
    }

}

export default Job;
