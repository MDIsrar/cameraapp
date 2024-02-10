import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { resolutions } from '../../utils/commonUtils';

type ResolutionOptionsDialogTypes = {
  modalVisible: boolean;
  onResPress:(res:string)=>void
}
const ResolutionOptionsDialog = (props:ResolutionOptionsDialogTypes) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props?.modalVisible}
        onRequestClose={() => {
          
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.heading}>Choose Resolution</Text>
            {
              Object.keys(resolutions)?.map((item, index) => {
                return (
                  <Pressable
                    key={index}
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => {props?.onResPress(item)}}>
                    <Text style={styles.textStyle}>{item}</Text>
                  </Pressable>
                )
              })
            }
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor:"rgba(0,0,0,0.5)"
  },
  modalView: {
    backgroundColor: 'white',
    width: "90%",
    borderRadius:5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  heading:{
    fontSize:20,
    fontWeight:"bold",
    paddingVertical:20,
    width:"100%",
    borderBottomWidth:1,
    textAlign:"center",
    borderBottomColor:"#DDDDDD",
    color:"#000000"
  },
  button: {
    padding: 20,
    width:"100%",
    borderBottomWidth:1,
    borderColor:"#DDDDDD"
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#fff',
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default ResolutionOptionsDialog;