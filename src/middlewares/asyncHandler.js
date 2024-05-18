export const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

export const wrapAsyncRouter = (router) => {
    router.stack.forEach(layer => {
        if (layer.route) {
            layer.route.stack.forEach(routeLayer => {
                if (routeLayer.method && routeLayer.handle) {
                    routeLayer.handle = asyncHandler(routeLayer.handle);
                }
            });
        } else if (layer.name === 'router' && layer.handle.stack) {
            layer.handle.stack.forEach(nestedLayer => {
                if (nestedLayer.route) {
                    nestedLayer.route.stack.forEach(routeLayer => {
                        if (routeLayer.method && routeLayer.handle) {
                            routeLayer.handle = asyncHandler(routeLayer.handle);
                        }
                    });
                }
            });
        }
    });
    return router;
};
