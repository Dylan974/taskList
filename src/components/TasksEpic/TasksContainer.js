import React, { useState } from 'react';
import { View } from 'react-native';
import TasksList from './TasksList';
import TaskForm from './TaskForm';

function TasksContainer(props) {
    const [tasks, setTasks] = useState([{ title: 'Nouvelle tâche', completed: false }]);

    const onAddTask = (title) => {
        setTasks([{ title, completed: false }, ...tasks]);
    }

    return (
        <View>
            <TaskForm onAddTask={onAddTask} />
            <TasksList tasks={tasks} />
        </View>
    );
}

export default TasksContainer;