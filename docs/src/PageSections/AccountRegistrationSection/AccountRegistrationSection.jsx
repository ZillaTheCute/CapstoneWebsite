import styles from './AccountRegistrationSection.module.css'
import TextButton from '../../TextButton/TextButton.jsx'

function AccountRegistrationSection() {
    return(
    <>
    <div className={styles.registerAccountDiv}>
    <div className={styles.registerAccountContent}>
            <h1>Create an Account</h1>
                <label htmlFor="username">Username:</label>
                <input 
                    type="text" 
                    id="username" 
                    name="username" 
                    required 
                />
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                />
                <label htmlFor="password">Password:</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    required 
                />
                <label htmlFor="confirm-password">Confirm Password:</label>
                <input 
                    type="password" 
                    id="confirm-password" 
                    name="confirm-password" 
                    required 
                />
                <div className={styles.TextButtonPlacement}>
            <TextButton buttonText="Register Account" className={styles.buttonContainer}></TextButton>
            </div>
        </div>
    </div>
    </>
);
}

export default AccountRegistrationSection