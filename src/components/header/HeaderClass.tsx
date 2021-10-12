import React from 'react'
import styles from './Header.module.css'
import logo from './../../assets/logo.svg'
import { Layout, Typography, Input, Menu, Button, Dropdown } from 'antd'
import { GlobalOutlined } from '@ant-design/icons'
import store from './../../redux/store'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { LanguageState } from '../../redux/languageReducer'
interface State extends LanguageState {

}
interface Props {

}
class Headers extends React.Component<RouteComponentProps, State> {

    constructor(props: RouteComponentProps) {
        super(props)
        this.state = {
            language: store.getState().language,
            languageList: store.getState().languageList
        }
        store.subscribe(() => {
            const storeState = store.getState();
            this.setState({ language: storeState.language,languageList:storeState.languageList })
        });
    }

    render() {

        const { history } = this.props
        return (
            <div className={styles['app-header']}>
                <div className={styles.inner}>
                    <Typography.Text>让旅游更幸福</Typography.Text>
                    <Dropdown.Button
                        style={{ marginLeft: 15 }}
                        overlay={
                            <Menu onClick={({ item, key, keyPath, domEvent }) => {
                                let action=null;
                                if (key === 'new') {//添加
                                     action = {
                                        type: "add_language",
                                        payload: {code:`new_lang${new Date().getTime()}`,name:"新语言"}
                                    }
                                } else {
                                     action = {
                                        type: "change_language",
                                        payload: key
                                    }
                                }
                                store.dispatch(action)
                            }}>
                                {

                                    this.state.languageList.map(l => {
                                        return <Menu.Item key={l.code} >{l.name}</Menu.Item>
                                    })
                                }
                                <Menu.Item key='new'>添加新语言</Menu.Item>
                            </Menu>
                        }
                        icon={<GlobalOutlined />}
                    >
                        {this.state.language === 'zh' ? "中文" : "English"}
                    </Dropdown.Button>
                    <Button.Group className={styles['button-groud']}>
                        <Button onClick={() => history.push("register")}>注册</Button>
                        <Button onClick={() => history.push("signIn")}>登录</Button>
                    </Button.Group>
                </div>
                <Layout.Header className={styles['main-header']}>
                    <span onClick={() => history.push('/')}>
                        <img src={logo} alt="" className={styles['App-logo']} />
                        <Typography.Title level={3} className={styles.title}>React旅游网</Typography.Title>
                    </span>
                    <Input.Search placeholder="请输入旅游关键字" className={styles['search-input']} />
                </Layout.Header>
                <Menu mode={'horizontal'} className={styles['main-menu']}>
                    <Menu.Item key={1}>旅游首页</Menu.Item>
                    <Menu.Item key={2}>周末游</Menu.Item>
                    <Menu.Item key={3}>跟团游</Menu.Item>
                    <Menu.Item key={4}>自由行</Menu.Item>
                    <Menu.Item key={5}>私家团</Menu.Item>
                    <Menu.Item key={6}>邮轮</Menu.Item>
                    <Menu.Item key={7}>酒店+景点</Menu.Item>
                    <Menu.Item key={8}>当地玩乐</Menu.Item>
                    <Menu.Item key={9}>主题游</Menu.Item>
                    <Menu.Item key={10}>定制游</Menu.Item>
                    <Menu.Item key={11}>游学</Menu.Item>
                    <Menu.Item key={12}>签证</Menu.Item>
                    <Menu.Item key={13}>企业游</Menu.Item>
                    <Menu.Item key={14}>高端游</Menu.Item>
                    <Menu.Item key={15}>爱玩户外</Menu.Item>
                    <Menu.Item key={16}>保险</Menu.Item>
                </Menu>
            </div>
        )
    }
}
export const Header = withRouter(Headers)