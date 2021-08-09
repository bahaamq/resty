import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Form from '../form';

import Results from '../results';

import '@testing-library/jest-dom/extend-expect';





it('need to run a function on button click', async () => {
    let handler = jest.fn();
    render(<Form handleApiCall={handler} />);
    const button = screen.getByTestId("mybtn");
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    await waitFor(() => expect(handler).toHaveBeenCalled());
  });
  

  test('loads and displays greeting', async () => {
    let handler = jest.fn();
    render(<Form handleApiCall={handler} />);
    const output = screen.getByTestId("myinput");

    output.value="https://pokeapi.co/api/v2/ability/?limit=1"



const button = screen.getByTestId("mybtn");
expect(button).toBeInTheDocument();
fireEvent.click(button);
await waitFor(() => expect(handler).toHaveBeenCalled())


  })

  it('Should render star wars list', () => {
    const data = [
      { name: 'Luke Skywalker', url: 'http://swapi.dev/api/people/1' },
      { name: 'Darth Vader', url: 'http://swapi.dev/api/people/2' },
    ];

 
    render(<Results data={data} />);
    const items = screen.getByTestId("section");
    expect(items).toHaveTextContent('Luke Skywalke');
    expect(items).toContainHTML(
      'section'
    );
  });
  