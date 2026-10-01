import { Component, computed, input, output } from '@angular/core';
import { DatePipe } from '@angular/common';
interface Tarea {
  id: number;
  titulo: string;
  descripcion: string;
  fechaVencimiento: Date;
}

@Component({
  imports: [DatePipe],
  selector: 'app-tarea-card',
  styleUrl: './tarea-card.css',
  templateUrl: './tarea-card.html',
})

export class TareaCard {
  tarea = input.required<Tarea>();
  eliminar = output<number>();
  vencida = computed(() => {
    const fechaVencimiento = new Date(this.tarea().fechaVencimiento);
    const fechaActual = new Date();
    return fechaVencimiento < fechaActual ? 'Vencida' : 'Pendiente';
  });

  eliminarTarea() {
    this.eliminar.emit(this.tarea().id);
  }
}
