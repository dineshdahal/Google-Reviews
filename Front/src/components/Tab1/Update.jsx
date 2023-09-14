import { Box, Button, HorizontalStack, Text } from '@shopify/polaris';

const Update = () => {
    return (
        <Box background="" id='update-box' padding={'3'} borderWidth='2'>
            <HorizontalStack align='space-between' >
                <Placeholder label="You can update reviews once in every 24 hour (Last Updated: Not updated yet)" />
                <Button size='medium'>Update Now</Button>
            </HorizontalStack>

        </Box>
    );
}

const Placeholder = ({ label = '', height = 'auto', width = 'auto' }) => {
    return (
        <div
            style={{
                background: '#fff',
                height: height,
                width: width,
                borderRadius: 'inherit',
                display:'flex',
                alignItems:'center'
            }}
        >
            <div >
                <Text as="p" variant="">
                    {label}
                </Text>
            </div>
        </div>
    );
};
export default Update