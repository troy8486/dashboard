import SideNav from "./SideNav";
import NavBar from "./NavBar";
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import InvoicesOwed from "./InvoicesOwed";
import CheckingAccount from "./CheckingAccount";
import TotalCash from './TotalCash'
import { Box } from "@mui/material";

const Home: React.FC = () => {

  return (
    <>
      <NavBar />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

          <Grid container sx={{ margin: 5 }} spacing={2}>
            
            <Grid item xs={4}>
              <Card sx={{ flexGrow: 1, width: 300 + '%' }}>
                <CardContent>
                  <CheckingAccount />
                </CardContent>
              </Card>
            </Grid>

          </Grid>

        </Box>
      </Box>
    </>
  )


}

export default Home