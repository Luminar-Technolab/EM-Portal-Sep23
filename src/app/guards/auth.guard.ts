import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AmdinService } from '../services/amdin.service';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = () => {
  const authStatus = inject(AmdinService)
  const toaster = inject(ToastrService)
  const router = inject(Router)

  if(authStatus.isLoggedIn()){
    return true;
  }else{
    toaster.error("Operation denied... Please login!!!")
    router.navigateByUrl("")
    return false;
  }
};
