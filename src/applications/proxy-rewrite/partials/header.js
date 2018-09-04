export default `
<header class="header">
  <div class="incompatible-browser-warning">
    <div class="row full">
      <div class="small-12">
        Your browser is out of date. To use this website, please <a href="https://whatbrowser.org/">update your browser</a> or use a different device.
      </div>
    </div>
  </div>

  <div id="preview-site-alert"></div>

  <div class="va-notice--banner">
    <div class="va-notice--banner-inner">
      <!-- /va-gov/includes/usa-website-header.html -->
      <div class="usa-banner">
        <div class="usa-accordion">
          <div class="usa-banner-header">
            <div class="usa-grid usa-banner-inner">
            <img src="/img/tiny-usa-flag.png" alt="U.S. flag">
            <p>An official website of the United States government</p>
            <button id="usa-banner-toggle" class="usa-accordion-button usa-banner-button" aria-expanded="false" aria-controls="gov-banner">
              <span class="usa-banner-button-text">Here’s how you know</span>
            </button>
            </div>
          </div>
          <div class="usa-banner-content usa-grid usa-accordion-content" id="gov-banner" aria-hidden="true">
            <div class="usa-banner-guidance-gov usa-width-one-half">
              <img class="usa-banner-icon usa-media_block-img" src="/img/icon-dot-gov.svg" alt="Dot gov">
              <div class="usa-media_block-body">
                <p>
                  <strong>The .gov means it’s official.</strong>
                  <br>
                  Federal government websites often end in .gov or .mil. Before sharing sensitive information, make sure you're on a federal government site.
                </p>
              </div>
            </div>
            <div class="usa-banner-guidance-ssl usa-width-one-half">
              <img class="usa-banner-icon usa-media_block-img" src="/img/icon-https.svg" alt="SSL">
              <div class="usa-media_block-body">
                <p>
                  <strong>The site is secure.</strong>
                  <br> The <strong>https://</strong> ensures that you're connecting to the official website and that any information you provide is encrypted and sent securely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /va-gov/includes/usa-website-header.html -->

      <div class="va-crisis-line">
        <div class="va-flex">
          <button data-show="#modal-crisisline" class="va-crisis-line-button va-overlay-trigger">
            <span class="va-flex">
              <span class="vcl"></span>
              Get help from Veterans Crisis Line
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- /header alert box -->

  <div class="row va-flex usa-grid" id="va-header-logo-menu">
    <div role="banner" class="va-header-logo-wrapper">
      <a href="/" class="va-header-logo" title="Go to VA.gov">
      <img src="/img/header-logo.png"/>
      </a>
    </div>
    <div id="va-nav-controls"></div>
    <div id="va-gov-login-root" class="vet-toolbar"></div>
  </div>
  <div class="usa-grid">
    <div id="menu-rule" class="usa-one-whole"></div>
    <div id="mega-menu"></div> <!-- for the mega-menu, but if you add the ID the css breaks rn -->
  </div>
</header>
`;
