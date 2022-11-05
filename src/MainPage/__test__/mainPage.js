import {render, screen, cleanup} from '@testing-library/react';
import Main from '../Main';

test('should render the logo component', ()=>{
    render(<Main/>);
    const mainElement=screen.getByTestId('main-container');
    expect(mainElement). toBeInTheDocument();
    
})