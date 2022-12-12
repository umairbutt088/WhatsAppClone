import React, {useRef, useState, useMemo, FunctionComponent} from 'react';
import PhoneInput from 'react-native-phone-number-input';
import {theme} from '../../ui';

interface props {
  isNumber?: boolean;
}

export const PhoneTextInput: FunctionComponent<props> = ({isNumber}) => {
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const phoneInput = useRef<PhoneInput>(null);

  function formatPhoneNumber(value: string) {
    // if input value is falsy eg if the user deletes the input, then just return
    if (!value) return value;

    // clean the input for any non-digit values.
    const phoneNumber = value.replace(/[^\d]/g, '');

    // phoneNumberLength is used to know when to apply our formatting for the phone number
    const phoneNumberLength = phoneNumber.length;

    // we need to return the value with no formatting if its less then four digits
    // this is to avoid weird behavior that occurs if you  format the area code to early

    if (phoneNumberLength < 4) return phoneNumber;

    // if phoneNumberLength is greater than 4 and less the 7 we start to return
    // the formatted number
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }

    // finally, if the phoneNumberLength is greater then seven, we add the last
    // bit of formatting and return it.
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6,
    )}-${phoneNumber.slice(6, 10)}`;
  }

  const valid = useMemo(() => {
    return isNumber && value
      ? phoneInput.current?.isValidNumber(value) || value.length <= 14
      : true;
  }, [isNumber, value]);
  if (isNumber) {
    return (
      <PhoneInput
        ref={phoneInput}
        layout="first"
        disabled={false}
        disableArrowIcon={true}
        defaultValue={value}
        value={value}
        withDarkTheme={true}
        defaultCode="US"
        onChangeText={setValue}
        onChangeFormattedText={setFormattedValue}
        // countryPickerProps={{disableNativeModal: true}}
        containerStyle={{
          height: 60,
          width: '100%',
          alignSelf: 'center',
          borderWidth: 2,
          borderColor: valid ? theme.colors.primery100 : theme.colors.red100,
        }}
        textInputProps={{
          value: value && formatPhoneNumber(value),
          maxLength: 14,
        }}
        textInputStyle={{
          fontSize: theme.fontSize.explanation,
          height: 56,
        }}
        codeTextStyle={{
          fontSize: theme.fontSize.explanation,
        }}
        textContainerStyle={{
          backgroundColor: valid ? theme.colors.white : theme.colors.red10,
        }}
        countryPickerButtonStyle={{
          backgroundColor: valid ? theme.colors.white : theme.colors.red10,
        }}
      />
    );
  } else {
    return null;
  }
};
