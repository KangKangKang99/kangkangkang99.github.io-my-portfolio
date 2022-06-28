import React from 'react';

import { enumRoutePermission } from '#Configs/enum';

export interface IRouter {
    path: string;
    Component: React.FC<any>;
    Layout?: React.FC<ILayout>;
    permission: enumRoutePermission;
}

export interface ILayout {
    children?: React.ReactElement<any>;
}

export interface IIcon {
    width?: number;
    height?: number;
    color?: string;
    className?: string;
}
