import { PATH_PAGE_EXPLODE, PATH_PAGE_HOME, PATH_PAGE_GAMES } from '#Configs/constants';
import { IRouter } from '#Configs/interfaces';
import { enumRoutePermission } from '#Configs/enum';
import { LayoutApp } from '#Layouts/index';
import { PageGames } from '#Pages/games';
import { PageHome, PageExplode, PageGameMine } from '#Pages/index';

export const routes: IRouter[] = [
    // home
    {
        path: PATH_PAGE_HOME.index,
        Component: PageHome,
        Layout: LayoutApp,
        permission: enumRoutePermission.GUEST,
    },
    // explode
    {
        path: PATH_PAGE_EXPLODE.index,
        Component: PageExplode,
        Layout: LayoutApp,
        permission: enumRoutePermission.GUEST,
    },
    // games
    {
        path: PATH_PAGE_GAMES.index,
        Component: PageGames,
        Layout: LayoutApp,
        permission: enumRoutePermission.GUEST,
    },
    // games/mine
    {
        path: PATH_PAGE_GAMES.mine,
        Component: PageGameMine,
        Layout: LayoutApp,
        permission: enumRoutePermission.GUEST,
    },
];
