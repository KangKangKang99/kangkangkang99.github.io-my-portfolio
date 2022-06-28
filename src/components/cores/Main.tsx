import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';

import { routes } from '#Configs/routers';
import { IRouter } from '#Configs/interfaces';
import { useAppSelector } from '#Stores/store';
import { selectApp } from '#Stores/slices';
import { enumThemeMode } from '#Configs/enum';

export const ModuleMain: React.FC = () => {
    // redux states
    const { isDarkMode } = useAppSelector(selectApp);

    // methods
    const handleChangeThemeMode = () => {
        const theme: enumThemeMode = isDarkMode ? enumThemeMode.DARK : enumThemeMode.LIGHT;
        const root = window.document.documentElement;
        if (theme == enumThemeMode.DARK && !root.classList.contains(enumThemeMode.DARK)) {
            root.classList.add(enumThemeMode.DARK);
        } else if (theme == enumThemeMode.LIGHT && root.classList.contains(enumThemeMode.DARK)) {
            root.classList.remove(enumThemeMode.DARK);
        }
    };

    useEffect(() => {
        handleChangeThemeMode();
    }, [isDarkMode]);

    return (
        <BrowserRouter>
            <Routes>
                {routes.map(({ path, Component, Layout }: IRouter, index) => {
                    const element = Layout ? (
                        <Layout>
                            <Component />
                        </Layout>
                    ) : (
                        <div> 
                            <Component />
                        </div>
                    );
                    return <Route key={index} path={path} element={element} />;
                })}
            </Routes>
        </BrowserRouter>
    );
};
