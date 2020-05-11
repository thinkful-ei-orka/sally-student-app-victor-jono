import React from 'react';

// function WorkHistoryList(props) {
//      const workHistoryData = [{
//           id: 1,
//           Company: 'Software Company',
//           Title: 'Web Developer',
//           DatesWorked: '05/2010-08/2015',
//           Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
//      }, {
//           id: 2,
//           Company: 'Tech Company',
//           Title: 'Software Engineer',
//           DatesWorked: '09/2015-01/2020',
//           Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
//      }];     
// };

// const workList = workHistoryData.map(job =>
//      <Job key ={job.id} company={job.Company} title={job.Title} datesWorked={job.DatesWorked} description={job.Description} />
//      );

class WorkHistory extends React.Component {


     render() {
          return (
               <section>
                   <h2>Work History</h2> 
               <ul>
                    <li>Software Company
                         Web Developer
                              05/2010-08/2015
                                   Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                   tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                   quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                   consequat.</li>

                    <li>Tech Company
                         Software Engineer
                              09/2015-01/2020
                                   Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                   tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                   quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                   consequat.</li>
        </ul>
        </section>
          )
     }
}

export default WorkHistory;