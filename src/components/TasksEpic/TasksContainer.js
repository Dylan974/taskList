import React, { useState } from 'react';
import { View } from 'react-native';
import TasksList from './TasksList';
import TaskForm from './TaskForm';

function TasksContainer(props) {
    const [tasks, setTasks] = useState([{ id: new Date().getTime(), title: 'Nouvelle tâche', completed: false }]);

    const onAddTask = (title) => {
        setTasks([{ id: new Date().getTime(), title, completed: false }, ...tasks]);
    }

    const onDeleteTask = (id) => {
        const newTasks = [...tasks];
        newTasks.filter(task => task.id === id);
        setTasks(newTasks);
    }

    const onChangeStatus = (id) => {
        let newTasks = [];
        tasks.forEach(task => {
            if (task.id === id) {
                newTasks.push({ id, title: task.title, completed: !task.completed });
            } else {
                newTasks.push(task);
            }
        })
        setTasks(newTasks);
    }

    return (
        <View>
            <TaskForm onAddTask={onAddTask} />
            <TasksList tasks={tasks} onChangeStatus={onChangeStatus} onDeleteTask={onDeleteTask} />
        </View>
    );
}

export default TasksContainer;