import express from 'express';
import createError from 'http-errors';
import cors from "cors";
import bodyParser from 'body-parser';
import logger from 'morgan';
import routes from '../controllers';
import config from '../config';

export default async ({ app }) => {

    /**
     * Health Check endpoints
     * To check whether the server is up or down
     */
    app.get('/status', (req, res) => { res.status(200).end(); });
    app.head('/status', (req, res) => { res.status(200).end(); });

    var corsOptions = {
        origin: 'http://localhost:8000'
    }
    app.use(cors(corsOptions));

    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    // Load API routes
    app.use(config.api.prefix, routes)

    // catch 404 and forward to error handler
    app.use(function (req, res, next) {
        next(createError(404));
    });

    // error handler
    app.use(function (err, req, res, next) {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        // render the error page
        res.status(err.status || 500);
        res.render('error');
    });
}