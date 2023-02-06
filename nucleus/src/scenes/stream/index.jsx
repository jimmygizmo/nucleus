import { Box } from "@mui/material";
import Header from "../../components/Header";
import StreamChart from "../../components/StreamChart";


const SceneStream = () => {

  return(
    <Box m="20px">
      <Header
        title="Stream Chart"
        subTitle="Highlights the evolution of relative values over a range" />
      <Box height="75vh">
        <StreamChart />
      </Box>
    </Box>
  );
};

export default SceneStream;

