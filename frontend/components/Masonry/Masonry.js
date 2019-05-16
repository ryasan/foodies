import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import StyledMasonry from './MasonryStyles';
import { brakePoints } from '../../constants';

const Masonry = ({ children }) => {
  const [columns, setColumns] = useState(1);
  const [masonryRef, setRef] = useState(null);

  // get number of columns based on how wide screen is
  const getColumns = w => {
    return (
      brakePoints.reduceRight((p, c, i) => {
        return c < w ? p : i;
      }, brakePoints.length) + 1
    );
  };

  // handle window resize
  const onResize = () => {
    if (masonryRef) {
      const newColumns = getColumns(masonryRef.offsetWidth);
      if (newColumns !== columns) setColumns(newColumns);
    }
  };

  // put posts in columns
  const mapChildren = () => {
    const cols = [];
    const numC = columns;
    for (let i = 0; i < numC; i++) {
      cols.push([]);
    }

    return children.reduce((c, child, i) => {
      c[i % numC].push(child);
      return c;
    }, cols);
  };

  useEffect(onResize);
  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  });

  return (
    <StyledMasonry ref={el => setRef(el)}>
      {mapChildren().map((col, ci) => (
        <div className="column" key={ci}>
          {col.map(child => (
            <div key={child.props.post.id}>{child}</div>
          ))}
        </div>
      ))}
    </StyledMasonry>
  );
};

Masonry.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Masonry;
