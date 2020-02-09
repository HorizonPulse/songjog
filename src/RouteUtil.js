const FUNCTION_STRING = "function";
const CLASS_STRING = "class";
const FUNCTION_STRING_LENGTH = FUNCTION_STRING.length;

function _addRouteToPaths(paths, parentPath, route) {
    const routeData = {
        method: route.method,
        path: `${parentPath}${route.path}`,
    };

    if (route.doc) {
        routeData.doc = route.doc;
    }

    paths.push(routeData);
}

function _getSubroutes(paths, parentPath, subroute) {
    RouteUtil.getRoutesInfo(
        subroute.router, paths, parentPath + subroute.path
    );
}

class RouteUtil {
    static getRoutesInfo(router, paths = [], parentPath = "") {
        if (router.routes) {
            router.routes.forEach((route) => _addRouteToPaths(paths, parentPath, route));
        }

        if (router.subroutes) {
            router.subroutes.forEach((subroute) => _getSubroutes(paths, parentPath, subroute));
        }
        return paths;
    }

    static getHandlerWithManagedNextCall(handler) {
        return async (req, res, next) => {
            try {
                await handler(req, res, next);

                if (handler.length !== 3) {
                    next();
                }
            } catch (error) {
                next(error);
            }
        };
    }

    static isFunction(functionToCheck) {
        const stringPrefix = functionToCheck.toString().substring(0, FUNCTION_STRING_LENGTH);
        if (stringPrefix.includes(CLASS_STRING)) return false;
        return functionToCheck instanceof Function || stringPrefix === FUNCTION_STRING;
    }

    static isUrlPath(string) {
        if (typeof string !== "string") return false;
        const regex = /^(\/[a-zA-Z0-9\-:]+)+\/?$/g;
        return regex.test(string);
    }
};

module.exports = RouteUtil;