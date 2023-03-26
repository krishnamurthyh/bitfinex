import React from "react";
import { useSelector } from "react-redux";
import { connectWebSocket, disconnectWebSocket } from '../store/store';
import { Button, Table } from "antd";

const OrderBook = () => {

    const { orders } = useSelector(state => state.webSocket)
    const handleConnect = () => {
        connectWebSocket();
    };

    const handleDisconnect = () => {
        disconnectWebSocket();
    };

    const columns = [
        {
            title: 'Symbol',
            dataIndex: 'symbol',
            key: 'symbol',
        },
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Side',
            dataIndex: 'side',
            key: 'side',
            render: (val) => {
                if (val === 'Buy')
                    return <span style={{ color: 'lightGreen' }}>
                        {val}
                    </span>
                if (val === 'Sell')
                    return <span style={{ color: 'red' }}>
                        {val}
                    </span>
            }
        },
        {
            title: 'Size',
            dataIndex: 'size',
            key: 'size',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Timestamp',
            dataIndex: 'timestamp',
            key: 'timestamp',
        },
    ];
    return (
        <div>
            <Button type={'primary'} onClick={handleConnect}>Connect</Button>
            <Button type={'default'} onClick={handleDisconnect}>Disconnect</Button>
            <Table columns={columns} dataSource={orders} />
        </div>
    );
};

export default OrderBook;
