// pages/quiz.js
import {useState, useEffect} from 'react';

export default function Quiz() {
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

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl">
      <h1 className="text-xl font-bold mb-4">{currentQuestion.question}</h1>
      <div className="grid grid-cols-2 gap-4">
        {currentQuestion.incorrectAnswers.concat(currentQuestion.correctAnswer).sort().map((answer, index) => (
          <button
            key={index}
            className={`py-2 px-4 rounded text-white ${
              hasAnswered ? (answer == currentQuestion.correctAnswer ? ('bg-green-400') : (selectedAnswer === answer ? 'bg-red-400' : 'bg-blue-500')) : 'bg-blue-500' 
               
            }`}
            onClick={() => handleAnswerClick(answer)}
            disabled={!!selectedAnswer}
          >
            {answer}
          </button>
        ))}
      </div>
      {feedback && <p className="mt-4 text-lg">{feedback}</p>}
      {selectedAnswer && (
        <button
          className="mt-4 bg-green-500 text-white py-2 px-4 rounded"
          onClick={handleNextQuestion}
        >
          Next Question
        </button>
      )}
    </div>
  );
}
