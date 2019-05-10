import React from 'react';
import { MedwingButton } from 'Components';
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe('Medwing Button', () => {
    const component = shallow(<MedwingButton />);

    it('should render correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('should render Button with the correct class name', () => {
        const component = shallow(<MedwingButton />);
        /*
        console.log(component.debug());
        */
        expect(component.hasClass('medwing-button')).toEqual(true);
    });
});
