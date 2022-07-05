import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import { styled } from '@mui/system';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const SimpleTabPanel = styled('div')({
  width: '54%',
});

export function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <SimpleTabPanel
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Paper>{children}</Paper>
        </Box>
      )}
    </SimpleTabPanel>
  );
}

export function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
