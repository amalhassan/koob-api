const errHandler = (err, req, res, next) => {
    const status = res.statusCode ? res.statusCode : 500;

    res.status(status);

    res.json({
        message: err.message,
        stack: err.stack
    })
}

module.exports = { errHandler}