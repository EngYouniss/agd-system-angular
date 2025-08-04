import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../services/token.service';

export const authGuard: CanActivateFn = (route, state) => {
  const _router=inject(Router)
  const _tokenService=inject(TokenService);
  const token=_tokenService.getToken();

  if(token){
    return true;
  }
  else{
    _router.navigateByUrl('/auth/login');
    return false;
  }
};
