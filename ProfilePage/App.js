import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TextInput} from 'react-native';

export default function App() {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}>
      <View style={styles.header}>
        <Text style={styles.headerText}>First Part Assignment</Text>
      </View>
      <View style={styles.header}>
        <Image
        source={{uri: 'https://picsum.photos/200/300'}}
        style={styles.image}
        resizeMode="contain"
      
      ></Image>
      </View>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.infoText}>Header Section:

Use a View component to create a header section.
Inside the View, use a Text component to display the title. 
Style the header to distinguish it from other sections.</Text>
        <Text style={styles.infoText}>Image Display:

Below the header, use an Image component to display an image from the internet or local assets.
Provide appropriate styling to ensure the image fits well within the layout without distorting its aspect ratio.</Text>
        <Text style={styles.infoText}>Information Section:

Create a ScrollView component that will contain multiple Text elements.
Populate the ScrollView with at least five Text components,. Ensure the content is long enough to require scrolling.</Text>
        <Text style={styles.infoText}>Input Form:

Below the ScrollView, create a form-like structure using View and TextInput components.
Include at least two TextInput fields – one for entering a name and another for a comment.
Add a Text component to serve as a submit button. (Note: The button does not need to be functional for this assignment.)</Text>
        <Text style={styles.infoText}>Testing:

Test your application on either a simulator/emulator or a physical device.
Ensure that all elements are visible and usable</Text>
      </ScrollView>

      <View style={styles.form}>
        <TextInput placeholder="Enter your name" style={styles.input} />
        <TextInput placeholder="Enter your comment" style={[styles.input, { marginTop: 10 }]} />
        <Text style={styles.submitButton}>Submit</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,

    
  },
  header: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'drakorange',
    backgroundColor: 'red',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  scrollView: {
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
  },

  form: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  submitButton: {
    marginTop: 10,
    backgroundColor: 'blue',
    color: 'white',
    textAlign: 'center',
    paddingVertical: 10,
    borderRadius: 5,
  },
  
});

