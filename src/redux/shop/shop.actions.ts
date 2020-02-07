import ShopActionTypes from './shop.types';


export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = (collectionsMap: any) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = (errorMessage: any) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch: any) => {

    try {


      // const collectionRef = firestore.collection('collections');
      dispatch(fetchCollectionsStart());

      // const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      //     dispatch(fetchCollectionsSuccess(collectionsMap));

      const collectionsMap: any = [];
      dispatch(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
      dispatch(fetchCollectionsFailure(error.message))
    }

    // .get()
    // .then(snapshot => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   dispatch(fetchCollectionsSuccess(collectionsMap));
    // })
    // .catch(error => dispatch(fetchCollectionsFailure(error.message)));
  };
};
