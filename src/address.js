import React from 'react';

class Address extends React.Component {
     // const contactInfo = [{
     //      Email: sally@student.com,
     //      Phone: (666) 555-4444
     // }]

     render() {
          return (
               <address>
                    <img src="https://ia.media-imdb.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_UX214_CR0,0,214,317_AL_.jpg" alt="Sally Student"></img>
                    <h2>Contact Info</h2>
                    <a href="mailto:sally@student.com">sally@student.com</a><br />
                    <a href="tel:+16665554444">(666) 555-4444</a>
               </address> 
          );
     };
};

export default Address;