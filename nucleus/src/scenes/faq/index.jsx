import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

// ACCORDION DOCS: https://mui.com/material-ui/react-accordion/


const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return(
    <Box m="20px">
      <Header title="FAQ" subTitle="Frequently Asked Questions" />
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What frontend technologies were used to build this site?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            React and React Router for the best possible reactive web application core.
            MaterialUI (MUI) for responsive premium styling and the
            enterprise-level component library. Nivo charts for the power of D3.js data
            visualization. The powerful FullCalendar component. MUI dark/light color schemes.
            Premium interactive form validation from Yup+MUI. Custom color and styling hooks crafted for
            both Nivo charts and FullCalendar for consistent, clean styling that also works with dark/light switching.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What about the backend?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A custom and fully automated build system is integrated with a very high performance NGINX caching web
            server and reverse proxy cache which features a full set of domain/protocol redirects and an A-Plus
            SSL certificate security rating. The React site is served by this NGINX, running in a Docker container
            on an AWS t2.medium VM. Behind the NGINX container are containers for the Node/Express GraphQL server
            and the MongoDB database server. Backend services are integrated easily with Docker Compose. The entire
            stack is completely automated from build to test to deployment on both the development side as well
            as on the VMs in the cloud. Publishing a new revision of the site is accomplished with a few keystrokes.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Is this a site template?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            No, this site is hand-coded. The primary languages are Javascript and JSX. JSX also involves the inline
            coding of HTML and CSS, intermixed with Javascript.
            MaterialUI requires a lot of custom JSX coding of its own variety as do Nivo Charts and FullCalendar.
            Interactive forms involve the custom JSX coding of React Router Forms, HTML, CSS and of course JS.
            All of these technologies are integrated manually by stitching together the custom JSX using Javascript.
            There are many small isolated pieces of Javascript handling the logic of the styled, themed UI.
            Many powerful pre-built third-party components are used in this site, but this is a hand coded site and the quality
            results do require a very significant amount of intricate manual coding.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Why should I build web sites and web apps with React technologies?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Because the best sites are built using React and the React ecosystem is in fact, the best.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;

