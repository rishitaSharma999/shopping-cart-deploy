import jsonServer from 'json-server';
import { createRequire } from 'module';
import path from 'path';

const require = createRequire(import.meta.url);
const routes = require('./routes.json');

const server = jsonServer.create();
const router = jsonServer.router(path.resolve('db.json'));
const middlewares = jsonServer.defaults();

// Custom middleware for pagination
server.use((req, res, next) => {
  if (req.method === 'GET' && req.path.startsWith('/api/posts')) {
    const { _page = 1 } = req.query;
    const db = router.db;
    const posts = db.get('posts').value();
    const pageInfo = db.get('pageInfo').find({ page: parseInt(_page) }).value();

    if (pageInfo) {
      res.setHeader('X-Total-Count', pageInfo.totalPosts);
      res.setHeader('X-Total-Pages', pageInfo.totalPages);
    }
  }
  next();
});

server.use(jsonServer.rewriter(routes));
server.use(middlewares);
server.use(router);

const PORT = 4384;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});