import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';


// const COLLECTION_ID_MAP = {
//     hats     : 1,
//     sneakers : 2,
//     jackets  : 3,
//     womens   : 4,
//     mens     : 5
// }


const selectShop = state => state.shop;


export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections

);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key =>collections[key] )
);

// we converts the dhop data to an object with index refers to the collection 
export const selectCollection = memoize((collectionUrlParam) =>
    createSelector(
        [selectCollections],
        collections => collections[collectionUrlParam]
    )
);


// used when the shop data was an Array 

// export const selectCollection = memoize((collectionUrlParam) =>
//     createSelector(
//         [selectCollections],
//         collections => collections.find(
//             collection=>
//             collection.id === COLLECTION_ID_MAP[collectionUrlParam]
//         )
//     )
// );