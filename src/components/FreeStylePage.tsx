import freestyleQuizData from '../data/freestyle_quiz'
import { Link } from 'react-router-dom'
import { themesMapping } from '../data/constants'


const FreeStylePage = () => {

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-24 text-center ">Sélectionner une thématique</h1>
            <ul className="list-none p-0 flex flex-col items-center">
                {Object.keys(freestyleQuizData).map((quiz_id) => (
                    <li key={quiz_id} className="mb-2 w-48">
                        <Link to={`/freestyle/${quiz_id}`}>
                            <button
                                className="text-center   w-full py-2 px-4 border border-gray-300 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                {themesMapping[quiz_id]}
                            </button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FreeStylePage
