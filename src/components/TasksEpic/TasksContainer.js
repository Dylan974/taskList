import React, { useState } from 'react';
import { View } from 'react-native';
import TasksList from './TasksList';
import TaskForm from './TaskForm';

function TasksContainer(props) {
    const [tasks, setTasks] = useState([{ title: 'Nouvelle tâche', completed: false }]);

    return (
        <View>
            <TaskForm />
            <TasksList tasks={tasks} />
        </View>
    );
}

export default TasksContainer;