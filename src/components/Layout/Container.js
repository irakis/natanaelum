import React from 'react';

const Container = ({children}) => {
    return(
        <div className='container d-flex flex-column h-100'>
            {children}
        </div>
    )
}

export default Container;