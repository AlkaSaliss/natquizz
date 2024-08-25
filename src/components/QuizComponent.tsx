import { Link } from 'react-router-dom'
import quizzes from '../data/all_quizzes'
import QuizCard from './QuizCard'


const QuizComponent = () => {
    return (
        <div 
        className="flex flex-col items-center justify-center"
        >

            <h1 className="hover:bg-slate-800 mx-auto mb-10 rounded-md shadow shadow-stone-600 text-lg font-medium my-10 text-center w-3/4 lg:w-1/4">
                <Link to="/freestyle">
                    Cliquez ici pour jouer en mode Question/Reponse (200 questions)
                </Link>
            </h1>
            <h1 className="hover:bg-slate-800 mx-auto rounded-md shadow shadow-stone-600 text-lg font-medium my-10 text-center w-3/4 lg:w-1/4">
                <Link to="/freestyle120">
                    Cliquez ici pour jouer en mode Question/Reponse (120 questions)
                </Link>
            </h1>

            <p className="text-lg font-bold my-10 text-center">Ou</p>
            <h1 className="text-lg font-bold my-10 text-center"> Choisir une des thématiques ci-dessous pour jouer en mode QCM</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center">
                {quizzes.map((quiz) => (
                    <QuizCard key={quiz.id} quizData={quiz} />
                ))}
            </div>
        </div>
    )
}

export default QuizComponent