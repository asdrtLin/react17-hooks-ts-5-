import React from "react";
import styles from "./Header.module.css";
import logo from "./../../assets/logo.svg";
import { Layout, Typography, Input, Menu, Button, Dropdown } from "antd";
import { GlobalOutlined } from "@ant-design/icons";

import {
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import {
  addLanguageActionCreator,
  changeLanguageActionCreator,
} from "../../redux/language/createAction";
import { useSelector } from "../../redux/hook";

import { useDispatch } from "react-redux";

import { useTranslation } from "react-i18next";

export const Header: React.FC = (props) => {
  const history = useHistory(); //可以取得history路由数据，导航操作
  const loction = useLocation(); //可以获得location路由数据，当前路径的信息
  const params = useParams(); //可以获得url参数
  const match = useRouteMatch(); //可以获得路径匹配的数据
  const language = useSelector((state) => state.languageReducer.language);
  const languageList = useSelector((state) => state.languageReducer.languageList);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  return (
    <div className={styles["app-header"]}>
      <div className={styles.inner}>
        <Typography.Text>{t("header.slogan")}</Typography.Text>
        <Dropdown.Button
          style={{ marginLeft: 15 }}
          overlay={
            <Menu
              onClick={({ item, key, keyPath, domEvent }) => {
                  // debugger
                if (key === "new") {
                  //添加
                  dispatch(
                    addLanguageActionCreator(
                      "新语言",
                      `new_lang${new Date().getTime()}`
                    )
                  );
                } else {
                  if (key === "zh" || key === "en") {
                    dispatch(changeLanguageActionCreator(key));
                  }
                }
              }}
            >
              {languageList.map((l) => {
                return <Menu.Item key={l.code}>{l.name}</Menu.Item>;
              })}
              <Menu.Item key="new">{t("header.add_new_language")}</Menu.Item>
            </Menu>
          }
          icon={<GlobalOutlined />}
        >
          {language === "zh" ? "中文" : "English"}
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
};
