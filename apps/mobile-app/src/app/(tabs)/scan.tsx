import { useState } from "react";

import {
  View,
  Text,
  Button,
  Image,
  ActivityIndicator,
  ScrollView,
} from "react-native";

import * as ImagePicker from "expo-image-picker";

import { api } from "../../services/api";

export default function ScanScreen() {
  const [image, setImage] = useState<
    string | null
  >(null);

  const [loading, setLoading] =
    useState(false);

  const [coupon, setCoupon] =
    useState<any>(null);

  const pickImage = async () => {
    const result =
      await ImagePicker.launchImageLibraryAsync({
        mediaTypes:
          ImagePicker.MediaTypeOptions.Images,

        quality: 1,
      });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const uploadCoupon = async () => {
    if (!image) return;

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("image", {
        uri: image,
        name: "coupon.jpg",
        type: "image/jpeg",
      } as any);

      const response = await api.post(
        "/coupons/upload",
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

      setCoupon(response.data.data);

    } catch (error) {
      console.error(error);

    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{
        padding: 20,
        gap: 20,
      }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: "700",
        }}
      >
        Scan Coupon
      </Text>

      <Button
        title="Pick Image"
        onPress={pickImage}
      />

      {image && (
        <Image
          source={{ uri: image }}
          style={{
            width: "100%",
            height: 250,
            borderRadius: 12,
          }}
        />
      )}

      {image && (
        <Button
          title="Upload Coupon"
          onPress={uploadCoupon}
        />
      )}

      {loading && <ActivityIndicator />}

      {coupon && (
        <View
          style={{
            padding: 16,
            borderWidth: 1,
            borderRadius: 12,
            gap: 10,
          }}
        >
          <Text>
            Company:{" "}
            {coupon.company_name}
          </Text>

          <Text>
            Coupon Code:{" "}
            {coupon.coupon_code}
          </Text>

          <Text>
            Discount: {coupon.discount}
          </Text>

          <Text>
            Expiry: {coupon.expiry_date}
          </Text>

          <Text>
            Terms: {coupon.terms}
          </Text>
        </View>
      )}
    </ScrollView>
  );
}