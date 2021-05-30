import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import Hospitals from './Screens/Hospitals/Hospitals'
import IsolationVaccination from './Screens/IsolationCenters/Isolations'
import Symptoms from './Screens/Symptoms/Symptoms'
import AtHomePreventions from './Screens/AtHome/AtHome'
import CenterHospitals from './Screens/Hospitals/Center/CenterHospitals'
import EastHospitals from './Screens/Hospitals/East/EastHospitals'
import WestHopsitals from './Screens/Hospitals/West/WestHospitals'
import DistrictMalirHospitals from './Screens/Hospitals/DistricMalir/DistrictMalirHospitals'
import SouthHospitals from './Screens/Hospitals/South/SouthHospitals'
import VaccinationCenters from './Screens/VaccinationCenters/VaccinationCenters'

//Vac centers
import VacEast from './Screens/VaccinationCenters/Centers/VacEast'
import VacWest from './Screens/VaccinationCenters/Centers/VacWest'
import VacCentral from './Screens/VaccinationCenters/Centers/VacCentral'
import VacSouth from './Screens/VaccinationCenters/Centers/VacSouth'
import VacKorangi from './Screens/VaccinationCenters/Centers/VacKorangi'
import VacMalir from './Screens/VaccinationCenters/Centers/VacMalir'

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>

      <Stack.Navigator screenOptions={{
        header : () => null,
      }}
      >
        <Stack.Screen name='Main' component={HomeScreen} />
        <Stack.Screen name='Hospitals' component={Hospitals} />
        <Stack.Screen name='Isolations' component={IsolationVaccination} />
        <Stack.Screen name='Symptoms' component={Symptoms} />
        <Stack.Screen name='At Home Prevention' component={AtHomePreventions} />
        <Stack.Screen name='CenterHospitals' component={CenterHospitals} />
        <Stack.Screen name='EastHospitals' component={EastHospitals} />
        <Stack.Screen name='WestHospitals' component={WestHopsitals} />
        <Stack.Screen name='DistrictMalirHospitals' component={DistrictMalirHospitals} />
        <Stack.Screen name='SouthHospitals' component={SouthHospitals} />
        <Stack.Screen name='VaccinationCenter' component={VaccinationCenters} />

        <Stack.Screen name='VacEast' component={VacEast} />
        <Stack.Screen name='VacCentral' component={VacCentral} />
        <Stack.Screen name='VacMalir' component={VacMalir} />
        <Stack.Screen name='VacKorangi' component={VacKorangi} />
        <Stack.Screen name='VacWest' component={VacWest} />
        <Stack.Screen name='VacSouth' component={VacSouth} />

      </Stack.Navigator>
      
    </NavigationContainer>
    // <View style={styles.container}>
    //   <HomeScreen />
    // </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
