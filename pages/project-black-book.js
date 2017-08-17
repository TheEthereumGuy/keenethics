import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';

const baseColor = '#ee521d';

const ProjectComicEnglish = ({ url }) => (
  <Layout currentURL={url}>
    <div className="content-wrap">
      <div className="content-block">
        <div className="project-content">
          <div className="project-content-summary" style={{ background: baseColor }}>
            <div className="project-content-summary-inner">
              <h2 className="title">Black Book</h2>
              <h3 className="duration"><span>Duration:</span> 5 months</h3>
              <p className="description">
                Service for learning foreign languages in a gaming form. It was designed as a
                chat-bot that suggested user to pass different quests that required improving
                English.
              </p>
              <div className="tags">
                <div className="tag-title">Technologies:</div>
                <div className="tag" style={{ color: baseColor }}>Meteor</div>
                <div className="tag" style={{ color: baseColor }}>Ionic</div>
              </div>
            </div>
            <div className="project-content-preview">
              <div className="project-content-preview-inner">
                <img src="/static/images/project/macbook.png" alt="macbook" />
              </div>
            </div>
          </div>
          <div className="project-content-more">
            <p>
              Service for learning foreign languages in a gaming form. It was designed as a chat-bot
              that suggested user to pass different quests that required improving English.
            </p>
            <p>
              An idea was pretty cool: people like games, but they don’t always like to study. So
              why not create a game that would teach you skills required in your real-life? That’s
              what ComicEnglish was about.
            </p>
            <p>
              Keenethics participated in developing MVP and was able to complete required tasks on
              time. The website is currently offline.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);
ProjectComicEnglish.propTypes = {
  url: PropTypes.object,
};
ProjectComicEnglish.defaultProps = {
  url: {},
};

export default ProjectComicEnglish;
