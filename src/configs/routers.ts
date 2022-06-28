import { PATH_PAGE_EXPLODE, PATH_PAGE_HOME, PATH_PAGE_PORTFOLIO } from '#Configs/constants';
import { IRouter } from '#Configs/interfaces';
import { enumRoutePermission } from '#Configs/enum';
import { PageHome, PageExplode } from '#Pages/index';
import { LayoutApp } from '#Layouts/index';

export const routes: IRouter[] = [
    // home
    {
        path: PATH_PAGE_HOME.index,
        Component: PageHome,
        permission: enumRoutePermission.GUEST,
        Layout: LayoutApp,
    },
    // explode
    {
        path: PATH_PAGE_EXPLODE.index,
        Component: PageExplode,
        permission: enumRoutePermission.GUEST,
        Layout: LayoutApp,
    },
];
