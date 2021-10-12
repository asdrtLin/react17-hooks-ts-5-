import React from 'react';
import { Row, Col } from 'antd'
import styles from './App.module.css'
import { Header, Footer, Carousel, SideMenu } from './components'



function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles['page-content']}>
        <Row style={{ marginTop: 20 }}>
          <Col span={6}>
            <div style={{ background: "red" }}>
              <SideMenu />
            </div>
          </Col>
          <Col span={18}>
            <div style={{ background: "blue" }}>
              <Carousel />
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default App;
