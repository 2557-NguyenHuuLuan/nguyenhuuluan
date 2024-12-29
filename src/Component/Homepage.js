import React from 'react'
import Banner from './Banner'
import Content from './Content'
import Footer from './Footer'
import Section from './Section'
import Projects from './Projects'

export default function Homepage() {
    return (
        <div>
            <Banner />
            <Section/>
            <Content />
            <Projects/>
            <Footer/>
        </div>
    )
}
