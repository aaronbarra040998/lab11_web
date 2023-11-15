import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  taskName: string = '';

  @Output() taskAdded = new EventEmitter<string>();

  addTask() {
    // Verificar si la tarea no está vacía antes de emitir el evento
    if (this.taskName.trim() !== '') {
      this.taskAdded.emit(this.taskName);
      this.taskName = '';
    } else {
      // Puedes agregar lógica adicional aquí, como mostrar un mensaje de error.
      console.log("La tarea no puede estar vacía");
    }
  }
}
