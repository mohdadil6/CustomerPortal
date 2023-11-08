import React from 'react';

function Newsletter() {
  const inlineStyles = {
    imageContainer: {
      display: "flex",
    },
    imageSpan: {
      boxSizing: "border-box",
      display: "inline-block",
      overflow: "hidden",
      width: "initial",
      height: "initial",
      background: "none",
      opacity: 1,
      border: 0,
      margin: 0,
      padding: 0,
      position: "relative",
      maxWidth: "100%",
    },
    image: {
      display: "block",
      maxWidth: "100%",
      width: "initial",
      height: "initial",
      background: "none",
      opacity: 1,
      border: 0,
      margin: 0,
      padding: 0,
    },
    textContainer: {
      display: "flex",
    },
    subscribeButton: {
      boxSizing: "border-box",
      display: "inline-block",
      overflow: "hidden",
      width: 24,
      height: 24,
      background: "none",
      opacity: 1,
      border: 0,
      margin: 0,
      padding: 0,
      position: "relative",
    },
    subscribeImage: {
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: "border-box",
      padding: 0,
      border: "none",
      margin: "auto",
      display: "block",
      width: 0,
      height: 0,
      minWidth: "100%",
      maxWidth: "100%",
      minHeight: "100%",
      maxHeight: "100%",
      objectFit: "unset",
    },
  };

  return (
    <div className="Footer_col__KgyHa Footer_col-4__raElS">
      <div style={inlineStyles.imageContainer}>
        <span style={inlineStyles.imageSpan}>
          <span style={inlineStyles.image}>
            <img
              alt=""
              aria-hidden="true"
              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2730%27%20height=%2735%27/%3e"
            />
          </span>
          <img
            alt="logo"
            title="logo"
            src="https://imagescdn.allensolly.com/img/app/brands/superapp/Icons/as_small_icon.svg"
            decoding="async"
            data-nimg="intrinsic"
            style={inlineStyles.image}
            srcSet=" 2x"
          />
        </span>
        <p className="MuiTypography-root MuiTypography-body1 Footer_col_title__LX1Ro css-144ix4w">
          join the{/* */} {/* */}seamex{/* */} {/* */}for newsletters
        </p>
      </div>
      <form className="Footer_subscribform__h6Yw6">
        <div className="MuiFormControl-root MuiTextField-root css-i44wyl">
          <div className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-formControl css-1sa4ecb">
            <input
              type="text"
              aria-invalid="false"
              id="standard-basic"
              placeholder="Enter your e-mail"
              defaultValue=""
              className="MuiInputBase-input MuiInput-input css-mnn31"
            />
          </div>
        </div>
        <button
          className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium Footer_mailsubmit__fi_Wt css-jno4gw"
          tabIndex={0}
          type="submit"
        >
          <span style={inlineStyles.subscribeButton}>
            <img
              alt="Arrow Right"
              title="Subscribe"
              src="https://imagescdn.allensolly.com/img/app/brands/superapp/Icons/icons-arrow-right-blue.svg"
              decoding="async"
              data-nimg="fixed"
              style={inlineStyles.subscribeImage}
              srcSet="https://imagescdn.allensolly.com/img/app/brands/superapp/Icons/icons-arrow-right-blue.svg 1x, https://imagescdn.allensolly.com/img/app/brands/superapp/Icons/icons-arrow-right-blue.svg 2x"
            />
            <noscript>
              &lt;img alt="Arrow Right" title="Subscribe"
              srcSet="https://imagescdn.allensolly.com/img/app/brands/superapp/Icons/icons-arrow-right-blue.svg
              1x,
              https://imagescdn.allensolly.com/img/app/brands/superapp/Icons/icons-arrow-right-blue.svg
              2x"
              src="https://imagescdn.allensolly.com/img/app/brands/superapp/Icons/icons-arrow-right-blue.svg"
              decoding="async" data-nimg="fixed"
              style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:unset"
              loading="lazy"/&gt;
            </noscript>
          </span>
          <span className="MuiTouchRipple-root css-w0pj6f" />
        </button>
      </form>
      <p>
        {" "}
        {/* */}Sign up for updates about SeamEx
      </p>
      <div className="Footer_sociallinks__oQRfA">
        <section>
          <div className="Footer_social__b9V_y">
            <a
              href="https://www.facebook.com/allensolly/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="facebook"
              title="facebook"
            >
              <i className="Footer_i_social_1__ucbD0"> </i>
            </a>
            <a
              href="https://twitter.com/allensolly"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="twitter"
              title="twitter"
            >
              {" "}
              <i className="Footer_i_social_3__bo7fY"> </i>
            </a>
            <a
              href="https://www.instagram.com/allensollyindia/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="instagram"
              title="instagram"
            >
              <i className="Footer_i_social_2__dQdhp"> </i>
            </a>
            <a
              href="https://www.youtube.com/user/allensollyindia"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="youtube"
              title="youtube"
            >
              <i className="Footer_i_social_4__yB5Y9"> </i>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Newsletter;
