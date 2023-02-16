import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { BrowserRouter, MemoryRouter, Routes, Route } from 'react-router-dom';
import '@testing-library/jest-dom'
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

  it("should have navlinks with proper redirect attributes", () => {
    render(<MockNavbar />);
    const linkElement = screen.getByText(/About/i);
    expect(linkElement.href).toContain("/about");
  })

  // testing links
  it("should redirect on click of navlinks", async () => {
    const About = () => <div>about content</div>

    // setup a memory router with your own defined routes
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </MemoryRouter>
    );
    const user = userEvent.setup()
    const linkElement = screen.getByText(/about/i);
    expect(linkElement).toBeInTheDocument()
    expect(screen.queryByText("about content")).not.toBeInTheDocument()
    await user.click(linkElement)
    expect(screen.getByText("about content")).toBeInTheDocument()
  })
})
