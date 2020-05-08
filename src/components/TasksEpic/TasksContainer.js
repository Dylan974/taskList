import React, { useState } from 'react';
import { View } from 'react-native';
import TasksList from './TasksList';
import TaskForm from './TaskForm';
import CountersContainer from './CountersContainer';

function TasksContainer(props) {
    const [tasks, setTasks] = useState([{ id: new Date().getTime().toString(), title: 'Nouvelle tâche', completed: false }]);

    const onAddTask = (title) => {
        setTasks([{ id: new Date().getTime().toString(), title, completed: false }, ...tasks]);
    };

    const onDeleteTask = (id) => {
        const newTasks = tasks.filter(task => task.id != id);
        setTasks([...newTasks]);
    };

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
    };

    const getTasksCompleted = () => {
        let counter = 0;

        tasks.forEach(task => {
            if (task.completed) counter++;
            return counter;
        })
    };

    return (
        <View>
            <TaskForm onAddTask={onAddTask} />
            <CountersContainer nbTasks={tasks.length} nbTasksCompleted={() => getTasksCompleted()} />
            <TasksList tasks={tasks} onChangeStatus={onChangeStatus} onDeleteTask={onDeleteTask} />
        </View>
    );
};

export default TasksContainer;