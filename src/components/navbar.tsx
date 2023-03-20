import {Layout} from 'antd';
const { Header } = Layout;

interface Props {
    date: string;
  }

const Navbar: React.FC<Props> = ({ date }) => {
    return (
        <Header>
            <h1>date</h1>
            <div>selected date: {date}</div>
        </Header>
    );
};

export default Navbar;