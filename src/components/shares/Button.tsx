import { Button } from 'antd';
import { ReactElement, ReactNode } from 'react';

import { enumButtonStyle } from '#Configs/enum';
import { IconButtonLoading } from '#Components/icons';

interface IProps {
    onClick: () => void;
    text: string;
    type: enumButtonStyle;
    isLoading?: boolean;
    disabled?: boolean;
    icon?: ReactElement;
}

export const ShareButton: React.FC<IProps> = (props: IProps) => {
    const setType = () => {
        const type = props.type;
        let color: string = '';
        const shape =
            'py-1.5 px-2.5 mr-2 mb-2 font-medium text-sm rounded focus:ring-2 focus:outline-none';
        switch (type) {
            case enumButtonStyle.ALTERNATIVE:
                color =
                    'text-gray-900 bg-white  border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700';
                break;
            case enumButtonStyle.DARK:
                color =
                    'text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700';
                break;
            case enumButtonStyle.LIGHT:
                color =
                    'text-gray-900 bg-white border border-gray-300 hover:bg-gray-100  focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700';
                break;
            case enumButtonStyle.GREEN:
                color =
                    ' text-white bg-green-700 hover:bg-green-800  focus:ring-green-300 text-sm dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800';
                break;
            case enumButtonStyle.RED:
                color =
                    ' text-white bg-red-700 hover:bg-red-800  focus:ring-red-300 text-sm dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900';
                break;
            case enumButtonStyle.YELLOW:
                color =
                    ' text-white bg-yellow-400 hover:bg-yellow-500  focus:ring-yellow-300 font-medium text-sm dark:focus:ring-yellow-900';
                break;
            case enumButtonStyle.PURPLE:
                color =
                    ' text-white bg-purple-700 hover:bg-purple-800  focus:ring-purple-300 font-medium dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900';
                break;
            default:
            case enumButtonStyle.DEFAULT:
                color =
                    'text-white bg-blue-700 hover:bg-blue-800  focus:ring-blue-300 font-medium  dark:bg-blue-600 dark:hover:bg-blue-700  dark:focus:ring-blue-800';
                break;
        }
        return color + ' ' + shape;
    };

    return (
        <button
            onClick={props.onClick}
            disabled={props.disabled}
            type='button'
            className={setType() + (props.isLoading ? ' cursor-not-allowed' : ' cursor-pointer')}
        >
            <div className='flex items-center'>
                <div className='mr-1'>{props.isLoading ? <IconButtonLoading /> : props.icon}</div>
                <div>{props.text}</div>
            </div>
        </button>
    );
};
