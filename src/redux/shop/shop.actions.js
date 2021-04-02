import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils';
import ShopActionsTypes from './shop.types';

export const fetchCollectionsStart = () => ({
    type    : ShopActionsTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = collectionMap => ({
    type    : ShopActionsTypes.FETCH_COLLECTIONS_SECCESS,
    payload : collectionMap

});

export const fetchCollectionsFailure = errorMessage => ({
    type    : ShopActionsTypes.FETCH_COLLECTIONS_SECCESS,
    payload : errorMessage

});

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collection');

        /*
        # use promies to fetch collections data from FireStore
         fetch('https://firestore.googleapis.com/v1/projects/crwn-db-1234/databases/(default)/documents/collection')
         .then(response => response.json())
         .then(collection => console.log(collection))
        */
        dispatch(fetchCollectionsStart());

        collectionRef.get().then(snapshot => {
            const collectionMap =  convertCollectionsSnapshotToMap(snapshot);
            dispatch(fetchCollectionsSuccess(collectionMap));
         }).catch(error => dispatch(fetchCollectionsFailure(error.massage)));
    }
}