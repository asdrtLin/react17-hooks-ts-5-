import React from 'react'

import { Menu } from 'antd'

import { GifOutlined } from '@ant-design/icons'

import styles from './SideMenu.module.css'

import { sideMenuList } from './mockup'

export const SideMenu: React.FC = () => {
    const SubMenu = Menu.SubMenu;
    const renderlist = sideMenuList.map((m, index) => {
            return <Menu.SubMenu
                key={`side-menu-${index}`}
                title={<span><GifOutlined />{m.title}</span>}
            >
                {
                    m.subMenu.map((sm,smindsmex)=>(
                        <Menu.SubMenu
                        key={`sub-menu-${smindsmex}`}
                        title={<span><GifOutlined />{sm.title}</span>}
                        >
                            {
                                sm.subMenu.map((sms, smsindex) => (
                                    <Menu.Item key={`sub-sub-menu-${smsindex}`}>
                                        <span><GifOutlined />{sms}</span>
                                    </Menu.Item>
                                ))
                            }
                        </Menu.SubMenu>
                    ))
                }
            </Menu.SubMenu>
        })
    console.log(renderlist)
    return (
        <Menu mode='vertical' className={styles['side-menu']}>
            {
                renderlist
            }
        </Menu>
//         <Menu  style={{ width: 256 }} mode="vertical">
    
//     <SubMenu key="sub2"  title="Navigation Two">
//       <SubMenu key="sub3" title="Submenu">
//         <Menu.Item key="7">Option 7</Menu.Item>
//         <Menu.Item key="8">Option 8</Menu.Item>
//       </SubMenu>
//     </SubMenu>
    
//   </Menu>
    )
}