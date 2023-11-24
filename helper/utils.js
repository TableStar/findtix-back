module.exports = {
    templateResponse: (rc, message, error ) => {
        return {
            rc,
            success: false,
            message,
            error
        }
    }
}