import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../navbar';

const MockNavbar = () => {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  )
}

describe("Navbar", () => {
  it("should render the site banner", () => {
    render(<MockNavbar />);
    const bannerElement = screen.getByText(/Dog Gallery/i);
    expect(bannerElement).toBeInTheDocument();
  })

  it("should render navlinks", () => {
    render(<MockNavbar />);
    const linkElement = screen.getByText(/Home/i);
    expect(linkElement).toBeInTheDocument();
  })

  // TODO
  // it("should navigate when a user clicks a navlink", () => {
  //   render(<MockNavbar />);
  //   const linkElement = screen.getByText(/About/i);
  //   fireEvent.click(linkElement)
  //   expect(screen.getByText('Here at dog CEO, we show you the most adorable dogs!!')).toBeInTheDocument();
  // })
})
