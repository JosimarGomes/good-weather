import styled from 'styled-components';
import { Button } from 'antd';

const ButtonRefresh = styled(Button).attrs({
    size: 'large',
    icon: 'sync'
})`
    margin-top: 50px;
`;

export default ButtonRefresh;
