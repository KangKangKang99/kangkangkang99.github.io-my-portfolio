import { ILayout } from '#Configs/interfaces';

interface IProp extends ILayout {}

export const LayoutApp: React.FC<IProp> = (props: IProp) => {
    return <div>{props.children}</div>;
};
