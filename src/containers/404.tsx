import React from "react";
import classNames from "classnames";
import { motion } from "framer-motion";



export const Fourzerofour = (): React.ReactElement => {
    return (
        <>
            <motion.div className="bone">
                <motion.div
                    className="text-center"
                    style={{ background: "#faf8f5" }}
                    initial="hidden"
                    animate="visible"
                >
                <section className={classNames("hero home-hero-section section has-bg-color invert-color")}>
                    
                </section>


                <motion.div className="top404">
                        <h1 className={classNames("mt-0 font-bold gradient-text mb-16")}>
                            404
                        </h1>
                        <p className="m-0 font-regular font-mlg">
                            The Page You Are Looking For Is Either Broken Or Not Found.<br/><br/>
                            <a href="/" className="gradbtn">Go Back To Home</a>
                        </p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </>
    );
};
