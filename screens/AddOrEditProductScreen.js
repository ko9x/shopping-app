import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import Screen from "../components/UI/Screen";
import { Formik } from "formik";
import * as yup from "yup";

export default function AddOrEditProductScreen({ navigation, route }) {
  const { titlePreface } = route.params;

  const fullTitle = `${titlePreface} Product`;

  useLayoutEffect(() => {
    navigation.setOptions({ title: fullTitle });
  }, [titlePreface]);

  const submitHandler = (values, resetForm) => {
    fetch(
      "https://react-http-max-54195-default-rtdb.firebaseio.com/products.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: values.title,
          description: values.description,
          price: values.price,
          imageAddress: values.imageAddress,
        }),
      }
    )
      .then((response) => {
        if (response.status === 200) {
          resetForm();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <Screen>
      <View>
        <Formik
          initialValues={{
            title: "",
            description: "",
            price: "",
            imageAddress: "",
          }}
          onSubmit={(values, { resetForm }) => submitHandler(values, resetForm)}
          validationSchema={yup.object().shape({
            title: yup
              .string()
              .required("Please enter a title for the product"),
            description: yup
              .string()
              .required("Please enter a description for the product"),
            price: yup
              .number()
              .required("Please enter a price for the product"),
            imageAddress: yup
              .string()
              .required("Please add a link to your jpg, jpeg or png file"),
          })}
        >
          {({
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            values,
          }) => (
            <View>
              <Text style={styles.label}>Title</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange("title")}
                onBlur={handleBlur("title")}
                value={values.title}
              />
              {touched.title && errors.title && (
                <Text style={styles.error}>{errors.title}</Text>
              )}
              <Text style={styles.label}>Description</Text>
              <TextInput
                style={{...styles.input, fontSize: 15}}
                height={100}
                multiline
                onChangeText={handleChange("description")}
                onBlur={handleBlur("description")}
                value={values.description}
              />
              {touched.description && errors.description && (
                <Text style={styles.error}>{errors.description}</Text>
              )}
              <Text style={styles.label}>Price</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange("price")}
                onBlur={handleBlur("price")}
                value={values.price}
              />
              {touched.price && errors.price && (
                <Text style={styles.error}>{errors.price}</Text>
              )}
              <Text style={styles.label}>Image Address</Text>
              <TextInput
                style={styles.input}
                height={100}
                multiline
                onChangeText={handleChange("imageAddress")}
                onBlur={handleBlur("imageAddress")}
                value={values.imageAddress}
              />
              {touched.imageAddress && errors.imageAddress && (
                <Text style={styles.error}>{errors.imageAddress}</Text>
              )}
              <Button onPress={handleSubmit} title="Submit" />
            </View>
          )}
        </Formik>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  label: { fontSize: 20 },
  input: {
    borderColor: "black",
    borderWidth: 1,
    fontSize: 20,
    paddingLeft: 5,
    marginVertical: 10,
    width: 300,
    height: 50,
  },
  error: {
    color: "red",
  },
});
