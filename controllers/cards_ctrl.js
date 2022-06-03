const { crypto_encrypt } = require('../helpers/encrypt_helper');
const { checkLuhn } = require('../helpers/luhn_helper');
const { Cards } = require('../models/card_model');

module.exports.addDepartment = async function (req, res) {
    try {
        if (checkLuhn(req.body.card_no)) {
            const hashCard = req.body.card_no.replace(/.(?=.{4})/g, "#");
            const data = {
                card_holder_name: crypto_encrypt(req.body.card_holder_name),
                card_no: crypto_encrypt(hashCard),
                cvv: crypto_encrypt(req.body.cvv),
                expiry_date: crypto_encrypt(req.body.expDate),
            }
            const card =  new Cards(data);
            await card.save();
            res.status(200).send({status: "success", message: "Card saved successfully!"});
            
        } else {
            throw new Error('Invalid card number!');
        }
    } catch (error) {
        res.status(400).send({status: "error", message: error.message})
    }

}


