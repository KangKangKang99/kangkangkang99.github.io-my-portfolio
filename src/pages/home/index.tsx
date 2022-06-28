// @ts-ignore
import VideoPlayer from 'react-background-video-player';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import { StyledPageHome } from './styles';
import { OWNER_NAME } from '#Configs/constants';
import { calcYearsExp } from '#Utils/helpers';

const videoList = ['/videos/intro-video2.mp4', '/videos/intro-video1.mp4'];
const randVideo = videoList[Math.floor(Math.random() * videoList.length)];

export const PageHome: React.FC = () => {
    // hooks
    const { t } = useTranslation();
    // states
    const [isnextBtn, setIsNextBtn] = useState<boolean>(false);
    // methods
    const handleWelcomeMess: () => string = () => {
        const currentDate = new Date().toLocaleDateString();
        const currentTime = Date.parse(new Date().toLocaleString());
        const timeStampRange = {
            morningStart: Date.parse(currentDate + ' ' + '05:00:00 AM'),
            morningEnd: Date.parse(currentDate + ' ' + '12:00:00 PM'),
            afternoonStart: Date.parse(currentDate + ' ' + '12:00:00 PM'),
            afternoonEnd: Date.parse(currentDate + ' ' + '06:00:00 PM'),
            eveningStart: Date.parse(currentDate + ' ' + '06:00:00 PM'),
            eveningEnd: Date.parse(currentDate + ' ' + '11:59:59 PM'),
        };
        if (timeStampRange.morningStart <= currentTime && currentTime < timeStampRange.morningEnd) {
            return 'home.welcome_morning';
        } else if (
            timeStampRange.afternoonStart <= currentTime &&
            currentTime < timeStampRange.afternoonEnd
        ) {
            return 'home.welcome_afternoon';
        } else if (
            timeStampRange.eveningStart <= currentTime &&
            currentTime < timeStampRange.eveningEnd
        ) {
            return 'home.welcome_evening';
        } else {
            return 'home.welcome_other';
        }
    };
    const handleSetNextBtn = (bool: boolean) => {
        if (isnextBtn !== bool) setIsNextBtn(bool);
    };

    return (
        <StyledPageHome className='__page_home_container w-screen h-screen  dark:bg-gray-700 relative'>
            <VideoPlayer className='__video_bg' src={randVideo} autoPlay={true} muted={true} />
            <div className='mx-auto max-w-sm pt-20 md:pt-0 md:absolute md:left-1/4 md:top-1/4'>
                <div className='__text-header bg-gray-600/80 px-4 pt-3 pb-1 border-0'>
                    <h3 className='text-left text-white text-4xl font-bold'>
                        {t(handleWelcomeMess())}
                    </h3>
                    <div className='text-left text-white text-xl'>
                        <p>{t('home.welcome_long_text', { year: calcYearsExp() })}</p>
                        <p>{t('home.my_portfolio')}</p>
                    </div>
                </div>
                <div className='w-100 border-b mt-2 border-gray-500'></div>
                <div className='w-100 mt-2 flex '>
                    <div className={`flex-1 h-24 relative ${isnextBtn && 'opacity-60'}`}>
                        <div
                            onMouseOver={() => handleSetNextBtn(false)}
                            className='absolute h-2/3 w-full flex left-0 top-0 cursor-pointer'
                        >
                            <div className='absolute w-2/3 h-full bg-red-50 __skew right-0'></div>
                            <div className='w-2/3 bg-red-50 p-1'>
                                <div
                                    className={`h-full w-full transition-all flex justify-start items-center pl-6 active:scale-95 ${
                                        !isnextBtn && 'border-t-2 border-l-2 border-gray-500'
                                    } `}
                                >
                                    <div className='__btn-action text-xl text-gray-500'>
                                        {t('action.explode')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`flex-1 h-24 relative ${!isnextBtn ? 'opacity-60' : ''}`}>
                        <div
                            onMouseOver={() => handleSetNextBtn(true)}
                            className='absolute h-2/3 w-full flex justify-end right-0 bottom-0 cursor-pointer'
                        >
                            <div className='absolute w-2/3 h-full bg-red-50 __skew left-0'></div>
                            <div className='w-2/3 bg-red-50 p-1'>
                                <div
                                    className={`h-full w-full transition-all flex justify-end items-center pr-6 active:scale-95  ${
                                        isnextBtn && 'border-b-2 border-r-2 border-gray-500'
                                    } `}
                                >
                                    <div className='__btn-action text-xl text-gray-500'>
                                        {t('action.about_me')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='__text-signature text-white'>
                <h4 className='text-white text-2xl text-right'>{OWNER_NAME}</h4>
                <div className='text-xs text-right flex items-end'>
                    <div className='__prefix-line flex-1 bg-white mb-1'></div>
                    <span className='ml-1'>{t('home.website_developer')}</span>
                </div>
            </div>
        </StyledPageHome>
    );
};
