import React from 'react';
import PropTypes from 'prop-types';
import css from './ButtonLoadMore.module.css';

export const ButtonLoadMore = ({ loadMore }) => (
  <button type="button" onClick={loadMore} className={css.Button}>
    Load more
  </button>
);

ButtonLoadMore.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
