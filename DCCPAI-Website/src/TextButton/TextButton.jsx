import PropTypes from 'prop-types';
import styles from './TextButton.module.css';

function TextButton(props) {
    return(
        <button className={styles.TextButton}>{props.buttonText}</button>
    );
}

TextButton.PropTypes = {
    buttonText: PropTypes.string,
}

TextButton.defaultProps = {
    buttonText: "Placeholder Text",
}

export default TextButton