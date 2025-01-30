import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { ComponentProps } from 'react';
import styles from './CardListItemStyles'

type MaterialCommunityIconName = ComponentProps<typeof MaterialCommunityIcons>['name'];

interface CardListItemProps {
  iconName: MaterialCommunityIconName;
  iconColor: string;
  title: string;
  count: number;
}

const CardListItem: React.FC<CardListItemProps> = ({ iconName, iconColor, title, count }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.leftSection}>
        <View style={[styles.iconContainer, { backgroundColor: iconColor }]}>
          <MaterialCommunityIcons name={iconName} size={24} color="#fff" />
        </View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={styles.count}>{count}</Text>
    </View>
  );
};


export default CardListItem;
