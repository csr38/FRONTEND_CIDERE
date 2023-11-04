import { Button, Collapse, Layout, theme } from 'antd'
import React, { useState } from 'react'
import Logo from './components/logo'
import MenuList  from './components/MenuList'
import ToggleThemeButton from './components/ToggleThemeButton'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'


const { Header, Sider } = Layout

function App() {
  const [darkTheme, setDarkTheme] = useState(true)
  const toggleTheme = () => {setDarkTheme(!darkTheme)}
  const [collapsed, setCollapsed] = useState(false)

  const { token: {colorBgContainer} } = theme.useToken()
  return (
    <>
      <Layout>
          <Sider 
            collapsed={collapsed}
            collapsible
            trigger={null}
            theme={darkTheme? 'dark' : 'light'} className='sidebar'>
              <Logo />
              <MenuList darkTheme = { darkTheme }/>
              <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
          </Sider>
          <Layout>
              <Header style={{padding: 0, background:colorBgContainer}} >
                  <Button 
                    type="text" 
                    className='toggle'
                    onClick={() => setCollapsed(!collapsed)}
                    icon={ collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} />
              </Header>
            </Layout>
      </Layout>
    </>
  )
}

export default App
