import React from 'react';
import Socials from './Socials'
import SocialNarrow from './SocialNarrow'
import SuperNarrow from './SuperNarrow'

function Condition() {
    const mediaQuery1 = window.matchMedia('(max-width: 500px)')
    const mediaQuery2 = window.matchMedia('(max-width: 300px)')

    if (mediaQuery2.matches) {
        return <SuperNarrow />
    }

    else if (mediaQuery1.matches) {
        return <SocialNarrow />
    }

    return <Socials />;
}
export default Condition
