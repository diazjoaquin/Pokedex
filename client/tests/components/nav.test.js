import { Link } from "react-router-dom";
import Nav from '../components/Nav/Nav.jsx'
import React from "react";
// import isReact from 'is-react';

describe("<Nav/>", () => {

    let nav;
    beforeEach(() => {
        nav = shallow(<Nav />);
    })

    it('Should to render two <Link to ""/>. The first one to "/home", and the second one to "/create"', () => {
        expect(nav.find(Link).length).toBeGreatherThanorEqual(2);
        expect(nav.find(Link).find({to:"/home"}).length).toBe(1)
        expect(nav.find(Link).find({to:"/create"}).length).toBe(1);
    });

    it('Should contain an image with a Link wich changes the route to "/home"', () => {
        expect(nav.find(Link).find({to:"/home"}).image())
    });

    it('Should contain a button with the text "Create" and a Link wich changes the route to "/create"', () => {
        expect(nav.find(Link).find({to:"/create"}).button()).toBe("Create");
    });
    
});