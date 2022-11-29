import { takeLatest, put } from "redux-saga/effects";
import { delay } from "redux-saga/effects";
function* incrementAsync() {
   yield delay(5000);
   yield put({ type: "count-up", count: 1 });
}

export function* checkCount() {
   yield takeLatest("increment", incrementAsync);
}
