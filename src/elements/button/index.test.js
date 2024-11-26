/* eslint-disable testing-library/no-container */
import React from 'react';
import {render} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Button from './index';

test("Should not allowed click button if isDisabled is present", () => {
    const{container} = render(<Button isDisabled></Button>);

    // eslint-disable-next-line testing-library/no-node-access
    expect(container.querySelector('span.disabled')).toBeInTheDocument();
});

//mengetes loading
test("Should render loading/spner", () => {
    const{container, getByText} = render(<Button isloading></Button>);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText(/loading/i)).toBeInTheDocument();
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.querySelector('span')).toBeInTheDocument();
});

//tes link external
test("Should render <a> tag", () => {
    const{container} = render(<Button type='link' isExternal></Button>);

    // eslint-disable-next-line testing-library/no-node-access
    expect(container.querySelector('a')).toBeInTheDocument();
});

//tes link internal 
test("Should render Link Component", () => {
    const{container} = render(<Router>
        <Button href='' type='link'></Button>
        </Router>);

    // eslint-disable-next-line testing-library/no-node-access
    expect(container.querySelector('a')).toBeInTheDocument();
});