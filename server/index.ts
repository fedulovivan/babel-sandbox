import Koa from 'koa';
import { kebabCase } from 'lodash/string';

const app = new Koa();
app.use(async ctx => {
    ctx.body = 'Hello!';
});
app.listen(3000, () => {
    const res: string = kebabCase('listening now');
    console.log(res);
});
