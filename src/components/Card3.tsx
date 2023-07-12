import { Avatar, Card } from 'antd';
import { FaMoneyBillWave } from 'react-icons/fa';
import { Row, Col } from 'antd';


const Card3: React.FC = () => {
    return (    
        <Col xs={24} sm={12} md={8} lg={8} xl={8}>

        <div>
            <Card>
                <Card.Meta
                    avatar={<Avatar 
                                style={{ backgroundColor: '#FF9D56', color: '#FFF' }}
                                size={100}
                                icon={<FaMoneyBillWave/>} />}
                    title={<p style={{ fontSize: '30px', textAlign: 'right', marginBottom: 0 }}>$0.00</p>}
                    description={<p style={{ fontSize: '18px', textAlign: 'right', marginTop: 0 }}>Ube Description</p>}
                    />
            </Card>
        </div>
        </Col>

      );
    };
    
 export default Card3;