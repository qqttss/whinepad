import React, {Component, PropTypes} from 'react';
import styles from './Button.css';

class Button extends Component {
	render() {
		return this.props.href 
		? <a {...this.props} className={styles.Button} />
		: <button {...this.props} className={styles.Button} />;
	}
}

Button.propTypes = {
	href: PropTypes.string
}

export default Button
