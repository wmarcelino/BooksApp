import styled from 'styled-components/native';

export const Card = styled.TouchableOpacity`
  flex-direction: row;
  padding: 8px;
  border-radius: 8px;
  background-color: #fff;
  margin-bottom: 8px;
`;

export const CardTitle = styled.Text`
  margin-left: 8px;
  margin-right: 8px;
  max-width: 150px;
  font-size: 16px;
  font-weight: bold;
  color: #000c66;
`;

export const CardAuthor = styled.Text`
  margin-left: 8px;
  margin-right: 8px;
  max-width: 150px;
  font-size: 12px;
  color: #000c66;
`;

export const Container = styled.View`
  flex: 1;
  padding-left: 16px;
  padding-right: 16px;
  background-color: #050a30;
`;

export const SearchInput = styled.TextInput.attrs({
  placeholderTextColor: '#000c66',
})`
  font-size: 16px;
  color: #000c66;
  background-color: #fff;
  border-radius: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const StyledFlatList = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingBottom: 150,
  },
})``;

export const StyledActivityIndicator = styled.ActivityIndicator.attrs({
  color: '#fff',
  size: 'large',
})`
  margin-bottom: 8px;
  margin-top: 8px;
`;

export const ErrorOrEmptyMessage = styled.Text`
  margin-top: 8px;
  font-size: 16px;
  color: #fff;
  align-self: center;
`;
