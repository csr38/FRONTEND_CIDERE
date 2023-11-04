import { Button, Collapse, Layout, Switch, theme } from 'antd'
import React, { useState } from 'react'
import Logo from './components/logo'
import MenuList  from './components/MenuList'
import ToggleThemeButton from './components/ToggleThemeButton'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { Routes, Route } from 'react-router-dom'


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

            <Routes>
              <Route path="/" element={<div>Home  uno</div>} />
              <Route path="/activity" element={<div>Activity</div>} />
              <Route path="/tasks" element={<div>Tasks</div>} />
              <Route path="/progress" element={<div>Progress</div>} />
              <Route path="/payment" element={<div>Payment</div>} />
              <Route path="/setting" element={<div>Setting</div>} />
            </Routes>
      </Layout>
    </>
  )
}

export default App
