import React from 'react';
import { SafeAreaView, FlatList, StyleSheet, ScrollView, Image, Dimensions, Text } from 'react-native';
import NewsCard from './components/NewsCard';
import NEWSDATA from './news_data.json';
import { StatusBar } from 'expo-status-bar';
import NEWS_BANNER_DATA from './news_banner_data.json';

const App = () => {
  const renderNews = ({ item }) => <NewsCard news={item} /> // item = renderItem propsundan gelen bir property
  // {item} yerine data da yazabilirdik ama o zaman NewsCard componentine property gönderirken data.item yazmak gerekirdi. Data.item uzunluğundan kurtulmak için {item} yazarak json formatındaki bir verinin direkt item'ina ulasmış olduk. (buradaki item arrayin elemanları yani json dosyasındaki 5 tane obje)

  const saveKeyNews = (item) => { item.u_id.toString() }
  // keyExtractor: FlatList in icinde bir sürü veri oldugu zaman hangi verinin ekranda gösterilecegini ve hangi verinin ekranda gösterilmeyeceginin olayını ayarlamaya yarar. ve bu olayı verinin id'sine bakarak yapar o yüzden verilerin id sini keyExtractor'ın itemine "STRİNG" olarak atmalıyız.

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>News</Text>
      <FlatList // FlatList componenti cihazı cok fazla yormadan en verimli halde listleri görüntülememize olanak sağlar. ve icerisinde 'scroll view' yapısı hazır vardır.
        ListHeaderComponent={ // ListHeaderComponent propertysini dahil etmezsek eger resimler sabit ekranda kalır.
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {NEWS_BANNER_DATA.map(bannerNews => (
              <Image
                style={styles.banner_image}
                source={{ uri: bannerNews.imageUrl }}
              />
            ))}
          </ScrollView>
        }
        keyExtractor={saveKeyNews}
        data={NEWSDATA}
        renderItem={renderNews}
      />
      <StatusBar style='auto' />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // tüm ekranı kapsamak için flex: 1 yazmamız gerekiyor.
    backgroundColor: '#eceff1',
    paddingTop: 30
  },
  banner_image: {
    width: Dimensions.get("window").width / 2,
    height: Dimensions.get("window").height / 5,
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: "center"
  }


})

export default App;