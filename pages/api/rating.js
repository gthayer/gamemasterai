export default async function (req, res) {
  
    let result = null;

    switch (req.body.rating) {
        case 'like':
            console.log('like');
            break;
       
        case 'dislike':
			console.log('dislike');
            break;

		default:
			break;
    }

    res.status(200).json(result);
}
