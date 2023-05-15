// import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, KeyboardAvoidingView, ImageBackground, View, ActivityIndicator, StatusBar} from 'react-native';
import SearchInput from './components/SearchInput';
import getImageForWeather from './utilities/getImageForWeather';
import { useEffect, useState } from 'react';
import { fetchLocationId,fetchWeather } from './utilities/api';
import { dateBuilder } from './utilities/openWeatherApi';
import { api } from './utilities/openWeatherApi';
import {axiosRequest} from './utilities/axios'
export default function App() {
  const [location, setLocation] = useState("London")
  const [loading,setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [temperature, setTemperature] = useState(0)
  const [weather, setWeather] = useState("")


  const handleUpdateLocation = async city => {
    if (!city) return;
    setLoading(true),
    async () => {
      try {
        // const locationId = await fetchLocationId(city);
        // console.log(locationId)
        const weather = await axiosRequest(`weather?q=${location}&appid=${api.key}$units=metric`)
        setLoading(false)
        setError(false)
        setLocation(location)
        setWeather(weather)
        setTemperature(temperature)
      }catch(e) {
        console.log(e)
        setLoading(false),
        setError(true)

      }
    }
         
  }
  console.log(location)
 console.log(weather)
 console.log(temperature)


  useEffect(() => {
    
  },
)

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <StatusBar barStyle='light-content'/>
      <ImageBackground source={getImageForWeather('Clear')}style={styles.imageContainer}imageStyle={styles.image}>
      <View style={styles.detailsContainer}>
        <ActivityIndicator animating={loading} color="white" size="large"/>
        {(!loading) && (
          <View>
            {error && (
              <Text style={[styles.smallText, styles.largeText]}>
                Could not loading weather, Please try another city
              </Text>
            )}
            {(!error) && (
              <View>
           <Text style={[styles.largeText, styles.textStyle]}>{location}</Text>
           <Text style={[styles.smallText,styles.textStyle]}>{weather}</Text>
           <Text style={[styles.largeText, styles.textStyle]}>{`${Math.round(temperature)}°`}</Text>
           </View>
       )}
          </View>
        )}
     
      <SearchInput placeholder="Search any city" onSubmit={handleUpdateLocation}/>
      </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    color:'#fff'
  },
  detailsContainer: {
   flex: 1,
   justifyContent: 'center',
   backgroundColor: 'rgba(0,0,0,0.2)',
paddingHorizontal: 20,

  
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',...Platform.select({
      ios: {
        fontFamily:'AvenirNext-Regular'
      },
      android: {
        fontFamily: 'Roboto'
        
      },
      
    })
    // fontFamily: Platform.OS === 'ios'? 'AvenirNext-Regular' : 'Roboto',
  },

  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
  imageContainer: {
    flex:1
  },
  image: {
   resizeMode:'cover', 
   width: null,
   height: null,

  }
});
