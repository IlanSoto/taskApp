# TaskApp

Esta aplicación Angular muestra cómo manejar datos asíncronos usando observables y operadores. El componente principal muestra una lista de tareas, separadas en tareas completadas y no completadas. Cada tarea puede expandirse para ver más detalles.

## Estructura del Proyecto

- **Modelo de Datos**: `src/app/task.model.ts`
- **Servicio de Tareas**: `src/app/task.service.ts`
- **Componente de Lista de Tareas**: `src/app/task-list/task-list.component.ts`
- **Plantilla HTML del Componente**: `src/app/task-list/task-list.component.html`
- **Estilos CSS del Componente**: `src/app/task-list/task-list.component.css`

## Instalación

1. **Clona el repositorio**:

    ```bash
    git clone <https://github.com/IlanSoto/taskApp.git>
    cd taskApp
    ```

2. **Instala las dependencias**:

    ```bash
    npm install
    ```

3. **Inicia la aplicación**:

    ```bash
    ng serve
    ```

   Abre tu navegador y navega a `http://localhost:4200`.

## Modelo de Datos

El modelo de datos `Task` define la estructura de una tarea:

```typescript
// src/app/task.model.ts
export interface Task {
  id: number;
  name: string;
  completed: boolean;
}
