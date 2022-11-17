import Script from 'next/script';
import { useState, useEffect } from 'react';

export default function Widget() {
  const [hasWidgetLoaded, setHasWidgetLoaded] = useState(false);

  const runScript = () => {
    const widget = new window.Plug({
      auth: {
        //Add your Public Application Access Token here
        //Public application access tokens can be used to provision only anonymous rev users.  
        appToken:
            "eyJhbGciOiJSUzI1NiIsImlzcyI6Imh0dHBzOi8vYXV0aC10b2tlbi5kZXZyZXYuYWkvIiwia2lkIjoic3RzX2tpZF9yc2EiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiamFudXMiXSwiZXhwIjoxNzYyOTQ2Nzc2LCJodHRwOi8vZGV2cmV2LmFpL2NsaWVudGlkIjoiOHlNZ1giLCJodHRwOi8vZGV2cmV2LmFpL2Rldm9fZG9uIjoiZG9uOmlkZW50aXR5OmR2cnYtdXMtMTpkZXZvLzAiLCJodHRwOi8vZGV2cmV2LmFpL2Rldm9pZCI6IkRFVi0wIiwiaHR0cDovL2RldnJldi5haS9zdmNhY2MiOiJkb246aWRlbnRpdHk6ZHZydi11cy0xOmRldm8vMDpzdmNhY2MvOHlNZ1giLCJodHRwOi8vZGV2cmV2LmFpL3Rva2VudHlwZSI6InVybjpkZXZyZXY6cGFyYW1zOm9hdXRoOnRva2VuLXR5cGU6YWF0OnB1YmxpYyIsImlhdCI6MTY2ODMzODc3NiwiaXNzIjoiaHR0cHM6Ly9hdXRoLXRva2VuLmRldnJldi5haS8iLCJqdGkiOiJkb246aWRlbnRpdHk6ZHZydi11cy0xOmRldm8vMDp0b2tlbi8xQnFsWVRocGQiLCJzdWIiOiJkb246aWRlbnRpdHk6ZHZydi11cy0xOmRldm8vMDpzdmNhY2MvOHlNZ1gifQ.xOe3hwzZP6PkKckB8jRNZmM5XKAElDmxgSWO4r1Qn0rC-gMc6gI0_okVlymKNRZBO9GNqZdH3Wl5S_ecJDI-rNgOaK_1_L3MyrkHCD-yOOVQM3fz_D0hrkSYBXO7Z1JNs7Te3qN3J5hvn4rcDuJS26Pmhex3NOp9iQdrSbzmWz1nNQ9a9Hnpai0Lq7fRHxTuvEi6PCfYZUBqnUOxsUEkK10HvYxBxj3DhVbnQ9F1XwpxUPMJtyMdFWmGXZpXX1dMjzGwPATViyOgrgrQ7hdRYCWnQC2dpfbwtzElOP8cs_GYDswz-TTnI9V1OxlJmUnwEMIbql221VspfwVwG2Jn0g",
       },
      style: {
        theme: 'dark',
        alignment: 'right',
      },
    });
  };

  // React.StrictMode causes script.onload to be called twice hence putting a hack in place only instantiate plug widget once
  useEffect(() => {
    if (hasWidgetLoaded) {
      runScript();
    }
  }, [hasWidgetLoaded]);

  return (
    <Script
      onLoad={() => {
        setHasWidgetLoaded(true);
      }}
      // src="https://plug.devrev.ai/{YOUR_ORG_NAME}/widget.js"
      src="https://plug.devrev.ai/devrev/widget.js"
    ></Script>
  );
}







