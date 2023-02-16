import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import DogsGallery from '../dogsGallery';

const dogsMock = [
  "https://images.dog.ceo/breeds/terrier-westhighland/n02098286_275.jpg"
]

const MockDogsGallery = ({dogs}) => {
  return (
    <BrowserRouter>
      <DogsGallery dogs={dogs}/>
    </BrowserRouter>
  )
}

describe("DogsGallery", () => {
  it('should render a dog image', async () => {
    render(<MockDogsGallery dogs={dogsMock}/>);
    const dogImageElement = await screen.findByRole("img")
    expect(dogImageElement.src).toContain("https://images.dog.ceo/breeds/terrier-westhighland/n02098286_275.jpg");
  });
})
