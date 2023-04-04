const ApiException = require('../exceptions/error');

const errorHandler = (err, req, res, next) => {
    if (err instanceof ApiException) {
        return res.status(err.status).json({message: err.message, status: err.status})
    }

    return res.status(500).json({message: err.message, status: 500})
}

module.exports = errorHandler;