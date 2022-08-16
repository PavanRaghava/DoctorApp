import { FlatList, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { Component, useState } from 'react'
import { Button, Card, Colors, List, RadioButton, shadow, TextInput } from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown';
import ListAccordionGroup from 'react-native-paper/lib/typescript/components/List/ListAccordionGroup';
import ListItem from 'react-native-paper/lib/typescript/components/List/ListItem';
import DropDownPicker from 'react-native-dropdown-picker';
import Slider from '@react-native-community/slider';
import { Dropdown } from 'react-native-element-dropdown';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    width: 90,
    marginVertical: 20,
    marginHorizontal: 20
  },
  container: {
    flex: 1,
    paddingTop: 22,
    // elevation:2
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  drop: {
    elevation: 2,
    // zIndex: -1,
  }
})

const DrugName = [
  { label: 'Select', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];




function App() {
  const [valueRadio] = React.useState('yes');
  const [sliderValue, setSliderValue] = useState(15);
  // const [open, setOpen] = useState(false);
  // const [value, setValue] = useState(null);
  // const [items, setItems] = useState([
  //   { label: 'Apple', value: 'apple' },
  //   { label: 'Banana', value: 'banana' }
  // ]);
  return (
    <View>
      <ScrollView>
        <List.Section title="History of Present Illness" style={{ margin: 10 }}>

          <View>
            <List.Accordion style={{
              backgroundColor: '#ffffff',
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              borderWidth: 0.5,
              borderColor: '#fff',

            }}
              titleStyle={{ color: '#2A97A2', fontSize: 18, fontWeight: 'bold', fontFamily: 'Roboto, Medium' }}
              title="CHEST PAIN" id="1">
              <Card style={{ borderColor: '#C7C7C7', borderWidth: 1 }}>
                <View style={{ margin: 15 }}>
                  <View><Text style={{ color: '#9C9B9B', paddingTop: 10 }}>Site</Text></View>
                  <View style={{ paddingBottom: 6, borderWidth: 2, borderColor: '#C7C7C7', borderRadius: 5, paddingLeft: 7, height: 50 }}>
                    <Dropdown onChange={(i) => { console.log("first", i) }} data={DrugName}
                      maxHeight={300}
                      containerStyle={{ marginTop: 8 }}
                      labelField="label"
                      valueField="value"></Dropdown>
                  </View>
                  <View style={{ paddingTop: 5 }}>
                    <Card style={{ width: 360, height: 200, borderColor: '#C7C7C7', borderRadius: 10, borderWidth: 1 }}>
                      <View style={styles.container}>
                        {/* {DrugName && DrugName.map((item, index) => {
                          return (
                            <View style={{ flexDirection: 'row', flex: 1, padding: 10 }}><Text>{item.label}</Text></View>
                          )
                        })} */}
                        <View style={{ paddingLeft: 10 }}><View style={{
                          padding: 10,
                          width: '40%',

                          height: 40,
                          backgroundColor: '#EEFBF6',
                          flexDirection: 'row'
                        }}>
                          <Text>Close_icon</Text>
                          <View style={{
                            width: 1,
                            height: '100%',
                            backgroundColor: 'blue',
                            borderColor: 'green'
                          }}></View>
                          <Text style={{ maxWidth: '50%', }}>Item1</Text>
                        </View></View>
                        {/* <Button ></Button> */}
                        {/* <FlatList
                          horizontal={true}
                          data={[
                            { key: 'Devin' },
                            { key: 'Dan' },
                          ]}
                          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                        /> */}
                      </View>
                    </Card>
                  </View>
                  <View><Text style={{ color: '#9C9B9B', paddingTop: 10 }}>Onset</Text></View>
                  <View style={{ paddingBottom: 6, borderWidth: 2, borderColor: '#C7C7C7', borderRadius: 5, paddingLeft: 7, height: 50 }}>
                    <Dropdown onChange={(i) => { console.log("first", i) }} data={DrugName}
                      maxHeight={300}
                      containerStyle={{ marginTop: 8 }}
                      labelField="label"
                      valueField="value"></Dropdown>
                  </View>
                  <View><Text style={{ color: '#9C9B9B', paddingTop: 10 }}>Nature</Text></View>
                  <View style={{ paddingBottom: 6, borderWidth: 2, borderColor: '#C7C7C7', borderRadius: 5, paddingLeft: 7, height: 50 }}>
                    <Dropdown onChange={(i) => { console.log("first", i) }} data={DrugName}
                      maxHeight={300}
                      containerStyle={{ marginTop: 8 }}
                      labelField="label"
                      valueField="value"></Dropdown>
                  </View>
                  <View><Text style={{ color: '#9C9B9B', paddingTop: 10 }}>Radiation</Text></View>
                  <View style={{ paddingBottom: 6, borderWidth: 2, borderColor: '#C7C7C7', borderRadius: 5, paddingLeft: 7, height: 50 }}>
                    <Dropdown onChange={(i) => { console.log("first", i) }} data={DrugName}
                      maxHeight={300}
                      containerStyle={{ marginTop: 8 }}
                      labelField="label"
                      valueField="value"></Dropdown>
                  </View>
                  <View><Text style={{ color: '#9C9B9B', paddingTop: 10 }}>Associated Symptoms</Text></View>
                  <View style={{ paddingBottom: 6, borderWidth: 2, borderColor: '#C7C7C7', borderRadius: 5, paddingLeft: 7, height: 50 }}>
                    <Dropdown onChange={(i) => { console.log("first", i) }} data={DrugName}
                      maxHeight={300}
                      containerStyle={{ marginTop: 8 }}
                      labelField="label"
                      valueField="value"></Dropdown>
                  </View>
                  <View><Text style={{ color: '#9C9B9B', paddingTop: 10 }}>Timing</Text></View>
                  <View style={{ paddingBottom: 6, borderWidth: 2, borderColor: '#C7C7C7', borderRadius: 5, paddingLeft: 7, height: 50 }}>
                    <Dropdown onChange={(i) => { console.log("first", i) }} data={DrugName}
                      maxHeight={300}
                      containerStyle={{ marginTop: 8 }}
                      labelField="label"
                      valueField="value"></Dropdown>
                  </View>
                  <View ><Text style={{ color: '#9C9B9B', paddingTop: 10 }}>Exacerbating Factors</Text></View>
                  <View style={{ paddingBottom: 6, borderWidth: 2, borderColor: '#C7C7C7', borderRadius: 5, paddingLeft: 7, height: 50 }}>
                    <Dropdown onChange={(i) => { console.log("first", i) }} data={DrugName}
                      maxHeight={300}
                      containerStyle={{ marginTop: 8 }}
                      labelField="label"
                      valueField="value"></Dropdown>
                  </View>
                  <View><Text style={{ color: '#9C9B9B', paddingTop: 10 }}>Alleviating Factors</Text></View>
                  <View style={{ paddingBottom: 6, borderWidth: 2, borderColor: '#C7C7C7', borderRadius: 5, paddingLeft: 7, height: 50 }}>
                    <Dropdown onChange={(i) => { console.log("first", i) }} data={DrugName}
                      maxHeight={300}
                      containerStyle={{ marginTop: 8 }}
                      labelField="label"
                      valueField="value"></Dropdown>
                  </View>
                  <View><Text style={{ color: '#9C9B9B', paddingTop: 10 }}>Severity</Text></View>
                  <View>
                    <Slider style={{ height: 15 }}
                      maximumValue={10}
                      minimumValue={0}
                      minimumTrackTintColor="#307ecc"
                      maximumTrackTintColor="#000000"
                      step={1}
                      value={sliderValue}
                      onValueChange={
                        (sliderValue) => setSliderValue(sliderValue)
                      }
                    />
                  </View>
                  {/* <View style={[styles.card]}></View> */}
                  <View style={{ borderRadius: 5, paddingTop: 10 }}><TextInput style={{ height: 100, padding: 0, borderColor: 'none' }} mode="outlined"
                    placeholder="Select"></TextInput></View>
                </View>
              </Card>
            </List.Accordion>
          </View>

          <List.Accordion
            style={{
              backgroundColor: '#ffffff',
              borderWidth: 1,
              borderColor: '#fff',

            }}
            titleStyle={{ color: '#2A97A2', fontSize: 18, fontWeight: 'bold', fontFamily: 'Roboto, Medium' }}
            title="DYSPNOEA" id="2">
            <Card style={{ borderColor: '#C7C7C7', borderWidth: 1 }}>
              <View style={{ margin: 15 }}>
                <View><Text style={{ color: '#9C9B9B', paddingTop: 10 }}>Onset</Text></View>
                <View style={{ paddingBottom: 6, borderWidth: 2, borderColor: '#C7C7C7', borderRadius: 5, paddingLeft: 7, height: 50 }}>
                  <Dropdown onChange={(i) => { console.log("first", i) }} data={DrugName}
                    maxHeight={300}
                    containerStyle={{ marginTop: 8 }}
                    labelField="label"
                    valueField="value"></Dropdown>
                </View>
                <View style={{ paddingTop: 10 }}>
                  <Card style={{ width: 360, borderColor: '#C7C7C7', borderRadius: 10, borderWidth: 1 }}>
                    <View style={styles.container}>
                      {DrugName && DrugName.map((item, index) => {
                        return (
                          <View style={{ flexDirection: 'row', flex: 1, padding: 10 }}><Text>{item.label}</Text></View>
                        )
                      })}
                      {/* <FlatList
                      data={[
                        { key: 'Devin' },
                        { key: 'Dan' },
                      ]}
                      renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                    /> */}
                    </View>
                  </Card>
                </View>
                <View style={{ borderRadius: 5, paddingTop: 10 }}><Text>Timing</Text><TextInput style={{ padding: 0, borderColor: 'none' }} mode="outlined"
                  placeholder="Free Text"></TextInput></View>
                {/* <View style={{ paddingBottom: 6, borderWidth: 2, borderColor: '#C7C7C7', borderRadius: 5, paddingLeft: 7, height: 50 }}></View> */}
                <View><Text style={{ color: '#9C9B9B', paddingTop: 10 }}>Associated Symptoms</Text></View>
                <View style={{ paddingBottom: 6, borderWidth: 2, borderColor: '#C7C7C7', borderRadius: 5, paddingLeft: 7, height: 50 }}>
                  <Dropdown onChange={(i) => { console.log("first", i) }} data={DrugName}
                    maxHeight={300}
                    containerStyle={{ marginTop: 8 }}
                    labelField="label"
                    valueField="value"></Dropdown>
                </View>
                <View ><Text style={{ color: '#9C9B9B', paddingTop: 10 }}>Exacerbating Factors</Text></View>
                <View style={{ paddingBottom: 6, borderWidth: 2, borderColor: '#C7C7C7', borderRadius: 5, paddingLeft: 7, height: 50 }}>
                  <Dropdown onChange={(i) => { console.log("first", i) }} data={DrugName}
                    maxHeight={300}
                    containerStyle={{ marginTop: 8 }}
                    labelField="label"
                    valueField="value"></Dropdown>
                </View>
                <View><Text style={{ color: '#9C9B9B', paddingTop: 10 }}>Alleviating Factors</Text></View>
                <View style={{ paddingBottom: 6, borderWidth: 2, borderColor: '#C7C7C7', borderRadius: 5, paddingLeft: 7, height: 50 }}>
                  <Dropdown onChange={(i) => { console.log("first", i) }} data={DrugName}
                    maxHeight={300}
                    containerStyle={{ marginTop: 8 }}
                    labelField="label"
                    valueField="value"></Dropdown>
                </View>
                <View style={{ paddingTop: 10 }}><Text style={{ color: '#9C9B9B' }}>Exercise Tolerance</Text></View>
                <View style={{ borderRadius: 5 }}><TextInput style={{ height: 100, padding: 0, borderColor: 'none' }} mode="outlined"
                  placeholder="Select"></TextInput></View>
              </View>
            </Card>
          </List.Accordion>
          <List.Accordion style={{
            backgroundColor: '#ffffff',
            borderWidth: 1,
            borderColor: '#fff',

          }}
            titleStyle={{ color: '#2A97A2', fontSize: 18, fontWeight: 'bold', fontFamily: 'Roboto, Medium' }}
            title="PALPITATIONS" id="3">
            <Card style={{ borderColor: '#C7C7C7', borderWidth: 1 }}>
              <View style={{ margin: 15 }}>
                <View><Text style={{ color: '#9C9B9B', paddingTop: 10 }}>Type of Palpitations</Text></View>
                <View style={{ paddingBottom: 6, borderWidth: 2, borderColor: '#C7C7C7', borderRadius: 5, paddingLeft: 7, height: 50 }}>
                  <Dropdown onChange={(i) => { console.log("first", i) }} data={DrugName}
                    maxHeight={300}
                    containerStyle={{ marginTop: 8 }}
                    labelField="label"
                    valueField="value"></Dropdown>
                </View>
                <View style={{ paddingTop: 10 }}>
                  <Card style={{ width: 360, borderColor: '#C7C7C7', borderRadius: 10, borderWidth: 1 }}>
                    <View style={styles.container}>
                      {DrugName && DrugName.map((item, index) => {
                        return (
                          <View style={{ flexDirection: 'row', flex: 1, padding: 10 }}><Text>{item.label}</Text></View>
                        )
                      })}
                      {/* <FlatList
                      data={[
                        { key: 'Devin' },
                        { key: 'Dan' },
                      ]}
                      renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                    /> */}
                    </View>
                  </Card>
                </View>
                <View style={{ borderRadius: 5, paddingTop: 10 }}><Text style={{ paddingTop: 10 }}>Onset</Text>
                  <View style={{ paddingBottom: 10, borderWidth: 1, borderColor: '#C7C7C7', borderRadius: 5, paddingLeft: 7, height: 50 }}>
                    <Dropdown onChange={(i) => { console.log("first", i) }} data={DrugName}
                      maxHeight={300}
                      containerStyle={{ marginTop: 8 }}
                      labelField="label"
                      valueField="value"></Dropdown>
                  </View></View>
                <View style={{ paddingTop: 10 }}>
                  <Card style={{ width: 360, borderColor: '#C7C7C7', borderRadius: 10, borderWidth: 1 }}>
                    <View style={styles.container}>
                      {DrugName && DrugName.map((item, index) => {
                        return (
                          <View style={{ flexDirection: 'row', flex: 1, padding: 10 }}><Text>{item.label}</Text></View>
                        )
                      })}
                      {/* <FlatList
                      data={[
                        { key: 'Devin' },
                        { key: 'Dan' },
                      ]}
                      renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                    /> */}
                    </View>
                  </Card>
                </View>
                {/* <View style={{ paddingBottom: 6, borderWidth: 2, borderColor: '#C7C7C7', borderRadius: 5, paddingLeft: 7, height: 50 }}></View> */}
                <View><Text style={{ color: '#9C9B9B', paddingTop: 10 }}>Associated Symptoms</Text></View>
                <View style={{ paddingBottom: 6, borderWidth: 2, borderColor: '#C7C7C7', borderRadius: 5, paddingLeft: 7, height: 50 }}>
                  <Dropdown onChange={(i) => { console.log("first", i) }} data={DrugName}
                    maxHeight={300}
                    containerStyle={{ marginTop: 8 }}
                    labelField="label"
                    valueField="value"></Dropdown>
                </View>
                <View ><Text style={{ color: '#9C9B9B', paddingTop: 10 }}>Exacerbating Factors</Text></View>
                <View style={{ paddingBottom: 6, borderWidth: 2, borderColor: '#C7C7C7', borderRadius: 5, paddingLeft: 7, height: 50 }}>
                  <Dropdown onChange={(i) => { console.log("first", i) }} data={DrugName}
                    maxHeight={300}
                    containerStyle={{ marginTop: 8 }}
                    labelField="label"
                    valueField="value"></Dropdown>
                </View>
                <View><Text style={{ color: '#9C9B9B', paddingTop: 10 }}>Alleviating Factors</Text></View>
                <View style={{ paddingBottom: 6, borderWidth: 2, borderColor: '#C7C7C7', borderRadius: 5, paddingLeft: 7, height: 50 }}>
                  <Dropdown onChange={(i) => { console.log("first", i) }} data={DrugName}
                    maxHeight={300}
                    containerStyle={{ marginTop: 8 }}
                    labelField="label"
                    valueField="value"></Dropdown>
                </View>
              </View>
            </Card>
          </List.Accordion>
          <List.Accordion style={{
            backgroundColor: '#ffffff',
            borderWidth: 1,
            borderColor: '#fff',

          }}
            titleStyle={{ color: '#2A97A2', fontSize: 18, fontWeight: 'bold', fontFamily: 'Roboto, Medium' }}
            title="PRESYNCOPE / SYNCOPE" id="4">
            <Card style={{ borderColor: '#C7C7C7', borderWidth: 1 }}>
              <View style={{ margin: 15 }}>
                <View><Text style={{ color: '#9C9B9B', paddingTop: 10 }}>Trigger</Text></View>
                <View style={{ paddingBottom: 6, borderWidth: 2, borderColor: '#C7C7C7', borderRadius: 5, paddingLeft: 7, height: 50 }}>
                  <Dropdown onChange={(i) => { console.log("first", i) }} data={DrugName}
                    maxHeight={300}
                    containerStyle={{ marginTop: 8 }}
                    labelField="label"
                    valueField="value"></Dropdown>
                </View>
                <View style={{ paddingTop: 10 }}>
                  <Card style={{ width: 360, borderColor: '#C7C7C7', borderRadius: 10, borderWidth: 1 }}>
                    <View style={styles.container}>
                      {DrugName && DrugName.map((item, index) => {
                        return (
                          <View style={{ flexDirection: 'row', flex: 1, padding: 10 }}><Text>{item.label}</Text></View>
                        )
                      })}
                      {/* <FlatList
                      data={[
                        { key: 'Devin' },
                        { key: 'Dan' },
                      ]}
                      renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                    /> */}
                    </View>
                  </Card>
                </View>
                <View style={{ borderRadius: 5, paddingTop: 10 }}><Text style={{ paddingTop: 10 }}>Symptoms before the episode</Text><View style={{ paddingBottom: 10, borderWidth: 1, borderColor: '#C7C7C7', borderRadius: 5, paddingLeft: 7 }}>
                  <Dropdown onChange={(i) => { console.log("first", i) }} data={DrugName}
                    maxHeight={300}
                    containerStyle={{ marginTop: 8 }}
                    labelField="label"
                    valueField="value"></Dropdown>
                </View></View>
                <View style={{ paddingTop: 10 }}>
                  <Card style={{ width: 360, borderColor: '#C7C7C7', borderRadius: 10, borderWidth: 1 }}>
                    <View style={styles.container}>
                      {DrugName && DrugName.map((item, index) => {
                        return (
                          <View style={{ flexDirection: 'row', flex: 1, padding: 10 }}><Text>{item.label}</Text></View>
                        )
                      })}
                      {/* <FlatList
                      data={[
                        { key: 'Devin' },
                        { key: 'Dan' },
                      ]}
                      renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                    /> */}
                    </View>
                  </Card>
                </View>
                <View style={{ borderRadius: 5, paddingTop: 10 }}><Text style={{ paddingTop: 10 }}>Symptoms during the episode</Text>
                  <View style={{ paddingBottom: 6, borderWidth: 2, borderColor: '#C7C7C7', borderRadius: 5, paddingLeft: 7, height: 50 }}>
                    <Dropdown onChange={(i) => { console.log("first", i) }} data={DrugName}
                      maxHeight={300}
                      containerStyle={{ marginTop: 8 }}
                      labelField="label"
                      valueField="value"></Dropdown></View></View>
                <View style={{ paddingTop: 10 }}>
                  <Card style={{ width: 360, borderColor: '#C7C7C7', borderRadius: 10, borderWidth: 1 }}>
                    <View style={styles.container}>
                      {DrugName && DrugName.map((item, index) => {
                        return (
                          <View style={{ flexDirection: 'row', flex: 1, padding: 10 }}><Text>{item.label}</Text></View>
                        )
                      })}
                      {/* <FlatList
                      data={[
                        { key: 'Devin' },
                        { key: 'Dan' },
                      ]}
                      renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                    /> */}
                    </View>
                  </Card>
                </View>
                <View style={{ borderRadius: 5, paddingTop: 10 }}><Text style={{ paddingTop: 10 }}>Symptoms after the episode</Text>
                  <View style={{ paddingBottom: 6, borderWidth: 2, borderColor: '#C7C7C7', borderRadius: 5, paddingLeft: 7, height: 50 }}>
                    <Dropdown onChange={(i) => { console.log("first", i) }} data={DrugName}
                      maxHeight={300}
                      containerStyle={{ marginTop: 8 }}
                      labelField="label"
                      valueField="value"></Dropdown>
                  </View></View>
                <View style={{ paddingTop: 10 }}>
                  <Card style={{ width: 360, borderColor: '#C7C7C7', borderRadius: 10, borderWidth: 1 }}>
                    <View style={styles.container}>
                      {DrugName && DrugName.map((item, index) => {
                        return (
                          <View style={{ flexDirection: 'row', flex: 1, padding: 10 }}><Text>{item.label}</Text></View>
                        )
                      })}
                      {/* <FlatList
                      data={[
                        { key: 'Devin' },
                        { key: 'Dan' },
                      ]}
                      renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                    /> */}
                    </View>
                  </Card>
                </View>
                <View style={{ paddingTop: 15 }}><Text>Timing</Text></View>
                <View style={{ borderRadius: 5 }}><TextInput style={{ padding: 0, borderColor: 'none' }} mode="outlined"
                  placeholder="Select"></TextInput></View>
                <View style={{ borderRadius: 5, paddingTop: 10 }}><Text style={{ paddingTop: 10 }}>Associated Symptoms</Text>
                  <View style={{ paddingBottom: 6, borderWidth: 2, borderColor: '#C7C7C7', borderRadius: 5, paddingLeft: 7, height: 50 }}>
                    <Dropdown onChange={(i) => { console.log("first", i) }} data={DrugName}
                      maxHeight={300}
                      containerStyle={{ marginTop: 8 }}
                      labelField="label"
                      valueField="value"></Dropdown>
                  </View></View>
                <View style={{ paddingTop: 10 }}>
                  <Card style={{ width: 360, borderColor: '#C7C7C7', borderRadius: 10, borderWidth: 1 }}>
                    <View style={styles.container}>
                      {DrugName && DrugName.map((item, index) => {
                        return (
                          <View style={{ flexDirection: 'row', flex: 1, padding: 10 }}><Text>{item.label}</Text></View>
                        )
                      })}
                      {/* <FlatList
                      data={[
                        { key: 'Devin' },
                        { key: 'Dan' },
                      ]}
                      renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                    /> */}
                    </View>
                  </Card>
                </View>
              </View>
            </Card>
          </List.Accordion>
          <List.Accordion style={{
            backgroundColor: '#ffffff',
            borderWidth: 1,
            borderColor: '#fff',

          }}
            titleStyle={{ color: '#2A97A2', fontSize: 18, fontWeight: 'bold', fontFamily: 'Roboto, Medium' }}
            title="PERIPHERAL OEDEMA" id="5">
            <Card style={{ borderColor: '#C7C7C7', borderWidth: 1 }}>
              <View style={{ margin: 15 }}>
                <View style={{ paddingTop: 15 }}><Text>Distribution</Text></View>
                <View style={{ borderRadius: 5 }}><TextInput style={{ padding: 0, borderColor: 'none' }} mode="outlined"
                  placeholder="Select"></TextInput>
                </View>
                <View style={{ borderRadius: 5, paddingTop: 10 }}><Text style={{ paddingTop: 10 }}>Timing</Text>
                  <View style={{ paddingBottom: 6, borderWidth: 2, borderColor: '#C7C7C7', borderRadius: 5, paddingLeft: 7, height: 50 }}>
                    <Dropdown onChange={(i) => { console.log("first", i) }} data={DrugName}
                      maxHeight={300}
                      containerStyle={{ marginTop: 8 }}
                      labelField="label"
                      valueField="value"></Dropdown>
                  </View></View>
                <View style={{ paddingTop: 10 }}>
                  <Card style={{ width: 360, borderColor: '#C7C7C7', borderRadius: 10, borderWidth: 1 }}>
                    <View style={styles.container}>
                      {DrugName && DrugName.map((item, index) => {
                        return (
                          <View style={{ flexDirection: 'row', flex: 1, padding: 10 }}><Text>{item.label}</Text></View>
                        )
                      })}
                      {/* <FlatList
                      data={[
                        { key: 'Devin' },
                        { key: 'Dan' },
                      ]}
                      renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                    /> */}
                    </View>
                  </Card>
                </View>
                <View style={{ borderRadius: 5, paddingTop: 10 }}><Text style={{ paddingTop: 10 }}>Associated Symptoms</Text>
                  <View style={{ paddingBottom: 6, borderWidth: 2, borderColor: '#C7C7C7', borderRadius: 5, paddingLeft: 7, height: 50 }}><Dropdown onChange={(i) => { console.log("first", i) }} data={DrugName}
                    maxHeight={300}
                    containerStyle={{ marginTop: 8 }}
                    labelField="label"
                    valueField="value"></Dropdown>
                  </View></View>
                <View style={{ paddingTop: 10 }}>
                  <Card style={{ width: 360, borderColor: '#C7C7C7', borderRadius: 10, borderWidth: 1 }}>
                    <View style={styles.container}>
                      {DrugName && DrugName.map((item, index) => {
                        return (
                          <View style={{ flexDirection: 'row', flex: 1, padding: 10 }}><Text>{item.label}</Text></View>
                        )
                      })}
                      {/* <FlatList
                      data={[
                        { key: 'Devin' },
                        { key: 'Dan' },
                      ]}
                      renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                    /> */}
                    </View>
                  </Card>
                </View>
                <View style={{ borderRadius: 5, paddingTop: 10 }}><Text style={{ paddingTop: 10 }}>Severity</Text>
                  <View style={{ paddingBottom: 6, borderWidth: 2, borderColor: '#C7C7C7', borderRadius: 5, paddingLeft: 7, height: 50 }}>
                    <Dropdown onChange={(i) => { console.log("first", i) }} data={DrugName}
                      maxHeight={300}
                      containerStyle={{ marginTop: 8 }}
                      labelField="label"
                      valueField="value"></Dropdown>
                  </View></View>
                <View style={{ paddingTop: 10 }}>
                  <Card style={{ width: 360, borderColor: '#C7C7C7', borderRadius: 10, borderWidth: 1 }}>
                    <View style={styles.container}>
                      {DrugName && DrugName.map((item, index) => {
                        return (
                          <View style={{ flexDirection: 'row', flex: 1, padding: 10 }}><Text>{item.label}</Text></View>
                        )
                      })}
                      {/* <FlatList
                      data={[
                        { key: 'Devin' },
                        { key: 'Dan' },
                      ]}
                      renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                    /> */}
                    </View>
                  </Card>
                </View>
              </View>
            </Card>
          </List.Accordion>
          <List.Accordion style={{
            backgroundColor: '#ffffff',
            borderWidth: 1,
            borderColor: '#fff',
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,

          }}
            titleStyle={{ color: '#2A97A2', fontSize: 18, fontWeight: 'bold', fontFamily: 'Roboto, Medium' }}
            title="LEG PAIN" id="6">
            <Card style={{ borderColor: '#C7C7C7', borderWidth: 1 }}>
              <View style={{ margin: 15 }}>
                <View style={{ paddingTop: 15 }}><Text>Site</Text></View>
                <View style={{ borderRadius: 5 }}><TextInput style={{ padding: 0, borderColor: 'none' }} mode="outlined"
                  placeholder="Select"></TextInput></View>
                <View style={{ paddingTop: 10 }}>
                  <Card style={{ width: 360, borderColor: '#C7C7C7', borderRadius: 10, borderWidth: 1 }}>
                    <View style={styles.container}>
                      {DrugName && DrugName.map((item, index) => {
                        return (
                          <View style={{ flexDirection: 'row', flex: 1, padding: 10 }}><Text>{item.label}</Text></View>
                        )
                      })}
                      {/* <FlatList
                      data={[
                        { key: 'Devin' },
                        { key: 'Dan' },
                      ]}
                      renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                    /> */}
                    </View>
                  </Card>
                </View>
                <View style={{ borderRadius: 5, paddingTop: 10 }}><Text style={{ paddingTop: 10 }}>Onset</Text>
                  <View style={{ paddingBottom: 6, borderWidth: 2, borderColor: '#C7C7C7', borderRadius: 5, paddingLeft: 7, height: 50 }}>
                    <Dropdown onChange={(i) => { console.log("first", i) }} data={DrugName}
                      maxHeight={300}
                      containerStyle={{ marginTop: 8 }}
                      labelField="label"
                      valueField="value"></Dropdown>
                  </View></View>
                <View style={{ paddingTop: 10 }}>
                  <Card style={{ width: 360, borderColor: '#C7C7C7', borderRadius: 10, borderWidth: 1 }}>
                    <View style={styles.container}>
                      {DrugName && DrugName.map((item, index) => {
                        return (
                          <View style={{ flexDirection: 'row', flex: 1, padding: 10 }}><Text>{item.label}</Text></View>
                        )
                      })}
                      {/* <FlatList
                      data={[
                        { key: 'Devin' },
                        { key: 'Dan' },
                      ]}
                      renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                    /> */}
                    </View>
                  </Card>
                </View>
                <View style={{ borderRadius: 5, paddingTop: 10 }}><Text style={{ paddingTop: 10 }}>Character</Text>
                  <View style={{ paddingBottom: 6, borderWidth: 2, borderColor: '#C7C7C7', borderRadius: 5, paddingLeft: 7, height: 50 }}>
                    <Dropdown onChange={(i) => { console.log("first", i) }} data={DrugName}
                      maxHeight={300}
                      containerStyle={{ marginTop: 8 }}
                      labelField="label"
                      valueField="value"></Dropdown>
                  </View></View>
                <View style={{ paddingTop: 10 }}>
                  <Card style={{ width: 360, borderColor: '#C7C7C7', borderRadius: 10, borderWidth: 1 }}>
                    <View style={styles.container}>
                      {DrugName && DrugName.map((item, index) => {
                        return (
                          <View style={{ flexDirection: 'row', flex: 1, padding: 10 }}><Text>{item.label}</Text></View>
                        )
                      })}
                      {/* <FlatList
                      data={[
                        { key: 'Devin' },
                        { key: 'Dan' },
                      ]}
                      renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                    /> */}
                    </View>
                  </Card>
                </View>
                <View style={{ borderRadius: 5, paddingTop: 10 }}><Text style={{ paddingTop: 10 }}>Radiation</Text>
                  <View style={{ paddingBottom: 6, borderWidth: 2, borderColor: '#C7C7C7', borderRadius: 5, paddingLeft: 7, height: 50 }}>
                    <Dropdown onChange={(i) => { console.log("first", i) }} data={DrugName}
                      maxHeight={300}
                      containerStyle={{ marginTop: 8 }}
                      labelField="label"
                      valueField="value"></Dropdown>
                  </View></View>
                <View style={{ paddingTop: 10 }}>
                  <Card style={{ width: 360, borderColor: '#C7C7C7', borderRadius: 10, borderWidth: 1 }}>
                    <View style={styles.container}>
                      {DrugName && DrugName.map((item, index) => {
                        return (
                          <View style={{ flexDirection: 'row', flex: 1, padding: 10 }}><Text>{item.label}</Text></View>
                        )
                      })}
                      {/* <FlatList
                      data={[
                        { key: 'Devin' },
                        { key: 'Dan' },
                      ]}
                      renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                    /> */}
                    </View>
                  </Card>
                </View>
                <View style={{ borderRadius: 5, paddingTop: 10 }}><Text style={{ paddingTop: 10 }}>Associated Symptoms</Text>
                  <View style={{ paddingBottom: 6, borderWidth: 2, borderColor: '#C7C7C7', borderRadius: 5, paddingLeft: 7, height: 50 }}>
                    <Dropdown onChange={(i) => { console.log("first", i) }} data={DrugName}
                      maxHeight={300}
                      containerStyle={{ marginTop: 8 }}
                      labelField="label"
                      valueField="value"></Dropdown>
                  </View></View>
                <View style={{ paddingTop: 10 }}>
                  <Card style={{ width: 360, borderColor: '#C7C7C7', borderRadius: 10, borderWidth: 1 }}>
                    <View style={styles.container}>
                      {DrugName && DrugName.map((item, index) => {
                        return (
                          <View style={{ flexDirection: 'row', flex: 1, padding: 10 }}><Text>{item.label}</Text></View>
                        )
                      })}
                      {/* <FlatList
                      data={[
                        { key: 'Devin' },
                        { key: 'Dan' },
                      ]}
                      renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                    /> */}
                    </View>
                  </Card>
                </View>
                <View style={{ paddingTop: 15 }}><Text>Timing</Text></View>
                <View style={{ borderRadius: 5 }}><TextInput style={{ padding: 0, borderColor: 'none' }} mode="outlined"
                  placeholder="Select"></TextInput></View>
                <View style={{ borderRadius: 5, paddingTop: 10 }}><Text style={{ paddingTop: 10 }}>Exacerbating Factors</Text>
                  <View style={{ paddingBottom: 6, borderWidth: 2, borderColor: '#C7C7C7', borderRadius: 5, paddingLeft: 7, height: 50 }}>
                    <Dropdown onChange={(i) => { console.log("first", i) }} data={DrugName}
                      maxHeight={300}
                      containerStyle={{ marginTop: 8 }}
                      labelField="label"
                      valueField="value"></Dropdown>
                  </View></View>
                <View style={{ paddingTop: 10 }}>
                  <Card style={{ width: 360, borderColor: '#C7C7C7', borderRadius: 10, borderWidth: 1 }}>
                    <View style={styles.container}>
                      {DrugName && DrugName.map((item, index) => {
                        return (
                          <View style={{ flexDirection: 'row', flex: 1, padding: 10 }}><Text>{item.label}</Text></View>
                        )
                      })}
                      {/* <FlatList
                      data={[
                        { key: 'Devin' },
                        { key: 'Dan' },
                      ]}
                      renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                    /> */}
                    </View>
                  </Card>
                </View>
                <View style={{ borderRadius: 5, paddingTop: 10 }}><Text style={{ paddingTop: 10 }}>Alleviating Factors</Text>
                  <View style={{ paddingBottom: 6, borderWidth: 2, borderColor: '#C7C7C7', borderRadius: 5, paddingLeft: 7, height: 50 }}>
                    <Dropdown onChange={(i) => { console.log("first", i) }} data={DrugName}
                      maxHeight={300}
                      containerStyle={{ marginTop: 8 }}
                      labelField="label"
                      valueField="value"></Dropdown>
                  </View></View>
                <View style={{ paddingTop: 10 }}>
                  <Card style={{ width: 360, borderColor: '#C7C7C7', borderRadius: 10, borderWidth: 1 }}>
                    <View style={styles.container}>
                      {DrugName && DrugName.map((item, index) => {
                        return (
                          <View style={{ flexDirection: 'row', flex: 1, padding: 10 }}><Text>{item.label}</Text></View>
                        )
                      })}
                      {/* <FlatList
                      data={[
                        { key: 'Devin' },
                        { key: 'Dan' },
                      ]}
                      renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                    /> */}
                    </View>
                  </Card>
                </View>
                <View style={{ paddingTop: 15 }}><Text>Is the patient able to walk</Text></View>
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ width: "50%", flexDirection: 'row', alignItems: 'center' }}>

                    <RadioButton value={'valueRadio'} status={valueRadio ? 'checked' : 'unchecked'}></RadioButton>
                    <Text>yes</Text>
                    {/* <RadioButton style status={valueRadio} onPress={newValue => setValueRadio(newValue)} >
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                      <Text>Yes</Text>
                      
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                      <Text>No</Text>
                      <RadioButton value="second" />
                    </View>
                  </RadioButton> */}
                  </View>
                  <View style={{ width: "50%", height: 30, flexDirection: 'row', alignItems: 'center' }}>
                    <RadioButton value={'valueRadio'} status={valueRadio ? 'checked' : 'unchecked'}></RadioButton>
                    <Text>No</Text>
                  </View>
                </View>
                <View><Text style={{ color: '#9C9B9B', paddingTop: 10 }}>Severity</Text></View>
                <View>
                  {/* <Slider
                    maximumValue={10}
                    minimumValue={0}
                    minimumTrackTintColor="#307ecc"
                    maximumTrackTintColor="#000000"
                    step={1}
                    value={sliderValue}
                    onValueChange={
                      (sliderValue) => setSliderValue(sliderValue)
                    }
                  /> */}
                  <Slider
                    style={{ width: 350, height: 40 }}
                    minimumValue={0}
                    maximumValue={10}
                    minimumTrackTintColor="#307ecc"
                    maximumTrackTintColor="#000000"
                    step={1}
                  />
                </View>
                <Pressable>
                  <View style={{ paddingTop: 50 }}>
                    <Text style={{ backgroundColor: '#16656F', color: 'white', textAlign: 'center', borderRadius: 5, marginHorizontal: 20, padding: 5, height: 40, width: 300, fontFamily: 'roboto,bold' }}>SUBMIT</Text>
                  </View>
                </Pressable>

              </View>
            </Card>
          </List.Accordion>
        </List.Section>
      </ScrollView></View>
  )
}


export default App