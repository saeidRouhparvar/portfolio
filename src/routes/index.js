import React from 'react'

const Main = React.lazy(() => import('../App'))
const Projects = React.lazy(() => import('../components/project/Projects'))
const ProjectDescription = React.lazy(() => import('../pages/projects/ProjectDescription'))
const Experience = React.lazy(() => import('../components/experience/Experiences'))
const ExperienceDescription = React.lazy(() => import('../pages/experience/ExperienceDescription'))
const Skills = React.lazy(() => import('../components/Skills'))

const indexRoutes = [
    { path: '/app', component: Main },
    {
        path: '/projects', component: Projects,
        child: [
            { path: '/projectDescription', component: ProjectDescription },
        ]
    },
    {
        path: '/experience', component: Experience,
        child: [
            { path: '/experienceDescription', component: ExperienceDescription },
        ]
    },
    { path: '/skills', component: Skills },
]

export { indexRoutes }