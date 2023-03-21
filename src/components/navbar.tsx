import Layout from "antd/es/layout/layout";
import { Header } from "antd/es/layout/layout";

interface Props {
    date: string;
  }

const Navbar: React.FC<Props> = ({ date }) => {
    return (
        <Header style={{color: "white"}}>            
           <div>selected date: {date}</div>
        </Header>
    );
};

export default Navbar;