import { Component, signal } from '@angular/core';
import { TareaCard } from '../tarea-card/tarea-card';

@Component({
  imports: [TareaCard],
  selector: 'app-tareas-board',
  styleUrl: './tareas-board.css',
  templateUrl: './tareas-board.html',
})
export class TareasBoard {
  tareas = signal([
    {
      id: 1,
      titulo: 'Tarea 1',
      descripcion: 'Descripción de la tarea 1',
      fechaVencimiento: new Date('2023-06-30'),
    },
    {
      id: 2,
      titulo: 'Tarea 2',
      descripcion: 'Descripción de la tarea 2',
      fechaVencimiento: new Date('2023-07-15'),
    },
    {
      id: 3,
      titulo: 'Tarea 3',
      descripcion: 'Descripción de la tarea 3',
      fechaVencimiento: new Date('2023-08-01'),
    },
  ]);
  
  eliminarTarea(id: number) {
    this.tareas.update(lista => lista.filter(t => t.id !== id));
  }
}
