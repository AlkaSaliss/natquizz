import { useState } from 'react'
import { useParams } from 'react-router-dom'
import quiz120Data from '../data/question_nat_120_qa'


const FreeStyleQuizPage120QA = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const { quizId } = useParams()
    const allQuestions = quizId ? quiz120Data[quizId] : []

    const handleNextQuestion = () => {
        setCurrentQuestionIndex((prevIndex) => {
            const nextIndex = prevIndex + 1
            return nextIndex < allQuestions.length ? nextIndex : 0
        })
    }

    const handlePreviousQuestion = () => {
        setCurrentQuestionIndex((prevIndex) => {
            const nextIndex = prevIndex - 1
            return nextIndex >= 0 ? nextIndex : allQuestions.length - 1
        })
    }

    const currentQuestion = allQuestions[currentQuestionIndex]

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-5 text-center ">Thème: {quizId}</h1>
            <p className="text-gray-400 text-center mb-4">
                Question {currentQuestionIndex + 1} / {allQuestions.length}
            </p>
            {currentQuestion && (
                <div className="card bg-base-100 shadow-md rounded-lg p-4">
                    <h2 className="text-xl font-bold mb-2 text-white">{currentQuestion.question}</h2>
                    <details className="mt-4">
                        <summary className="cursor-pointer font-bold text-white">Révéler la réponse</summary>
                        <p className="text-gray-400">{currentQuestion.answer}</p>
                    </details>
                    <div className="flex justify-between mt-4">
                        <button
                            className="btn btn-sm btn-secondary disabled:btn-disabled"
                            disabled={currentQuestionIndex === 0}
                            onClick={handlePreviousQuestion}
                        >
                            Précédent
                        </button>
                        <button
                            className="btn btn-sm btn-primary disabled:btn-disabled"
                            disabled={currentQuestionIndex === allQuestions.length - 1}
                            onClick={handleNextQuestion}
                        >
                            Suivant
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default FreeStyleQuizPage120QA
