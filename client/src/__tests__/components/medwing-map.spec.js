import React from 'react';
import { MedwingMap } from 'Components';
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe('Medwing Map component', () => {

    const mockCenter = { lng: 51.0, lat: 52.0 }
    const mockMarkers = [];

    it('should render correctly', () => {
        const component = shallow(
            <MedwingMap center={mockCenter} markers={mockMarkers} />
        );

        expect(component).toMatchSnapshot();
    });
});