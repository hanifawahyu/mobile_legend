import React, {Component} from 'react';
import {Container, Content, Thumbnail, Button} from 'native-base';
import {Scrollview, Text, StyleSheet, Image, View} from 'react-native';

export class Settings extends React.Component{
	render(){
		return(
			<View style={styles.container}>
				<Image
            	style={{alignItems: 'center', width: 150, height:150, marginBottom: 5, marginTop:10, }}
            	source={{uri: 'http://icons-for-free.com/free-icons/png/512/1287507.png'}}
            	/>
				
                <Text style={styles.edit}>Hanifa Wahyu Listiyani </Text>
                <Text style={styles.edit}>XI RPL 1 </Text>
                <Text style={styles.edit}>SMK Telkom Purwokerto </Text>
				<Text style={{ marginBottom : 100}}></Text>
			</View>
			)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#336699',
  },

  edit : {
	color : "#fff",
	fontSize : 14,
	}
});