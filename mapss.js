import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout, Polyline } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

function GoogleMap() {
    const [stats, setStates] = useState([
        {
            title: 'SAIMS',
            description: 'Sir Adam Jee Institute',
            latitude: 24.9148088,
            longitude: 67.0571239,
            markerImage: 'https://www.freeiconspng.com/thumbs/pin-png/pin-png-24.png'
        },
        {
            title: 'Govt. Dehli College',
            description: 'Govt. Dehli College',
            markerImage: 'https://www.freeiconspng.com/thumbs/pin-png/pin-png-24.png',
            latitude: 24.9143688,
            longitude: 67.0560685,
        },
    ])
    return <>
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                zoomControlEnabled={true}
                region={{
                    latitude: 24.9143688,
                    longitude: 67.0560685,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
                {stats.map((e, i) => {
                    return <Marker
                        image={{ uri: e.markerImage }}

                        key={i}
                        coordinate={{ latitude: e.latitude, longitude: e.longitude }}
                    >
                        <Callout tooltip>
                            <View style={{ backgroundColor: 'white', padding: 20 }}>
                                <Text style={{ fontSize: 20 }}>{e.title}</Text>
                                <Text style={{ fontSize: 16 }}>{e.description}</Text>
                            </View>
                        </Callout>

                    </Marker>
                })}
                <Polyline lineJoin='bevel' geodesic={true} coordinates={stats} />

            </MapView>
        </View>
    </>
}
export default GoogleMap