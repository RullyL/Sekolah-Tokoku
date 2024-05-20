import React from 'react';
import { Input, Space } from 'antd';
import {
    SearchOutlined,
    BellOutlined,
    MessageOutlined,
    ShoppingCartOutlined,
} from '@ant-design/icons';

function Navbar() {
    return (
        <nav className="navbar items-center justify-between flex px-[45px] h-[120px] bg-[#6CADFF]">
            <div className="navbar-brand p-2 bg-white rounded-xl">
                <h1>
                    <a href="/" className='text-[#0071FF]'>Tokoku</a>
                </h1>
            </div>
            <div className="navbar-search">
                <Space>
                    <Input
                        className='w-[500px] h-[50px]'
                        placeholder="Search..."
                        prefix={<SearchOutlined />}
                    />
                </Space>
            </div>
            <div className="navbar-icons gap-5 flex w-[130px] h-[35px]">
                <a href="#">
                    <BellOutlined style={{ fontSize: '24px' }} />
                </a>
                <a href="#">
                    <MessageOutlined style={{ fontSize: '24px' }} />
                </a>
                <a href="/keranjang">
                    <ShoppingCartOutlined style={{ fontSize: '24px' }} />
                </a>
            </div>

            <div className='w-[69px] h-[69px] bg-white rounded-[50%]'>

            </div>
        </nav>
    );
}

export default Navbar;
