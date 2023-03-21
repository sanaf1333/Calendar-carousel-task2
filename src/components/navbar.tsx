import { Layout } from "antd";
const {Header} = Layout;
import { Typography } from 'antd';
const { Title } = Typography;
interface Props {
    date: string;
  }

const Navbar: React.FC<Props> = ({ date }) => {
    return (
        <Header style={{backgroundColor: "gray"}}>  
            <Title level={3} style={{ float: 'left', margin: 0 }}>Date</Title>          
           <Title level={3} style={{ float: 'right', margin: 0 }}>{date}</Title>
        </Header>
    );
};

export default Navbar;