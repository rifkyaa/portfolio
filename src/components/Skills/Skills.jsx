import React from 'react';
import "./Skills.css"
import Frontend from './Frontend';
import Backend from './Backend';
import More from './More';

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">My Skills</h2>
            <span className="section__subtitle">My Technical Level</span>

            <div className="skills__container container grid">
                <Frontend />
                <Backend />
                <More />
            </div>
        </section>
    )
}

export default Skills