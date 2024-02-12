import { useState } from 'react';

import moi from './assets/images/moi.jpg';
import logo from './assets/images/ted.jpg';

function App() {
  const [step, setStep] = useState(0);
  return (
    <div className="app">
      <header className="app-header">
        <div className="rounded-full">
          <img src={logo} className="app-logo rounded-full" alt="logo" />
        </div>
        {step === 0 && (
          <div>
            <p className="header mb-3">Coucou Teddy 💯</p>
            <div className="flex justify-center gap-3">
              <button
                className="rounded-md bg-white p-2 text-black"
                type="button"
                onClick={() => setStep(step + 1)}
              >
                Découvre ta surprise
              </button>
            </div>
          </div>
        )}
        {step === 1 && (
          <div>
            <h3>Je rigole. Pas de surprise déso...</h3>
            <p>
              Mais si allez, je te fais un petit cadeau. Tu veux savoir ce que
              c'est ?
            </p>
            <button
              className="rounded-md bg-purple-400 p-2 text-white"
              type="button"
              onClick={() => setStep(step + 1)}
            >
              Oui
            </button>
          </div>
        )}
        {step === 2 && (
          <div>
            <h3>
              Tu vas devoir attendre un peu. Je te préviens dès que c'est prêt.
            </h3>

            <p>
              En fait c'est bon. Tu vas te rendre au festival{' '}
              <a
                target="_blank"
                href="https://bilbaobbklive.com/en/"
                rel="noreferrer"
                className="text-purple-400 underline"
              >
                Bilbao BBK Live
              </a>
              &nbsp; du 11 au 13 juillet.
            </p>
            <p>
              Mais pas tout seul. Tu veux voir la tête de con qui va
              t'accompagner ?
            </p>
            <button
              className="mt-5 rounded-md bg-purple-400 p-2 text-white"
              type="button"
              onClick={() => setStep(step + 1)}
            >
              Non
            </button>
          </div>
        )}
        {step === 3 && (
          <div className="mt-6 rounded-full">
            <img src={moi} className="app-logo rounded-full" alt="logo" />
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
