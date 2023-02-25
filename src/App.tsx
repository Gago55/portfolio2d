import { Tabs } from "@mui/joy";
import Tab, { tabClasses } from "@mui/joy/Tab";
import TabList from "@mui/joy/TabList";
import TabPanel from "@mui/joy/TabPanel";
import { useSnackbar } from "notistack";
import { FC } from "react";
import { connect } from 'react-redux';
import About from "./components/About/About";
import Activities from "./components/Activities/Activities";
import { Flex } from "./components/common/Helpers";
import Projects from "./components/Projects/Projects";
import { StateType } from "./redux/store";

interface IProps {
  email: string | undefined
}

const App: FC<IProps> = (props) => {

  const { enqueueSnackbar } = useSnackbar()


  return <Flex centerX variant="soft" sx={{ height: "100%" }}   >
    <Tabs defaultValue={0} sx={{ width: .5, mt: 5 }} variant="soft" >
      <TabList
        variant="plain"
        sx={{
          '--List-padding': '0px',
          '--List-radius': '0px',
          '--List-item-minHeight': '48px',
          [`& .${tabClasses.root}`]: {
            boxShadow: 'none',
            fontWeight: 'md',
            [`&.${tabClasses.selected}::before`]: {
              content: '""',
              display: 'block',
              position: 'absolute',
              left: 'var(--List-item-paddingLeft)', // change to `0` to stretch to the edge.
              right: 'var(--List-item-paddingRight)', // change to `0` to stretch to the edge.
              bottom: 0,
              height: 3,
              bgcolor: 'primary.400',
            },
          },
        }}
      >
        <Tab variant="soft" >Projects</Tab>
        <Tab variant="soft" >Activities</Tab>
        <Tab variant="soft" >About</Tab>
      </TabList>
      <TabPanel value={0}><Projects /></TabPanel>
      <TabPanel value={1}><Activities /></TabPanel>
      <TabPanel value={2}><About /></TabPanel>
    </Tabs>
  </Flex>

}

const mapStateToProps = (state: StateType) => ({
  email: state.appReducer.email,
})

export default connect(mapStateToProps, {
})(App);
