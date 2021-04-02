import { takeLatest, call,put, all } from 'redux-saga/effects';
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils';
import { fetchCollectionsFailure, fetchCollectionsSuccess } from './shop.actions';
import ShopActionsTypes from './shop.types';



export function* fetchCollectionsStartAsync() {

    try {
        
        const collectionRef = firestore.collection('collection');
        const snapshot      = yield collectionRef.get();
        const collectionMap = yield call(convertCollectionsSnapshotToMap,snapshot);
        yield put(fetchCollectionsSuccess(collectionMap));

    } catch (error) {
        yield put(fetchCollectionsFailure(error.massage));
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(
        ShopActionsTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsStartAsync
    )
}

export function* shopSagas() {
    yield all(
        [
            call(fetchCollectionsStart)
        ]
    )
}