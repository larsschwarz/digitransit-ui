import React from 'react';
import cx from 'classnames';

const IconWithCaution = props => (
  <span>
    <svg id={props.id} viewBox="0 0 40 40" className={cx('icon', props.className)}>
      <use
        xlinkHref={`#${props.img}`}
      />
      <use
        xlinkHref="#icon-icon_caution"
        transform="scale(0.6,0.6)"
        y="30"
        style={{ color: 'red' }}
      />
    </svg>
  </span>
);

IconWithCaution.displayName = 'IconWithCaution';

IconWithCaution.propTypes = {
  id: React.PropTypes.string,
  className: React.PropTypes.string,
  img: React.PropTypes.string.isRequired,
};

export default IconWithCaution;
