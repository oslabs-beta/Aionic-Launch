import styles from '../../styles/Home.module.css';
import Instructions from './(instructions)';

//renders the getting started portion of the app
//passing in the step number, instructions and link to the instructions component
const GettingStarted = () => {
    return (
        <div className={styles.startedContainer} id="gettingStarted">
            <h1 className={styles.startedTitle}>Getting Started</h1>
            <div className={styles.stepsContainer}>
                <Instructions stepNumber={1} instructions='Go to our Github repository, read the ReadMe for detailed instructions and fork the repository ' link="https://github.com/oslabs-beta/Aionic"/>
                <p className={styles.noteText}>** Follow steps 2-4 if setting up Aionic for the first time. Else skip to step 6. **</p>
                <Instructions stepNumber={2} instructions='Setup Github OAuth and save the client ID and secret. For more detailed instructions on the setup please click ' link='https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app'/>
                <Instructions stepNumber={3} instructions='Setup a MongoDB database and save the URI with an admin user and password. For more detailed instructions on the setup please click ' link='https://www.mongodb.com/docs/manual/tutorial/getting-started'/>
                <Instructions stepNumber={4} instructions='Place the MongoDB URI, Github client ID and secret, and ArgoCD admin token and URL into the environment in the docker-compose .yaml file'/>
                <Instructions stepNumber={5} instructions='Start the app'/>
                <Instructions stepNumber={6} instructions='Login and authenicate using your Github account'/>
                <Instructions stepNumber={7} instructions='Input your personal ArgoCD Token and URL'/>
                <Instructions stepNumber={8} instructions='Start monitoring'/>
            </div>
        </div>
    )
}

export default GettingStarted;