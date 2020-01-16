import React from 'react';
import PropTypes from 'prop-types';

const CloseIcon = ({ className }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.0052 19.9996C0.87367 20.0004 0.743286 19.9752 0.621521 19.9254C0.499756 19.8757 0.389006 19.8024 0.295622 19.7097C0.201949 19.6168 0.1276 19.5062 0.0768613 19.3844C0.0261229 19.2625 0 19.1318 0 18.9999C0 18.8679 0.0261229 18.7372 0.0768613 18.6154C0.1276 18.4935 0.201949 18.383 0.295622 18.29L18.2849 0.294026C18.4731 0.105764 18.7283 0 18.9945 0C19.2606 0 19.5158 0.105764 19.704 0.294026C19.8922 0.482288 19.998 0.737626 19.998 1.00387C19.998 1.27011 19.8922 1.52545 19.704 1.71371L1.71477 19.7097C1.62139 19.8024 1.51064 19.8757 1.38888 19.9254C1.26711 19.9752 1.13673 20.0004 1.0052 19.9996Z" fill="#2D4352" />
    <path d="M18.9928 19.9996C18.8612 20.0004 18.7308 19.9752 18.6091 19.9254C18.4873 19.8757 18.3766 19.8024 18.2832 19.7097L0.293916 1.71371C0.105725 1.52545 -1.98292e-09 1.27011 0 1.00387C1.98292e-09 0.737626 0.105725 0.482288 0.293916 0.294026C0.482108 0.105764 0.73735 1.98366e-09 1.00349 0C1.26964 -1.98366e-09 1.52488 0.105764 1.71307 0.294026L19.7023 18.29C19.796 18.383 19.8704 18.4935 19.9211 18.6154C19.9718 18.7372 19.998 18.8679 19.998 18.9999C19.998 19.1318 19.9718 19.2625 19.9211 19.3844C19.8704 19.5062 19.796 19.6168 19.7023 19.7097C19.6089 19.8024 19.4982 19.8757 19.3764 19.9254C19.2547 19.9752 19.1243 20.0004 18.9928 19.9996Z" fill="#2D4352" />
  </svg>
);

CloseIcon.propTypes = {
  className: PropTypes.string,
};

CloseIcon.defaultProps = {
  className: '',
};

export default CloseIcon;
