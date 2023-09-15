import { Box, Button, HorizontalStack, Text } from "@shopify/polaris"
import Layout3 from "./Layout3";


const TemplateBox3 = () => {
    return (<>
        <Box>
            <div className="my-2">
                <HorizontalStack align="space-between">
                    <Text variant="HeadingSm" as="h4"><strong>3. Review With Badge-III</strong></Text>
                    <Button size="slim" primarySuccess><small>Select</small></Button>
                </HorizontalStack>
            </div>
           <Layout3/>
        </Box>
    </>
    )
}

export default TemplateBox3;
