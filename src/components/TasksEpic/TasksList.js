import React from 'react';
import { FlatList, Text } from 'react-native';

const TasksList = ({ tasks }) => {

    return (
        <FlatList
            data={props.tasks}
            renderItem={({ item }) => <Text>{item.title}</Text>}
            keyExtractor={item => item.title}
        />
    );
}

export default TasksList;