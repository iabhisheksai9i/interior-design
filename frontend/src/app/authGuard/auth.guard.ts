import { DOCUMENT } from '@angular/common';
import { Inject, inject } from '@angular/core';
import { CanActivateFn,Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const document = inject(DOCUMENT);
  const sessionStorage = document.defaultView?.sessionStorage;
  let islogin = sessionStorage?.getItem('islogedin')

  const _router = inject(Router)

  if(islogin === 'false' ){
      window.alert('please login to use this page')
      _router.navigate(['login'])
    return false;
  }
  return true;
  
};
