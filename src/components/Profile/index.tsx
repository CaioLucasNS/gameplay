import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { Avatar } from '../Avatar';

export const Profile = () => {
    return (
        <View style={styles.container}>
            <Avatar urlImage='https://github.com/caiolucasns.png'/>
            <View>
                <View style={styles.user}>
                    <Text style={styles.gretting}>Olá,</Text>
                    <Text style={styles.username}>Caio</Text>
                </View>
                <Text style={styles.message}>Hoje é dia de vitória</Text>
            </View>
        </View>
    );
};
