import styles from '../../styles/Home.module.css';
import { useState } from 'react'

const FrontPage = () => {
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);

    const mouseEventHandler = (e: React.MouseEvent): void => {
        let X: any = e.pageX;
        let Y: any = e.pageY;
        setMouseX(X);
        setMouseY(Y);
    }

    return (
        <div className={styles.frontContainer} onMouseMove={mouseEventHandler}>
            <div className={styles.frontContainerContainer}>
                <h2 className={styles.frontContainerText}>Start tracking your workflow history with ease</h2>
                <button className={styles.getStartedButton}>
                    <p className={styles.buttonText}>Click here to get started</p>
                    <div className={styles.rightArrow}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                        </svg>
                    </div>
                </button>
            </div>
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
