import facebookLogo from '../assets/images/icon-facebook.svg';
import twitterLogo from '../assets/images/icon-twitter.svg';
import instagramLogo from '../assets/images/icon-instagram.svg';
import youtubeLogo from '../assets/images/icon-youtube.svg';
import arrowUp from '../assets/images/icon-up.svg';
import arrowDown from '../assets/images/icon-down.svg';

const networkLogos = {
  Facebook: facebookLogo,
  Twitter: twitterLogo,
  Instagram: instagramLogo,
  YouTube: youtubeLogo,
};

const networkColors = {
  Facebook: 'bg-facebook',
  Twitter: 'bg-twitter',
  YouTube: 'bg-youtube',
  Instagram: 'bg-Instagram-gradient',
};

function OverviewCard({ user, audienceType, audience, network, isUp, today }) {
  return (
    <article className='bg-light-grayish-blue-card-bg w-[326px] h-[216px] mb-4 rounded-[5px] overflow-hidden text-center dark:bg-dark-desaturated-blue-card-bg hover:brightness-95 cursor-pointer hover:dark:brightness-125 mx-auto'>
      <div className={`${networkColors[network]} h-[4px] mb-8`}></div>
      <div className='flex items-center justify-center gap-x-2'>
        <img src={networkLogos[network]} alt={`logo ${network}`} />
        <p className='text-xs text-dark-grayish-blue-text font-bold'>{user}</p>
      </div>
      <p className='text-[56px] font-bold text-very-dark-blue-bg dark:text-white'>
        {audience}
      </p>
      <p className='uppercase tracking-[5px] text-dark-grayish-blue-text text-xs mb-6'>
        {audienceType}
      </p>
      <div className='flex items-center justify-center gap-1'>
        <img src={isUp ? arrowUp : arrowDown} alt='arrow up' />
        <p
          className={`text-xs font-semibold ${
            isUp ? 'text-lime-green' : 'text-bright-red'
          }`}
        >
          {today} Today
        </p>
      </div>
    </article>
  );
}

export default OverviewCard;

export const OverviewTodayCard = ({
  network,
  statsType,
  stats,
  porcentage,
  isUp,
}) => {
  return (
    <article className='bg-light-grayish-blue-card-bg w-[326px] h-[125px] mb-4 mx-auto rounded-[5px] p-[27px] cursor-pointer hover:brightness-95 dark:bg-dark-desaturated-blue-card-bg dark:hover:brightness-125'>
      <div className='flex justify-between items-center'>
        <p className='text-dark-grayish-blue-text dark:text-white'>
          {statsType}
        </p>
        <img src={` ${networkLogos[network]}`} alt={`logo ${network}`} />
      </div>
      <div className='flex justify-between'>
        <p className='text-very-dark-blue-text text-[42px] font-semibold dark:text-white'>
          {stats}
        </p>
        <div className='flex items-center justify-center gap-1'>
          <img src={isUp ? arrowUp : arrowDown} alt='arrow up' />
          <p
            className={`text-xs font-semibold ${
              isUp ? 'text-lime-green' : 'text-bright-red'
            }`}
          >
            {porcentage}%
          </p>
        </div>
      </div>
    </article>
  );
};
