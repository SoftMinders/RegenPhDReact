import React, {createContext, useState} from "react";
import {type ReactNode} from "react"

export interface AuthContextProps {
	openRiskModal: boolean;
	toggleOpenRiskModal: (bool: boolean) => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [openRiskModal, setOpenRiskModal] = useState(false);

	const toggleOpenRiskModal = (bool: boolean): void => {
		setOpenRiskModal(bool);
	};

	return (
		<AuthContext.Provider value={{openRiskModal,toggleOpenRiskModal}}>
			{children}
		</AuthContext.Provider>
	);
};
