import React from 'react';
import err from './../../../assets/error.png'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
const Error = () => {
  return (
    <div>
      <Header></Header>
   <div className='max-w-xl max-h-screen  mx-auto '>

<img src={err} alt="404" />
</div>
<Footer></Footer>
    </div>
 
  );
};

export default Error;