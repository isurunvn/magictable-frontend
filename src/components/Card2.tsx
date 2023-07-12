import { Avatar, Card } from 'antd';
import { PiChartLineDown } from 'react-icons/pi';
import { Row, Col } from 'antd';


const Card2: React.FC = () => {

    return (   
        <Col xs={24} sm={12} md={8} lg={8} xl={8}> 
        <div>
            <Card>
                <Card.Meta
                    avatar={<Avatar 
                                style={{ backgroundColor: '#FF5454', color: '#FFF' }}
                                size={100}
                                icon={<PiChartLineDown/>} />}
                    title={<p style={{ fontSize: '30px', textAlign: 'right', marginBottom: 0 }}>$0.00</p>}
                    description={<p style={{ fontSize: '18px', textAlign: 'right', marginTop: 0 }}>Ube Description</p>}
                    />
            </Card>
        </div>
        </Col>

      );

};

export default Card2;