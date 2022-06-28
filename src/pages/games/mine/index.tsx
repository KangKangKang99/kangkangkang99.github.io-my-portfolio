import { useTranslation } from 'react-i18next';
import { Tooltip, Card, Select } from 'antd';
import { useState } from 'react';

import { IconHelpCircle } from '#Components/icons';
import { ShareButton } from '#Components/shares';
import { enumButtonStyle } from '#Configs/enum';

enum enumDifficult {
    none = 0,
    easy = 1,
    medium = 2,
    hard = 3,
}

export const PageGameMine: React.FC = () => {
    const { t } = useTranslation();

    const [gameDifficult, setGameDifficult] = useState<enumDifficult>(enumDifficult.none);

    return (
        <div className='h-screen w-screen container m-auto'>
            <div className='flex items-center justify-around'>
                <h2>{t('games.mine_sweeper')}</h2>
                <Tooltip title='Help' placement='rightBottom'>
                    <div className='cursor-pointer'>
                        <IconHelpCircle className='text-blue-500' />
                    </div>
                </Tooltip>
            </div>
            <div>
                {gameDifficult === enumDifficult.none ? (
                    <div className='z-10 h-screen w-screen fixed bg-gray-500/70 top-0 left-0 flex items-center justify-center'>
                        <Card title='Play new game' bordered={false} style={{ width: 300 }}>
                            <div className='flex items-center justify-between'>
                                <Select defaultValue={enumDifficult.easy}>
                                    <Select.Option value={enumDifficult.easy}>
                                        Easy(9x9)
                                    </Select.Option>
                                    <Select.Option value={enumDifficult.medium}>
                                        Medium(16x16)
                                    </Select.Option>
                                    <Select.Option value={enumDifficult.hard}>
                                        Hard(30x16)
                                    </Select.Option>
                                </Select>
                                <ShareButton
                                    onClick={() => console.log('vai')}
                                    text='Play'
                                    type={enumButtonStyle.DEFAULT}
                                />
                            </div>
                        </Card>
                    </div>
                ) : (
                    <div></div>
                )}
            </div>
        </div>
    );
};
