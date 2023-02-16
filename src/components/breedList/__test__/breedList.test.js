import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BreedList from '../breedList';

const MockBreedList = () => {
  return (
    <BrowserRouter>
      <BreedList />
    </BrowserRouter>
  )
}

describe("BreedList", () => {
  it("should render the left menu header", () => {
    render(<MockBreedList />);
    const bannerElement = screen.getByText(/Breeds/i);
    expect(bannerElement).toBeInTheDocument();
  })

  // TODO
  // it("should render a dog breed", async () => {
  //   render(<MockBreedList />);
  //   const breedElement = await screen.findByTestId("breed-item-0")
  //   expect(breedElement).toBeInTheDocument();
  // })

  // TODO
  // it('should render multiple dog breeds', async () => {
  //   render(<MockBreedList />);
  //   const breedElements = await screen.findAllByRole(/breed/i)
  //   expect(breedElements).toHaveLength(2);
  // });
})
