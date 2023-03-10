import styles from '../../styles/Home.module.css';
import Link from 'next/link'
import { useState } from 'react';

const FrontPage = () => {
    //state for mouse position
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);

    //upon mouse movement on the screen, this helper function will invoke and update the mouse position state
    const mouseEventHandler = (e: React.MouseEvent): void => {
        let X: any = e.pageX;
        let Y: any = e.pageY;
        setMouseX(X);
        setMouseY(Y);
    }

    //when use clicks on the click here to get started button, it'll redirect user to the get started section of the app
    const redirectToGettingStarted = () => {
        location.assign('#gettingStarted')
    }

    //rendering the main section of the app
    return (
        <div className={styles.frontContainer} onMouseMove={mouseEventHandler}>
            <div className={styles.frontContainerContainer}>
                <h2 className={styles.frontContainerText}>Start tracking your workflow history with ease</h2>
                <button className={styles.getStartedButton} onClick={redirectToGettingStarted}>
                    <p className={styles.buttonText}>Click here to get started</p>
                    <div className={styles.rightArrow}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                        </svg>
                    </div>
                </button>
                <Link href="https://medium.com/@aionicoslab/streamline-your-kubernetes-rollback-process-with-aionic-a-lightweight-historical-visualization-311554fef127">
                    <p className={styles.mediumText}>Read more about Aionic here</p>
                </Link>
            </div>
            {/*image layers*/}
            <div className={styles.layers} id="stars" />
            <div className={styles.layers} id="planet1" />
            <div className={styles.layers} id="planet2" />
            <div className={styles.layers} id="planet3" />
            <div className={styles.layers} id="planet4" />
            <div className={styles.layers} id="planet5" />
            <div className={styles.layers} id="astro" />
            <style jsx>{`
                .bi {
                    height: auto;
                    width: 5vw;
                }
                /*translate the different image layers based on mouse movement to give it a parallax effect*/
                @media only screen and (min-width: 768px) {
                    #stars {
                        transform: translate(${mouseX/100*2}px, ${mouseY/100*2}px);
                    }
                    #planet1 {
                        transform: translate(${mouseX/100*2}px, ${mouseY/100*2}px);
                    }
                    #planet2 {
                        transform: translate(${mouseX/100*4}px, ${mouseY/100*4}px);
                    }
                    #planet3 {
                        transform: translate(${mouseX/100*6}px, ${mouseY/100*6}px);
                    }
                    #planet4 {
                        transform: translate(${mouseX/100*8}px, ${mouseY/100*8}px);
                    }
                    #planet5 {
                        transform: translate(${mouseX/100*10}px, ${mouseY/100*10}px);
                    }
                    #astro {
                        transform: translate(${mouseX/100*12}px, ${mouseY/100*12}px);
                    }
                }
            `}</style>
        </div>
    )
}

export default FrontPage;
