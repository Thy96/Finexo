import React, { useRef } from 'react';

import About from '../About/About';
import Services from '../Services/Services';
import Why from '../Why/Why';
import Team from '../Team/Team';
import Customers from '../Customers/Customers';

function Home(props) {
    const comp = useRef();

    return (
        <>
            <span id='A'></span>
            <main className='home-page' id="welcome" ref={comp}>
                {/* service section */}
                <Services comp={comp}></Services>
                {/* end service section */}

                {/* about section */}
                <About comp={comp}></About>
                {/* end about section */}

                {/* why section */}
                <Why comp={comp}></Why>
                {/* end why section */}

                {/* team section */}
                <Team comp={comp}></Team>
                {/* end team section */}

                {/* client section */}
                <Customers comp={comp}></Customers>
                {/* end client section */}
            </main>
        </>
    );
}

export default Home;