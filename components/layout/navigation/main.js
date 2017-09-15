/* global window */

import Link from 'next/link';

import React from 'react';
import PropTypes from 'prop-types';
import ClickOutside from 'react-click-outside';

import Point from './point';

import { config } from '../../../main.config';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dimensions: {
        width: -1,
        height: -1,
      },
      showSidebar: false,
    };

    this.getPointContent = this.getPointContent.bind(this);
    this.getPointHeight = this.getPointHeight.bind(this);
    this.showSidebar = this.showSidebar.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
  }
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);

    this.updateDimensions();
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }
  getPointContent(navigation, currentPoint, currentSubpoint) {
    const { points } = navigation;

    if (points) {
      return (
        <ul className="subnavigation">
          <div className="subnavigation-inner">
            {points.map((p, i) => (
              <Point
                key={p.name}
                element={p}
                height={this.getPointHeight(points.length)}
                currentSubpoint={currentPoint && currentSubpoint === i}
              />
            ))}
          </div>
        </ul>
      );
    }

    return null;
  }
  getPointHeight(numberOfPoints) {
    const { height } = this.state.dimensions;

    if ((height / numberOfPoints) > 90) {
      return `${100 / numberOfPoints}%`;
    }

    return '90px';
  }
  showSidebar(e) {
    e.preventDefault();

    this.setState({
      showSidebar: true,
    });
  }
  handleClickOutside() {
    if (!this.state.showSidebar) {
      return;
    }

    this.setState({
      showSidebar: false,
    });
  }
  updateDimensions() {
    this.setState({
      dimensions: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  }
  render() {
    const { showSidebar, dimensions } = this.state;
    const { currentURL } = this.props;

    const { navigation } = config;
    const height = `${100 / navigation.filter(n => !n.type && n.type !== 'hidden').length}%`;

    let currentPoint = null;
    let currentSubpoint = null;

    navigation.forEach((point, i) => {
      if (!currentPoint && point && point.points) {
        const subpoint = point.points.map(p => p.href).indexOf(currentURL.pathname);

        if (subpoint > -1) {
          currentSubpoint = subpoint;
          currentPoint = i;
        }
      }
      if (point && point.href && point.href === currentURL.pathname) {
        currentPoint = i;
      }
    });

    return (
      <div className="navigation">
        <div className="navigation-inner">
          <div className="navigation-header">
            <Link href={'/'} prefetch>
              <a className="logo">
                <img src="/static/images/svg/logo.svg" alt="Keenethics" width="120px" />
              </a>
            </Link>
          </div>
          <ul className="navigation-content">
            {navigation.map((n, i) => {
              if (n.type && n.type === 'hidden') {
                return null;
              }
              return (
                <Point
                  key={n.name}
                  element={n}
                  height={height}
                  currentPoint={currentPoint === i}
                  showSidebar={dimensions.width > 767}
                >
                  {this.getPointContent(n, currentPoint === i, currentSubpoint)}
                </Point>
              );
            })}
          </ul>
          <div className="navigation-footer">
            <Link href="contacts">
              <a className="button">Contact us</a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

Navigation.propTypes = {
  currentURL: PropTypes.object,
};

Navigation.defaultProps = {
  currentURL: {},
};

export default ClickOutside(Navigation);
