import {
  Button,
  ChakraProvider,
  Checkbox,
  Container, Editable, EditableInput, EditablePreview,
  FormControl,
  FormHelperText,
  FormLabel, Heading, HStack,
  Input, Radio, RadioGroup,
  Stack, Text, Textarea, useClipboard, VStack
} from "@chakra-ui/react"
import {useEffect, useState} from "react";
import {generateTag} from "./utils";

function App() {
  const [text, setText] = useState('')
  const [resultText, setResultText] = useState('')
  const [color, setColor] = useState('none')
  const {hasCopied, onCopy} = useClipboard(resultText)
  const handleChange = (event) => {
    setText(event.target.value)
  }
  const handleClick = () => {
    setResultText(generateTag(text, color))

  }
  return (
      <ChakraProvider>
        <Container maxW="container.lg">
          <VStack spacing={5}>
            <Heading>Generate VALULRANT color messages</Heading>
            <RadioGroup defaultValue="red" onChange={setColor} value={color}>
              <HStack spacing="24px">
                <Radio value="none" colorScheme="blackAlpha">
                  <Text fontWeight={500} color="blackAlpha">None</Text>
                </Radio>
                <Radio value="red" colorScheme="red">
                  <Text fontWeight={500} color="red">Red</Text>
                </Radio>
                <Radio value="green" colorScheme="green">
                  <Text fontWeight={500} color="green">Green</Text>
                </Radio>
                <Radio value="blue" colorScheme="blue">
                  <Text fontWeight={500} color="blue">Blue</Text>
                </Radio>
                <Radio value="yellow" colorScheme="yellow">
                  <Text fontWeight={500} color="#D69E2E">Yellow</Text>
                </Radio>
                <Radio value="purple" colorScheme="purple">
                  <Text fontWeight={500} color="purple">Purple</Text>
                </Radio>
              </HStack>
            </RadioGroup>
            <Textarea placeholder="Type some trashes..." w={500} h={200} resize="none" value={text}
                      onChange={handleChange}/>
            <Button onClick={handleClick}>Generate</Button>
            {resultText &&
            <VStack>
              <Textarea w={500} h={200} resize="none" value={resultText}/>
              <Button onClick={onCopy}>
                {hasCopied ? "Copied" : "Copy"}
              </Button>
            </VStack>}
          </VStack>
        </Container>
      </ChakraProvider>
  );
}

export default App;
