import {getApiClient, getAuthProvider} from '../../../utils/twitchAuth';

export default async function handler(req, res) {
  // const authProvider = getAuthProvider();
  const client = await getApiClient();

  const streams = await client.streams.getStreamsPaginated({
    type: 'live',
    game: '252812003',
    limit: 10,
  });

  let page;
  const result = [];

  // while ((page = await streams.getNext()).length && result.length < 10) {
    page = await streams.getAll()
    result.push(...page);
    console.log(result)
  // }

  res.status(200).json(result.map((item) => {
    return {
      id: item.id,
      gameId: item.gameId,
      gameName: item.gameName,
      title: item.title,
      userName: item.userName,
      viewers: item.viewers,
    }
  }
));


// const user = await client.users.getUserByName('yanni_boi');
// res.status(200).json(user.name)

// const user = await client.users.getUserByName('yanni_boi');
}