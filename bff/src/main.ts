import { bootstrap } from './bootstrap';
import 'source-map-support/register';

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
bootstrap(port);
