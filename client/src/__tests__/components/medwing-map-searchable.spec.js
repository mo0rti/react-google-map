import React from 'react';
import { MedwingMapSearchable } from 'Components';
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe('Medwing Map Searchable component', () => {

    const mockSelectedMarkers = [];
    const mockOnSearch = jest.fn();

    it('should render correctly', () => {
        const component = shallow(
            <MedwingMapSearchable onSearch={mockOnSearch} selectedMarkers={mockSelectedMarkers} />
        );

        expect(component).toMatchSnapshot();
    });
});