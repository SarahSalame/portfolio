import React, { useEffect } from 'react'
import ProjectPage from '../ProjectPage/ProjectPage'
import ProjectSlider from '../ProjectPage/ProjectSlider/ProjectSlider'

const ProjectDetails = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);
  return (
    <>
    <ProjectPage/>
    <ProjectSlider/>
    </>
  )
}

export default ProjectDetails