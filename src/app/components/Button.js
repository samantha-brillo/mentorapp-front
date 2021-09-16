import { Button } from 'antd';

const ButtonComponent = () => ({
    text='Press me', 
    type='primary',
    onPress=()=>{},
    disabled
    })=>(
    <Button 
        disabled={disabled}
        type = {type}
        onClick={onPress}
    >
        {text}
    </Button>
)

export default ButtonComponent;