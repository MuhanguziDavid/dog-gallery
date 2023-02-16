import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import BreedList from '../breedList';

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate
}));

const breedListMock = {
  african: [],
  hound: [
    "afghan",
    "basset"
  ]
}

const MockBreedList = ({breedList}) => {
  return (
    <BrowserRouter>
      <BreedList breedList={breedList}/>
    </BrowserRouter>
  )
}

describe("BreedList", () => {
  it('should render a dog breed', async () => {
    render(<MockBreedList breedList={breedListMock}/>);
    const breedElement = await screen.findByText(/african/i)
    expect(breedElement).toBeInTheDocument();
  });

  it('should redirect on click of a dog breed', async () => {
    render(<MockBreedList breedList={breedListMock}/>);
    const breedElement = await screen.findByText(/hound/i)
    await userEvent.click(breedElement)
    expect(mockNavigate).toHaveBeenNthCalledWith(1, "/breed/hound");
  });

  it("should render multiple dog breeds", async () => {
    render(<MockBreedList breedList={breedListMock}/>);
    const breedElements = await screen.findAllByTestId(/breed-item/i)
    expect(breedElements).toHaveLength(2);
  })

  it('should render a dog sub-breed', async () => {
    render(<MockBreedList breedList={breedListMock}/>);
    const dropdownElement = await screen.findByTestId("dropdown-item-1")
    fireEvent.click(dropdownElement)
    const subBreedElement = await screen.findByText(/afghan/i)
    expect(subBreedElement).toBeInTheDocument();
  });

  it('should redirect on click of a dog sub-breed', async () => {
    render(<MockBreedList breedList={breedListMock}/>);
    const dropdownElement = await screen.findByTestId("dropdown-item-1")
    await userEvent.click(dropdownElement)
    const subBreedElement = await screen.findByText(/afghan/i)
    await userEvent.click(subBreedElement)
    expect(mockNavigate).toHaveBeenNthCalledWith(1, "/breed/hound/afghan");
  });
})
