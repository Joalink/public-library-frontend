import React, { useEffect, useState } from "react";
import { Text, View, FlatList } from "react-native";
import api from "@/services/api";
import { BookInterface } from "@/interfaces/bookInterface";

export default function Table() {
  const [data, setData] = useState<BookInterface[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await api.get("/api/v1/books");
        setData(response.data);
        console.log("Datos obtenidos:", response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View>
          <Text>{item.title}</Text>
          <Text>ISBN: {item.isbn}</Text>
          <Text>Estado: {item.status}</Text>
        </View>
      )}
    />
  );
}
