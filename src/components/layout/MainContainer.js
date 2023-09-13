import React from 'react';

const MainContainer = ({children}) => {
    return(
        <div className='container d-flex flex-column'>
            {children}
        </div>
    )
}

export default MainContainer;