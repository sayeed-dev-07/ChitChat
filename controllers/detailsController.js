const { getMessageDetails } = require('../db/queries')

const getMessageDetailsControl = async (req, res) => {
    const { postId } = req.params;
    const dataArr = await getMessageDetails(postId)
    const data = dataArr[0]
    res.render('details', { data })
}

module.exports = { getMessageDetailsControl }