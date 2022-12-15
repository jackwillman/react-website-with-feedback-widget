import { useState } from 'react';

import PageHeader from './PageHeader';
import CurrentPage from './Pages';

import { MainDiv } from './styled';


export type ExistingPage = 'Home' | 'About' | 'Dashboard' | 'Login' | 'Sign Up';
export type CurrentPage = string;
export type SetCurrentPage = (page : ExistingPage) => void;
export type IsLoggedIn = boolean;
export type SetIsLoggedIn = (isLoggedIn : boolean) => void;

const MainPage = function MainPageComponent() {
    const [currentPage, setCurrentPage] = useState<ExistingPage>('Home');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <MainDiv>
            <PageHeader 
                setCurrentPage={ setCurrentPage }                
                setIsLoggedIn={ setIsLoggedIn }
                isLoggedIn={ isLoggedIn }
            />
            <CurrentPage 
                currentPage={ currentPage }
                setCurrentPage={ setCurrentPage }
                setIsLoggedIn={ setIsLoggedIn }
            />
        </MainDiv>
    );
};

export default MainPage;