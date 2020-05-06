import React, { useState } from 'react';
import { View } from 'react-native';
import TasksList from './TasksList';

function TasksContainer(props) {
    const [tasks, setTasks] = useState([{ title: 'Nouvelle tâche', completed: false }]);

    return (
        <View>
            <TasksList tasks={tasks} />
        </View>
    );
}

export default TasksContainer;