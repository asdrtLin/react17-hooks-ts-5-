import React from "react";
import styles from "./Header.module.css";
import logo from "./../../assets/logo.svg";
import { Layout, Typography, Input, Menu, Button, Dropdown } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import store from "./../../redux/store";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { LanguageState } from "../../redux/languageReducer";

import { withTranslation, WithTranslation } from "react-i18next";
interface State extends LanguageState {}
interface Props extends RouteComponentProps, WithTranslation {}

class Headers extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      language: store.getState().language,
      languageList: store.getState().languageList,
    };
    store.subscribe(() => {
      const storeState = store.getState();
      this.setState({
        language: storeState.language,
        languageList: storeState.languageList,
      });
    });
  }

  render() {
    const { history, t } = this.props;
    console.log(t('header.home_page'))
    return (
      <div className={styles["app-header"]}>
        <div className={styles.inner}>
          <Typography.Text>{t("header.slogan")}</Typography.Text>
          <Dropdown.Button
            style={{ marginLeft: 15 }}
            overlay={
              <Menu
                onClick={({ item, key, keyPath, domEvent }) => {
                  let action = null;
                  if (key === "new") {
                    //添加
                    action = {
                      type: "add_language",
                      payload: {
                        code: `new_lang${new Date().getTime()}`,
                        name: "新语言",
                      },
                    };
                  } else {
                    action = {
                      type: "change_language",
                      payload: key,
                    };
                  }
                  store.dispatch(action);
                }}
              >
                {this.state.languageList.map((l) => {
                  return <Menu.Item key={l.code}>{l.name}</Menu.Item>;
                })}
                <Menu.Item key="new">{t("header.add_new_language")}</Menu.Item>
              </Menu>
            }
            icon={<GlobalOutlined />}
          >
            {this.state.language === "zh" ? "中文" : "English"}
          </Dropdown.Button>
          <Button.Group className={styles["button-groud"]}>
            <Button onClick={() => history.push("register")}>
              {t("header.register")}
            </Button>
            <Button onClick={() => history.push("signIn")}>
              {t("header.signin")}
            </Button>
          </Button.Group>
        </div>
        <Layout.Header className={styles["main-header"]}>
          <span onClick={() => history.push("/")}>
            <img src={logo} alt="" className={styles["App-logo"]} />
            <Typography.Title level={3} className={styles.title}>
              {t("header.title")}
            </Typography.Title>
          </span>
          <Input.Search
            placeholder="请输入旅游关键字"
            className={styles["search-input"]}
          />
        </Layout.Header>
        <Menu mode={"horizontal"} className={styles["main-menu"]}>
          <Menu.Item key="1"> {t("header.home_page")} </Menu.Item>
          <Menu.Item key="2"> {t("header.weekend")} </Menu.Item>
          <Menu.Item key="3"> {t("header.group")} </Menu.Item>
          <Menu.Item key="4"> {t("header.backpack")} </Menu.Item>
          <Menu.Item key="5"> {t("header.private")} </Menu.Item>
          <Menu.Item key="6"> {t("header.cruise")} </Menu.Item>
          <Menu.Item key="7"> {t("header.hotel")} </Menu.Item>
          <Menu.Item key="8"> {t("header.local")} </Menu.Item>
          <Menu.Item key="9"> {t("header.theme")} </Menu.Item>
          <Menu.Item key="10"> {t("header.custom")} </Menu.Item>
          <Menu.Item key="11"> {t("header.study")} </Menu.Item>
          <Menu.Item key="12"> {t("header.visa")} </Menu.Item>
          <Menu.Item key="13"> {t("header.enterprise")} </Menu.Item>
          <Menu.Item key="14"> {t("header.high_end")} </Menu.Item>
          <Menu.Item key="15"> {t("header.outdoor")} </Menu.Item>
          <Menu.Item key="16"> {t("header.insurance")} </Menu.Item>
        </Menu>
      </div>
    );
  }
}
export const Header = withTranslation()(withRouter(Headers));
