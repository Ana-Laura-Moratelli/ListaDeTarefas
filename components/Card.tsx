import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { ComponentProps } from 'react';

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

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#1c1c1e',
        borderRadius: 8,
        padding: 16,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 8,
        minWidth: '45%',
        maxWidth: '45%',
    },
    titleContainer: {
        alignItems: "flex-start",
    },
    iconContainer: {
        backgroundColor: '#2c2c2e',
        borderRadius: 16,
        padding: 8,
        marginBottom: 8,
    },
    count: {
        color: '#ffffff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    title: {
        color: '#a1a1a1',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 4,
    },
});

export default Card;
