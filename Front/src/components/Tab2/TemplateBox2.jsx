import { Box, Button, HorizontalStack, Text } from "@shopify/polaris"
import Layout2 from "./Layout2"

const TemplateBox2 = () => {
    return (<>
            <div className="my-2">
            <HorizontalStack align="space-between" blockAlign="center">
                <Text variant="HeadingSm" as="h4"><strong>2. Review With Badge-II</strong></Text>
                <Button size="slim" primarySuccess ><small>Select</small></Button>
            </HorizontalStack>
            </div>
        <Box id="Tab1-preview">
            <Layout2/>
        </Box>
    </>
    )
}

export default TemplateBox2;
