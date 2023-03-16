import {updateRating} from '../../lib/database/statBlock';

export default async function (req, res) {
  
    let result = null;

    switch (req.body.rating) {
        case 'like':
            updateRating(req.body.statBlockId, 'like');
            break;
       
        case 'dislike':
            updateRating(req.body.statBlockId, 'dislike');
            break;

		default:
			break;
    }

    res.status(200).json(result);
}
