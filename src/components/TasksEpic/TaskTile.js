import React from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native';

const TaskTile = ({ id, title, completed, onChangeStatus, onDeleteTask }) => {
    const _onPressDelete = () => {
        onDeleteTask(id);
    };

    return (
        <View style={styles.container}>
            <View style={styles.subcontainer}>
                <TouchableHighlight onPress={() => onChangeStatus(id)}>
                    <Image
                        style={styles.icon}
                        source={completed ? require('../../../assets/icon_check.png') : require('../../../assets/icon_circle.png')}
                    />
                    <Text style={[styles.title, { color: completed ? 'lightgrey' : 'black' }]}>{title}</Text>
                </TouchableHighlight>
            </View>
            <Image
                style={styles.icon}
                source={require('../../../assets/icon_bin.png')}
                onPress={_onPressDelete}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    subcontainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        width: 30,
        height: 30
    },
    title: {
        marginLeft: 30
    }
});

export default TaskTile;