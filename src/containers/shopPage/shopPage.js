import React from 'react';
import { connect } from 'react-redux';

import SHOP_DATA from './shopData';
import * as actions from '../../redux/actions';
import CollectionPreview from '../../components/collection-preview/collection-preview';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    }
  }

  addItems = (item) => {
    console.log(item);
    this.props.addCartItem(item);
  }

  render() {
    const {collections} = this.state;
    return (
      <div className="shop-page">
      {
        collections.map(({id, ...otherProps}) => (
          <CollectionPreview key={id} {...otherProps} addItems={this.addItems} />
          ))
      }
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addCartItem: (item) => {
            dispatch(actions.addCartItem(item))
        }
    }
}

export default connect(null, mapDispatchToProps)(ShopPage);