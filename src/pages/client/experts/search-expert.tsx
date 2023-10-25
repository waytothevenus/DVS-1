import { Card, CardContent, Grid, Tabs, Tab, Button, Typography, Stack, List, ListItem, Divider, Rating } from '@mui/material';
import useTheme from '@mui/system/useTheme';
import { useNavigate } from 'react-router-dom';
import IconButton from 'components/@extended/IconButton';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedinIcon from '@mui/icons-material/LinkedIn';
import WifiTetheringErrorIcon from '@mui/icons-material/WifiTetheringError';
import SubtitlesIcon from '@mui/icons-material/Subtitles';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useLocation } from 'react-router-dom';
import Avatar from 'components/@extended/Avatar';
import { Box } from '@mui/system';
import { useState } from 'react';
import FeedbackView from 'components/cards/feedaback-view';
import Drawer from '@mui/material/Drawer';
import Calendar from 'components/Calendar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { dispatch } from 'store';
import { insertChat } from 'store/reducers/chat';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const expert = {
  avatar: 'assets/images/avatar1.png',
  name: 'John Smith',
  email: 'georgebollin9@gmail.com',
  title: 'Senior Software Developer',
  description: 'A senior software developer with over 7 years of experience.',
  tools: 'Jira, Visual Studio, Confluence',
  expertises: 'Java, React, Node',
  industry: 'Information Security',
  skills: 'Frontend Design, Backend Design',
  experience: '15+ Years of Experience',
  previousCompanies: 'Google',
  blogDate: '30th Apr 2023',
  blogTitle: 'Slack',
  podCast: 'Podcast',
  podCastDate: '30th Apr 2023',
  feedbackList: [
    {
      name: 'Andrei',
      rate: 4,
      review: '"This is the best combination."'
    },
    {
      name: 'Andrei',
      rate: 4,
      review: '"This is the best combination."'
    },
    {
      name: 'Andrei',
      rate: 4,
      review: '"This is the best combination."'
    }
  ],
  meetingList: [
    {
      date: '30th Apr 2023',
      startTime: '3:00 PM',
      endTime: '4:00 PM',
      duration: '40 minutes',
      mode: 'Video',
      amountPaid: '$200',
      meetingAgenda: 'Discussing for task'
    },
    {
      date: '30th Apr 2023',
      startTime: '3:00 PM',
      endTime: '4:00 PM',
      duration: '40 minutes',
      mode: 'Video',
      amountPaid: '$200',
      meetingAgenda: 'Discussing for task'
    },
    {
      date: '30th Apr 2023',
      startTime: '3:00 PM',
      endTime: '4:00 PM',
      duration: '40 minutes',
      mode: 'Video',
      amountPaid: '$200',
      meetingAgenda: 'Discussing for task'
    }
  ],
  yourReview: 'Working with this developer was very interesting.',
  expertReview: 'He is the best developer.',
  rate: 4,
  reviews: 20,
  completedjobs: 20,
  moneySpent: '$20000',
  workingFrom: '22/01/2022',
  nextAvailability: '2:00 PM, Tuesday',
  duration: '30 minutes',
  languages: [
    {
      language: 'English',
      proficiency: 'Fluent'
    },
    {
      language: 'Spanish',
      procifiency: 'Native'
    }
  ],
  education: [
    {
      course: 'MBA',
      graduatedAt: '2014',
      loation: 'Symbiosis, Pune'
    },
    {
      course: 'MBA',
      graduatedAt: '2014',
      loation: 'Symbiosis, Pune'
    }
  ],
  jobs: [
    {
      title: 'Project Name',
      from: 'Jan 2020',
      to: 'June 2021',
      description: 'Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie'
    },
    {
      title: 'Project Name',
      from: 'Jan 2020',
      to: 'June 2021',
      description: 'Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie'
    }
  ],
  linkedin: 'https://linkedin/...',
  twitter: 'https://twitter/...'
};
const SearchedExperts = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const expertData = location.state.expert;
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isLeftDrawerOpen, setLeftDrawerOpen] = useState(false);
  const handleBookingClick = () => {
    setDrawerOpen(true);
  };
  const handleMessageClick = () => {
    dispatch(insertChat({ type: 'general', to: expert.email, text: 'hi' }));
    navigate('/messages');
  };

  const handleViewContractClick = () => {
    navigate('/contract');
  };
  const handleFaceBookClicked = () => {
    navigate(`${expert.twitter}`);
  };
  const handleLinkedinClicked = () => {
    navigate(`${expert.linkedin}`);
  };
  const handleFavouriteClick = () => {};
  const handleMoreClick = () => {};
  const handleHireClick = () => {};
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function CustomTabPanel(expert: TabPanelProps) {
    const { children, value, index, ...other } = expert;

    return (
      <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
        {value === index && (
          <Box sx={{ p: 3 }}>
            <>{children}</>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`
    };
  }

  const toggleDrawer = (open: boolean) => (event: any) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };
  const toggleLeftDrawer = (open: boolean) => (event: any) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setLeftDrawerOpen(open);
  };

  const handleBackClick = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)} sx={{ minWidth: '70vw' }}>
        <List sx={{ minWidth: '70vw' }}>
          <ListItem>
            <Grid container>
              <Grid item xs={6}>
                <Stack direction="row" sx={{ display: 'inline-flex', alignItems: 'center' }}>
                  <Button onClick={handleBackClick}>
                    <ArrowBackIcon sx={{ fontSize: '2rem' }} />
                  </Button>
                  <Typography variant="h2" sx={{ color: theme.palette.secondary }}>
                    Back
                  </Typography>
                </Stack>
                <Typography variant="h3">{expert.name}</Typography>
                <Typography variant="h2">{expert.duration}Meeting</Typography>
                <Typography variant="h3">{expert.duration}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Calendar receiverEmail={expert.email} />
              </Grid>
            </Grid>
          </ListItem>
        </List>
      </Drawer>
      <Drawer anchor="left" open={isLeftDrawerOpen} onClose={toggleLeftDrawer(false)} sx={{ minWidth: '70vw' }}>
        <List sx={{ width: '50vw' }}>
          <ListItem>
            <Grid container spacing={5}>
              <Grid item xs={12}>
                <Box border={'1px solid grey'} borderRadius={'10px'} minHeight={'10vh'}>
                  <Grid container>
                    <Grid item xs={3} sx={{ paddingTop: '1vh', paddingBottom: '1vh' }}>
                      <Avatar
                        alt="expert"
                        src={expert.avatar}
                        sx={{ height: '10vh', width: '10vh', marginLeft: '2vw', marginRight: '7vw' }}
                      />
                    </Grid>
                    <Grid item xs={4} direction={'column'} sx={{ marginTop: '1vh' }}>
                      <Typography variant="h3" sx={{ color: theme.palette.primary.darker, fontWeight: 'bold' }}>
                        {expert.name}
                      </Typography>
                      <Typography variant="h5" sx={{ color: 'black' }}>
                        {expert.title}
                      </Typography>
                      <Typography variant="h5" sx={{ color: 'black' }}>
                        {expert.experience}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Card sx={{ width: '100%', minHeight: '70vh' }}>
                  <CardContent>
                    <Grid container>
                      <Grid item xs={12}>
                        <Box sx={{ borderBottom: 1, bortderColor: 'divider', width: '100%' }}>
                          <Tabs value={value} onChange={handleChange} aria-label="Job tabs">
                            <Tab label="Overview" {...a11yProps(0)} />
                            <Tab label="Jobs" {...a11yProps(1)} />
                            <Tab label="Feedback" {...a11yProps(2)} />
                            <Tab label="Content Library" {...a11yProps(3)} />
                          </Tabs>
                        </Box>
                      </Grid>
                      <Grid item xs={12}>
                        <CustomTabPanel value={value} index={0}>
                          <Grid container spacing={7} sx={{ display: 'flex', alignItems: 'left' }}>
                            <Grid item xs={12}>
                              <Grid container spacing={5}>
                                <Grid item xs={12}>
                                  <Typography variant="h5">About {expertData.name}</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                  <Typography variant="body1">{expert.description}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                  <Typography variant="h5">Industry</Typography>
                                  <Typography variant="body1">{expert.industry}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                  <Typography variant="h5">Years of Experience</Typography>
                                  <Typography variant="body1">{expert.experience}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                  <Typography variant="h5">Tools</Typography>
                                  <Typography variant="body1">{expert.tools}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                  <Typography variant="h5">Expertise</Typography>
                                  <Typography variant="body1">{expert.expertises}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                  <Typography variant="h5">Skills</Typography>
                                  <Typography variant="body1">{expert.skills}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                  <Typography variant="h5">Previous Companies</Typography>
                                  <Typography variant="body1">{expert.previousCompanies}</Typography>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </CustomTabPanel>
                      </Grid>
                      <Grid item xs={12}>
                        <CustomTabPanel value={value} index={1}>
                          {expert.jobs?.map((item: any) => (
                            <Card variant="outlined" sx={{ borderColor: 'black', width: '100%', height: '20vh', marginBottom: '1rem' }}>
                              <Grid item xs={12} margin={2}>
                                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                  <Typography variant="h4">{item.title}</Typography>
                                  <Typography variant="body1" style={{ fontSize: '1rem' }}>
                                    {item.from} to {item.to}
                                  </Typography>
                                </Stack>
                              </Grid>
                              <Grid item xs={12} margin={2}>
                                <Typography variant="body1" style={{ fontSize: '1.1rem' }}>
                                  {item.description}
                                </Typography>
                              </Grid>
                            </Card>
                          ))}
                        </CustomTabPanel>
                      </Grid>
                      <Grid item xs={12}>
                        <CustomTabPanel value={value} index={2}>
                          <Grid container spacing={7} sx={{ display: 'flex', alignItems: 'left' }}>
                            <Grid item xs={12}>
                              {expert.feedbackList.map((item: any) => (
                                <FeedbackView title={item.name} rate={item.rate} review={item.review} viewRate={false} />
                              ))}
                            </Grid>
                          </Grid>
                        </CustomTabPanel>
                      </Grid>
                      <Grid item xs={12}>
                        <CustomTabPanel value={value} index={3}>
                          <Grid container spacing={5}>
                            <Grid item xs={12}>
                              <Grid container spacing={3}>
                                <Grid item xs={1}>
                                  <IconButton sx={{ backgroundColor: theme.palette.primary.lighter, height: '5vh', width: '5vh' }}>
                                    <SubtitlesIcon sx={{ color: theme.palette.primary.dark }} />
                                  </IconButton>
                                </Grid>
                                <Grid item xs={11}>
                                  <Grid container>
                                    <Grid item xs={2}>
                                      <Typography variant="h5">Blog Title</Typography>
                                    </Grid>
                                    <Grid item xs={6}></Grid>
                                    <Grid item xs={4}>
                                      <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                                        {expert.blogDate}
                                      </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                      <Typography variant="body1">{expert.blogTitle}</Typography>
                                    </Grid>
                                  </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                  <Divider />
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item xs={12}>
                              <Grid container spacing={3}>
                                <Grid item xs={1}>
                                  <IconButton sx={{ backgroundColor: theme.palette.primary.lighter, height: '5vh', width: '5vh' }}>
                                    <WifiTetheringErrorIcon sx={{ color: theme.palette.primary.dark }} />
                                  </IconButton>
                                </Grid>
                                <Grid item xs={11}>
                                  <Grid container>
                                    <Grid item xs={2}>
                                      <Typography variant="h5">Podcast</Typography>
                                    </Grid>
                                    <Grid item xs={6}></Grid>
                                    <Grid item xs={4}>
                                      <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                                        {expert.podCastDate}
                                      </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                      <Typography variant="body1">{expert.podCast}</Typography>
                                    </Grid>
                                  </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                  <Divider />
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </CustomTabPanel>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </ListItem>
        </List>
      </Drawer>
      <Grid container spacing={3} sx={{ marginTop: '1vh' }}>
        <Grid item xs={3}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Grid container spacing={1}>
                    <Grid item xs={12} display={'inline-flex'} justifyContent="space-between" alignItems={'center'}>
                      <Typography variant="body1">Completed Jobs</Typography>
                      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                        {expert.completedjobs}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} display={'inline-flex'} justifyContent="space-between">
                      <Rating value={expert.rate} readOnly />
                      <Stack direction={'row'} alignItems="center" justifyContent={'center'} columnGap={1}>
                        <Typography variant="body1" style={{ color: 'rgb(250,175,0)', fontSize: '1rem' }}>
                          {expert.rate}/5
                        </Typography>
                        <Typography variant="body1" style={{ color: theme.palette.primary.darker, fontSize: '1rem' }}>
                          (20 Reviews)
                        </Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Grid container spacing={1}>
                    <Grid item xs={12} display={'inline-flex'} justifyContent="space-between" alignItems={'center'}>
                      <Typography variant="body1">Next Availability</Typography>
                      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                        {expert.nextAvailability}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} display={'inline-flex'} justifyContent="space-between" alignItems={'center'}>
                      <Typography variant="body1">Duration</Typography>
                      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                        {expert.duration}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} display={'inline-flex'} justifyContent="space-between" alignItems={'center'}>
                      <Stack direction="row" spacing={1} sx={{ width: '100%' }}>
                        <Button
                          sx={{ backgroundColor: theme.palette.primary.darker, color: 'white', minWidth: '10vw' }}
                          onClick={handleBookingClick}
                        >
                          Book a call
                        </Button>
                        <Button
                          sx={{ backgroundColor: theme.palette.primary.darker, color: 'white', minWidth: '10vw' }}
                          onClick={handleMessageClick}
                        >
                          Message
                        </Button>
                      </Stack>
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        variant="outlined"
                        style={{ backgroundColor: 'white', color: '0860c4', width: '100%', textTransform: 'none' }}
                        onClick={handleViewContractClick}
                      >
                        Hire this Expert
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card sx={{ paddingBottom: '2vh' }}>
                <CardContent>
                  <Grid container spacing={2} sx={{ minHeight: '10vh' }}>
                    <Grid item xs={12}>
                      <Typography variant={'body1'}>1:1 Consultancy</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{ minHeight: '4vh' }}>
                        {expert.languages?.map((item: any) => (
                          <Stack
                            display={'inline-flex'}
                            justifyContent={'space-between'}
                            sx={{
                              backgroundColor: 'lightgrey',
                              display: 'flex',
                              justifyContent: 'space-between',
                              marginBottom: '2vh',
                              borderRadius: '5px'
                            }}
                          >
                            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                              <Typography variant="h5" sx={{ padding: '1rem' }}>
                                Let's Connect!
                              </Typography>
                              <Typography variant="h6" sx={{ padding: '1rem' }}>
                                45 Min
                              </Typography>
                            </Stack>
                            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} paddingRight={'1rem'}>
                              <Typography variant="h4" sx={{ padding: '1rem' }}>
                                AED 100
                              </Typography>
                              <ArrowForwardIcon />
                            </Stack>
                          </Stack>
                        ))}
                      </Box>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card sx={{ paddingBottom: '2vh' }}>
                <CardContent>
                  <Grid container spacing={2} sx={{ minHeight: '10vh' }}>
                    <Grid item xs={12}>
                      <Typography variant={'body2'}>Languages</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{ minHeight: '4vh' }}>
                        {expert.languages?.map((item: any) => (
                          <Stack
                            direction={'row'}
                            display={'inline-flex'}
                            justifyContent={'space-between'}
                            sx={{
                              backgroundColor: 'lightgrey',
                              display: 'flex',
                              justifyContent: 'space-between',
                              marginBottom: '2vh',
                              borderRadius: '5px'
                            }}
                          >
                            <Typography variant="h5" sx={{ padding: '10px' }}>
                              {item?.language}
                            </Typography>
                            <Typography variant="h6" sx={{ padding: '10px' }}>
                              {item?.proficiency}
                            </Typography>
                          </Stack>
                        ))}
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant={'body2'}>Education</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{ minHeight: '4vh' }}>
                        {expert.education?.map((item: any) => (
                          <Stack
                            direction={'row'}
                            display={'inline-flex'}
                            justifyContent={'space-between'}
                            sx={{
                              backgroundColor: 'lightgrey',
                              display: 'flex',
                              justifyContent: 'space-between',
                              marginBottom: '2vh',
                              borderRadius: '5px'
                            }}
                          >
                            <Grid container>
                              <Grid item xs={6}>
                                <Typography variant="h5" sx={{ padding: '10px' }}>
                                  {item?.course}
                                </Typography>
                              </Grid>
                              <Grid item xs={6}>
                                <Typography variant="h6" sx={{ padding: '10px', display: 'flex', justifyContent: 'flex-end' }}>
                                  {item?.graduatedAt}
                                </Typography>
                              </Grid>
                              <Grid item xs={6}>
                                {item.location}
                              </Grid>
                              <Grid item xs={6}></Grid>
                            </Grid>
                          </Stack>
                        ))}
                      </Box>
                    </Grid>

                    <Grid item xs={12}>
                      <Typography variant="body2">Social Media</Typography>
                    </Grid>
                    <Grid item xs={3} direction={'row'}>
                      <Stack direction={'row'}>
                        <IconButton onClick={handleLinkedinClicked}>
                          <LinkedinIcon />
                        </IconButton>
                        <IconButton onClick={handleFaceBookClicked}>
                          <TwitterIcon />
                        </IconButton>
                      </Stack>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={9}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card sx={{ minHeight: '15vh' }}>
                <CardContent>
                  <Grid container spacing={4}>
                    <Grid item xs={2}>
                      <Avatar alt="avatar" src={expert.avatar} sx={{ minHeight: '10vh', minWidth: '10vh' }} />
                    </Grid>
                    <Grid item xs={3}>
                      <button
                        onClick={toggleLeftDrawer(true)}
                        style={{ color: theme.palette.primary.darker, fontSize: '2rem', backgroundColor: 'white', border: 'none' }}
                      >
                        {expertData.name}
                      </button>
                      <Typography variant="body1">{expertData.title}</Typography>
                      <Typography variant="body1">{expert.experience}</Typography>
                    </Grid>
                    <Grid item xs={7} sx={{ display: 'flex', justifyContent: 'right', alignItems: 'right' }}>
                      <Grid container spacing={1}>
                        <Grid item xs={12}></Grid>
                        <Grid item xs={8}></Grid>
                        <Grid item xs={4}>
                          <Grid container spacing={3}>
                            <Grid item xs={6} display={'flex'} justifyContent={'flex-end'}>
                              <Button
                                sx={{
                                  whiteSpace: 'nowrap',
                                  color: theme.palette.primary.dark,
                                  fontWeight: 'bold',
                                  width: '8rem'
                                }}
                                variant="outlined"
                                onClick={handleHireClick}
                              >
                                Message
                              </Button>
                            </Grid>
                            <Grid item xs={3} sx={{ display: 'flex', alighItems: 'right', justifyContent: 'flex-end' }}>
                              <IconButton onClick={handleFavouriteClick}>
                                <FavoriteBorderIcon sx={{ color: 'black', fontSize: '2rem' }} />
                              </IconButton>
                            </Grid>
                            <Grid item xs={3} sx={{ display: 'flex', alighItems: 'right', justifyContent: 'flex-end' }}>
                              <IconButton onClick={handleMoreClick}>
                                <MoreVertIcon sx={{ color: 'black', fontSize: '2rem' }} />
                              </IconButton>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card sx={{ width: '100%', minHeight: '70vh' }}>
                <CardContent>
                  <Grid container>
                    <Grid item xs={12}>
                      <Box sx={{ borderBottom: 1, bortderColor: 'divider', width: '100%' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="Job tabs">
                          <Tab label="Overview" {...a11yProps(0)} />
                          <Tab label="Jobs" {...a11yProps(1)} />
                          <Tab label="Feedback" {...a11yProps(2)} />
                          <Tab label="Content Library" {...a11yProps(3)} />
                        </Tabs>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <CustomTabPanel value={value} index={0}>
                        <Grid container spacing={7} sx={{ display: 'flex', alignItems: 'left' }}>
                          <Grid item xs={12}>
                            <Grid container spacing={5}>
                              <Grid item xs={12}>
                                <Typography variant="h5">About {expert.name}</Typography>
                              </Grid>
                              <Grid item xs={12}>
                                <Typography variant="body1">{expert.description}</Typography>
                              </Grid>
                              <Grid item xs={6}>
                                <Typography variant="h5">Industry</Typography>
                                <Typography variant="body1">{expert.industry}</Typography>
                              </Grid>
                              <Grid item xs={6}>
                                <Typography variant="h5">Years of Experience</Typography>
                                <Typography variant="body1">{expert.experience}</Typography>
                              </Grid>
                              <Grid item xs={6}>
                                <Typography variant="h5">Tools</Typography>
                                <Typography variant="body1">{expert.tools}</Typography>
                              </Grid>
                              <Grid item xs={6}>
                                <Typography variant="h5">Expertise</Typography>
                                <Typography variant="body1">{expert.expertises}</Typography>
                              </Grid>
                              <Grid item xs={6}>
                                <Typography variant="h5">Skills</Typography>
                                <Typography variant="body1">{expert.skills}</Typography>
                              </Grid>
                              <Grid item xs={6}>
                                <Typography variant="h5">Previous Companies</Typography>
                                <Typography variant="body1">{expert.previousCompanies}</Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </CustomTabPanel>
                    </Grid>
                    <Grid item xs={12}>
                      <CustomTabPanel value={value} index={1}>
                        {expert.jobs?.map((item: any) => (
                          <Card variant="outlined" sx={{ borderColor: 'black', width: '100%', height: '20vh', marginBottom: '1rem' }}>
                            <Grid item xs={12} margin={2}>
                              <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                <Typography variant="h4">{item.title}</Typography>
                                <Typography variant="body1" style={{ fontSize: '1rem' }}>
                                  {item.from} to {item.to}
                                </Typography>
                              </Stack>
                            </Grid>
                            <Grid item xs={12} margin={2}>
                              <Typography variant="body1" style={{ fontSize: '1.1rem' }}>
                                {item.description}
                              </Typography>
                            </Grid>
                          </Card>
                        ))}
                      </CustomTabPanel>
                    </Grid>
                    <Grid item xs={12}>
                      <CustomTabPanel value={value} index={2}>
                        <Grid container spacing={7} sx={{ display: 'flex', alignItems: 'left' }}>
                          <Grid item xs={12}>
                            {expert.feedbackList.map((item: any) => (
                              <FeedbackView title={item.name} rate={item.rate} review={item.review} viewRate={false} />
                            ))}
                          </Grid>
                        </Grid>
                      </CustomTabPanel>
                    </Grid>
                    <Grid item xs={12}>
                      <CustomTabPanel value={value} index={3}>
                        <Grid container spacing={5}>
                          <Grid item xs={12}>
                            <Grid container spacing={3}>
                              <Grid item xs={1}>
                                <IconButton sx={{ backgroundColor: theme.palette.primary.lighter, height: '5vh', width: '5vh' }}>
                                  <SubtitlesIcon sx={{ color: theme.palette.primary.dark }} />
                                </IconButton>
                              </Grid>
                              <Grid item xs={11}>
                                <Grid container>
                                  <Grid item xs={2}>
                                    <Typography variant="h5">Blog Title</Typography>
                                  </Grid>
                                  <Grid item xs={6}></Grid>
                                  <Grid item xs={4}>
                                    <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                                      {expert.blogDate}
                                    </Typography>
                                  </Grid>
                                  <Grid item xs={12}>
                                    <Typography variant="body1">{expert.blogTitle}</Typography>
                                  </Grid>
                                </Grid>
                              </Grid>
                              <Grid item xs={12}>
                                <Divider />
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={12}>
                            <Grid container spacing={3}>
                              <Grid item xs={1}>
                                <IconButton sx={{ backgroundColor: theme.palette.primary.lighter, height: '5vh', width: '5vh' }}>
                                  <WifiTetheringErrorIcon sx={{ color: theme.palette.primary.dark }} />
                                </IconButton>
                              </Grid>
                              <Grid item xs={11}>
                                <Grid container>
                                  <Grid item xs={2}>
                                    <Typography variant="h5">Podcast</Typography>
                                  </Grid>
                                  <Grid item xs={6}></Grid>
                                  <Grid item xs={4}>
                                    <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                                      {expert.podCastDate}
                                    </Typography>
                                  </Grid>
                                  <Grid item xs={12}>
                                    <Typography variant="body1">{expert.podCast}</Typography>
                                  </Grid>
                                </Grid>
                              </Grid>
                              <Grid item xs={12}>
                                <Divider />
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </CustomTabPanel>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default SearchedExperts;
