import { IRoute } from '../types/IRoute';
import { fakeRoutes } from './fakeRoutes';

const RESPONSE_DELAY_MS = 1000;

class FakeApi {
  private readonly routes: IRoute[];

  constructor(routes: IRoute[]) {
    this.routes = routes;
  }

  public fetchRoute() {
    return new Promise<IRoute>(resolve => {
      setTimeout(() => {
        resolve(this.getRandomRoute());
      }, RESPONSE_DELAY_MS);
    });
  }

  private getRandomRoute(): IRoute {
    const randomIndex = Math.round(Math.random() * (this.routes.length - 1));
    return this.routes[randomIndex];
  }
}

export const fakeApi = new FakeApi(fakeRoutes);
