import React from 'react';
import { useSetRecoilState } from 'recoil';

import { currentCategoryState } from '../../state/atom';

export default ({ categories }) => {
  const setCurrentCategory = useSetRecoilState(currentCategoryState);
  return (
    <section>
      <h3>Drinks By Category</h3>
      {categories && (
        <ul>
          {categories.map((c) => (
            <li onClick={() => setCurrentCategory(c.strCategory)}>{c.strCategory}</li>
          ))}
        </ul>
      )}
    </section>
  );
};
