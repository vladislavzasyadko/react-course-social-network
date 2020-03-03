import React from 'react';
import preloader from './../../../img/loader2.gif'
import pmodule from './Preloader.module.scss'


let Preloader = (props) => {
    return <div className={pmodule.divPreload}>
        <img alt='#' className={pmodule.preloader} src={preloader} />
    </div>
}

export default Preloader;
