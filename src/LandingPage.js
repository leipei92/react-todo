import { Link } from "react-router-dom";
import style from "./LandingPage.module.css";

const LandingPage = () => {
    return (
        <>
            <main>
                <div className={style.landingContainer}>
                    <h1>Welcome to My Todo App</h1>
                    <p>Click on VIEW TO DO LIST to start adding tasks</p>
                </div>
                <div className={style.buttonContainer}>
                    <Link to="/TodoList" className={style.button}>
                        View Todo List
                    </Link>

                </div>
            </main>
            <footer className={style.footer}>
                <footer> <small>&copy; Copyright 2024, AloyDesign</small> </footer>
            </footer>
        </>
    );
};

export default LandingPage;