import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
class UserToken {
  public static getUser = () => {
    return 'Valentin'
  }
}

@Injectable({
  providedIn: 'root'
})
class PermissionsService {
  canActivate(currentUser: UserToken, userId: string): boolean {
    console.log(UserToken.getUser())
    return UserToken.getUser() === 'Valentin' ? true : false;
  }
  canMatch(currentUser: UserToken): boolean {
    return true;
  }
}

export const canActivateTeam: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  return inject(PermissionsService).canActivate(inject(UserToken), route.params['id']);
};

export const canMatchTeam: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  return inject(PermissionsService).canMatch(inject(UserToken));
};