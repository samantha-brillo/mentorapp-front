import { Card } from 'antd';

const { Meta } = Card;

const CardComponent = ({img,children}) => (
    <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Nombre" description=" " />
  </Card>
)
    
    export default CardComponent;