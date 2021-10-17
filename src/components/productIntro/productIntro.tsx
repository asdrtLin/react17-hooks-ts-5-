import React from "react";

import styles from "./productIntro.module.css";

import { Typography , Carousel , Image , Table , Rate } from "antd";

import { ColumnType } from 'antd/es/table'

interface PropsType {
  title: string;
  shortDescription: string;
  price: string | number;
  coupons: string;
  point: string;
  discount: string;
  rating: string | number;
  pictures: string[];
}



interface RowType{
  title:string,
  description:string|number|JSX.Element,
  key:number
}

const columns : ColumnType<RowType>[]=[
  {
    title:"title",
    dataIndex:"title",
    key:"title",
    align:"left",
    width:120
  },
  {
    title:"description",
    dataIndex:"description",
    key:"description",
    align:"center"
  }
]

const ProductIntro: React.FC<PropsType> = ({
  title,
  shortDescription,
  price,
  coupons,
  discount,
  rating,
  pictures
}) => {
const tableDataSource:RowType[]=[
  {
    key:0,
    title:"线路名称",
    description:title
  },
  {
    key:1,
    title:"价格",
    description:(
      <div>
        ￥{''}
        <Typography.Text type='danger' strong>{price}</Typography.Text>
      </div>
    )
  },
  {
    key:2,
    title:"显示抢购折扣",
    description:discount?(
      <div>
        ￥{''}
        <Typography.Text type='danger' strong>{price}</Typography.Text>
      </div>
    ):""
  },
  {
    key:2,
    title:"领取优惠",
    description:coupons?discount:"无优惠卷可领"
  },
  {
    key:2,
    title:"线路评价",
    description:(
      <div>
        <Rate allowHalf defaultValue={+rating} />
        <Typography.Text style={{marginLeft:10}}>{rating}星</Typography.Text>
      </div>
    )
  }
]
  return (
    <div className={styles["intro-container"]}>
      <Typography.Title level={4}>{title}</Typography.Title>
      <Typography.Text>{shortDescription}</Typography.Text>
      <div className={styles["intro-detail-content"]}>
        <Typography.Text style={{ marginLeft: 20 }}>
          ￥<span className={styles["intro-detail-strong-text"]}>{price}</span>人起
        </Typography.Text>
        <Typography.Text style={{ marginLeft: 50 }}>
          ￥<span className={styles["intro-detail-strong-text"]}>{rating}</span>分
        </Typography.Text>
        <Carousel autoplay slidesToShow={3}>
          {
            pictures.map(p=>{
              return <Image height={150} src={p} />
            })
          }
        </Carousel>
        <Table<RowType> columns={columns} dataSource={tableDataSource} size='small' bordered={false} pagination={false} />
      </div>
    </div>
  );
};

export {ProductIntro};
