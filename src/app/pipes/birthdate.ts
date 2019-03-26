import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'birthdate' })
export class BirthdatePipe implements PipeTransform {

    transform(value: Date): string {
        let diff_ms = Date.now() - value.getTime();
        let age_dt = new Date(diff_ms);
        let age = Math.abs(age_dt.getUTCFullYear() - 1970);
        return age + "";
    }
}