import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: { name: string, completed: boolean }[] = [];
  filteredTasks: { name: string, completed: boolean }[] = [];
  filter: string = 'all';

  addTask(task: string) {
    this.tasks.push({ name: task, completed: false });
    this.filterTasks();
  }

  onFilterChange(filters: string) {
    this.filter = filters;
    this.filterTasks();
  }
  
  filterTasks() {
    this.filteredTasks = this.tasks.filter(task => {
      if (this.filter.includes('all')) {
        return true; // Muestra todas las tareas si "Todas" está seleccionado
      } else if (this.filter.includes('completed') && task.completed) {
        return true; // Muestra tareas completadas si "Completadas" está seleccionado
      } else if (this.filter.includes('incomplete') && !task.completed) {
        return true; // Muestra tareas no completadas si "No completadas" está seleccionado
      }
      return false; // Oculta las tareas que no cumplen ningún filtro seleccionado
    });
  }
  
  
  
  
}
