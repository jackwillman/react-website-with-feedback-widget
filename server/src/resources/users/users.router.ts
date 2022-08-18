import express from 'express';

import { CheckJwtAuthorization, catchErrors, catchMiddlewareErrors } from '../../middlewares';
import { sanitize } from './users.middlewares';

import { JwtSimpleJwtAdapter } from '../../adapters/jwt/jwtSimple';
import {
    getUsers,
    getUser,
    postUser,
    putUser,
    deleteUser
} from './users.controller';

const jwtSimpleAdapter = new JwtSimpleJwtAdapter();
const authMiddleware = new CheckJwtAuthorization(jwtSimpleAdapter);

const usersRouter = express.Router();

usersRouter
    .route('/')
    .get(catchErrors(getUsers))
    .post(
        [sanitize.username, sanitize.email],
        catchErrors(postUser)
    );

    usersRouter
    .route('/auth')
    .get(
        catchMiddlewareErrors(authMiddleware.execute),
        catchErrors(getUser)
    ).put(
        [sanitize.username, sanitize.email],
        catchMiddlewareErrors(authMiddleware.execute), 
        catchErrors(putUser)
    ).delete(
        catchMiddlewareErrors(authMiddleware.execute), 
        catchErrors(deleteUser)
    );

    

export default usersRouter;