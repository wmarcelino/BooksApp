import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  padding-left: 16px;
  padding-right: 16px;
  align-content: center;
  background-color: #fff;
`;

export const StyledImage = styled.Image`
  align-self: center;
  border-radius: 16px;
`;

export const Title = styled.Text`
  max-width: 150px;
  font-size: 16px;
  margin-top: 16px;
  margin-bottom: 16px;
  font-weight: bold;
  color: #000c66;
  align-self: center;
`;

export const BookAtributte = styled.Text`
  margin-left: 8px;
  margin-right: 8px;
  font-size: 14px;
  margin-bottom: 8px;
  color: #000c66;
`;

export const StyledActivityIndicator = styled.ActivityIndicator.attrs({
  color: '#fff',
  size: 'large',
})`
  margin-bottom: 8px;
  margin-top: 8px;
`;
