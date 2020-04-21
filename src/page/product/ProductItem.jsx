import React from 'react';
import './product-item.styles.scss';

import CustomButton from '../../components/custom-button/CustomButton';
import { addItem } from '../../redux/actions/cart';
import { connect } from 'react-redux';

import { selectProduct } from '../../redux/selectors/shop.selector';

const ProductItem = ({ item, addItem }) => {
  console.log(item);
  const { name, imageUrl, price } = item;
  return (
    <div className='product-container'>
      <div className='description-container'>
        <div className='description-column'>{name}</div>
        <p>
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur ma
        </p>
      </div>

      <div className='image'>
        <img src={imageUrl} alt='product-image' />
      </div>

      <div className='add-to-column'>
        <span className='price'>{price}</span>
        <CustomButton onClick={() => addItem(item)} inverted>
          Add to bag
        </CustomButton>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  item: selectProduct(
    ownProps.match.params.productId,
    ownProps.match.params.collectionId
  )(state),
});
export default connect(mapStateToProps, { addItem })(ProductItem);
// export default ProductItem;
