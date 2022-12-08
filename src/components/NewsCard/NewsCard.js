import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './NewsCard.style';

const NewsCard = ({news}) => { // {news} yerine props yazabilirdik ama öyle bir durumda asagıdaki kısımlar için "props.news.title" yazmak gerekirdi ve bu kelime uzunlugundan kurtulmak için direkt {} ile propertylerdeki news e ulaşabiliriz.
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: news.imageUrl}}/> 
            {/* source ve uri kısmı "Image" componentine ait propertylerdir. */}
            <Text style={styles.title}>{news.title}</Text>
            <Text style={styles.description}>{news.description}</Text>
            <Text style={styles.author}>-{news.author}</Text>
        </View>
    )
}

export default NewsCard;