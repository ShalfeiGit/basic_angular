import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";

interface Hero {
  name: string;
}
@Injectable({
  providedIn: "root"
})
export class HeroService {
  getHero() {
    return {name: `Superman`};
  }
}

export const heroResolver: ResolveFn<Hero> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  return inject(HeroService).getHero();
};

