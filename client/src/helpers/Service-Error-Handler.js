// TODO: error handler service should be implemented here
const ServiceErrorHandler = () => {
    return {
        error: (error) => {
            console.log(error);
        },
        fatalError: (error) => {
            console.log(error);
        }
    }
}

export default ServiceErrorHandler;