import React, { useState } from 'react';
import { View } from 'react-native';

function TasksContainer(props) {
    const [tasks, setTasks] = useState([{ title: 'Nouvelle tâche', completed: false }]);

    return (
        <View>
            <Text>{tasks[0].title}</Text>
        </View>
    );
}

export default TasksContainer;