

import { connect } from 'react-redux';
import { selectCollections } from '../../redux/shop/shop.selectors';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import Shop from './shop.component';

const mapStateToProps = (state: any) => (
  {
    collections: selectCollections(state)
  }
);

const mapDispatchToProps = (dispatch: any) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});


export default connect(mapStateToProps, mapDispatchToProps)(Shop)
