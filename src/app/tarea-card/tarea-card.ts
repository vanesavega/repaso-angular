import { Component, computed, input, output } from '@angular/core';

interface Tarea {
  id: number;
  titulo: string;
  descripcion: string;
  fechaVencimiento: Date;
}

@Component({
  imports: [],
  selector: 'app-tarea-card',
  styleUrl: './tarea-card.css',
  templateUrl: './tarea-card.html',
})

export class TareaCard {
  tarea = input.required<Tarea>();
  eliminar = output<string>();
  
  vencida = computed(() => {
    const fechaVencimiento = new Date(this.tarea().fechaVencimiento);
    const fechaActual = new Date();
    return fechaVencimiento < fechaActual ? 'Vencida' : 'Pendiente';
  });

  eliminarTarea() {
    this.eliminar.emit(this.tarea().id.toString());
  }
}
