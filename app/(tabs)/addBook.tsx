import React from 'react'
import { View, StyleSheet } from "react-native";
import { Button, Input, XStack, YStack, Text, SizableText } from "tamagui";

export default function AddBook() {
  return (
    <View>
      <Text>Registro de Libro</Text>
      <YStack overflow="hidden" space="$2" margin="$3" padding="$2">
        <Input placeholder="Titulo de la libro"></Input>
        <Input placeholder="ISBN del libro"></Input>
        <Input placeholder="Estaus del libro"></Input>
        <Button>Cancelar</Button>
        <Button>Acceptar</Button>
      </YStack>
    </View>
  );
}

