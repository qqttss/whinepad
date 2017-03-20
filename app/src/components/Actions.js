import React from 'react';

import styles from './Actions.css'

const Actions = (props) =>
  <div className={styles.Actions}>
    <span 
      tabIndex="0"
      className={styles.ActionsInfo}
      title="More info"
      onClick={props.onAction.bind(null, 'info')}>&#8505;</span>
    <span 
      tabIndex="0" 
      className={styles.ActionsEdit} 
      title="Edit"
      onClick={props.onAction.bind(null, 'edit')}>&#10000;</span>
    <span 
      tabIndex="0"
      className={styles.ActionsDelete}
      title="Delete"
      onClick={props.onAction.bind(null, 'delete')}>x</span>
  </div>

Actions.defaultProps = {
  onAction: () => {},
};

export default Actions
