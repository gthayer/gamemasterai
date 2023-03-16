import {updateRating} from '../../lib/database/statBlock';

export default async function (req, res) {
  
    let result = null;

    switch (req.body.rating) {
        case 'like':
            result = await updateRating(req.body.id, 'like');
            break;
       
        case 'dislike':
            result = await updateRating(req.body.id, 'dislike');
            break;

		default:
			break;
    }

    res.status(200).json(result);
}
