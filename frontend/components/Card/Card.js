import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import imagesLoaded from 'imagesloaded';
import { FaHeart } from 'react-icons/fa';

import StyledCardItem from './CardStyles';
import { rowHeight, rowGap } from './../../constants';

const CardItem = ({ post: { id, imgUrl, likes, user } }) => {
  const [span, setSpan] = useState(0);
  const [content, setContent] = useState(null);

  // this works with css grid for masonry style cards
  const resizeGridCard = () => {
    content &&
      imagesLoaded(content, () => {
        const contentHeight = content.getBoundingClientRect().height;
        const rowSpan = Math.ceil(
          (contentHeight + rowGap) / (rowHeight + rowGap),
        );
        setSpan(rowSpan);
      });
  };

  useEffect(resizeGridCard);
  useEffect(() => {
    window.addEventListener('resize', resizeGridCard);
    // cleanup
    return () => window.removeEventListener('resize', resizeGridCard);
  });

  return (
    <StyledCardItem span={span}>
      <div className="content">
        <img src={imgUrl} alt={id} ref={el => setContent(el)} />
        <div className="card-body">
          {user}
          <div className="likes">
            <FaHeart className="icon" />
            {likes}
          </div>
        </div>
      </div>
    </StyledCardItem>
  );
};

CardItem.propTypes = {
  post: PropTypes.object.isRequired,
};

export default CardItem;
