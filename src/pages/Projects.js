import React from 'react';
import ButtonsBottom from '../components/ButtonsBottom';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import Project from '../components/Project';

export const Project1 = () =>{
    return (
        <main>
            <div className="project">
                <Navigation />
                <Logo />
                <Project projectNumber={0} ></Project>
                <ButtonsBottom left={'/'} right={'/project-2'}></ButtonsBottom>
            </div>
        </main>
    )
}
export const Project2 = () =>{
    return (
        <main>
        <div className="project">
            <Navigation />
            <Logo />
            <Project projectNumber={1} ></Project>
            <ButtonsBottom left={'/project-1'} right={'/project-3'}></ButtonsBottom>
            </div>
        </main>
    )
}
export const Project3 = () =>{
    return (
        <main>
        <div className="project">
            <Navigation />
            <Logo />
            <Project projectNumber={2} ></Project>
            <ButtonsBottom left={'/project-2'} right={'/project-4'}></ButtonsBottom>
            </div>
        </main>
    )
}
export const Project4 = () =>{
    return (
        <main>
        <div className="project">
            <Navigation />
            <Logo />
            <Project projectNumber={3} ></Project>
            <ButtonsBottom left={'/project-3'} right={'/contact'}></ButtonsBottom>
            </div>
        </main>
    )
}