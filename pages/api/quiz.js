import quiz from './quiz.json'

const response = (req, res) => {
    switch (req.method) {
        case 'GET':
            res.status(200).json(quiz)
            break;

        default: //Method Not Allowed
            res.status(405).end()
            break
    }
}

export default response;
