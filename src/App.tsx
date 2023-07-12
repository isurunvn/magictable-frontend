import React from 'react';
import './App.css';
import Chart from './components/Chart';
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import Card3 from './components/Card3';
import { Row, Col } from 'antd';


function App() {

  const customerData = [
    { date: '01-07-2023', value: 3 },
    { date: '02-07-2023', value: 4 },
    { date: '03-07-2023', value: 2 },
    { date: '04-07-2023', value: 7 },
    { date: '05-07-2023', value: 4 },
    { date: '06-07-2023', value: 6 },
    // add more data items as needed
  ];

  const reservationData = [
    { date: '01-07-2023', value: 45 },
    { date: '02-07-2023', value: 34 },
    { date: '03-07-2023', value: 65 },
    { date: '04-07-2023', value: 72 },
    { date: '05-07-2023', value: 48 },
    { date: '06-07-2023', value: 39 },
    // add more data items as needed
  ];

  return (
    <div className="App">    
      
      <div className='cards'>
        <Row gutter={[20, 20]}>
        
            <Card1 />
        
            <Card2 />
          
            <Card3 />
    
        </Row>
      </div>

      <div className='customerChart'>
      
        <h2>Customers</h2>
        <Chart data={customerData}/>
        
      </div>

    <br />

      <div className='reservationChart'>
      
        <h2>Reservations</h2>
        <Chart data={reservationData}/>
    
      </div>
      
    </div>
  );
}

export default App;
