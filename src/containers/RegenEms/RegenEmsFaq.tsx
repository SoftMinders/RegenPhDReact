import React, { useRef, useEffect } from "react";
import classNames from "classnames";
import Faq from "components/regenemsfaq/Faq";
import HeroSplit from "components/regenemsfaq/HeroSplit";


export const RegenEmsFaq = (): React.ReactElement => {


    // State to control fab visibility

    useEffect(() => {
        
    }, []);

    return (
        <>
            <HeroSplit hasBgColor invertColor />
            <Faq/>
        </>
    );
};
