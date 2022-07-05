import Page from '@components/Page';
// components
// import WhitelabelLayout from './layouts';
import {
  Grid,
  Typography,
  Stack,
  Card,
  Button,
  CardContent,
  Menu,
  MenuItem,
  Tabs,
  Tab,
  AppBar,
} from '@mui/material';
import Container from '@mui/material/Container';
import { styled, alpha } from '@mui/material/styles';
import { useTranslation } from 'next-i18next';
import React from 'react';
import Image from '@components/Image';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { OrganizationInfoFragment } from '@generated/graphql';
import getConfig from 'next/config';
import RuntimeConfigs from '@utils/runtime-configs';

// ----------------------------------------------------------------------

type MenuProps = {
  anchorEl: null | Element | ((element: Element) => Element);
  open: boolean;
  onClose: VoidFunction;
};

const blogsList = Array.from(Array(12)).map(idx => ({
  id: idx,
  title: 'Apply These 7 Secret Techniques To Improve Event',
  description:
    'Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.',
  date_published: '4/1/2022',
  image: 'https://minimal-assets-api.vercel.app/assets/images/covers/cover_1.jpg',
}));

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(11),
  paddingBottom: theme.spacing(4),
}));

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 12,
    padding: theme.spacing(1),
    minWidth: 200,
    color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenuItem-root': {
      padding: '8px 20px',
      '&:active': {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      },
    },
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  flex: '1 1 0px',
  color: '#637381',
  '&.MuiButtonBase-root.MuiTab-root.Mui-selected': {
    color: theme.palette.common.white,
    backgroundColor: '#3f65eb',
  },
}));

const TabPanel = props => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
      style={{ marginTop: '32px' }}
    >
      {value === index && (
        <Grid container spacing={3}>
          {blogsList.map((blog, key) => (
            <Grid item md={4} sm={6} xs={12} key={key}>
              <BlogCard blog={blog} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

const BlogCard = ({ blog }) => {
  return (
    <Card
      sx={{
        borderRadius: 2,
        boxShadow:
          'rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px',
        bgcolor: 'common.white',
      }}
    >
      <CardContent>
        <Stack direction="column" spacing={2} mb={1}>
          <Image src={blog.image} alt="blog-image" />
          <Typography variant="h6" color="text.primary">
            {blog.title}
          </Typography>
        </Stack>
        <Typography variant="body1" color="text.secondary" mt={1.5} mb={2}>
          {blog.description}
        </Typography>
        <Typography variant="body1" color="text.secondary" mt={1.5} mb={2}>
          {blog.description}
        </Typography>
        <Stack mb={2} direction="row" spacing={1.5}>
          <Typography variant="body1" color="text.secondary">
            date published:
          </Typography>
          <Typography variant="body1" sx={{ color: '#3f65eb' }}>
            {blog.date_published}
          </Typography>
        </Stack>
        <Button variant="contained" sx={{ backgroundColor: '#3f65eb' }} fullWidth>
          Read More
        </Button>
      </CardContent>
    </Card>
  );
};

const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

// ----------------------------------------------------------------------

export default function IqamGlobalBlogContent({
  organization,
}: {
  organization?: OrganizationInfoFragment | null;
}) {
  const { t } = useTranslation();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedSort, setSelectedSort] = React.useState('Newest');
  const [tabValue, setTabValue] = React.useState(0);
  const open = Boolean(anchorEl);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const a11yProps = index => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  };

  return (
    // Before content layout must be defined
    <RootStyle
      title={`Ommar | Blog`}
      id="move_top"
      favicon={
        organization?.favicon
          ? `${publicRuntimeConfig.bunny.cdn.urlMedia}/${organization?.favicon}`
          : null
      }
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item flex={1}>
            <Typography variant="h4">Blog</Typography>
          </Grid>
          <Grid item>
            <Button
              id="demo-customized-button"
              aria-controls={open ? 'demo-customized-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              variant="contained"
              disableElevation
              onClick={handleClick}
              endIcon={open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              sx={{
                '&:hover': {
                  color: 'white',
                  backgroundColor: '#3f65eb',
                },
                backgroundColor: '#3f65eb',
                boxShadow: 'none',
              }}
            >
              {selectedSort}
            </Button>
            <StyledMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
              <MenuItem
                selected={selectedSort === 'Newest'}
                onClick={() => {
                  setSelectedSort('Newest');
                  handleClose();
                }}
                sx={{ padding: '8px 20px' }}
                disableRipple
              >
                Newest
              </MenuItem>
              <MenuItem
                selected={selectedSort === 'Trending'}
                onClick={() => {
                  setSelectedSort('Trending');
                  handleClose();
                }}
                sx={{ padding: '8px 20px' }}
                disableRipple
              >
                Trending
              </MenuItem>
            </StyledMenu>
          </Grid>
        </Grid>
        <AppBar
          sx={{
            position: 'static',
            mt: 4,
            display: 'flex',
            flexDirection: 'column',
            color: 'common.white',
            backgroundColor: '#f6f6f6',
            boxShadow:
              'rgb(145 158 171 / 20%) 0px 2px 4px -1px, rgb(145 158 171 / 14%) 0px 4px 5px 0px, rgb(145 158 171 / 12%) 0px 1px 10px 0px',
          }}
        >
          <Tabs
            value={tabValue}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
            TabIndicatorProps={{
              style: {
                backgroundColor: 'transparent',
              },
            }}
          >
            <StyledTab label="Donation" {...a11yProps(0)} />
            <StyledTab label="Campaign" {...a11yProps(1)} />
            <StyledTab label="Gift" {...a11yProps(2)} />
            <StyledTab label="Others" {...a11yProps(3)} />
          </Tabs>
        </AppBar>
        <TabPanel value={tabValue} index={0} />
        <TabPanel value={tabValue} index={1} />
        <TabPanel value={tabValue} index={2} />
        <TabPanel value={tabValue} index={3} />
      </Container>
    </RootStyle>
  );
}
