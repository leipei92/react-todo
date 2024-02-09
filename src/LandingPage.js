import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
    return (
        <>
            <main>
                <div className={styles.container}>
                    <h1>Welcome to My Todo App</h1>
                    <p>Click on VIEW TO DO LIST to start getting organized</p>
                </div>
                <div className={styles.buttonContainer}>
                    <Link to="/TodoList" className={styles.button}>
                        View Todo List
                    </Link>

                </div>
            </main>
            <footer className={styles.footer}>
                <footer> <small>&copy; Copyright 2024, AloyDesign</small> </footer>
            </footer>
        </>
    );
};

export default LandingPage;