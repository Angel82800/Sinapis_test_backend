import bodyParser from 'body-parser';

export const sum = async (req, res, next) => {
    return res.json({result: Number(req.query.number1)+Number(req.query.number2)});
}
