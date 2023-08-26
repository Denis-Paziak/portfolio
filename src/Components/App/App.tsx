import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Home from '../Home/Home';
import About from '../About/About';
import Projects from '../Projects/Projects';
import { Contact } from '../Contact/Contact';
import { Footer } from '../Footer/Footer';


function App() {
  const [statusMenu, setMenuStatus] = useState("");

  useEffect(() => {
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
  }, []);


  return (
    <div className="App">
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
