import React, { Component } from "react";
import {
  Header,
  Footer,
  Carousel,
  SideMenu,
  ProductCollection,
} from "../../components";
// import { productList1, productList2, productList3 } from './mockups'
import sideImage from "../../assets/images/sider_2019_12-09.png";
import sideImage2 from "../../assets/images/sider_2019_02-04.png";
import sideImage3 from "../../assets/images/sider_2019_02-04-2.png";
import { Row, Col, Typography, Spin } from "antd";
import styles from "./HomePage.module.css";
import { withTranslation, WithTranslation } from "react-i18next";
import axios from "axios";
interface State {
  productList: Array<object>;
  loading: boolean;
  error: string | null;
}

class HomePageComponent extends Component<WithTranslation, State> {
  state = {
    productList: [{touristRoutes:[]},{touristRoutes:[]},{touristRoutes:[]}] as [{touristRoutes:[]},{touristRoutes:[]},{touristRoutes:[]}],
    loading: true,
    error: null,
  };
  async componentDidMount() {
    try {
      const { data } = await axios.get(
        "https://www.fastmock.site/mock/7a00225a695edc0521497bbbf1f9afda/api/homes",
        {
          headers: {
            "x-icode": "FB80558A73FA658E",
          },
        }
      );
      if(data instanceof Array)this.setState({ productList: data, loading: false, error: null });
    } catch (error) {
        if(error instanceof Error){
            this.setState({error:error.message,loading:false})
        }
    }
  }
  render() {
    // console.log(this.props.t)
    const { t } = this.props;
    const { productList,loading,error } = this.state;
    if(loading){
        return <Spin
        size='large'
        style={{
            margin:"200px auto",
            width:"100%"
        }}
        />
    }
    if(error){
        return <div>错误啦</div>
    }
    return (
      <div>
        <Header />
        <div className={styles["page-content"]}>
          <Row style={{ marginTop: 20 }}>
            <Col span={6}>
              <div>
                <SideMenu />
              </div>
            </Col>
            <Col span={18}>
              <div style={{ background: "blue" }}>
                <Carousel />
              </div>
            </Col>
          </Row>
          <ProductCollection
            title={
              <Typography.Title level={3} type="warning">
                {t("home_page.hot_recommended")}
              </Typography.Title>
            }
            sideImage={sideImage}
            products={productList[0].touristRoutes}
          />
          <ProductCollection
            title={
              <Typography.Title level={3} type="danger">
                {t("home_page.new_arrival")}
              </Typography.Title>
            }
            sideImage={sideImage2}
            products={productList[1].touristRoutes}
          />
          <ProductCollection
            title={
              <Typography.Title level={3} type="danger">
                {t("home_page.domestic_travel")}
              </Typography.Title>
            }
            sideImage={sideImage3}
            products={productList[2].touristRoutes}
          />
        </div>
        <Footer />
      </div>
    );
  }
}
export const HomePage = withTranslation()(HomePageComponent);
