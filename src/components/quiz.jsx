import React, { useState } from 'react';
import '../assets/css/quiz.css';
import QuizImg from '../assets/img/hands.jpg';

const QuizPage = () => {
  const [fileName, setFileName] = useState('Hali, fayl tanlamadingiz');
  const [quizResult, setQuizResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileName(file ? file.name : 'Fayl tanlamadingiz');
  };

  const handleGenerateQuiz = async () => {
    const fileInput = document.getElementById('bookUpload');
    const file = fileInput.files[0];

    if (!file) {
      alert('Iltimos, faylingizni yuklang(PDF).');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('num_questions', 100);

    setIsLoading(true);

    try {
      const response = await fetch('http://quiz.mutolaa.com/', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setQuizResult(data);
    } catch (error) {
      console.error('Error:', error);
      alert('Testlar tuzishda xatolik yuz berdi, iltimos keinroq yana harakat qilib ko\'ring');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="quiz_page" style={{ backgroundImage: `url(${QuizImg})` }}>
      <div className="quiz-container">
        <div className="quiz-content">
          <h1>Test tuzuvchi</h1>
          <div className="file-upload">
            <input type="file" id="bookUpload" accept=".pdf" className="file-input" onChange={handleFileChange} />
            <label htmlFor="bookUpload" className="custom-file-label">Fayl tanlang</label>
            <span className="file-name">{fileName}</span>
          </div>
          <button className="btn btn_quiz" onClick={handleGenerateQuiz} disabled={isLoading}>
            {isLoading ? 'Yuklanmoqda...' : 'Testlar tuzish'}
          </button>
          <div id="quizResult" className={`quiz-results ${quizResult.length ? '' : 'hidden'}`}>
            {quizResult.map((quiz, index) => (
              <div key={index} className="quiz-item">
                <strong>Question {index + 1}:</strong> {quiz.question}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
