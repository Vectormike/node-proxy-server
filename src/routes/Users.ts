import { Router } from 'express';
import {createProxyMiddleware} from 'http-proxy-middleware'

const router = Router();



/******************************************************************************
 *                      Get All Users - "GET /api/users/all"
 ******************************************************************************/

 // proxy middleware options
const options = {
    target: 'https://jsonplaceholder.typicode.com/users', // target host
    changeOrigin: true, // needed for virtual hosted sites
    pathRewrite: {
       [`^/api/users/all`]: '',
    },
}
router.get('/all', createProxyMiddleware(options));





export default router;
