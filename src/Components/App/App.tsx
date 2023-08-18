import React, { useEffect, useRef, useState } from 'react';
import Header from '../Header/Header';
import Home from '../Home/Home';
import About from '../About/About';
import Projects from '../Projects/Projects';
import { Contact } from '../Contact/Contact';
import { Footer } from '../Footer/Footer';


function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cursorEl = useRef<HTMLDivElement>(null);
  const cursorBorder = useRef<HTMLDivElement>(null);
  const [statusMenu, setMenuStatus] = useState("");


  const handleMouseMove = (event: any) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  }

  useEffect(() => {
    // Hover 
    document.addEventListener('mousemove', handleMouseMove);
    document.querySelectorAll(".hover").forEach(el => {
      el.addEventListener("mouseover", () => {
        if (cursorEl.current && cursorBorder.current) {
          cursorBorder.current.classList.add("active");
          cursorEl.current.classList.add("active");
        }
      });
    });

    // Scroll
    const anchors: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('a[href*="#"]');

    anchors.forEach((anchor) => {
      anchor.addEventListener('click', (e: Event) => {
        e.preventDefault();

        setMenuStatus("");

        const blockID: string | undefined = anchor.getAttribute('href')?.substr(1) || undefined;

        if (blockID) {
          const targetElement = document.getElementById(blockID);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    });


    document.querySelectorAll(".hover").forEach(el => {
      el.addEventListener("mouseout", () => {
        if (cursorEl.current && cursorBorder.current) {
          cursorBorder.current.classList.remove("active");
          cursorEl.current.classList.remove("active");
        }
      });
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (cursorEl.current && cursorBorder.current) {
      cursorEl.current.style.top = `${mousePosition.y}px`;
      cursorEl.current.style.left = `${mousePosition.x}px`;
      cursorBorder.current.style.top = `${mousePosition.y}px`;
      cursorBorder.current.style.left = `${mousePosition.x}px`;
    }
  }, [mousePosition]);


  return (
    <div className="App">
      <div className="cursor-box">
        <div className="cursor" ref={cursorEl}></div>
        <div className="cursor-border" ref={cursorBorder}>
          <div className="bg"></div>
        </div>
      </div>

      <Header statusMenu={statusMenu} setMenuStatus={setMenuStatus} />
      <Home />
      <Projects />
      <About />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
