import { Link } from 'react-router-dom'


interface QuizData {
    id: string
    title: string
    description: string
    imageUrl: string
}

interface QuizCardProps {
    quizData: QuizData;
  }

const QuizCard: React.FC<QuizCardProps> = ({ quizData }) => {

    return (
        <div className="card shadow-xl m-10 border-stone-200 border-2" style={{ backgroundColor: "#001a33", height: "350px", width: "250px"}}>
            <figure className="px-10 py-10">
                <img src={quizData.imageUrl} alt="Quiz illustration" className="rounded-xl" style={{ height: "175px ", width: "175px"}}/>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-lg">{quizData.title}</h2>
                {/* <p>{quizData.description}</p> */}
                <Link to={`/quiz/${quizData.id}`}>
                    <div className="card-actions">
                        <button className="btn btn-primary">Jouer au Quiz</button>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default QuizCard