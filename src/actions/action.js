
export const websocketMessageReceived = (data, actionType) => {

    const latestEntry = data.pop()
    return {
        type: actionType,
        payload: latestEntry,
    }
}