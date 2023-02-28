import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

const Instructions = (props) => {
    return (
        <div className={styles.instructionsContainer}>
            <div className={styles.stepNumber}>
                {props.stepNumber}
            </div>
            <p className={styles.step}>{props.instructions} 
                {
                    props.link ? <Link href={props.link} className={styles.stepLink} style={{ textDecoration: 'underline' }}>here</Link> : undefined
                }
                .
            </p>
        </div>
    )
}

export default Instructions;