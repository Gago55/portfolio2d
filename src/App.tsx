import { Tabs, useColorScheme } from "@mui/joy";
import Tab, { tabClasses } from "@mui/joy/Tab";
import TabList from "@mui/joy/TabList";
import TabPanel from "@mui/joy/TabPanel";
import { FC, useEffect, useState } from "react";
import About from "./components/About/About";
import Activities from "./components/Activities/Activities";
import Projects from "./components/Projects/Projects";
import Settings from "./components/Settings/Settings";
import Three from "./components/Three/Three";
import { Flex } from "./components/common/Helpers";


interface IProps {
}

const App: FC<IProps> = (props) => {

  const { mode, setMode } = useColorScheme()
  const [isParticlesOn, setIsParticlesOn] = useState(mode === 'dark')

  const [tabId, setTabId] = useState(2)
  const [selectedActivityId, setSelectedActivityId] = useState(0)
  const [selectedProjectId, setSelectedProjectId] = useState<undefined | number>(undefined)
  const [isPreviewsLoaded, setIsPreviewsLoaded] = useState(true)
  const [isGlobeOn, setIsGlobeOn] = useState(true)
  const [isGlobeDisabled, setIsGlobeDisabled] = useState(false)

  const [isSettingsOpen, setIsSettingsOpen] = useState(false)

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

  useEffect(() => {
    document.body.style.background = mode === 'dark' ? "#25252d" : "#ebebef"

    if (mode === 'light') {
      setIsParticlesOn(false)
    }
  }, [mode])
  // window.removeEventListener('keypress', toggleMode)
  useEffect(() => {
    if (isGlobeDisabled && isGlobeOn)
      setIsGlobeOn(false)
  }, [isGlobeDisabled])

  return <Flex centerX variant="soft" sx={{ height: "100%", background: "#00000000" }}   >
    <Settings
      open={isSettingsOpen}
      isParticlesOn={isParticlesOn}
      isGlobeOn={isGlobeOn}
      isGlobeDisabled={isGlobeDisabled}

      setOpen={setIsSettingsOpen}
      setIsParticlesOn={setIsParticlesOn}
      setIsGlobeOn={setIsGlobeOn}
    />
    {isParticlesOn && <Three />}
    <Tabs value={tabId} variant="soft"
      sx={theme => ({
        width: .5,
        [theme.breakpoints.down("lg")]: {
          width: .9
        },
        mt: 5, background: "#00000000"
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
        <Tab sx={{ background: "#00000000" }} variant="soft" onClick={() => setTabId(0)}>Projects</Tab>
        <Tab sx={{ background: "#00000000" }} variant="soft" onClick={() => setTabId(1)}>Activities</Tab>
        <Tab sx={{ background: "#00000000" }} variant="soft" onClick={() => setTabId(2)}>About</Tab>
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
      <TabPanel value={2}>
        <About
          isGlobeOn={isGlobeOn}
          isGlobeDisabled={isGlobeDisabled}
          setIsGlobeDisabled={setIsGlobeDisabled}
          setIsSettingsOpen={setIsSettingsOpen}
        /></TabPanel>
    </Tabs>

    {/* <Box sx={{
      position: 'absolute',
      bottom: 10,
      right: 10,
      // width: 300,
      // height: 300
    }}>
      <iframe
        width={500}
        // height={500}
        height={500 * 9 / 16}
        style={{
          border: 0,
          // width: "100%",
          // height: "100%"
        }}
        src='http://127.0.0.1:5500/index.html'

      >

      </iframe>
    </Box> */}
  </Flex>

}

export default App
