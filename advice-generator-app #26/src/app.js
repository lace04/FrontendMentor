const diceBtn = document.querySelector('#diceBtn');
const advice = document.getElementById('advice');
const adviceId = document.getElementById('adviceId');

getAdvice();

diceBtn.addEventListener('click', async () => {
  await getAdvice();
});

async function getAdvice() {
  try {
    //idRandom
    const id = Math.floor(Math.random() * 224) + 1;
    console.log(id);
    //Llamada a la API
    const response = await fetch(`https://api.adviceslip.com/advice/${id}`);
    const data = await response.json();
    //Mostrar el resultado
    const adviceMessage = data.slip.advice;
    advice.innerText = `"${adviceMessage}"`;
    adviceId.innerText = `${id}`;
  } catch (error) {
    console.log(error);
  }
}
