import React from 'react';
import Logo from '../components/Logo';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';

const Contact = () => {
    return (
        <main>
            <Mouse></Mouse>
            <div className="contact">
                <Navigation></Navigation>
                <Logo></Logo>
                {/*contact form*/}
                <div className="contact-infos">
                    <div className="address">
                        <div className="content">
                            <h4>adresse</h4>
                            <p>12 rue du Code</p>
                            <p>69003 Lyon</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Contact;