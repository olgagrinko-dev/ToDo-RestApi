function buildResponse(res, message, number) {
    res.status(number).send(message);
}

module.exports = { buildResponse };