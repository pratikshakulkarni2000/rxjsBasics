import { AbstractControl, ValidationErrors } from "@angular/forms";

export class NoSpaceValidators {
    static noSpace(control : AbstractControl) : ValidationErrors | null {
        let val : string = control.value

        if(!val){
            return null
        }
        if(val.includes(' ')){
            return{
                noSpaceBar : `Space is not allowed !!!`
            }
        }else{
            return null
        }
    }
}