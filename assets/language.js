(() => {
  const copy = {
    en: {
      "nav-label": "Amenige information", "nav-features": "Features", "nav-safety": "Safety", "nav-support": "Support", "language-label": "Display language",
      "hero-title": "Before the rain gets worse,<br>know when to move your car.", "hero-subtitle": "Help protect your car from linear rainbands and severe rain",
      "hero-lead": "Amenige brings official JMA information together for your saved parking location or current area. It helps you consider moving your car while it is still safe to do so.",
      "hero-badges-label": "Information covered", "badge-rainband": "Linear rainbands", "badge-rainfall": "Forecast rainfall", "badge-warnings": "Warnings & advisories", "availability": "Preparing for App Store release",
      "hero-visual-label": "Amenige app icon", "hero-icon-alt": "Amenige icon: a car moving from heavy rain and flooding toward a brighter area", "orbit-rain": "Heavy rain", "orbit-safe": "Early decision",
      "questions-title": "Three things at a glance.", "question-1-title": "Chance of a linear rainband", "question-1-detail": "Is your area included?", "question-2-title": "When conditions may worsen", "question-2-detail": "When is it forecast?", "question-3-title": "When to consider moving your car", "question-3-detail": "What is the right stage to prepare?",
      "features-title": "Severe-rain information, organized for action.", "features-lead": "Not for checking every detail of the weather—only the information that helps you consider when to move a parked car.",
      "feature-1-title": "Check earlier", "feature-1-copy": "It focuses on the possibility of linear rainbands from about half a day in advance—not only after they have formed.",
      "feature-2-title": "Rainfall and warnings as supporting signals", "feature-2-copy": "Check forecast maximum hourly rainfall alongside heavy-rain and flood warnings or advisories.",
      "feature-3-title": "A clear five-level guide", "feature-3-copy": "From normal conditions to severe danger, Amenige shows the situation and suggested preparation in Levels 0–4.",
      "locations-title": "Your parking location and where you are now.", "locations-lead": "Switch between your saved parking location and your current area. The widget can switch too and, when permitted, obtains your current location during a manual refresh.", "locations-note": "Your location is not continuously tracked. If it cannot be obtained, the widget uses the area last checked in the app.",
      "location-card-label": "Example of saved location and current area display", "saved-location": "Saved location", "current-area": "Current area", "move-guidance": "When to consider moving your car", "normal-level": "Level 0 · Normal", "rainband-label": "Linear rainband", "rainband-none": "No forecast or occurrence information", "rainfall-label": "Maximum hourly rainfall", "warning-label": "Heavy rain / flood", "warning-none": "None issued", "location-card-note": "Local heavy rain and flooding can occur even without a linear rainband.",
      "official-title": "Uses public JMA information", "official-copy": "The iPhone directly retrieves machine-readable primary information such as JMA disaster-prevention XML and analyzes it on the device.",
      "device-title": "Your information stays on your device", "device-copy": "Parking locations, the last obtained current location, and history are not sent to or stored on TypeFree servers.",
      "japan-title": "For use in Japan", "japan-copy": "Amenige is for parking locations and weather information in Japan. The iPhone app appears in English when iOS uses a language other than Japanese.",
      "safety-title": "When danger is close, put people first.", "safety-copy": "Amenige is an unofficial app that supports decisions about moving a car; it is not an evacuation notice. If roads are flooded or heavy rain has begun, put people's safety first. Check the latest information from JMA, local authorities, and the conditions around you.",
      "footer-privacy": "Privacy policy", "footer-support": "Support",
      "support-title": "Amenige<br>Support", "support-region-title": "Availability and language", "support-region-1": "This app is intended only for parking locations in Japan. It does not support locations or weather information outside Japan.", "support-region-2": "The iPhone app appears in Japanese when iOS uses Japanese, and in English for all other languages. Official JMA area names and source text may remain in Japanese.",
      "support-how-title": "How to use Amenige", "support-how-1": "Add the municipality or parking location you want to monitor.", "support-how-2": "Retrieve the latest information when the app opens or by using the refresh button.", "support-how-3": "Review the displayed level, linear rainband information, forecast rainfall, warnings and advisories, then use it as an early-preparation guide.",
      "support-update-title": "If information does not update", "support-update-1": "Check that your device is connected to the internet.", "support-update-2": "Wait a moment, then use the refresh button in the app.", "support-update-3": "iOS controls the timing of automatic widget updates, so they are not always immediate.", "support-update-4": "To update your current area from the widget, allow location access for the widget in iOS settings. If location is unavailable, it uses the area last checked in the app.",
      "support-safety-title": "Important safety information", "support-safety-1": "This app supports checking when to consider moving your car using public JMA information. It does not guarantee completeness, immediate delivery, or continuous background monitoring.", "support-safety-2": "Flooding can occur because of local heavy rain, typhoons, or fronts even when there is no linear rainband information. If danger is approaching, make decisions that put people's safety first.",
      "contact-title": "Contact", "contact-copy": "For questions or bug reports, please email:", "contact-note": "Including your device model, iOS version, the time of the issue, and the message shown helps us investigate.", "footer-app": "About Amenige",
      "privacy-title": "Privacy policy", "privacy-updated": "Last updated: September 10, 2026", "privacy-intro-1": "TypeFree (\"we\") handles user information in the iOS app Amenige (\"the app\") as described below.", "privacy-intro-2": "The app is intended only for parking locations and weather information in Japan. It appears in Japanese when iOS uses Japanese, and in English for other languages.",
      "privacy-1-title": "1. Information stored on the device", "privacy-1-copy": "The app stores saved locations, the last obtained current location, selected areas, parking settings, history, app settings, and communication and decision diagnostic information on your device. We do not send or store it on our servers.",
      "privacy-2-title": "2. Location information", "privacy-2-copy": "Location is used when you set a saved location from your current location, or check weather information around your current area in the app or widget. Widget use requires additional iOS permission. If location cannot be obtained, the widget uses the area last checked in the app. The last obtained current location and selected area remain on your device and are not sent to us. Your location is not continuously tracked.",
      "privacy-3-title": "3. Communication with external services", "privacy-3-copy": "The app may connect to public JMA data for weather information and Apple services for maps and place search. Each provider's policy applies to its handling of information.",
      "privacy-4-title": "4. Advertising, analytics, and tracking", "privacy-4-copy": "The current version does not use third-party advertising, behavioral analytics, or cross-app tracking.",
      "privacy-5-title": "5. Deleting information", "privacy-5-copy": "Removing the app from your device deletes the information it stored on that device.",
      "privacy-6-title": "6. Changes to this policy", "privacy-6-copy": "We may revise this policy in response to changes in features or laws. We will announce material changes on this page or in the app.", "privacy-7-title": "7. Contact"
    }
  };

  const captureJapaneseCopy = () => {
    document.querySelectorAll("[data-i18n]").forEach((element) => { element.dataset.jaText = element.textContent; });
    document.querySelectorAll("[data-i18n-html]").forEach((element) => { element.dataset.jaHtml = element.innerHTML; });
    document.querySelectorAll("[data-i18n-alt]").forEach((element) => { element.dataset.jaAlt = element.alt; });
    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => { element.dataset.jaAriaLabel = element.getAttribute("aria-label") || ""; });
  };

  const chooseLanguage = () => {
    const parameter = new URLSearchParams(window.location.search).get("lang");
    if (parameter === "ja" || parameter === "en") return parameter;
    try {
      const saved = window.localStorage.getItem("typefree-language");
      if (saved === "ja" || saved === "en") return saved;
    } catch (_) { /* Storage may be unavailable. */ }
    return navigator.language && navigator.language.toLowerCase().startsWith("ja") ? "ja" : "en";
  };

  const setLanguage = (language, updateUrl) => {
    const dictionary = copy[language] || {};
    document.documentElement.lang = language;
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = language === "ja" ? element.dataset.jaText : dictionary[element.dataset.i18n];
      if (value !== undefined) element.textContent = value;
    });
    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      const value = language === "ja" ? element.dataset.jaHtml : dictionary[element.dataset.i18nHtml];
      if (value !== undefined) element.innerHTML = value;
    });
    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
      const value = language === "ja" ? element.dataset.jaAlt : dictionary[element.dataset.i18nAlt];
      if (value !== undefined) element.alt = value;
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      const value = language === "ja" ? element.dataset.jaAriaLabel : dictionary[element.dataset.i18nAriaLabel];
      if (value !== undefined) element.setAttribute("aria-label", value);
    });
    document.querySelectorAll("[data-language-switch]").forEach((button) => {
      const active = button.dataset.languageSwitch === language;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    document.querySelectorAll("[data-lang-link]").forEach((link) => {
      const url = new URL(link.getAttribute("href"), window.location.origin);
      if (language === "en") url.searchParams.set("lang", "en");
      else url.searchParams.delete("lang");
      link.setAttribute("href", `${url.pathname}${url.search}${url.hash}`);
    });
    const title = document.body.dataset[`title${language[0].toUpperCase()}${language.slice(1)}`];
    if (title) document.title = title;
    try { window.localStorage.setItem("typefree-language", language); } catch (_) { /* Ignore unavailable storage. */ }
    if (updateUrl) {
      const url = new URL(window.location.href);
      if (language === "en") url.searchParams.set("lang", "en");
      else url.searchParams.delete("lang");
      window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
    }
  };

  document.addEventListener("DOMContentLoaded", () => {
    captureJapaneseCopy();
    setLanguage(chooseLanguage(), false);
    document.querySelectorAll("[data-language-switch]").forEach((button) => {
      button.addEventListener("click", () => setLanguage(button.dataset.languageSwitch, true));
    });
  });
})();
