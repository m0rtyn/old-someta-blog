/** @jsx jsx */

import { jsx } from 'theme-ui';
import React from 'react';
import styles from './BookSheet.module.css';

const TriforceLoader = ({ loading }) => {
  return (
    <div className={`${styles.loader} ${!loading && styles.fadeOut}`}>
      <svg
        width="13.3em"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid"
        viewBox="0 0 100 100"
      >
        <g fill="#dedede" transform="matrix(.8 0 0 .8 10 2)">
          <polygon points="73 50 50 11 28 50 50 50">
            <animateTransform
              attributeName="transform"
              begin="0s"
              calcMode="linear"
              dur="3.3s"
              keyTimes="0;1"
              repeatCount="indefinite"
              type="rotate"
              values="0 50 38.5;360 50 38.5"
            />
          </polygon>
          <polygon points="5 89 50 89 28 50">
            <animateTransform
              attributeName="transform"
              begin="0s"
              calcMode="linear"
              dur="3.3s"
              keyTimes="0;1"
              repeatCount="indefinite"
              type="rotate"
              values="0 27.5 77.5;360 27.5 77.5"
            />
          </polygon>
          <polygon points="73 50 50 89 95 89">
            <animateTransform
              attributeName="transform"
              begin="0s"
              calcMode="linear"
              dur="3.3s"
              keyTimes="0;1"
              repeatCount="indefinite"
              type="rotate"
              values="0 72.5 77.5;360 72 77.5"
            />
          </polygon>
        </g>
      </svg>
    </div>
  );
};

export default TriforceLoader;
