import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { ComponentProps } from 'react';

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

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1c1c1e',
    borderRadius: 8,
    padding: 16,
    marginBottom: 10,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  title: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  count: {
    color: '#a1a1a1',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CardListItem;
