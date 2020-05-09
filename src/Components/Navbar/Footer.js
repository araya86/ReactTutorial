import React, { Component } from 'react';
import styled from 'styled-components';

class Footer extends Component {
    render (){
        return(
            <div className='main-footer'>
            <p className="text-xs-center">
            &copy;{new Date().getFullYear()} City Guide App - All Rights Reserved
            </p>
        </div>
            
        )
    }
}
export default Footer;
