import { HomeOutlined, AppstoreOutlined, AreaChartOutlined, PayCircleOutlined, SettingOutlined, BarsOutlined  } from "@ant-design/icons";
import { Menu } from "antd";
import { Link} from 'react-router-dom'

const MenuList = ({ darkTheme }) => {
    return (
        <Menu theme={darkTheme? 'dark' : 'light'} mode="inline" className="menu-bar">
            <Menu.Item key="home" icon={<HomeOutlined />}>
                <Link to="/">Home</Link>
                
            </Menu.Item>
             
            <Menu.Item key="activity" icon={< AppstoreOutlined/>}>
                <Link to="/activity">Activity</Link>
            </Menu.Item>
            <Menu.SubMenu key="tasks" icon={<BarsOutlined />} title="Proveedores">
                <Menu.Item key="task-1">
                    <Link to="/listadoproveedores">Listado</Link>
                </Menu.Item>
                <Menu.Item key="task-2">Task 2</Menu.Item>
                <Menu.SubMenu key="subtasks" title="Substasks">
                    <Menu.Item key="subtask-1">Subtask 1</Menu.Item>
                    <Menu.Item key="subtask-2">SubTask 2</Menu.Item>
                </Menu.SubMenu>
            </Menu.SubMenu>
            <Menu.Item key="progress" icon={<AreaChartOutlined />}>
                Progress
            </Menu.Item>
            <Menu.Item key="payment" icon={<PayCircleOutlined />}>
                Payment
            </Menu.Item>
            <Menu.Item key="setting" icon={< SettingOutlined />}>
                Setting
            </Menu.Item>

        </Menu>
    )
}

export default MenuList