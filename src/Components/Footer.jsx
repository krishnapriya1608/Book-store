import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <div>
      <MDBFooter
        style={{ position: 'fixed', bottom: 0, width: '100%' }} 
        
        className='text-center text-lg-left'
      >
        <div
          className='text-center p-3'
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
        >
          &copy; {new Date().getFullYear()} Copyright:{' '}
          <a className='text-light' href='https://bookstrap.com/'>
            bookstore.com
          </a>
        </div>
      </MDBFooter>
    </div>
  );
}

export default Footer;
