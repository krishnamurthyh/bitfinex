import { createStore, combineReducers } from "redux";
import webSocketReducer from "../reducers/webSocketReducer";
import { websocketMessageReceived } from "../actions/action";

const rootReducer = combineReducers({
    webSocket: webSocketReducer
});

const store = createStore(rootReducer);

let socket = null;

const connectWebSocket = () => {
    socket = new WebSocket("wss://www.bitmex.com/realtime?subscribe=orderBookL2:XBTUSD");

    socket.onopen = () => {
        console.log("WebSocket connection opened");
    };

    socket.onclose = () => {
        console.log("WebSocket connection closed");
    };

    socket.onerror = (error) => {
        console.error("WebSocket error: " + error);
    };

    socket.onmessage = (event) => {
        const receivedData = JSON.parse(event.data)
        if (receivedData.action && receivedData?.data.length > 0) {
            store.dispatch(websocketMessageReceived(receivedData?.data.pop(), receivedData.action))
        }
    }
};

const disconnectWebSocket = () => {
    if (socket) {
        socket.close();
        socket = null;
    }
};

export { store, connectWebSocket, disconnectWebSocket };
