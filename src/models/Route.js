class Route {
    constructor(
        method, path, controller, {
            validator = null,
            doc = null,
            errorHandler = null
        }
    ) {
        this.method = method;
        this.path = path;
        this.controller = controller;
        if (validator) this.validator = validator;
        if (doc) this.doc = doc;
        if (errorHandler) this.errorHandler = errorHandler;
    }
}

function getRouteFn(method) {
    return (
        path, controller, {
            validator = null,
            doc = null,
            errorHandler = null
        }
    ) => new Route(method, path, controller, {
        validator,
        doc,
        errorHandler
    });
}

Route.get = getRouteFn("get");
Route.post = getRouteFn("post");
Route.put = getRouteFn("put");
Route.delete = getRouteFn("delete");

module.exports = Route;
