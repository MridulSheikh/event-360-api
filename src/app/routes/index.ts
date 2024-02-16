import { Router } from 'express';
import { eventItemRoutes } from '../modules/Event-items/eventitme.route';
import { recentEventRoute } from '../modules/Recent-events/recentEvent.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/event-item',
    route: eventItemRoutes,
  },
  {
    path: '/recent-event',
    route: recentEventRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
