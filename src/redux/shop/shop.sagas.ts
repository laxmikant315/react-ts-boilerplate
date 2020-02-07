import { takeLatest, call, put, all } from 'redux-saga/effects';


import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from './shop.actions';

import ShopActionTypes from './shop.types';

export function* fetchCollectionsAsync() {
  try {
    const collectionsMap:any = [
    {
      itemName:'Item 1',
      itemPrice:2300
    },
    {
      itemName:'Item 2',
      itemPrice:3000
    },
    {
      itemName:'Item 3',
      itemPrice:8270
    }
    ];
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
