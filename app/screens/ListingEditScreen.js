import React, { useState, useRef } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image."),
});

const categories = [
  { label: "Furniture", value: 1, backgroundColor: "red", icon: "floor-lamp" },
  { label: "Clothing", value: 2, backgroundColor: "green", icon: "shoe-heel" },
  { label: "Camera", value: 3, backgroundColor: "blue", icon: "camera" },
  { label: "Cars", value: 4, backgroundColor: "orange", icon: "car" },
  { label: "Cameras", value: 5, backgroundColor: "purple", icon: "camera" },
  { label: "Games", value: 6, backgroundColor: "yellow", icon: "cards" },
  {
    label: "Movies & Music",
    value: 7,
    backgroundColor: "pink",
    icon: "headphones",
  },
  {
    label: "Books",
    value: 8,
    backgroundColor: "brown",
    icon: "book-open-variant",
  },
  { label: "Other", value: 9, backgroundColor: "grey", icon: "application" },
];

function ListingEditScreen({ navigation }) {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const resetFormRef = useRef(null);  // Use useRef instead of useState

  const handleSubmit = async (values, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    resetFormRef.current = resetForm;  // Store in ref

    const totalSteps = 20;
    for (let i = 0; i <= totalSteps; i++) {
      setProgress(i / totalSteps);
      await new Promise((resolve) => setTimeout(resolve, 150));
    }

    const listing = {
      ...values,
      location,
    };

    console.log("Listing submitted:", listing);
  };

  const handleUploadDone = () => {
    setUploadVisible(false);
    setProgress(0);
    
    // Reset the form
    if (resetFormRef.current) {
      resetFormRef.current();
      resetFormRef.current = null;
    }

    // Navigate to listings
    navigation.navigate("Listings");
  };

  return (
    <Screen style={styles.container}>
      <UploadScreen
        onDone={handleUploadDone}
        progress={progress}
        visible={uploadVisible}
      />
      <Form
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <Picker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListingEditScreen;