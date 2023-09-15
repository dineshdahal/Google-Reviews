import { Box, Button, HorizontalStack, Text } from "@shopify/polaris"
import Layout1 from "./Layout1"

const TemplateBox1 = () => {
    return (<>
     <div className="my-2">
            <HorizontalStack align="space-between" blockAlign="center">
                <Text variant="HeadingSm" as="h4"><strong>1. Review With Badge-I</strong></Text>
                <Button size="slim" disabled><small>Active</small></Button>
            </HorizontalStack>
            </div>
       <Box  id="Tab1-preview" >
          
           <Layout1/>
        </Box>
        
    </>
    )
}

export default TemplateBox1;
