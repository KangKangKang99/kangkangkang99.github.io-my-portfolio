import { IIcon } from '#Configs/interfaces';

interface IProps extends IIcon {
    isOn: boolean;
    classColor?: string;
}

export const IconEyeToggle: React.FC<IProps> = (props: IProps) => {
    const width = props.width || 16;
    const height = props.height || 16;
    const fill = 'none';
    const stroke = 'currentColor';
    const color = props.classColor ? props.classColor : ' ';
    const className = props.isOn
        ? `feather feather-eye ${color}`
        : `feather feather-eye-off ${color}`;
    return (
        <>
            {props.isOn ? (
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={width}
                    height={height}
                    viewBox='0 0 24 24'
                    fill={fill}
                    stroke={stroke}
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className={className}
                >
                    <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' />
                    <circle cx='12' cy='12' r='3' />
                </svg>
            ) : (
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={width}
                    height={height}
                    viewBox='0 0 24 24'
                    fill={fill}
                    stroke={stroke}
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className={className}
                >
                    <path d='M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24' />
                    <line x1='1' y1='1' x2='23' y2='23' />
                </svg>
            )}
        </>
    );
};
