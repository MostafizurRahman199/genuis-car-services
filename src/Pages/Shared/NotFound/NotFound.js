import React from 'react';
import sleeping from '../../../images/pageNotFound.jpg'
const NotFound = () => {
    return (
        <div>
          <h2 className="text-primary text-center">Page Not Found</h2>
          <div class="text-center">
 
          <img className='w-50 h-50 rounded'  src={sleeping}></img>
        </div>

        </div>


    );
};

export default NotFound;