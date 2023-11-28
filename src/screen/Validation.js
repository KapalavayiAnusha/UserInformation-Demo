//import React from 'react';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { View, Button, Text, TextInput } from 'react-native';

const schema = yup.object().shape({
  textInput: yup.string().required('TextInput is required'),
  rnPickerSelect: yup
    .string()
    .required('Selected Option is required')
});

const FormComponent = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      textInput: '',
      rnPickerSelect: '',
    },
  });

  const onPressSend = (formData) => {
    // Perform actions with the validated form data
  };

  return (
    <View>
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              value={value}
              onChangeText={onChange}
              placeholder="RNPickerSelect"
            />
          )}
          name="rnPickerSelect"
        />
        {errors.rnPickerSelect && <Text>{errors.rnPickerSelect.message}</Text>}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              value={value}
              onChangeText={onChange}
              placeholder="TextInput"
              secureTextEntry
            />
          )}
          name="textInput"
        />
        {errors.textInput && <Text>{errors.textInput.message}</Text>}
      </View>
      <Button title="Submit" onPress={handleSubmit(onPressSend)} />
    </View>
  );
};

export default FormComponent;
  