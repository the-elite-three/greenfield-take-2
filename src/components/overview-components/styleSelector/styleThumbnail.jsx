import React from 'react';
import PT from 'prop-types';

const CheckBox = function ({ isRendered }) {
  if (isRendered) {
    return (
      <i className="material-icons" id="check-icon">check_box</i>
    );
  } else {
    return null;
  }
}

const StyleThumbnail = function ({ style, styleIndex, currentStyleIndex, handleClick }) {
  return (
    <div onClick={() => handleClick(styleIndex)} 
    role="presentation">
    <CheckBox isRendered={styleIndex===currentStyleIndex} />
      <img
        src={style.photos[0].thumbnail_url}
        className="thumbnail style-thumbnail"
        alt={`Thumbnail for style ${style.name}`}
      />
    </div>
  );
};

StyleThumbnail.propTypes = {
  style: PT.shape({
    photos: PT.array,
    name: PT.string.isRequired,
  }).isRequired,
  styleIndex: PT.number.isRequired,
  handleClick: PT.func.isRequired,
};

export default StyleThumbnail;
