import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { ComponentProps } from 'react';
import styles from './CardStyles'; // Atualize o caminho conforme necessário
 
type MaterialCommunityIconName = ComponentProps<typeof MaterialCommunityIcons>['name'];

interface CardProps {
    iconName: MaterialCommunityIconName; 
    iconColor: string;
    title: string;
    count: number;
}

const Card: React.FC<CardProps> = ({ iconName, iconColor, title, count }) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.titleContainer}>
                <View style={styles.iconContainer}>
                    <MaterialCommunityIcons name={iconName} size={24} color={iconColor} />
                </View>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View>
                <Text style={styles.count}>{count}</Text>
            </View>
        </View>
    );
};

export default Card;
