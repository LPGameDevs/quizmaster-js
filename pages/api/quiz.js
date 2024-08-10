const response = async (req, res) => {
    switch (req.method) {
        case 'GET':
            const response = await fetch('https://quiz.trygamedev.com/api/quiz.json');
            const data = await response.json();
            res.status(200).json(data)
            break;

        default: //Method Not Allowed
            res.status(405).end()
            break
    }
}

export default response;
