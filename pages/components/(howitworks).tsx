import styles from '../../styles/Home.module.css';
import Image from 'next/image';

//renders the how it works portion of the page
const HowItWorks = () => {
    return (
        <div className={styles.workContainer} id="howItWorks">
            <h2 className={styles.workTitle}>How does it work?</h2>
            <p className={styles.workText}>
                Aionic is a platform that allows you to track and manage your cluster configuration history and streamlines the recovery process if your cluster goes down due to a faulty configuation.
            </p>
            <Image className={styles.diagram}
                src="/architecture.png"
                alt="Architechure Diagram"
                width={3045}
                height={2208}
            />
            <p className={styles.workText}>
                Following the GitOps model that ArgoCD has already implemented, when the developer pushes their manifest changes to GitHub, ArgoCD will listen for the changes, pull down the new manifest, and update the relevant clusters with the new configurations.
            </p>
            <p className={styles.workText}>
                Aionic will listen for the manifest updates through ArgoCD, saves the manifest to its respective cluster in the database, display the manifest history of the cluster to the user and allowing the user to revert back to an older version of the manifest by pushing an old saved manifest to its respective repository. 
            </p>
        </div>
    )
}

export default HowItWorks