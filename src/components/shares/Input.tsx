import { ReactElement, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { enumInputValValid, enumInputType, enumInputStyle } from '#Configs/enum';
import { IconEyeToggle } from '#Components/icons';

interface IProps {
    type: enumInputType;
    name: string;
    typeStyle?: enumInputStyle;
    label?: string;
    placeholder?: string;
    icon?: ReactElement;
    disabled?: boolean;
    readonly?: boolean;
    isValid?: enumInputValValid;
    maxLenght?: number;
    max?: number;
    min?: number;
    textError?: string;
    isRequireSign?: boolean;
}

const defaultStyle = ' focus:outline-none w-full p-2.5 text-sm block rounded-lg ';
const underLineStyle =
    'block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white focus:outline-none focus:ring-0 peer ';

export const ShareInput: React.FC<IProps> = (props: IProps) => {
    // vars
    const idInput = uuidv4();
    const isError = props?.isValid === enumInputValValid.INVALID;
    // states
    const [isShowPass, setIsShowPass] = useState<boolean>(false);

    // methods
    const additionalStyle = () => {
        let style = ' ';
        props.icon ? (style += ' pl-10 ') : false;
        props.type === enumInputType.PASSWORD ? (style += ' pr-10 ') : false;
        props.disabled ? (style += ' cusor-not-allow ') : false;
        if (props?.typeStyle === enumInputStyle.UNDER_LINE) {
            switch (props.isValid) {
                case undefined:
                case enumInputValValid.UNSET:
                default: {
                    style +=
                        'border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:border-blue-600  ';
                    break;
                }
                case enumInputValValid.INVALID: {
                    style +=
                        'border-red-400 dark:border-red-400 dark:focus:border-red-600 focus:border-red-500  ';
                    break;
                }
                case enumInputValValid.VALID: {
                    style +=
                        'border-green-400 dark:border-green-400 dark:focus:border-green-600 focus:border-green-500  ';
                    break;
                }
            }
        } else {
            switch (props.isValid) {
                case undefined:
                case enumInputValValid.UNSET:
                default: {
                    style +=
                        ' bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ';
                    break;
                }
                case enumInputValValid.INVALID: {
                    style +=
                        ' bg-red-100 border border-red-400 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-600 dark:bg-red-200 dark:border-red-400 ';
                    break;
                }
                case enumInputValValid.VALID: {
                    style +=
                        ' bg-green-100 border border-green-500 text-green-900 placeholder-green-700 focus:ring-green-500 focus:border-green-500 dark:bg-green-200 dark:border-green-400 ';
                }
            }
        }
        return style;
    };

    const toggleShowPass = () => {
        setIsShowPass(!isShowPass);
    };

    const inputPassCheckShowPass = () => {
        return isShowPass ? enumInputType.TEXT : enumInputType.PASSWORD;
    };

    const setColorEyeToggle = () => {
        switch (props.isValid) {
            case undefined:
            case enumInputValValid.UNSET:
            default: {
                return 'text-gray-700 dark:text-gray-200';
            }
            case enumInputValValid.INVALID: {
                return 'text-red-700 dark:text-red-400';
            }
            case enumInputValValid.VALID: {
                return 'text-green-500 dark:text-green-400';
            }
        }
    };

    const setLabelColor = () => {
        if (props?.typeStyle === enumInputStyle.UNDER_LINE) {
            const style =
                'peer-focus:font-medium absolute left-0 text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6';
            switch (props.isValid) {
                case undefined:
                case enumInputValValid.UNSET:
                default: {
                    return (
                        style +
                        ' text-gray-500 dark:text-gray-400 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 '
                    );
                }
                case enumInputValValid.INVALID: {
                    return (
                        style +
                        ' text-red-700 dark:text-red-500 peer-focus:text-red-800 peer-focus:dark:text-red-600 '
                    );
                }
                case enumInputValValid.VALID: {
                    return (
                        style +
                        ' text-green-600 dark:text-green-500 peer-focus:text-green-700 peer-focus:dark:text-green-600 '
                    );
                }
            }
        } else {
            switch (props.isValid) {
                case undefined:
                case enumInputValValid.UNSET:
                default: {
                    return 'text-gray-800 dark:text-gray-300';
                }
                case enumInputValValid.INVALID: {
                    return 'text-red-700 dark:text-red-500';
                }
                case enumInputValValid.VALID: {
                    return 'text-green-600 dark:text-green-500';
                }
            }
        }
    };

    return (
        <>
            {props?.typeStyle === enumInputStyle.UNDER_LINE ? (
                <div className='relative z-0 w-full'>
                    <input
                        id={idInput}
                        type={
                            props.type === enumInputType.PASSWORD
                                ? inputPassCheckShowPass()
                                : props.type
                        }
                        name={props.name}
                        className={'share-input__input' + underLineStyle + additionalStyle()}
                        placeholder={props.placeholder || ' '}
                        disabled={props.disabled}
                        readOnly={props.readonly}
                    />
                    <label htmlFor={idInput} className={'share-input__label ' + setLabelColor()}>
                        {props.label}
                    </label>
                    <div
                        onClick={toggleShowPass}
                        className='absolute inset-y-0 right-0 flex items-center mr-3 cursor-pointer active:scale-95'
                    >
                        {props.type === enumInputType.PASSWORD && (
                            <IconEyeToggle isOn={!isShowPass} classColor={setColorEyeToggle()} />
                        )}
                    </div>
                    {isError && (
                        <small
                            className={`w-full text-left font-medium block text-red-400 dark:text-red-500 break-words line-clamp-1 ${
                                props.textError ? 'visible' : 'invisible'
                            }`}
                        >
                            {props.textError || '---'}
                        </small>
                    )}
                </div>
            ) : (
                <div className='w-full'>
                    {props.label && (
                        <label
                            htmlFor={idInput}
                            className={
                                'share-input__label block mb-2 text-left text-sm font-medium ' +
                                setLabelColor()
                            }
                        >
                            {props.label}
                            {props.isRequireSign && (
                                <span className='text-red-400 dark:text-red-400'> *</span>
                            )}
                        </label>
                    )}
                    <div className='relative'>
                        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                            {props?.icon}
                        </div>
                        <input
                            type={
                                props.type === enumInputType.PASSWORD
                                    ? inputPassCheckShowPass()
                                    : props.type
                            }
                            id={idInput}
                            name={props.name}
                            className={'share-input__input' + defaultStyle + additionalStyle()}
                            placeholder={props.placeholder}
                            disabled={props.disabled}
                            readOnly={props.readonly}
                        />
                        <div
                            onClick={toggleShowPass}
                            className='absolute inset-y-0 right-0 flex items-center mr-3 cursor-pointer active:scale-95'
                        >
                            {props.type === enumInputType.PASSWORD && (
                                <IconEyeToggle
                                    isOn={!isShowPass}
                                    classColor={setColorEyeToggle()}
                                />
                            )}
                        </div>
                    </div>
                    {isError && (
                        <small
                            className={`w-full text-left font-medium block text-red-400 dark:text-red-500 break-words line-clamp-1 ${
                                props.textError ? 'visible' : 'invisible'
                            }`}
                        >
                            {props.textError || '---'}
                        </small>
                    )}
                </div>
            )}
        </>
    );
};
