/* eslint-disable react/prop-types */

import { Box, Button, HorizontalStack, Text } from "@shopify/polaris";

export default function Disconnect() {
  return (
    <Box background="" style={{background:'grey',padding:'10px'}} borderRadius="20" borderBlockStartWidth="2" borderColor="green" >
      <HorizontalStack align="space-between" >

      <Placeholder
        label="SallaGhari, Bhaktapur 44800, Nepal"
        title="Nerd Platoon Pvt. Ltd."
        />
      <Button destructive>Disconnect</Button>
        </HorizontalStack>
    </Box>
  );
}

const Placeholder = ({
  label = "",
  title = "",
  height = "auto",
  width = "auto",
}) => {
  return (
    <div
      style={{
        background: "grey",
        height: height,
        width: width,
        borderRadius: "inherit",
      }}
    >
      <div
        style={{
          color: "var(--p-color-text)",
        }}
      >
        <Text as="h6">{title}</Text>
        <Text as="p" variant="bodyMd">
          {label}
        </Text>
      </div>
    </div>
  );
};
