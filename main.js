import { renderFooter } from './src/components/footer/footer';
import { createHeader } from './src/components/header/header';
import { socials } from './src/data/socials';
import { About } from './src/pages/About/About';

import './style.css';

createHeader();
renderFooter(socials);
About();
