import { Tabs, useColorScheme } from "@mui/joy";
import Tab, { tabClasses } from "@mui/joy/Tab";
import TabList from "@mui/joy/TabList";
import TabPanel from "@mui/joy/TabPanel";
import { FC, useEffect, useState } from "react";
import About from "./components/About/About";
import Activities from "./components/Activities/Activities";
import { Flex } from "./components/common/Helpers";
import Projects from "./components/Projects/Projects";
import Settings from "./components/Settings/Settings";

interface IProps {
}



const App: FC<IProps> = (props) => {

  const { mode, setMode } = useColorScheme()

  const [tabId, setTabId] = useState(2)
  const [selectedActivityId, setSelectedActivityId] = useState(0)
  const [selectedProjectId, setSelectedProjectId] = useState<undefined | number>(undefined)
  const [isPreviewsLoaded, setIsPreviewsLoaded] = useState(false)

  const toggleMode = (e: KeyboardEvent) => {
    if (e.key === 'm') {
      const mode = localStorage.getItem('joy-mode') || 'dark'

      setMode(mode === 'dark' ? 'light' : 'dark')
    }
  }
  useEffect(() => {
    window.removeEventListener('keypress', toggleMode)
    window.addEventListener('keypress', toggleMode)

  }, [])

  // window.removeEventListener('keypress', toggleMode)


  return <Flex centerX variant="soft" sx={{ height: "100%" }}   >
    <Settings />
    <Tabs value={tabId} variant="soft"
      sx={theme => ({
        width: .5,
        [theme.breakpoints.down("lg")]: {
          width: .9
        },
        mt: 5
      })}
    >
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
              bgcolor: '#9b9b9b',
            },
          },
        }}
      >
        <Tab variant="soft" onClick={() => setTabId(0)}>Projects</Tab>
        <Tab variant="soft" onClick={() => setTabId(1)}>Activities</Tab>
        <Tab variant="soft" onClick={() => setTabId(2)}>About</Tab>
      </TabList>
      <TabPanel value={0}>
        <Projects
          setTabId={setTabId}
          isPreviewsLoaded={isPreviewsLoaded}
          selectedProjectId={selectedProjectId}
          setIsPreviewsLoaded={setIsPreviewsLoaded}
          setSelectedProjectId={setSelectedProjectId}
          setSelectedActivityId={setSelectedActivityId}
        />
      </TabPanel>
      <TabPanel value={1}>
        <Activities
          setTabId={setTabId}
          selectedActivityId={selectedActivityId}
          setSelectedActivityId={setSelectedActivityId}
          setSelectedProjectId={setSelectedProjectId}
        />
      </TabPanel>
      <TabPanel value={2}><About /></TabPanel>
    </Tabs>
  </Flex>

}

export default App
