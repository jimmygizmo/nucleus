import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { mockTransactions } from "../data/mockTransactions";


const CustomList = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return(
    <Box
      gridColumn="span 4"
      gridRow="span 2"
      backgroundColor={colors.primary[400]}
      overflow="auto"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        borderBottom={`4px solid ${colors.primary[500]}`}
        color={colors.grey[100]}
        p="15px"
      >
        <Typography
          color={colors.grey[100]}
          variant="h5"
          fontWeight="600"
        >
          Recent Transactions
        </Typography>
      </Box>
      { mockTransactions.map(
        ( transaction, i ) => (
          <Box
            key={`${transaction.transId}-${i}`}
            display="flex"
            justifyContent="space-between"
            alignItem="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            p="15px"
          >
            <Box>
              <Typography
                color={colors.greenAccent[600]}
                variant="h5"
                fontWeight="600"
              >
                {transaction.transId}
              </Typography>
              <Typography
                color={colors.grey[100]}
              >
                {transaction.username}
              </Typography>
            </Box>
            <Box color={colors.grey[100]}>{transaction.date}</Box>
            <Box
              backgroundColor={colors.greenAccent[700]}
              p="5px 10px"
              borderRadius="4px"
            >
              ${transaction.amount}
            </Box>
          </Box>
        )
      )
      }
    </Box>
  );
};

export default CustomList;

