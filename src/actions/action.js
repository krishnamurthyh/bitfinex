
export const websocketMessageReceived = (data, actionType) => {
    return {
        type: actionType,
        payload: data,
    }
}