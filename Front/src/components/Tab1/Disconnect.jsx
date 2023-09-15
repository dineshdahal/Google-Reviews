/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  HorizontalStack,
  Text,
  Thumbnail,
} from "@shopify/polaris";
import imgmain from './../../assets/nerdplatoon.png'


export default function Disconnect() {
  return (
    <Box borderWidth="2" padding={"3"} borderRadius="20" id="disconnect">
      <HorizontalStack align="space-between">
        <HorizontalStack gap={"2"}>
          <div className="disconnect-thumbnail">
          <Thumbnail
            source={imgmain}
            alt="Avatar"
            size="medium"
            />
            </div>
          <div className="d-flex align-items-center">
            <Placeholder
              title="Nerd Platoon Pvt. Ltd."
              label="SallaGhari, Bhaktapur 44800, Nepal"
            />
          </div>
        </HorizontalStack>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button size="slim" id="disconnect-btn" destructive>
            Disconnect
          </Button>
        </div>
      </HorizontalStack>
    </Box>
  );
}

const Placeholder = ({
  title = "",
  label = "",
  height = "auto",
  width = "auto",
}) => {
  return (
    <div
      style={{
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
        <Text as="h6" variant="headingMd">
          {title}
        </Text>
        <Text as="p" variant="bodyMd">
          {label}
        </Text>
      </div>
    </div>
  );
};
