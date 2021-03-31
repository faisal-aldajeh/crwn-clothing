
import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";


const WithSpinner = WarrpedComponent => ({isLoading, ...otherProps}) => {
    return isLoading ?  (
        <SpinnerOverlay>
            <SpinnerContainer/>
        </SpinnerOverlay>
    ): (
        <WarrpedComponent {...otherProps} />
    );
};


export default WithSpinner;