import { CardsContainer } from './components/card-container';

function App() {
  return (
    <main className='flex justify-center'>
      <section className='w-[327px]'>
        <h1 className='text-[2.5rem] font-bold mb-[30px]'>Desserts</h1>
        <CardsContainer />
        Your Cart Your added items will appear here
      </section>
    </main>
  );
}

export default App;
