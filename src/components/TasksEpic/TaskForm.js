import React, { useState } from 'react';
import { View, TextInput } from 'react-native';

const TaskForm = ({ }) => {
    const [title, setTitle] = useState('');
    const _onChangetext = value => {
        setTitle(value);
    };

    return (
        <View>
            <TextInput value={title} onChangeText={_onChangetext} />
        </View>
    )
}

export default TaskForm;