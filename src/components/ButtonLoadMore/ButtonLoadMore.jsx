import React from 'react';

import css from './ButtonLoadMore.module.css';

export const ButtonLoadMore = ({ getPage }) => (
  <button type="button" className={css.Button} onClick={getPage}>
    Load more
  </button>
);
