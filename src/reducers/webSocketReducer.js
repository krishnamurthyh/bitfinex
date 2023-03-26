import { DELETE, INSERT, UPDATE } from "../actions/action-type";

const initialState = {
    orders: []
};

const webSocketReducer = (state = initialState, action) => {
    switch (action.type) {
        case INSERT:
            return {
                orders: [...state.orders, action.payload]
            };
        case UPDATE:
            return {
                orders: state.orders.map((item) =>
                    item.id === action.payload.id ? action.payload : item
                )
            };
        case DELETE:
            return {
                orders: state.orders.filter((item) => item.id !== action.payload.id)
            };
        default:
            return state;
    }
};

export default webSocketReducer;
