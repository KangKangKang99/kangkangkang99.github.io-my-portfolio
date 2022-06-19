import { PATH_PAGE_HOME, PATH_PAGE_PORTFOLIO } from '#Configs/constants';
import { IRouter } from '#Configs/interfaces';
import { enumRoutePermission } from '#Configs/enum';
import { PageHome, PagePortfolio } from '#Pages/index';
import { LayoutApp } from '#Layouts/index';

export const routes : IRouter[] = [ 
    // home
    {path: PATH_PAGE_HOME.index, Component: PageHome,  permission: enumRoutePermission.GUEST, Layout: LayoutApp },
    // portfolio
    {path: PATH_PAGE_PORTFOLIO.index, Component: PagePortfolio, permission: enumRoutePermission.GUEST },
];  