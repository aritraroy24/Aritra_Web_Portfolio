import React from 'react';
import Socials from './Socials'
import SocialNarrow from './SocialNarrow'

function Condition() {
    const mediaQuery1 = window.matchMedia('(max-width: 500px)')
    // const mediaQuery2 = window.matchMedia('(max-width: 313px)')

    if (mediaQuery1.matches) {
        return <SocialNarrow />
    }
    return <Socials />;
}
export default Condition
