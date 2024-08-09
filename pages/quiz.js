// pages/quiz.js
import {useState, useEffect} from 'react';
import {useRouter} from "next/router";

export default function Quiz() {
  const router = useRouter();

  const [quizData, setQuizData] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    // Fetch quiz data from the API
    async function fetchQuiz() {
      const response = await fetch('/api/quiz');
      const data = await response.json();
      setQuizData(data.QuizBundles);
    }

    fetchQuiz();
  }, []);

  if (!quizData) return <p>Loading...</p>;

  const currentQuestion = quizData[currentQuestionIndex];

  const handleExit = () => {
    router.push('/'); // Navigate to the desired route
  };

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    setHasAnswered(true);
    if (answer === currentQuestion.correctAnswer) {
      setFeedback('Correct!');
    } else {
      setFeedback('Wrong!');
    }
  };

  const handleNextQuestion = () => {
    setHasAnswered(false);
    setSelectedAnswer('');
    setFeedback('');
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert('Quiz Finished!');
    }
  };

  // Button classes
  const defaultClasses = 'py-2 px-4 rounded text-white';
  const buttonClasses = `${defaultClasses} bg-blue-500`;
  const rightClasses = `${defaultClasses} bg-green-500`;
  const wrongClasses = `${defaultClasses} bg-red-500`;

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl">
      <h1 className="text-xl font-bold mb-4">{currentQuestion.question}</h1>
      <div className="grid grid-cols-2 gap-4">
        {currentQuestion.incorrectAnswers.concat(currentQuestion.correctAnswer).sort().map((answer, index) => (

          <button
            key={index}
            className={
              hasAnswered ? (answer === currentQuestion.correctAnswer ? (rightClasses) : (selectedAnswer === answer ? wrongClasses : buttonClasses)) : buttonClasses
            }
            onClick={() => handleAnswerClick(answer)}
            disabled={!!selectedAnswer}
          >
            {answer}
          </button>

        ))}
      </div>
      {feedback && <p className="mt-4 text-lg">{feedback}</p>}

      <button
        className="mt-4 bg-blue-700 text-white py-2 px-4 rounded"
        onClick={handleExit}
      >
        Exit
      </button>

      {selectedAnswer && (
        <button
          className="mt-4 bg-gray-100 border-2 border-blue-700 text-blue-700 ml-2 py-2 px-4 rounded hover:bg-blue-500 hover:text-white"
          onClick={handleNextQuestion}
        >
          Next Question
        </button>
      )}
    </div>
  );
}
