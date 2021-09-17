import { Card } from 'antd';

const { Meta } = Card;

const CardComponent = ({email, objective,profile_picture, username, aboutme}) => (
    <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={profile_picture}/>}
  >
    <Meta title={`Nombre: ${username}`} description={aboutme} />
    <Meta description={`correo: ${email}`} />
    <Meta title={"objetivos"} />
    <Meta description={ <div style= {{display:"flex", flexDirection:"column"}}>{objective.map((item, index)=> <span>{item}</span>)}</div>} />
  </Card>
)
    
    export default CardComponent;