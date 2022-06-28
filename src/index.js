import PostList from "./PostList.js";
import {Router} from "./lib/vaadin-router.js";
console.log('start js ok...');
console.log('connection ok.....')

const outlet =document.querySelector('box');
const router = new Router(outlet);
router.setRoutes([
    {path:'/',  component:'post-list'},
    {path:'/home',  component:'home-post'}
]);

