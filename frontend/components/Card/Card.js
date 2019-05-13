import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import imagesLoaded from 'imagesloaded';

import StyledCardItem from './CardStyles';
import { rowHeight, rowGap } from './../../constants';

const CardItem = ({ post: { id, imgUrl } }) => {
  const [span, setSpan] = useState(0);
  const [content, setContent] = useState(null);

  const resizeGridCard = () => {
    content && imagesLoaded(content, () => {
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

    return () => window.removeEventListener('resize', resizeGridCard);
  });

  return (
    <StyledCardItem span={span}>
      <Card className="card">
        <img src={imgUrl} alt={id} ref={el => setContent(el)} />
      </Card>
    </StyledCardItem>
  );
};

CardItem.propTypes = {
  post: PropTypes.object.isRequired,
};

export default CardItem;
