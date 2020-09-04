import React, { Component } from 'react';
import panel1 from '../image/image5.png';
import panel2 from '../image/image 6.png';
import WOW from 'wowjs';

class JobPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            panels: [
                {
                    id: 1,
                    src: panel1,
                    time: '1s'
                },
                {
                    id: 2,
                    src: panel2,
                    time: '2s'
                },
                {
                    id: 3,
                    src: panel1,
                    time: '2s'
                },
                {
                    id: 4,
                    src: panel2,
                    time: '2s'
                },
                {
                    id: 5,
                    src: panel1,
                    time: '2s'
                },
               
            ], isActive: true
        };
    }
    componentDidMount() {
        new WOW.WOW().init();
      }
    render() {
        let elementPanel = this.state.panels.map((panel, index) => {
            let result = '';

            result =
                <div className="eachPanel wow slideInUp" key={index}  data-wow-duration={panel.time}>
                    <img src={panel.src} alt="jobPanel" />
                </div>

            return result;
        });
        return (
            <div className="JobPanel">
               
                    {elementPanel}
               
            </div>
        );
    }

}

export default JobPanel;
