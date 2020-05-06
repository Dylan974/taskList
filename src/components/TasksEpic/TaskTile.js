import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const TaskTile = ({ title }) => {
    return (
        <View style={styles.container}>
            <View style={styles.subcontainer}>
                <Image style={styles.icon} source={require('../../../assets/icon_check.png')} />
                <Text style={styles.title}>{title}</Text>
            </View>
            <Image style={styles.icon} source={require('../../../assets/icon_bin.png')} />
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