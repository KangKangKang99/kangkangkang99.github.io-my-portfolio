import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ComponentPortFolio } from '#Components/portfolio/Item';
import { PATH_PAGE_HOME } from '#Configs/constants';

interface IProps {
  name: string;
}

export const PagePortfolio: React.FC<IProps> = (props) => {
  const { name } = props;
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(PATH_PAGE_HOME.index);
  };

  return (
    <>
      <div className='bg-red-500 font-bold'>xin chao</div>
      <div className='flex m-auto w-full ml-12 mt-12'>
        <input className='border rounded' type='text' />
        <button onClick={handleNavigate} className='bg-green-500 px-5 active:scale-95'>
          +
        </button>
      </div>
      <div className='_list'>
        <ComponentPortFolio />
      </div>
    </>
  );
};
