import Button from './Button';
import React, {Component, PropTypes} from 'react';

import styles from './Dialog.css';

class Dialog extends Component {

  componentWillUnmount() {
    document.body.classList.remove('DialogModalOpen');
  }
  
  componentDidMount() {
    if (this.props.modal) {
      document.body.classList.add('DialogModalOpen');
    }
  }
  
  render() {
    return (
      <div className={this.props.modal ? styles.DialogModal : styles.Dialog}>
        <div className={this.props.modal ? styles.DialogModalWrap : null}>
          <div className={styles.DialogHeader}>{this.props.header}</div>
          <div className={styles.DialogBody}>{this.props.children}</div>
          <div className={styles.DialogFooter}>
            {this.props.hasCancel
              ? <span 
                  className={styles.DialogDismiss}
                  onClick={this.props.onAction.bind(this, 'dismiss')}>
                  Cancel
                </span>
              : null
            }
            <Button onClick={this.props.onAction.bind(this, 
                this.props.hasCancel ? 'confirm' : 'dismiss')}>
              {this.props.confirmLabel}
            </Button>
          </div>
        </div>
      </div>
    );
  }
}


Dialog.propTypes = {
  header: PropTypes.string.isRequired,
  confirmLabel: PropTypes.string,
  modal: PropTypes.bool,
  onAction: PropTypes.func,
  hasCancel: PropTypes.bool
};

Dialog.defaultProps = {
  confirmLabel: 'ok',
  modal: false,
  onAction: () => {},
  hasCancel: true
};

export default Dialog;
