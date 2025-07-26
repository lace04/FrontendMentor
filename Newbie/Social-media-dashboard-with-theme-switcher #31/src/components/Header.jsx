import { useEffect } from 'react';
import { useState } from 'react';

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <header className='pt-8 px-6 bg-very-pale-blue-top-bg-pattern dark:bg-very-dark-blue-top-bg-pattern h-[235px] rounded-b-[20px] mb-[1000px] md:mb-[480px] xl:mb-[200px]'>
      <div className='md:flex justify-between items-center'>
        <div className=''>
          <h1 className='text-2xl font-bold text-very-dark-blue-text dark:text-very-pale-blue-top-bg-pattern mb-[0.125rem] md:text-4xl'>
            Social Media Dashboard
          </h1>
          <p className='text-sm font-bold text-dark-grayish-blue-text dark:text-desaturated-blue-text mb-6'>
            Total Followers: 23,004
          </p>
          <hr className='border border-toggle md:hidden' />
        </div>
        <div className='flex justify-between mt-2 items-center gap-x-4'>
          <p className='text-sm font-bold text-dark-grayish-blue-text dark:text-desaturated-blue-text mt-2'>
            Dark Mode
          </p>
          <label
            htmlFor='darkmode'
            className='flex items-center border w-12 h-6 bg-toogle rounded-full cursor-pointer bg-toggle px-[0.125rem] relative overflow-hidden'
          >
            <input
              onClick={handleClick}
              type='checkbox'
              id='darkmode'
              className='peer sr-only'
            />
            <div className='peer-checked:bg-Toggle-gradient transition-all duration-500 absolute top-0 left-0 w-full h-full'></div>
            <div className='h-[17px] w-[17px] rounded-full bg-white peer-checked:translate-x-[24px] transition-all duration-500'></div>
          </label>
        </div>
      </div>
    </header>
  );
}

export default Header;
