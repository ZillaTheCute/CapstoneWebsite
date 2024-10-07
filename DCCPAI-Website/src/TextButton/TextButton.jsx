import PropTypes from 'prop-types';
import styles from './TextButton.module.css';
import { Link } from "react-router-dom";

function TextButton(props) {
    return(
        <>
        <Link to={`/${props.buttonLink}`} className="Link">
            <button className={styles.TextButton}>{props.buttonText}</button>
        </Link>
        </>
    );
}

TextButton.PropTypes = {
    buttonText: PropTypes.string,
    buttonLink: PropTypes.string,
}

TextButton.defaultProps = {
    buttonText: "Placeholder Text",
    buttonLink: "",
}

export default TextButton