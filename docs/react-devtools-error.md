# React DevTools console error

The reported `The children should not have changed if we pass in the same set` stack originates in `chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/installHook.js`. The matching assertion is in React DevTools' fiber renderer, not the agency application.

Upstream source: https://github.com/facebook/react/blob/main/packages/react-devtools-shared/src/backend/fiber/renderer.js

Update the React Developer Tools browser extension and fully reload the page. If it persists, disable that extension for the local preview (or use a browser profile without it), then reload. This leaves the website and normal browser developer tools available. A website source change cannot update an installed browser extension, and suppressing its console output would hide the symptom rather than repair it.

Browser verification should distinguish application errors from extension errors. The automated preview uses a clean browser profile without the user's installed extension; it cannot establish that the extension itself has been repaired.

A separate application hydration warning was found during the same review: raw trigonometric spike coordinates serialized differently between server and browser at floating-point precision. All four SVG endpoint coordinates now serialize to four decimal places. This repairs the application warning without suppressing diagnostics; it does not establish that the installed extension assertion itself is fixed.
