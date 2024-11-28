import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  showSuccess(message: string) {
    Swal.fire({
      icon: 'success',
      title: 'Éxito',
      text: message,
      timer: 1500,
      showConfirmButton: false,
    });
  }

  showError(message: string) {
    Swal.fire({
      icon: 'error',
      title: message,
      text: 'Por favor, verifique sus credenciales e intente de nuevo.',
      confirmButtonText: 'Aceptar',
    });
  }

  showInfo(message: string) {
    Swal.fire({
      icon: 'info',
      title: 'Información',
      text: message
    });
  }

  showWarning(message: string) {
    Swal.fire({
      icon: 'warning',
      title: 'Advertencia',
      text: message
    });
  }
}
