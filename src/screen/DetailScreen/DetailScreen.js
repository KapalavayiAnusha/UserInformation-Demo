import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import RadioGroup from 'react-native-radio-buttons-group';
import CheckBox from '@react-native-community/checkbox';
import { RadioButton } from 'react-native-paper';
import DatePicker from 'react-native-date-picker';


const DetailScreen = () => {


    const [text, setText] = useState('');
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const [text3, setText3] = useState('');
    const [text4, setText4] = useState('');
    const [text5, setText5] = useState('');
    const [text6, setText6] = useState('');
    const [text7, setText7] = useState('');
    const [text8, setText8] = useState('');
    const [text9, setText9] = useState('');
    const [text10, setText10] = useState('');
    const [text11, setText11] = useState('');

    const [selectedValue, setSelectedValue] = useState(null);
    const [selectedValue0, setSelectedValue0] = useState(null);
    const [selectedValue1, setSelectedValue1] = useState(null);
    const [selectedValue2, setSelectedValue2] = useState(null);
    const [selectedValue3, setSelectedValue3] = useState(null);
    const [selectedValue4, setSelectedValue4] = useState(null);

    const dropdownItems = [
        { label: 'Business ', value: 'Business' },
        { label: 'Finance ', value: 'Finance' },
        { label: 'IncomeTax', value: 'IncomeTax' },
    ];
    const incomeRange = [
        { label: '1-5 Lpa ', value: '1-5 Lpa' },
        { label: '2-5 Lpa', value: '2-5 Lpa' },
        { label: '5-6 Lpa', value: '5-6 Lpa' },
    ];
    const qualifications = [
        { label: 'Degree ', value: 'Degree' },
        { label: 'Graduation', value: 'Graduation' },
        { label: 'PostGraduation', value: 'PostGraduation' },
    ];

    const [radioButtons, setRadioButtons] = useState([
        { label: 'Fathersname', value: 'Fathersname' },
        { label: 'Mothersname', value: 'Mothersname' },
    ]);
    const onPressRadioButton = (radioButtonsArray) => {
        setRadioButtons(radioButtonsArray);
    };
    const [selectedOption, setSelectedOption] = useState(null);
    const handleSelect = (option) => {
        setSelectedOption(option);
    };
    const matralStatus = [
        { label: 'Married ', value: 'Married' },
        { label: 'Single ', value: 'Single' },
    ];
    const relationship = [
        { label: 'Father', value: 'Father' },
        { label: 'Mother', value: 'Mother' }
    ]
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    // const [date, setDate] = useState(new Date());
    // const handleCalendarClose = () => console.log("Calendar closed");
    // const handleCalendarOpen = () => console.log("Calendar opened");
    
    //     const [searchText, setSearchText] = useState('');
    //     const [data, setData] = useState([
    //       { id: '1', name: 'Apple' },
    //       { id: '2', name: 'Banana' },
    //       { id: '3', name: 'Cherry' },
    //       { id: '4', name: 'Date' },
    //       // Add more data as needed
    //     ]);
      
    //     const filteredData = data.filter((item) =>
    //     item.name.toLowerCase().includes(searchText.toLowerCase())
    //      );
    
    //    const renderItem = ({ item }) => (
    //     <View style={{ padding: 16 }}>
    //         <Text>{item.name}</Text>
    //     </View>
    //    );

    
      
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <Text style={styles.text}>
                    Let's start by providing <Text style={styles.coloredText}>your personal</Text>{'\n'}
                    Details
                </Text>

                <View style={styles.rectangle}>
                    <Text style={styles.boldText}>Name on your PRAN Card <Text style={styles.coloredText}><Text style={styles.asterisk}>*</Text></Text></Text>
                    <TextInput style={styles.input} onChangeText={newText => setText(newText)}
                        defaultValue={text}></TextInput>
                </View>

                <View style={styles.dropDownRectange}>
                    <Text style={styles.boldText}>Occupation <Text style={styles.coloredText}><Text style={styles.asterisk}>*</Text></Text></Text>
                    <RNPickerSelect
                        placeholder={{
                            label: 'Select an option...',
                            value: null,
                            marginTop: 20,
                            color: '#9EA0A4'
                        }}
                        items={dropdownItems}
                        onValueChange={(value) => setSelectedValue0(value)}
                        style={pickerSelectStyles}
                        value={selectedValue0}
                    />
                </View>

                <View style={styles.dropDownRectange}>
                    <Text style={styles.boldText}>Income Range <Text style={styles.coloredText}><Text style={styles.asterisk}>*</Text></Text></Text>
                    <RNPickerSelect
                        placeholder={{
                            label: 'Select an option...',
                            value: null,
                        }}
                        items={incomeRange}
                        onValueChange={(value) => setSelectedValue1(value)}
                        style={pickerSelectStyles}
                        value={selectedValue1}
                    />
                </View>

                <View style={styles.dropDownRectange}>
                    <Text style={styles.boldText}>Education Qualification <Text style={styles.coloredText}><Text style={styles.asterisk}>*</Text></Text></Text>
                    <RNPickerSelect
                        placeholder={{
                            label: 'Select an option...',
                            value: null,
                        }}
                        items={qualifications}
                        onValueChange={(value) => setSelectedValue2(value)}
                        style={pickerSelectStyles}
                        value={selectedValue2}
                    />
                </View>

                <View style={styles.rectangle}>
                    <Text style={styles.boldText}>Father's Name<Text style={styles.coloredText}><Text style={styles.asterisk}>*</Text></Text></Text>
                    <TextInput style={styles.input} onChangeText={newText => setText1(newText)}
                        defaultValue={text1}></TextInput>
                </View>

                <View style={styles.rectangle}>
                    <Text style={styles.boldText}>Mother's Name<Text style={styles.coloredText}><Text style={styles.asterisk}>*</Text></Text></Text>
                    <TextInput style={styles.input} onChangeText={newText => setText2(newText)}
                        defaultValue={text2}></TextInput>
                </View>

                <View style={styles.radioButtonsView}>
                    <Text style={styles.boldText}>What do You want to print on your Card?</Text>
                    <View style={{ flexDirection: 'row', margin: 10 }}>
                        <RadioButton.Android
                            value="option1"
                            status={selectedValue === 'option1' ? 'checked' : 'unchecked'}
                            onPress={() => setSelectedValue('option1')}
                            color="#007BFF"
                        />
                        <Text style={styles.radioLabel}>
                            Fathersname
                        </Text>
                        <RadioButton.Android
                            value="option2"
                            status={selectedValue === 'option2' ? 'checked' : 'unchecked'}
                            onPress={() => setSelectedValue('option2')}
                            color="#007BFF"
                        />
                        <Text style={styles.radioLabel}>
                            Mothersname
                        </Text>

                    </View>
                </View>

                <View style={styles.dropDownRectange}>
                    <Text style={styles.boldText}>Marital Status<Text style={styles.coloredText}><Text style={styles.asterisk}>*</Text></Text></Text>
                    <RNPickerSelect
                        placeholder={{
                            label: 'Select an option...',
                            value: null,
                        }}
                        items={matralStatus}
                        onValueChange={(value) => setSelectedValue3(value)}
                        style={pickerSelectStyles}
                        value={selectedValue3}
                    />
                </View>

                <View style={styles.rectangle}>
                    <Text style={styles.boldText}>Spouse's Name <Text style={styles.coloredText}><Text style={styles.asterisk}>*</Text></Text></Text>
                    <TextInput style={styles.input} onChangeText={newText => setText11(newText)}
                        defaultValue={text11}></TextInput>
                </View>

                {/* <View style={styles.dropDownRectange}>
                    
                        <TextInput
                                style={styles.searchBar}
                                placeholder="Search..."
                                onChangeText={(text) => setSearchText(text)}
                                value={searchText}
                        />

                        <FlatList
                            data={filteredData}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                            <View style={styles.item}>
                                <Text>{item.name}</Text>
                            </View>
                            )}
                        />
                </View> */}

                <Text style={styles.text}>Your Nominee Details {'\n'}</Text>

                <View style={styles.rectangle}>
                    <Text style={styles.boldText}>Nominee Name<Text style={styles.coloredText}><Text style={styles.asterisk}>*</Text></Text></Text>
                    <TextInput style={styles.input} onChangeText={newText => setText3(newText)}
                        defaultValue={text3}></TextInput>
                </View>
                {/* <View>
                        <DatePicker
                                selected={date}
                                onChange={(date) => setDate(date)}
                                onCalendarClose={handleCalendarClose}
                                onCalendarOpen={handleCalendarOpen}
                        />
                </View> */}


                <View style={styles.dropDownRectange}>
                    <Text style={styles.boldText}>Relationship<Text style={styles.coloredText}><Text style={styles.asterisk}>*</Text></Text></Text>
                    <RNPickerSelect
                        placeholder={{
                            label: 'Select an option...',
                            value: null,
                        }}
                        items={relationship}
                        onValueChange={(value) => setSelectedValue4(value)}
                        style={pickerSelectStyles}
                        value={selectedValue4}
                    />

                </View>

                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <CheckBox
                        value={isChecked}
                        onValueChange={handleCheckboxChange}
                    />
                    <Text style={styles.checkBox}>Nominee address will be the same as account holder's address</Text>
                </View>




                <View style={styles.rectangle}>
                    <Text style={styles.boldText}>pincode<Text style={styles.coloredText}><Text style={styles.asterisk}>*</Text></Text></Text>
                    <TextInput style={styles.input} onChangeText={newText => setText4(newText)}
                        defaultValue={text4}></TextInput>
                </View>

                <View style={styles.rectangle}>
                    <Text style={styles.boldText}>City<Text style={styles.coloredText}><Text style={styles.asterisk}>*</Text></Text></Text>
                    <TextInput style={styles.input} onChangeText={newText => setText5(newText)}
                        defaultValue={text5}></TextInput>
                </View>

                <View style={styles.rectangle}>
                    <Text style={styles.boldText}>State<Text style={styles.coloredText}><Text style={styles.asterisk}>*</Text></Text></Text>
                    <TextInput style={styles.input} onChangeText={newText => setText6(newText)}
                        defaultValue={text6}></TextInput>
                </View>

                <View style={styles.rectangle}>
                    <Text style={styles.boldText}>Nominee Address Line1<Text style={styles.coloredText}><Text style={styles.asterisk}>*</Text></Text></Text>
                    <TextInput style={styles.input} onChangeText={newText => setText7(newText)}
                        defaultValue={text7}></TextInput>
                </View>

                <View style={styles.rectangle}>
                    <Text style={styles.boldText}>Nominee Address Line2<Text style={styles.coloredText}><Text style={styles.asterisk}>*</Text></Text></Text>
                    <TextInput style={styles.input} onChangeText={newText => setText8(newText)}
                        defaultValue={text8}></TextInput>
                </View>

                <View style={styles.rectangle}>
                    <Text style={styles.boldText}>Nominee Address Line3</Text>
                    <TextInput style={styles.input} onChangeText={newText => setText9(newText)}
                        defaultValue={text9}></TextInput>
                </View>

                <View style={styles.rectangle}>
                    <Text style={styles.boldText}>Percentage<Text style={styles.coloredText}><Text style={styles.asterisk}>*</Text></Text></Text>
                    <TextInput style={styles.input} onChangeText={newText => setText10(newText)}
                        defaultValue={text10}></TextInput>
                </View>

                <View style={styles.button}>
                        
                    <Button title="Continue" onPress={() => Alert.alert("Form Submitted Successfuly")}></Button>
                </View>
          
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#e6f3ff',
    },
    asterisk:{
        color:'red',
      },
    text: {
        fontSize: 18,
        color: '#74739e',
        fontWeight: 'bold',
        marginTop: 10
    },
    coloredText: {
        color: 'red',
        color: '#0f0f5c',
        fontWeight: 'bold',
    },
    boldText: {
        fontWeight: 'bold',
        marginTop: 5,
        padding: 5,
    },
    rectangle: {
        width: '86%',
        height: 75,
        backgroundColor: '#FFFFFF',
        borderColor: '#74739e',
        borderWidth: 2,
        borderRadius: 8,
        marginTop: 20
    },
    dropDownRectange: {
        width: '86%',
        height: 100,
        backgroundColor: '#FFFFFF',
        borderColor: '#74739e',
        borderWidth: 2,
        borderRadius: 8,
        marginTop: 20,
        marginBottom: 10,
    },
    input: {
        borderBottomColor: '#000',
        width: '90%',
        height: 45,
        marginLeft: 15
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
    },
    selectedOption: {
        marginTop: 10,
        fontSize: 16,
    },
    radioButtonsView: {
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'column',
        height: 60,
        width: '88%',
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
    },
    radioContainer: {
        marginTop: 8,
    },
    selectedValueText: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'left',
        marginVertical: 10,
    },
    radioOuterCircle: {
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    radioOuterCircleSelected: {
        borderColor: 'blue',
    },
    radioInnerCircle: {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: 'blue',
    },
    radioLabel: {
        marginLeft: 10,
        marginTop: 40,
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
    },
    datePicker: {
        width: 200,
        marginBottom: 16,
    },
    selectedDate: {
        marginTop: 16,
        fontSize: 16,
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    button: {
        padding: 10,
        borderRadius: 5,
        width: 350,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    checkBox: {
        marginLeft: 8,

    },
    radioGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 20,
        borderRadius: 8,
        backgroundColor: 'white',
        padding: 16,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioLabel: {
        marginLeft: 8,
        fontSize: 16,
        color: '#333',
    },


    // selectdropdown: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     padding: 16,
    // },
    // index: {
    //     height: 40,
    //     borderColor: 'gray',
    //     borderWidth: 1,
    //     marginBottom: 10,
    //     paddingHorizontal: 8,
    // },

    // searchBar: {
    //     height: 40,
    //     borderColor: 'gray',
    //     borderWidth: 1,
    //     marginBottom: 16,
    //     paddingHorizontal: 8,
    //   },
    //   item: {
    //     padding: 16,
    //     borderBottomWidth: 1,
    //     borderBottomColor: '#ccc',
    //   },
    

});
const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30,
        backgroundColor: 'white',
    },
    inputAndroid: {
        fontSize: 16,
        fontWeight: 'bold',
        borderWidth: 1.0,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30,
        backgroundColor: 'white',
        marginBottom: 10,
    },
});

export default DetailScreen;