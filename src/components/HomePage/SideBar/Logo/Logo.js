import React from 'react';
import './Logo.css';
import Aux from '../../../../hoc/Axu';
import LOGOIMAGE from '../../Main/LogoImage/LogoImage';
const logo = (props) => {
    return(
        <Aux>
            <div className="Logo" onClick={props.clickedLogo}>
                <div className="text-icon-sidebar">alinh'stodos</div>
            </div>
        </Aux>
    )
}




export default logo;