const { addNewMessages } = require('../db/queries')
const { body, validationResult, matchedData } = require('express-validator')

const validateMessages = [
    body('authorName')
        .trim()
        .matches(/^[A-Za-z ]+$/)
        .withMessage('Author name must contain letters only!')
        .isLength({ min: 1, max: 255 })
        .withMessage('Author name should be between 1 to 255 chars.'),
    body('inputMessage').trim().
        isLength({ min: 1, max: 2000 })
        .withMessage('message  should be between 1 to 2000 chars.')
]

const getForm = async (req, res) => {
    res.render('form')
}

const addNewMessageControl = [
    validateMessages,

    async (req, res) => {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).render("form", {
                title: "Create Message",
                errors: errors.array(),
                oldData: req.body
            });
        }

        const { authorName, inputMessage } = matchedData(req);

        const data = {
            username: authorName,
            text: inputMessage
        };

        await addNewMessages(data);

        res.redirect("/");
    }
];


module.exports = { addNewMessageControl, getForm }
