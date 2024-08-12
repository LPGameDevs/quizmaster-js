import streams from './streams.json'
// import streamers from './streamers.json'

const response = (req, res) => {
    switch (req.method) {
        case 'GET':
            res.status(200).json(streams)
            // res.status(200).json(streamers)
            break;

        default: //Method Not Allowed
            res.status(405).end()
            break
    }
}

export default response;
