import React from 'react';

function CallDoctor(props) {
	const title = props.title || "call doctor";

	return (
		<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>{title}</title>
            <g fill="#d96e6e">
                <path d="M14.507,15.487l-2.334,2.3A18.934,18.934,0,0,1,8.8,15.2a19.147,19.147,0,0,1-2.588-3.37l2.3-2.334A1,1,0,0,0,8.72,8.4l-2.4-5.59A1,1,0,0,0,5.15,2.237L.75,3.4A1,1,0,0,0,0,4.4,21.14,21.14,0,0,0,5.985,18.016,21.136,21.136,0,0,0,19.606,24a1,1,0,0,0,1-.749l1.162-4.4a1,1,0,0,0-.572-1.175l-5.59-2.4A1,1,0,0,0,14.507,15.487Z" fill="#d96e6e"/>
                <path d="M18,0a5.993,5.993,0,0,0-5.344,8.719L12,12l3.281-.656A6,6,0,1,0,18,0Zm3,7H19V9H17V7H15V5h2V3h2V5h2Z"/>
            </g>
        </svg>
	);
};

export default CallDoctor;
