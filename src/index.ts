import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import AppController from "./apps";

class App {
  public koa: Koa
  constructor() {
    this.koa = new Koa();
    this.install();
    this.start();
  }

  private install() {
    new AppController(this.koa);
  }
  private start() {
    this.koa.use(bodyParser());
    this.koa.listen(3000);
    console.log('the application listen: 3000');
  }
}

export default new App();
