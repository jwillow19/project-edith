import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '../menu-item/MenuItem';
import './directory.styles.scss';
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/selectors/directory.selector';
import { createStructuredSelector } from 'reselect';

const DirectoryMenu = ({ sections }) => {
  return (
    <div className='directory-menu'>
      {/* Short Hand for passing in all props */}
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

DirectoryMenu.propTypes = {
  sections: PropTypes.array.isRequired,
};
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(DirectoryMenu);