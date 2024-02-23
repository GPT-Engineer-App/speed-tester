import React, { useState } from "react";
import { Box, Button, Container, Heading, Text, VStack, Progress, useToast } from "@chakra-ui/react";
import { FaPlay, FaRedo } from "react-icons/fa";

const Index = () => {
  const [isTesting, setIsTesting] = useState(false);
  const [downloadSpeed, setDownloadSpeed] = useState(null);
  const [uploadSpeed, setUploadSpeed] = useState(null);
  const toast = useToast();

  const simulateSpeedTest = () => {
    setIsTesting(true);
    // Simulate network speed test by waiting for 2 seconds
    setTimeout(() => {
      // Generate random speeds for the sake of this example
      const randomDownloadSpeed = (Math.random() * 100).toFixed(2);
      const randomUploadSpeed = (Math.random() * 50).toFixed(2);
      setDownloadSpeed(randomDownloadSpeed);
      setUploadSpeed(randomUploadSpeed);
      setIsTesting(false);
      toast({
        title: "Speed test completed",
        description: "Results have been updated.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }, 2000);
  };

  return (
    <Container centerContent py={10}>
      <VStack spacing={6}>
        <Heading>Internet Speed Tester</Heading>
        <Text>Check your internet connection speed</Text>
        <Button size="lg" leftIcon={isTesting ? <FaRedo /> : <FaPlay />} onClick={simulateSpeedTest} isLoading={isTesting} loadingText="Testing..." colorScheme="teal" disabled={isTesting}>
          {isTesting ? "Retest" : "Start Test"}
        </Button>
        {downloadSpeed && (
          <Box width="100%">
            <Text>Download Speed: {downloadSpeed} Mbps</Text>
            <Progress value={downloadSpeed} max="100" hasStripe isAnimated />
          </Box>
        )}
        {uploadSpeed && (
          <Box width="100%">
            <Text>Upload Speed: {uploadSpeed} Mbps</Text>
            <Progress value={uploadSpeed} max="50" colorScheme="pink" hasStripe isAnimated />
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
