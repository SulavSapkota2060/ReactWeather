import React from 'react'
import Aux from '../../components/hoc/AuxWrapper/auxwrap'
import './about.css'

const About = () => {
    document.body.style.backgroundColor="#eee"
    return(
        <Aux>
            <div className="AboutCard">
                <div>
                    <h1>Hi! I am Sulav Sapkota</h1>
                </div>
                <div>
                    <p>I have been developing websites and programmes for quite a long time now. I excel JavaScript(React.js) and Python(Django) languages.
                    If you want to know more about me then please take a time to visit my </p><a href="http://sulavsapkota.000webhostapp.com">portfolio website</a>
                </div>
            </div>
        </Aux>
    );
}

export default About;