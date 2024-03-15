import { useState } from 'react';
import './/global.css';
import styles from './App.module.css';
import { Logo } from './components/logo';
import { Task } from './components/Task';
import { IoMdAddCircleOutline } from "react-icons/io";;

export function App() {
  const [tasks, setTasks] = useState([]);
  const [newTaskContent, setNewTaskContent] = useState('');

  function handleCreateTask(){
    const newTask = {
      id: tasks.length + 1,
      content: newTaskContent,
      checked: false,
    };
    setTasks([...tasks, newTask]);
    setNewTaskContent('');
  };

  return (
    <div className={styles.container}>
      <header>
        <Logo />
      </header>
      <main>
        <div className={styles.searchTask}>
          <input
            placeholder='Adicione uma nova tarefa'
            value={newTaskContent}
            onChange={(e) => setNewTaskContent(e.target.value)}
          />
          <button onClick={handleCreateTask}>
            Criar <IoMdAddCircleOutline />
          </button>
        </div>

        <div className={styles.content}>
          <div className={styles.countTasks}>
            <div className={styles.countTask}>
              <p>Tarefas Criadas</p>
              <span>{tasks.length}</span>
            </div>
            <div className={styles.countTask}>
              <p>Concluídas</p>
              <span>{tasks.filter(task => task.checked).length}</span>
            </div>
          </div>
          <div className={styles.tasks}>
            {tasks.map(task => (
              <Task
                key={task.id}
                content={task.content}
                isChecked={task.checked}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}