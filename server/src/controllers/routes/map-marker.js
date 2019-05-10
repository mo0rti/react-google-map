import { Router } from 'express';
import MapMarkerService from '../../services/map-marker';
const route = Router();

export default (app) => {
    app.use('/mapmarker', route);

    route.get('/:id?', async (req, res, next) => {
        try {
            let result;
            if (req.params.id)
                result = await (new MapMarkerService()).getById(req.params.id);
            else
                result = await (new MapMarkerService()).getAll();

            return res.json({
                status: true,
                result
            }).status(200);
        } catch (err) {
            console.log('Server error ', err);
            return next(err);
        }
    });

    route.post('/', async (req, res, next) => {
        try {
            const result = await (new MapMarkerService()).addMarker(req.body);
            return res.json({
                status: true,
                result
            }).status(200);
        } catch (err) {
            console.log('Server error ', err);
            return next(err);
        }
    });

    route.put('/:id', async (req, res, next) => {
        try {
            const result = await (new MapMarkerService()).updateMarker({ id: req.params.id, marker: req.body });
            console.log(result);
            return res.json({
                status: true,
                result
            }).status(200);
        } catch (err) {
            console.log('Server error ', err);
            return next(err);
        }
    });

    route.delete('/:id', async (req, res, next) => {
        try {
            const result = await (new MapMarkerService()).removeMarker(req.params.id);
            return res.json({
                status: true,
                result
            }).status(200);
        } catch (err) {
            console.log('Server error ', err);
            return next(err);
        }
    });
};