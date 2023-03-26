import React from "react";
import { useSelector } from "react-redux";
import { connectWebSocket, disconnectWebSocket } from '../store/store';
const OrderBook = () => {

    const { orders } = useSelector(state => state.webSocket)
    const handleConnect = () => {
        connectWebSocket();
    };

    const handleDisconnect = () => {
        disconnectWebSocket();
    };

    const renderTable = () => {

        return (<table>
            <thead>
                <tr>
                    <th>Bids</th>
                    <th>Asks</th>
                </tr>
            </thead>
            <tbody>
                {orders.map(order =>
                (
                    <tr key={order.id}>
                        <td style={{ color: 'red' }}  >{order?.side === 'Sell' ? order?.price : ''}</td>
                        <td style={{ color: 'green' }} >{order?.side === 'Buy' ? order?.price : ''}</td>
                    </tr>
                ))}
            </tbody>
        </table>)
    }

    return (
        <div>
            <button onClick={handleConnect}>Connect</button>
            <button onClick={handleDisconnect}>Disconnect</button>
            {/* should use a library like D3 or whichever used in Bitfinex to implement the table */}
            {renderTable()}

        </div>
    );
};

export default OrderBook;
