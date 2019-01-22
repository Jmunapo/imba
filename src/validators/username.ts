import { FormControl } from '@angular/forms';
//https://www.joshmorony.com/advanced-forms-validation-in-ionic-2/
export class UsernameValidator {

  static checkUsername(control: FormControl): any {

    return new Promise(resolve => {

      //Fake a slow response from server

      setTimeout(() => {
        if(control.value.toLowerCase() === "greg"){

          resolve({
            "username taken": true
          });

        } else {
          resolve(null);
        }
      }, 2000);

    });
  }

}