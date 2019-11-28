import React from 'react';
import PropTypes from 'prop-types';

const WhyKeenethicsList = (props) => (
  <>
    {
      props.list.map(({ title, desc }, index) => (
        <>
          <h3 className="red-italic-title">
            <span style={{ fontSize: '28px', marginRight: '.5em' }}>{index + 1}</span>
            {title}
          </h3>
          <p>{desc}</p>
        </>
      ))
    }
  </>
);

WhyKeenethicsList.propTypes = {
  list: PropTypes.object,
};

WhyKeenethicsList.defaultProps = {
  list: [],
};

export default WhyKeenethicsList;
