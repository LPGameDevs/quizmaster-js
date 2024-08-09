import comments from './comments.json'

const response = (req, res) => {
    switch (req.method) {
        case 'GET':
            res.status(200).json(comments)
            break;

        default: //Method Not Allowed
            res.status(405).end()
            break
    }
}

export default response;
