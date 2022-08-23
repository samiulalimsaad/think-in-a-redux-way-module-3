import { COLOR_CHANGED, STATUS_CHANGED } from "./actionTypes";

export const changeColor = (color, changeType) => ({
    type: COLOR_CHANGED,
    payload: { color, changeType },
});

export const changeStatus = (color, changeType) => ({
    type: STATUS_CHANGED,
    payload: { status },
});
