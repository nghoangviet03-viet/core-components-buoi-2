import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StatusBar style="auto" />

      <View>
        <Text style={styles.title}>Đăng nhập</Text>

        <Text style={styles.label}>Nhập số điện thoại</Text>
        <Text style={styles.description}>
          Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản
        </Text>

        <TextInput
          placeholder="Nhập số điện thoại của bạn"
          keyboardType="phone-pad"
          style={styles.input}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Tiếp tục</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center'
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 15
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
    fontSize: 16,
    marginBottom: 30
  },
  button: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 14,
    borderRadius: 8
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: '#777'
  }
});
