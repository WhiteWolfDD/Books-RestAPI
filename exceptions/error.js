class ApiException extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
    }

    static notFound(message) {
        return new ApiException(message, 404);
    }
}

module.exports = ApiException;