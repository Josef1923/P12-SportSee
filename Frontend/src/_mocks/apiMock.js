import {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE,
} from "./userMock";

export function fetchUserMainData() {
    return USER_MAIN_DATA;
};

export function fetchUserActivity() {
    return USER_ACTIVITY;
};

export function fetchUserAverageSessions() {
    return USER_AVERAGE_SESSIONS;
};

export function fetchUserPerformance() {
    return USER_PERFORMANCE;
};