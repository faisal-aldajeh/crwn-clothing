import {
    all,
    call,
    takeLatest,
    put
} from 'redux-saga/effects';

import UserActionTypes from '../user/user.type'
import { clearCart } from './cart.actions';

export function* onClearCartOnSignOut() {
    yield put(clearCart());
}

export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, onClearCartOnSignOut)
}

export function* cartSagas() {
    yield(
        all(
            [
                call(onSignOutSuccess)
            ]
        )
    );
}