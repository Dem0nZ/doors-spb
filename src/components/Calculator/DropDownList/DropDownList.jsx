import React from 'react';
import 'antd/dist/antd.css';
import { Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import tw from 'twin.macro';



const DropDownList = (props) => (
    <Dropdown overlay={props.menu}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          {props.name}
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>

);

export default DropDownList;