import React from 'react';

const Adfit = () => {
    React.useEffect(() => 
    {
            
        let ins = document.createElement('ins');
        let scr = document.createElement('script');

        ins.className = 'kakao_ad_area';
        ins.style = "display:none; width:100%;";
        scr.async = 'true';
        scr.type = "text/javascript";
        scr.src = "//t1.daumcdn.net/kas/static/ba.min.js";
        ins.setAttribute('data-ad-width', '320');
        ins.setAttribute('data-ad-height', '100');
        ins.setAttribute('data-ad-unit', 'DAN-l2jnzmLfLptbmTLV');

        document.querySelector('.adfit').appendChild(ins);
        
        document.querySelector('.adfit').appendChild(scr);
    }, []);

    return (
        <div className="adfit" />
    );
}

export default Adfit;
