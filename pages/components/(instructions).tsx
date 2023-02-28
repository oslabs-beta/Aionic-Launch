import Link from 'next/link';
import styles from '../../styles/Home.module.css';

//typing for props
type InstructionProps = {
    stepNumber: number,
    instructions: string,
    link?: string
}

//component for individual steps on the getting started instruction section of the page
const Instructions = (props: InstructionProps) => {
    return (
        <div className={styles.instructionsContainer}>
            <div className={styles.stepNumber}>
                {props.stepNumber}
            </div>
            <p className={styles.step}>{props.instructions} 
                { /* will populate a link if a link prop was passed in*/}
                {
                    props.link ? <Link href={props.link} className={styles.stepLink} style={{ textDecoration: 'underline' }}>here</Link> : undefined
                }
                .
            </p>
        </div>
    )
}

export default Instructions;