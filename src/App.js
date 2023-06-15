import React from 'react'
import './App.css';
import Quiz from './components/Quiz/Quiz';
import Result from './components/Result/Result';

const questions = [
  {
    title: 'Столицей какого государства является Мадрид?',
    variants: ['Португалии', 'Испании', 'Перу', 'Аргентины'],
    correct: 1
  },
  {
    title: 'Столицей какого государства является Сеул?',
    variants: ['Японии', 'Вьетнама', 'Таиланда', 'Южной Кореи'],
    correct: 3,
  },
  {
    title: 'Столицей какого государства является Стокгольм?',
    variants: ['Финляндии', 'Норвегии', 'Швеции', 'Дании'],
    correct: 2,
  },
  {
    title: 'Столицей какого государства является Загреб?',
    variants: ['Хорватии', 'Словении', 'Болгарии', 'Словакии'],
    correct: 0,
  }
]

function App() {

  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  
  const question = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    } 
  }
  return (
    <div className='wrapper'>
      {step !== questions.length ? <Quiz question={question} onClickVariant={onClickVariant} />  :
      <Result correct={correct}  />}
    </div>
  );
}

export default App;
