import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Image from 'next/image';
import { RightCheck } from '../atom/assets';
import ListTabBox from './ListTabBox';

export default function TabsBox() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
            <Box>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab className='' label="For UAE Residents" value="1" />
                <Tab className='' label="For Tourists" value="2" />
            </TabList>
            </Box>
            <TabPanel value="1">
                <ul>
                    <ListTabBox title='For UAE Residents' />
                    <ListTabBox title='For UAE Residents' />
                </ul>
            </TabPanel>
            <TabPanel value="2">
                <ul>
                    <ListTabBox title='Passport' />
                    <ListTabBox title='Visa' />
                    <ListTabBox title='Home Country Driving License.' />
                    <ListTabBox title='International Driving Permit (IDP).' />
                </ul>
            </TabPanel>
        </TabContext>
        </Box>
    );
}