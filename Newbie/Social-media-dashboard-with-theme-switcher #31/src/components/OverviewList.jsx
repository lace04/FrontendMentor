import OverviewCard, { OverviewTodayCard } from './OverviewCard';
import data from '../../data/data.json';

export const convertToK = (number) => {
  if (number >= 9999) {
    return `${number / 1000}k`;
  }
  return number;
};

export const OverviewList = () => {
  return (
    <section className='absolute top-[150px] max-w-[1440px] left-0 right-0 mx-auto flex flex-wrap gap-[30px]'>
      {data.overview.map((item) => (
        <OverviewCard
          key={item.id}
          user={item.user}
          audience={convertToK(item.audience)}
          audienceType={item.audienceType}
          network={item.network}
          isUp={item.isUp}
          today={item.today}
        />
      ))}
    </section>
  );
};

// console.log(data['overview-today'])

export const OverviewTodayList = () => {
  return (
    <section className=''>
      <h2 className='text-2xl font-bold mb-[27px] text-dark-grayish-blue-text ml-8'>
        Overview Today
      </h2>
      <div className='flex flex-wrap gap-[20px]'>
        {data['overview-today'].map((item) => (
          <OverviewTodayCard
            key={item.id}
            network={item.network}
            statsType={item.statsType}
            stats={convertToK(item.stats)}
            porcentage={item.porcentage}
            isUp={item.isUp}
          />
        ))}
      </div>
    </section>
  );
};
