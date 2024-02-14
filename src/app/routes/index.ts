import { Router } from 'express';
import { eventItemRoutes } from '../modules/Event-items/eventitme.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/event-item',
    route: eventItemRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
