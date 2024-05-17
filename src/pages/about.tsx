import React from 'react'
import Approches from '~/components/elements/Approches'
import OurMission from '~/components/elements/OurMission'
import OurOfferings from '~/components/elements/OurOfferings'
import Partners from '~/components/elements/Partners'
import TeamMember from '~/components/elements/TeamMember'
import TextPattern from '~/components/elements/TextPattern'
import MainPageTemplate from '~/components/templates/MainPageTemplate'

const About:React.FunctionComponent = () => {
  return (
    <MainPageTemplate>
        <OurMission/>
        <OurOfferings/>
        <Approches/>
        <TextPattern firstHeading='Talent Behind Curtain' secondHeading1='Meet' secondHeading2=' Our Team' text='  Lorem ipsum dolor amet consectetur adipisicing eliteiuim sete eiusmod tempor incididunt ut labore etnalom dolore magna aliqua udiminimate veniam quis norud.'/>
        <TeamMember/>
        <TextPattern firstHeading='We Are Proud Of Our Partners' secondHeading1='Emerging' secondHeading2=' Partners' text='  Lorem ipsum dolor amet consectetur adipisicing eliteiuim sete eiusmod tempor incididunt ut labore etnalom dolore magna aliqua udiminimate veniam quis norud.'/>
        <Partners/>
    </MainPageTemplate>
  )
}

export default About
