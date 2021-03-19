import { Pipe, PipeTransform } from '@angular/core';
import { IAppointment } from './appointment.model';

@Pipe({
  name: 'roomsAndBaths'
})
export class RoomsAndBathsPipe implements PipeTransform {

  transform(value: IAppointment): any {
    const count = value.units.reduce((acc, curr) => {
      if (curr.type === 'room') {
        acc.beds += 1;
      }
      if (curr.type === 'bath') {
        acc.baths += 1;
      }
      return acc;
    }, {
      beds: 0,
      baths: 0
    });
    return `${count.beds} BD ${count.baths} BT`;
  }

}
