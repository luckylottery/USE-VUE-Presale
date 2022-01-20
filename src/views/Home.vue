<template>
  <div id="home" class="main_body light-theme">
    <div class="sc-dkuGKe hLwPLQ header_section" style="background-color: #f5f7fa;">
      <div class="container">
        <div class="pRelative row">
          <div class="col-lg-7 col-md-12">
            <div class="row">
              <div class="header_section_left">
                <h1>
                  Next Gen Cross-Chain DEX With Built-In Trading Tools &amp;
                  Rewards
                </h1>
                <p class="desc">
                  crosswise takes the trading experience on DEX to the next
                  level with tighter security, a friendly interface, cross-chain
                  transactions, gasless swaps, verified listings and the right
                  tools, tightly integrated.
                </p>
                <div class="button_group">
                  <a
                    class="btn btn_primary"
                    href="/static/media/Crosswise_Litepaper_Final.cccd7f14.pdf"
                    target="_blank"
                    >LitePaper</a
                  ><a
                    class="btn btn_primary btn_pitchdeck"
                    href="/static/media/Crosswise_Pitch_Deck_1.2.2e182ee4.pdf"
                    target="_blank"
                    >Pitchdeck</a
                  ><a
                    class="btn btn_primary btn_whitelisted"
                    href="https://x9epe3je3fk.typeform.com/crosswise"
                    target="_blank"
                    >Get Whitelisted</a
                  ><a
                    class="btn btn_primary btn_audit"
                    href="https://github.com/TechRate/Smart-Contract-Audits/blob/main/October/Crosswise%20Token%20Full%20Smart%20Contract%20Security%20Audit.pdf"
                    target="_blank"
                    >TechRate Audit</a
                  >
                </div>
                <div class="button_group">
                  <div>
                    <a
                      class="btn btn_primary btn_pitchdeck"
                      href="https://bscscan.com/address/0xa30646260c1b2733a57380df1f880e334d278187"
                      target="_blank"
                      ><img
                        class="scan_img"
                        src="data:image/png;base64,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"
                      />Pre-Sale Contract</a
                    >
                  </div>
                  <div>
                    <a
                      class="btn btn_primary btn_pitchdeck"
                      href="https://bscscan.com/address/0x0999ba9aEA33DcA5B615fFc9F8f88D260eAB74F1"
                      target="_blank"
                      ><img
                        class="scan_img"
                        src="data:image/png;base64,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"
                      />CRSS Contract</a
                    >
                  </div>
                </div>
                <div class="col-12 text-center social-icon">
                  <div class="dapp_bar shadow">
                    <div><p>Social Media</p></div>
                    <div class="social_links">
                      <ul class="list-group list-group-horizontal">
                        <a
                          href="https://discord.gg/4BuwxMz24J"
                          target="_blank"
                          class="list-group-item list-group-item-action"
                          ><img
                            src="data:image/png;base64,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"
                            alt="discord.png" /></a
                        ><a
                          href="https://crosswise.medium.com/"
                          target="_blank"
                          class="list-group-item list-group-item-action"
                          ><img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAtUExURRQCKkdwTBQCKhYDLCkWNxgFLBQCKhYELBcDKxUCKRYCKhUCKhUDKhYHLxUDK2928V0AAAAPdFJOU5kAik8LLnY+WYN+akgiU/XwhmUAAACASURBVBjTYxBEAgyonCAGKFAFchRgHCYghwEOMDjcxlYMDMrGCWAOk6MoA4OhrAJE2UbBCQyOElA9KYIF3HBOuqMQayGcYyijagjnqIicRnDYBR0QHE7BA3BOiELghINyEA6f4IVcNkeRBWAO58wJTEyrVikw4HU1iudQvI0rdADe4xnXcJIUMAAAAABJRU5ErkJggg=="
                            alt="m.png" /></a
                        ><a
                          href="https://t.me/crosswise"
                          target="_blank"
                          class="list-group-item list-group-item-action"
                          ><img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAkUExURUdwTBQCKhUCKhYDK0k/ThUCKxoFLhgELBUCKhgHLRUCKhkMLszWFccAAAAMdFJOUwCZhFQEYzA0kiNzFMDeAMEAAACUSURBVBjTY2DAB1hKNZrCHaCcJEEgUIOwmQXBwADMMYRwhEFsNkEoSABynGAcFSCnEMxaNlFQHMgJBDKFrBk2CooCOYqCglIlnAwTBYWAnEZB0QksZiyFghIgjtQGhkkJQAskwMrCp3YyMCwEKwMZEAASE4UaLezAIgg2GmypJifEUohzrCDOQXEoqhdQPIfqbewAAB0/Gj/KBvXiAAAAAElFTkSuQmCC"
                            alt="paperplane.png" /></a
                        ><a
                          href="https://github.com/crosswise-finance"
                          target="_blank"
                          class="list-group-item list-group-item-action"
                          ><img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAtUExURUdwTBQCKhUCKxUCKhkFLRUCKigdQhUDKRUCKRcHLBYDKhkFLRYDLRQDKxYDK3U6S0YAAAAPdFJOUwCZZ48thAhJeiBTMlBNXu2Sv/EAAACoSURBVBjTY2DACzYFm2rD2FsFgSAawuYSBIMFYM5CCEcKxOYW1HwobCg3SXADkMMqWMCWwJbALhgA5GyEqOYSlAaSioITQBxOQSEgGSgBMbRRFEgYCkE4isLonEBhCMdQFGzABRCbF2zARkHxBAYGtkKw0RyWikYMbMqCgg1ADotokhRIsaADSHUhSM9BQXGwMewS2iBOAcRQDxkgpwXmVU8Ghin4AwYAMssaXkSUuVEAAAAASUVORK5CYII="
                            alt="git.png" /></a
                        ><a
                          href="https://twitter.com/crosswisefi"
                          target="_blank"
                          class="list-group-item list-group-item-action"
                          ><img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAtUExURRQCKkdwTBQCKhkFLDUfPhgILhUDKmBgYBUCKhUCKhYDKxcEKyUSNBkNMBUCKgWShpIAAAAPdFJOU5kAbzAIH08ChJFiOw0UfFiMW1AAAACVSURBVBjTYxBEAgwEOSKFYI4MiC3cwHQnF8ipNARyNjAwTFgC5FzgFhQUn8DAwPkYyHFgUBUUZQCCjUCOEAPDM2MgmxNkgHMDAxhwCIKVQQCTIEQZGLCBOLJQZaxgFwRBOIpgzgYIJxDMKYNpATs0CsRRh3BkEoBsLoirox6AbDSE+Edk0wSGLhOY58pljosTGwZgAAAmzh6AJE+PcQAAAABJRU5ErkJggg=="
                            alt="twitter.png"
                        /></a>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-md-12 pRelativeSecond">
            <div class="row">
              <div class="header_section_right">
                <div class="header_presale_board">
                  <h5>Pre-Sale Live</h5>
                  <div class="presale_info">
                    <div class="presale_info_rectangle token_price">
                      <p>Token Price</p>
                      <h5>1 CRSS = 0.6 BUSD</h5>
                    </div>
                    <div
                      class="presale_info_rectangle_left presale_info_rectangle"
                    >
                      <p>Min Purchase</p>
                      <h6>1 BUSD</h6>
                    </div>
                    <div
                      class="
                        presale_info_rectangle_right presale_info_rectangle
                      "
                    >
                      <p>Max Purchase</p>
                      <h6>25,000 BUSD</h6>
                    </div>
                    <div
                      class="presale_info_rectangle_left presale_info_rectangle"
                    >
                      <p>Soft Cap</p>
                      <h6>200,000 BUSD</h6>
                    </div>
                    <div
                      class="
                        presale_info_rectangle_right presale_info_rectangle
                      "
                    >
                      <p>Hard Cap</p>
                      <h6>1,100,000 BUSD</h6>
                    </div>
                    <div class="presale_info_rectangle long_width">
                      <h6 class="">Stage 1 = 1 Million CRSS @ 0.2 BUSD</h6>
                      <h6 class="">Stage 2 = 1 Million CRSS @ 0.3 BUSD</h6>
                      <h6 class="highlight active">
                        Stage 3 = 1 Million CRSS @ 0.6 BUSD
                      </h6>
                    </div>
                  </div>
                  <div class="presale_tips">
                    <div class="tips_item">
                      <p>Raised:</p>
                      <span>&nbsp;&nbsp;1,099,999 BUSD</span>
                    </div>
                    <div class="tips_item">
                      <p>Target:</p>
                      <span> &nbsp;&nbsp;1,100,000 BUSD</span>
                    </div>
                  </div>
                  <div class="presale_progress">
                    <div class="RSPBprogressBar">
                      <div
                        class="RSPBstep"
                        style="
                          left: 0%;
                          transition-duration: 300ms;
                          transform: translateX(-50%) scale(1);
                        "
                      >
                        <div width="30" class="sc-cwiweh hSNYlT"></div>
                      </div>
                      <div
                        class="RSPBstep"
                        style="
                          left: 50%;
                          transition-duration: 300ms;
                          transform: translateX(-50%) scale(1);
                        "
                      >
                        <div width="30" class="sc-cwiweh hSNYlT"></div>
                      </div>
                      <div
                        class="RSPBstep"
                        style="
                          left: 100%;
                          transition-duration: 300ms;
                          transform: translateX(-50%) scale(1);
                        "
                      >
                        <div width="30" class="sc-cwiweh hSNYlT"></div>
                      </div>
                      <div class="RSPBprogression" style="width: 100%"></div>
                    </div>
                    <div class="row">
                      <div class="sc-gJpXkD inBmZO soft-cap">
                        <div class="sc-fyjqAk dtoRLS presale-text-cap">
                          Soft Cap
                        </div>
                      </div>
                      <div class="sc-gJpXkD inBmZO hard-cap">
                        <div class="sc-fyjqAk dtoRLS presale-text-cap">
                          Hard Cap
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src="@/assets/images/crosswise/planet-8.png"
            class="planet8_img shadow"
            data-xblocker="passed"
            style="visibility: visible; width: 475px; box-shadow: none !important"
          />
        </div>
      </div>
    </div>
    <section
      class="about_section grey_background first-about-section"
      id="about"
    >
      <div class="container">
        <div class="row">
          <div class="about_section_sub">
            <div class="title"><h1>Technical Partners</h1></div>
          </div>
        </div>
        <div class="row">
          <div class="features">
            <div class="feature_item">
              <div class="feature_item_icon">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAAAyCAYAAADflABYAAAACXBIWXMAAC4jAAAuIwF4pT92AAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAEglJREFUeNrsnXuUXVV9xz/7nH3OfczckEwymckDMORBCEmgCkosGCEQgZCGCi5otWql2toial24dNlWa10ubaVSpZSFT4RaRQVUUAQSIiRgwisBjHkHMpnJY5J53pn7Omfv/jG/Oz1z5s5k8jDmNve31l6555y999nn7O/+Pb6/fSbqzttv53hIV3d3o3bdNymlrrYw23WcKY7rTrfWOgpcY202DMPt1to2pdRLpVLpEe262zOZTOFY722srXjeUYqaVIfoY2nc09MzQWt9E0q9O51KzdFaJx3HcUaoPg6YCmCtvTEIgi8EQXCop7f318Bd4zKZ1bXpqAHxiCSbzc50tb4tmUot8T2v/kjbK6XwBqQ5BTcEQXB9NpvdYuErwD2Z+npTm5pTS5wjqdybzSZyudzdiWTy1VQyueJoQFhxNWjt1tfXz0unUt9yHGdzX1/fpbWpqQGxovT391+T8P2WVCr1QU/r5O9jMK7rqrp0erbv+4/19vbe09vbm65NUQ2Ig5LP57+YTCYf8n2/8UQMyvM8XZ/JvNdx3Ve6urtn1abpFAdiEAS6P5d7NJlMftpxHPdEDkwBden0Wb7nrc/29V1em6pTF4ieMeaFdCr1jj/kANPp9ARP64fzhcK7atN1CgKxUCg84Pv+wpNhkIlEIqHge9m+vgtH0p6VSk2qHIjFYvErfiJxzck00EQikXSUejQMw+bhSFSVS02qF4hBGF6ltf7YyTiN6XS6IZfP3x+G4ZDhhUEwrJgwrM1utQIxDMOUtfa+Ex2YHBEYU6mL8/n8R6LnrLXDSk2qG4jf9rRuOKkH7DjKdd0vFovFmZFzFUtNqhCIYRjO1FpfVw2DTiaTdaVS6WvlY2PtsFKTKgWiMeZOx3G8ahm453mXFwqFc8U2DymKgXx2TaoMiMbaKa7rVlV+1/d9PzTmZgDlOENKzSxXn2gAE4af0lp71TZ4pdR1xVLpY9baIXsaldYoIGagm4G5jD2/boDfAu0n8JHOBD4KvATce4RtzwMmjnI9C7QBe46zIpsL7AcOHTMQgT+txlXk+/7EfD6/xHXdX0QjZUepOAibgGeAGUd4i83AJcDBE/A4LvBt4DI5fg14eoxtbwG+OoZF1g08CnwS2H0cxnsX8H5gG3AF0HrUiDbGzHddd1o1AtF1HEfB+7Xr4pZLZbOcBk4/ilucASROoJsUHePcI2h73Rg1/WnADcATon2PRU4DbhRldo6Uo9eIYRi+3fO8qnWqLFxQLJWUjahEYy3JxBD87AKuBZYB5S1sKWCF/IuYlkeAMhNeEvPYegIfpxT5HRxBuyh7vxe4CSi7K+OBC4FrgPlybjbwGeBDx/bqKUaOi8dqmpcP6d1ajBm+Qdp1x85xh2E4rP6Qfq0FpUbt0xiDUuqw0a+ndVOpVJqMUvsH24Yhxhhc142S249IicpqYLH8fhF43xgeLwN4MvndR/Cu60S7Hmm7svZhlHZRT6Qd+GXs+gPAvwFrIpprsSzC3ChjBegH8hXq5Bma0m8egykfJ23y0u8Qc3BGFCzJZJKmKVNonDyZhkmTaGxqorGpacyRqFKKiZMmDQGQtRatNQ0TJ9LY1MSU6dMZP2ECQVB50VtrSaXTaM87bJbEcZyEhbluxDwrxxmx75gEsRc1mlwK/Bz4nfhEm4HngE8DoyUBrpJ2myLtfgN8/DDt+oA/Bn4BbJHyFPDOw4xzpKChA1gbOZ4qgCtLPXCz1CmPdRvwCvCrmMJ6K/D9yAJBgP4tYEnsvo3AbcAGYKv0+Srwo2hdrZRqjGqy8Q0NXHjRRaRSKcaddhrt7e0UCwVW/upX5LPZAY7OcdBaD2quIAgGz09oaGDpsmX88N57KRWLuFpjwpBzFy7kzYsWsW/vXhzHYVJjI0+tWsWOrVtBKUwYYkXzBkHAsmuvZU9LC+ufeYZkMkkQBFhjhtxbgOgUCoWJxpghoC2n+pLJ5GhgHivZ+D7gmwz/xqcZuAD4czHzO2PXPwt8rkJ/zcBbgA8AfyKuQ1z+Frg4tkCaJHi6GfjPMSyuqKTERJdlS0TDThTAv7lCuwZgFrAUeLcA8Esyjrg//QEx+ysjz7kSmFehzxni294C3KEdxxk/iEqt2dfWxgM//CEzZs1iydKlPPzgg5SKA+b/DTNnMmHCBPbv28f+vXvBWuoyGWbMmkUYBGzfsmXA/FrLhIkTmdzczIF9+9i3Zw+ZTIZDBw9y/333USwWuXL5cs5/05vY9OqrTJ02jSnTp2ONYc/u3ZRKJSY0NGCtpa6+nmI+T/O0aUyePJlD7e207tkzBIzW2vq4CVdAEIbHI+98AXB3BIQPA6tEo/ylTOJ84LsS8QYRIEVBuAlYJ/WXyxDnA3cCVwtdFJXFYjZ/Ln2uiGiwT0mEXcmszhPA7ZCAZ7wEJu8Wiqcs90Z80k9EQHgI+IEwBZ6MdYFc+ycx858DPiKLyIn44auB/45Y27sjIGyVKLsDuF4sjAK+Dmxzhk2gUoNqwkqWIgwCFl1yCXPmzmX37t28/fLLOeMNbyBVV8e1119POp1mcnMzy669FgvU1dczd9480uk0K667jrpMhlKpRLqujsapU5kzbx5Tpk5l92uvUZ/JsHjJEoqFAplMhqtXrBjUor7vo4A/uuACLrzoIlpaWnjr4sWcc+65Q0yv53njU8kkQ0oqhac1oTmmDwId4D8AX47vlon5KnAr8I6IKbwkQr1MAP4x0s8jwEWiMVYA74o490tFc8S3C/VKfzcIiG6NmdWR9opOA54VE7hW7n2nmPmyfFPORRdbOeC4WjTu5ySguSnig84WUK8SKxD1WT8mz7cy4sosj/itlwNfkPteJgu3LB91KmqMqH8HJJJJzj7nHHp7ekj4PvlcjqYpU5g3fz4WWLN6Nb9+4gl+s2bNoGnd+MILrFu7liAIyIwbRxAEJBMJFi5cyPU33MDB9naeffppwiDg2bVrB0DvOKTTafL9/eRzOfa2tdHd3c3c+fM51N5Owvfp7OjgzLPOwkYAZoypWGw57Xf0skBMaFnuil1/Abgvcrw8Bi6AHuDDAqyy/EQm7pD4X90V6Jd7xZcsy0ORPhwJmkYLDBoqEPQ/lYXwwViE/gngf4C/AtZHgrKFwNsiQDQRy5CMBUml2P3+IrYQN8eufy1iPS7UY8nJWmsJw5Bcfz+lYpHnnn2Wzq4uFpx3Ho5EttZaThs/HtPZSaFQIJfLkclkBq9prclms6x89FH2trZy5TXX8PKGDaRSKd526aWseuwxDhw4wNx583DED1TitwpnSLFQ4LcbN1IqlXAjplkpla+4EdbaY805L4j5aF8UYPVX0CZEItIoB/g7oKVC3/8lJrBLJjSe2VofO87FKJKRVP1+0WQp0aYXR7yVVuBnFdq8IhpuvmjyBaLBTx8lQo+/2DfHovUzIr8vAe6Rd1mK0EqDPK82xuRd160bZpOUGgRDsVhk2+bNzJozh3wux+y5c3l5wwY2vvgis+bMYcnSpSRTKerq63nqyScHQKIUoTFDom3XdUml0+zcvp09LS1cdsUVPL9uHYlEAt/3Of3MM/E8D8/36ejoYMasWZy7YAEvPvccC84/nwP79zNz9mz2tLTQfuDAYN9BEHTk+vvj2RSstWQkkj5KXzH+2eyVo9TtEn+HmHbrGaVN52gERAU3YSyr6oBErwB3AF+WTIoSvzUhmi8qM2XsV1Xo64AssMOxCqPRKjOljCT3a2vtoVgYj+u6HGxv5/Ff/pIgCPA8j2fXrOHMGTNonDyZVzZsoK2lBWMMP/3xj5l99tkcPHiQbZs3Y4zhqVWrwFpMGPLk44/T29vL9q1baWttHeAOreXpJ59kYmMjr+/axeonnmByUxPbtmxhX1sbYRjy9OrVnH3OOVhjeHXjRrq7upg2fTqbN23i9V278Lz/UyBa606t9TAgHgeNGNVkWQlOXMnUtMnqtkK1bBdHPA6ixlE43H8RX+7bDEuNH/VnN65o17Lm+YwsoLJPeZP4eN+PcIY/iQQy24BvABtFKzcykHN3K3CWI3GZcY29UvzqyeKOZCPm/ACwRUt0dEaMm6Mvm6W7qwvP81CiHV/ftYtdO3bgKIWrNa7rkuvv54X168tBA0opXtuxA8/zMMawc/t2tNZ0dXbScejQYLTb29NDV2cnvu/z+s6d7NqxA601PV1dg2B9ft06tNakUin2trbSunv3gNmOgNAYE/i+v2MkwJVdg6OU9aK1JkjAshV4eYQU2zJ52V2xbMwciRw3xdr8q3CJSJ/PH46i5Qj/MkeEzvks8GDk3JeErukCFkVAWJBIOOrPnRfxCxUj/5mauKvwemwRPzKCxfkksMmJOcRDtGJdfT1OxKw5ss1K+z5aa6y15HI5HNfF9/1Bc+hqjRGzXK5Xbl8OLqLA1Z6HljblbIsRDjAIQ4IgwHEcPN8fAkLhPruBPdYYhhVrj3VLWGfE7/GBf4+RuI68yB8LtVHOzDwYAWNaHPOpkcm8KQLCsUrhMGZ+NHlItF5ZTo9E4Y0xrZaLPd/NEe3sCpdZaWGkRRPXRYKtsiyTaDzuU74E/DPwZY1SD4jvQDzDMqm5mXHjxrF/3z5KQUAqmcQaQyKRIJfLUSwWaZ4+HRuG5PN5EskkpVJpMGIdN24cnZ2d1GcyJJNJ+vv6ONTezoyZM8nncoRhSCGfJwxDkqkUnu/T29NDOpXCWktDYyNtra0YY5g0cSLdnZ10d3UNMbfGmFeBoJJZHsOfpXPH4ON8XvK04yQT8KJMbJf4VIuk3p5IIHBAqIyHJGhYIqbuZYlmz4/0f59oQx0bj1shpZYdYbx6DBmiW4TCKUfzHxEfcq1oTS0a6vuysOoli3N+rJ+lDGya6BEC/41y/sPCGtSJv3mbLMBbpO+fSjZlK3CW9F0G7X3adZzfGGN6HcfJRM1ZoVikff9+ujs6CMKQMAzJ9vTgeR6u45DP5dC+TyBfzJXzu2EQoJTCTyTo6ugYSCz299OfzQ7SKV0dHRSLRZRSFAsFHNelkMvR39dHPp8f2MZlLbt3DiQqiqUS+XQaP5EYoHkEYEL5POiNEIyMwT/siPzeNUKdLRJR3i1a7Szg7yuYoetifTwmxO3Xpc2kCM9Ylh8Afx3RRv2xnPFoflhUO64TmgVJpZUqtG0TIvy7EXpmBgPb4z4ofqGW9N1bI+2+J/3dJMfzI/7dNyT6RxbqvEgK8DahhRqA90jff1bheb4KfF7defvthGH4hOu6SyptPBj0miOTH53kYcBQCqwdEuPbmP9pwnDAd4v1U47Wo9+clK+rCE00SFyVSnkLpyulDo7kVEUzMBVkjlAygTj1O0apO1XAtihinrrFtfkOI2+gPU0m4rIIZbFXQPhwrO7lYjI3Co0S/yOm1wj/uEY0tYmk/srf8HxcQDeS3Cpa7UFZXGUur0y4l6PbHcKbvhjJqlwI/IOMryzvFW5yvARtLwlpvT9mht8lQE0KiLfKO3gGYACIxlzlOs4vqDLJ5/NPJZPJxfl8fsQwLuF5OK5LTU5ucYQsfjwMw9ZqGri11jqOc0dZy1YqruMM0bo1OcmBCASO43yhmgZeLBZbPd//WTn6Hqk4jlP74L6KgIhS6u4wDHdVw6CNMUYp9VElPlQQBCOW8PjswKnJiQIiYBzH+RtbBbNWLJVW+b7/QDQAGqnUzHL1ARGl1GPG2h+d5Ca5U2t9Y4ynOXypSfUAUQKX94RhuPNkNckW3qNdd8h2+EEec4RiTe0/Kag6IAIl13UvCcOw52QaqLWWUql0V8L3h9FMjlKjlppUJxAB2qy1S0Jj8icLCPtzuXsSicTfVaxQM8v/b4GI1vr5MAiuMMbk/tAgzOVy36hLp99fm65TEIgAvu+vARaFYbj/D+UTloLgS+l0+kO1qTqFgSjUyEbXdeeEYbj+RA4sCILuIAhu9D3v07VpqgGxLD2u674lCMOP/76DGGutKRQKDxtjzvR9/0e1KaoBcbjf6Lq3u647LQiC7xxv39FaawrF4kvFUmlpIpFY7vt+d216akAcTbJa6w8opU4vlUpfCYJgNyN/x3BYCcOwr1gsrioWixcnfP+NCd9fWZuWU0+O+v9rVkod8jzvVuDWIAgWWWvfCVymlJqmlKpXSiVkA2G5AdaYorU2b63ttNa+DNyvlHrI9/1cbSpObfnfAQCupzqFBbU9igAAAABJRU5ErkJggg=="
                />
              </div>
              <div class="desc"></div>
            </div>
            <div class="feature_item">
              <div class="feature_item_icon">
                <img
                  src="data:image/png;base64,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"
                />
              </div>
              <div class="desc"></div>
            </div>
            <div class="feature_item">
              <div class="feature_item_icon">
                <img
                  src="data:image/png;base64,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"
                />
              </div>
              <div class="desc"></div>
            </div>
            <div class="feature_item">
              <div class="feature_item_icon">
                <img
                  src="data:image/png;base64,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"
                />
              </div>
              <div class="desc"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="about_section" id="about">
      <div class="container">
        <div class="row">
          <div class="about_section_sub">
            <div class="title"><h1>About Crosswise</h1></div>
            <div class="desc">
              <p>
                Next-gen cross-chain Decentralized Exchange (DEX) building a
                seamless DeFi user experience. Crosswise bridges the gap between
                centralized and decentralized exchanges, aiming to bring
                together the best of both worlds. Crosswise is committed to it's
                users and brings back customers service and support to the DeFi
                space.
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="features">
            <div class="feature_item">
              <div class="feature_item_icon">
                <img
                  src="data:image/png;base64,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"
                />
              </div>
              <div class="desc"><h6>Cross-Chain</h6></div>
            </div>
            <div class="feature_item">
              <div class="feature_item_icon">
                <img
                  src="data:image/png;base64,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"
                />
              </div>
              <div class="desc"><h6>User Friendly</h6></div>
            </div>
            <div class="feature_item">
              <div class="feature_item_icon">
                <img
                  src="data:image/png;base64,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"
                />
              </div>
              <div class="desc"><h6>Gasless Mode</h6></div>
            </div>
            <div class="feature_item">
              <div class="feature_item_icon">
                <img
                  src="data:image/png;base64,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"
                />
              </div>
              <div class="desc"><h6>Trading Tools</h6></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="mission_section">
      <div class="container">
        <div class="row">
          <div class="mission_item">
            <div class="item_img">
              <img
                src="@/assets/images/crosswise/image-1.png"
                data-xblocker="passed"
                style="visibility: visible"
              />
            </div>
            <div class="item_content">
              <h1>Why Crosswise?</h1>
              <p>
                DeFi is relatively new and packed with untapped utility.
                Crosswise is extending DEX functionality, tightening security
                and vetting, adding trading and portfolio tracking tools, as
                well as bringing back customers support, to enhance the overall
                DEX experience. Our native CRSS token has been carefully
                designed with sustainability in mind, benefitting from ample
                deflationary mechanisms to ensure price stability.
              </p>
            </div>
          </div>
          <div class="platform_features">
            <div class="title"><h1>Platform Features</h1></div>
            <div class="feature_item_group">
              <div class="feature_item">
                <div
                  class="feature_item_icon tooltip expand"
                  data-title="A seamless way of swapping tokens. Swap Exchange uses automated liquidity pools to execute your swap in an instant."
                >
                  <img
                    src="@/assets/images/crosswise/feature/img_advanced_exchange.png"
                    data-xblocker="passed"
                    style="visibility: visible"
                  />
                </div>
                <div class="desc"><h6>Interoperable Swap Exchange</h6></div>
                <img
                  src="@/assets/images/crosswise/pointer.png"
                  class="vert-move"
                />
              </div>
              <div class="feature_item">
                <div
                  class="feature_item_icon tooltip expand"
                  data-title="Advanced exchange functions arm you with tools to set and manage limit orders, executing swaps at specific price levels, to optimize your trading strategy."
                >
                  <img
                    src="@/assets/images/crosswise/feature/img_interoperable_swap_exchange.png"
                    data-xblocker="passed"
                    style="visibility: visible"
                  />
                </div>
                <div class="desc"><h6>Advanced Exchange</h6></div>
              </div>
              <div class="feature_item">
                <div
                  class="feature_item_icon tooltip expand"
                  data-title="Track all your trades using the orderbook. Here you will find all your past and pending trades for both Quick Swap &amp; Advanced Swap orders."
                >
                  <img
                    src="@/assets/images/crosswise/feature/img_order_books.png"
                    data-xblocker="passed"
                    style="visibility: visible"
                  />
                </div>
                <div class="desc"><h6>Order Book</h6></div>
              </div>
              <div class="feature_item">
                <div
                  class="feature_item_icon tooltip expand"
                  data-title="Keep track of global as well as personal data using the analytics dashboard. Trade volume, liquidity, historical value of your LP  for your favorite tokens can be found here."
                >
                  <img
                    src="@/assets/images/crosswise/feature/img_analytics.png"
                    data-xblocker="passed"
                    style="visibility: visible"
                  />
                </div>
                <div class="desc"><h6>Analytics</h6></div>
              </div>
              <div class="feature_item">
                <div
                  class="feature_item_icon tooltip expand"
                  data-title="Crosswise uses it's own price charts. Get accurate live price data for all tokens traded on crosswise DEX."
                >
                  <img
                    src="@/assets/images/crosswise/feature/img_price_chart.png"
                    data-xblocker="passed"
                    style="visibility: visible"
                  />
                </div>
                <div class="desc"><h6>Price Chart</h6></div>
              </div>
              <div class="feature_item">
                <div
                  class="feature_item_icon tooltip expand"
                  data-title="Dive deeper into the numbers that matter. Personal account statistics allow you to track your assets and see their historical evolution. Much like a portfolio tracker, it provides an overview of assets in your wallet, as well as assets held in our pools and farms."
                >
                  <img
                    src="@/assets/images/crosswise/feature/img_account_stats.png"
                    data-xblocker="passed"
                    style="visibility: visible"
                  />
                </div>
                <div class="desc"><h6>Account Statistics</h6></div>
              </div>
              <div class="feature_item">
                <div
                  class="feature_item_icon tooltip expand"
                  data-title="Tell your friends about crosswise and earn 1% of the new users' lifetime earnings! A unique link will be given to all users to track their commissions."
                >
                  <img
                    src="@/assets/images/crosswise/feature/img_referral_affiliate_commissions.png"
                    data-xblocker="passed"
                    style="visibility: visible"
                  />
                </div>
                <div class="desc"><h6>Lifetime Referral Commissions</h6></div>
              </div>
            </div>
          </div>
          <div class="launchpad_features">
            <div class="title"><h1>Launchpad</h1></div>
            <div class="feature_item_group">
              <div class="feature_item">
                <div class="feature_item_icon">
                  <img
                    src="@/assets/images/crosswise/launchpad/launchpad_project.png"
                    data-xblocker="passed"
                    style="visibility: visible"
                  />
                </div>
                <div class="desc"><h6>Verified Projects Launchpad</h6></div>
              </div>
              <div class="feature_item">
                <div class="feature_item_icon">
                  <img
                    src="@/assets/images/crosswise/launchpad/launchpad-token_pool.png"
                    data-xblocker="passed"
                    style="visibility: visible"
                  />
                </div>
                <div class="desc">
                  <h6>Native &amp; Cross-Chain Token Pools</h6>
                </div>
              </div>
              <div class="feature_item">
                <div class="feature_item_icon">
                  <img
                    src="@/assets/images/crosswise/launchpad/launchpad-token_area.png"
                    data-xblocker="passed"
                    style="visibility: visible"
                  />
                </div>
                <div class="desc"><h6>Token Owners Area</h6></div>
              </div>
              <div class="feature_item">
                <div class="feature_item_icon">
                  <img
                    src="@/assets/images/crosswise/launchpad/launchpad-development.png"
                    data-xblocker="passed"
                    style="visibility: visible"
                  />
                </div>
                <div class="desc">
                  <h6>
                    Incubation Program for Ecosystem Growth &amp; Development
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div class="dex_mechanics">
            <div class="title"><h1>Dex Mechanics</h1></div>
            <div class="feature_item_group">
              <div class="feature_item">
                <div
                  class="feature_item_icon tooltip expand"
                  data-title="CRSS is our native token used for both rewards and governance, whilst XCRSS is our vesting token.
"
                >
                  <img
                    src="@/assets/images/crosswise/dex/img_tokens_crss_xcrss.png"
                    data-xblocker="passed"
                    style="visibility: visible"
                  />
                </div>
                <div class="desc"><h6>CRSS &amp; XCRSS Tokens</h6></div>
              </div>
              <div class="feature_item">
                <div
                  class="feature_item_icon tooltip expand"
                  data-title="Crosswise uses a constant emission of 1 CRSS per block, and is capped to a max supply 50 million CRSS."
                >
                  <img
                    src="@/assets/images/crosswise/dex/img_emissions.png"
                    data-xblocker="passed"
                    style="visibility: visible"
                  />
                </div>
                <div class="desc"><h6>Emissions</h6></div>
              </div>
              <div class="feature_item">
                <div
                  class="feature_item_icon tooltip expand"
                  data-title="Gasless Swap mode allows users to trade without having to pay for gas. Trade with confidence without worrying about transaction fees."
                >
                  <img
                    src="@/assets/images/crosswise/dex/img_gasless_mode.png"
                    data-xblocker="passed"
                    style="visibility: visible"
                  />
                </div>
                <div class="desc"><h6>Gasless Mode</h6></div>
              </div>
              <div class="feature_item">
                <div
                  class="feature_item_icon tooltip expand"
                  data-title="Your opinions matter. Add proposals and vote on protocol changes. We're building this DEX with our community!"
                >
                  <img
                    src="@/assets/images/crosswise/dex/img_voting_options.png"
                    data-xblocker="passed"
                    style="visibility: visible"
                  />
                </div>
                <div class="desc"><h6>Governance &amp; Voting</h6></div>
              </div>
              <div class="feature_item">
                <div
                  class="feature_item_icon tooltip expand"
                  data-title="Flawless indexing and up to date data. Our subgraph is powered by The Graph to query networks like Ethereum &amp; IPFS. Our open subgraph API makes our data easily accessible."
                >
                  <img
                    src="@/assets/images/crosswise/dex/img_subgraph_graph.png"
                    data-xblocker="passed"
                    style="visibility: visible"
                  />
                </div>
                <div class="desc"><h6>The Graph subgraph</h6></div>
              </div>
              <div class="feature_item">
                <div
                  class="feature_item_icon tooltip expand"
                  data-title="We're partnering with Chainlink and have implemented their price oracle to avoid flash loan attacks and any other price manipulation on crosswise."
                >
                  <img
                    src="@/assets/images/crosswise/dex/img_dex_mech.png"
                    data-xblocker="passed"
                    style="visibility: visible"
                  />
                </div>
                <div class="desc"><h6>Chainlink Price Oracle</h6></div>
              </div>
              <div class="feature_item">
                <div
                  class="feature_item_icon tooltip expand"
                  data-title="CRSS token has anti-whale protection that limits transaction size as a proportion of total supply. Projects listing on crosswise also have the option to enable anti-whale protection for their tokens."
                >
                  <img
                    src="@/assets/images/crosswise/dex/dex-mech-04.png"
                    data-xblocker="passed"
                    style="visibility: visible"
                  />
                </div>
                <div class="desc"><h6>Anti-Whale Protection</h6></div>
              </div>
              <div class="feature_item">
                <div
                  class="feature_item_icon tooltip expand"
                  data-title="Crosswise uses virtual rates provided by the Chainlink price oracle, making front-running unprofitable. We also use a transaction limiter that is able to throttle bot activity."
                >
                  <img
                    src="@/assets/images/crosswise/dex/dex-mech_1.png"
                    data-xblocker="passed"
                    style="visibility: visible"
                  />
                </div>
                <div class="desc"><h6>Anti-Bot Protection</h6></div>
              </div>
              <div class="feature_item">
                <div
                  class="feature_item_icon tooltip expand"
                  data-title="Crosswise will offer generous farming rewards from the start, with a 1.2 multiplier for the first 2 weeks."
                >
                  <img
                    src="@/assets/images/crosswise/dex/dex-mech-02.png"
                    data-xblocker="passed"
                    style="visibility: visible"
                  />
                </div>
                <div class="desc"><h6>Farms &amp; pools upon launch</h6></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="crosswise_feature_section">
      <div class="container">
        <div class="row">
          <div class="title"><h1>Crosswise Features</h1></div>
        </div>
        <div class="features_group">
          <div class="features_item">
            <div class="features_item_icon">
              <img
                src="@/assets/images/crosswise/feature/img_crosswise_f_1.png"
                data-xblocker="passed"
                style="visibility: visible"
              />
            </div>
            <div class="features_title"><h6>Launchpad &amp; Incubator</h6></div>
            <div class="features_desc">
              Crosswise features a launchpad coupled with an incubation program
              to help budding entrepreneurs launch on crosswise DEX. Support
              will include funding, marketing, networking, as well as technical
              assistance to help projects deploy to our multi-chain ecosystem.
            </div>
          </div>
          <div class="features_item">
            <div class="features_item_icon">
              <img
                src="@/assets/images/crosswise/feature/img_crosswise_f_2.png"
                data-xblocker="passed"
                style="visibility: visible"
              />
            </div>
            <div class="features_title"><h6>Solid Infrastructure</h6></div>
            <div class="features_desc">
              Crosswise platform is capable of handling high user loads, during
              both peak trading and IDO hours. Our state-of-the-art IT
              infrastructure provides users with the best security, uptime, and
              premium tools built for a multi-chain environment.
            </div>
          </div>
          <div class="features_item">
            <div class="features_item_icon">
              <img
                src="@/assets/images/crosswise/feature/img_crosswise_f_3.png"
                data-xblocker="passed"
                style="visibility: visible"
              />
            </div>
            <div class="features_title"><h6>User-Friendly DEX</h6></div>
            <div class="features_desc">
              Crosswise is tightly integrating tools such as an Order Book,
              Analytics, Explorer, Price Charts, Account Statistics, Affiliate
              Rewards with a friendly user interface for a next-gen DEX
              experience. We're also bringing back real support to the DEX
              space, to ensure accessibility and customer satisfaction.
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="roadmap_section_v2" id="roadmap" style="background-color:#f5f7fa;">
      <div class="container">
        <div class="row">
          <div class="title"><h1>Roadmap</h1></div>
        </div>
        <div class="exchange_slider">
          <div class="gallery_images">
            <ul>
              <div class="slick-slider slick-initialized" dir="ltr">
                <div class="slick-list">
                  <div
                    class="slick-track"
                    style="
                      width: 2820px;
                      opacity: 1;
                      transform: translate3d(0px, 0px, 0px);
                    "
                  >
                    <div
                      data-index="0"
                      class="slick-slide slick-active slick-current"
                      tabindex="-1"
                      aria-hidden="false"
                      style="outline: none; width: 470px"
                    >
                      <div>
                        <li
                          tabindex="-1"
                          style="width: 100%; display: inline-block"
                        >
                          <div class="gallery_photo shadow">
                            <div class="gradient-box">Q3/2021</div>
                            <div class="card-img-overlay p-3"></div>
                            <div class="photo_content">
                              <div class="content-desc">
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAYAAABr5z2BAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC7SURBVHgBnZC7DcIwEIbPZwoQSoVYAQagjJQJYAAmYAEEJYEOCQbIHkyAxBJZIUIUKaCJD58lQgLBxvkLP4rvu4eAFom2tw0BjVW3WAjwDMP6mvFbS1JsC7/ydwefMFc3I4T7LJB3eQBF6Xk3OPrAl/Uwx85DJiDEBCTOo/ga+8D8RyLI3wPhtCpxwQYJV1mAfZkIEKNSROqkZeSCjYCPRkklv+BSYJPY4JqgSeKCvwQ1iV5u0SuWNpjzBB6+exUQALy1AAAAAElFTkSuQmCC"
                                />
                                <div class="content-text">
                                  Web &amp; Dapp Design
                                </div>
                              </div>
                              <div class="content-desc">
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAYAAABr5z2BAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC7SURBVHgBnZC7DcIwEIbPZwoQSoVYAQagjJQJYAAmYAEEJYEOCQbIHkyAxBJZIUIUKaCJD58lQgLBxvkLP4rvu4eAFom2tw0BjVW3WAjwDMP6mvFbS1JsC7/ydwefMFc3I4T7LJB3eQBF6Xk3OPrAl/Uwx85DJiDEBCTOo/ga+8D8RyLI3wPhtCpxwQYJV1mAfZkIEKNSROqkZeSCjYCPRkklv+BSYJPY4JqgSeKCvwQ1iV5u0SuWNpjzBB6+exUQALy1AAAAAElFTkSuQmCC"
                                />
                                <div class="content-text">Presale Frontend</div>
                              </div>
                              <div class="content-desc">
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE8SURBVHgBxVTBTsJAEJ1ZVmNiuGA82A/gBzwS6w+Id/wA/AATLx4sBw/6B/gDfEC9ixJv+gN+ABwIcCAkBEiHmaVLmtKWwoWXbHd2d2Y6s/NmEVJw9TK5UItZU+RAH993nk57aboquqi89otWxvm0SgCODJEhA2snrjdsFqb60/UGdVnT0YnPU1dGKKcCbei4mBlFIvrveKU72AEmklW+QUv+qrDgwyGAJhW5RM47qwJRxG20lJFQOTzf8PltHidxG0XhAUF+xG00MZFsaDl9wD42W4FWuG4MawFAlWvufz2XWknKokOANaDg49s7e7f7hieVx36RDx8QsMyJZhFN6O8AqrpUyG5q+fy8nY+Z9n+AeEmIbdlLakCuSJspXSZgVqfRIepdeshtjH7NCPsprrNxJ0kOMYyEtjwFS6kqmF+OWIBRAAAAAElFTkSuQmCC"
                                />
                                <div class="content-text">DAPP Frontend</div>
                              </div>
                              <div class="content-desc">
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAYAAABr5z2BAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC7SURBVHgBnZC7DcIwEIbPZwoQSoVYAQagjJQJYAAmYAEEJYEOCQbIHkyAxBJZIUIUKaCJD58lQgLBxvkLP4rvu4eAFom2tw0BjVW3WAjwDMP6mvFbS1JsC7/ydwefMFc3I4T7LJB3eQBF6Xk3OPrAl/Uwx85DJiDEBCTOo/ga+8D8RyLI3wPhtCpxwQYJV1mAfZkIEKNSROqkZeSCjYCPRkklv+BSYJPY4JqgSeKCvwQ1iV5u0SuWNpjzBB6+exUQALy1AAAAAElFTkSuQmCC"
                                />
                                <div class="content-text">
                                  Litepaper &amp; Pitchdeck
                                </div>
                              </div>
                              <div class="content-desc">
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE8SURBVHgBxVTBTsJAEJ1ZVmNiuGA82A/gBzwS6w+Id/wA/AATLx4sBw/6B/gDfEC9ixJv+gN+ABwIcCAkBEiHmaVLmtKWwoWXbHd2d2Y6s/NmEVJw9TK5UItZU+RAH993nk57aboquqi89otWxvm0SgCODJEhA2snrjdsFqb60/UGdVnT0YnPU1dGKKcCbei4mBlFIvrveKU72AEmklW+QUv+qrDgwyGAJhW5RM47qwJRxG20lJFQOTzf8PltHidxG0XhAUF+xG00MZFsaDl9wD42W4FWuG4MawFAlWvufz2XWknKokOANaDg49s7e7f7hieVx36RDx8QsMyJZhFN6O8AqrpUyG5q+fy8nY+Z9n+AeEmIbdlLakCuSJspXSZgVqfRIepdeshtjH7NCPsprrNxJ0kOMYyEtjwFS6kqmF+OWIBRAAAAAElFTkSuQmCC"
                                />
                                <div class="content-text">Beta Release</div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </div>
                    </div>
                    <div
                      data-index="1"
                      class="slick-slide slick-active"
                      tabindex="-1"
                      aria-hidden="false"
                      style="outline: none; width: 470px"
                    >
                      <div>
                        <li
                          tabindex="-1"
                          style="width: 100%; display: inline-block"
                        >
                          <div class="gallery_photo shadow">
                            <div class="gradient-box">Q4/2021</div>
                            <div class="card-img-overlay p-3"></div>
                            <div class="photo_content">
                              <div class="content-desc">
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE8SURBVHgBxVTBTsJAEJ1ZVmNiuGA82A/gBzwS6w+Id/wA/AATLx4sBw/6B/gDfEC9ixJv+gN+ABwIcCAkBEiHmaVLmtKWwoWXbHd2d2Y6s/NmEVJw9TK5UItZU+RAH993nk57aboquqi89otWxvm0SgCODJEhA2snrjdsFqb60/UGdVnT0YnPU1dGKKcCbei4mBlFIvrveKU72AEmklW+QUv+qrDgwyGAJhW5RM47qwJRxG20lJFQOTzf8PltHidxG0XhAUF+xG00MZFsaDl9wD42W4FWuG4MawFAlWvufz2XWknKokOANaDg49s7e7f7hieVx36RDx8QsMyJZhFN6O8AqrpUyG5q+fy8nY+Z9n+AeEmIbdlLakCuSJspXSZgVqfRIepdeshtjH7NCPsprrNxJ0kOMYyEtjwFS6kqmF+OWIBRAAAAAElFTkSuQmCC"
                                />
                                <div class="content-text">
                                  V1 Release on BSC
                                </div>
                              </div>
                              <div class="content-desc">
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE8SURBVHgBxVTBTsJAEJ1ZVmNiuGA82A/gBzwS6w+Id/wA/AATLx4sBw/6B/gDfEC9ixJv+gN+ABwIcCAkBEiHmaVLmtKWwoWXbHd2d2Y6s/NmEVJw9TK5UItZU+RAH993nk57aboquqi89otWxvm0SgCODJEhA2snrjdsFqb60/UGdVnT0YnPU1dGKKcCbei4mBlFIvrveKU72AEmklW+QUv+qrDgwyGAJhW5RM47qwJRxG20lJFQOTzf8PltHidxG0XhAUF+xG00MZFsaDl9wD42W4FWuG4MawFAlWvufz2XWknKokOANaDg49s7e7f7hieVx36RDx8QsMyJZhFN6O8AqrpUyG5q+fy8nY+Z9n+AeEmIbdlLakCuSJspXSZgVqfRIepdeshtjH7NCPsprrNxJ0kOMYyEtjwFS6kqmF+OWIBRAAAAAElFTkSuQmCC"
                                />
                                <div class="content-text">Limit Orders</div>
                              </div>
                              <div class="content-desc">
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE8SURBVHgBxVTBTsJAEJ1ZVmNiuGA82A/gBzwS6w+Id/wA/AATLx4sBw/6B/gDfEC9ixJv+gN+ABwIcCAkBEiHmaVLmtKWwoWXbHd2d2Y6s/NmEVJw9TK5UItZU+RAH993nk57aboquqi89otWxvm0SgCODJEhA2snrjdsFqb60/UGdVnT0YnPU1dGKKcCbei4mBlFIvrveKU72AEmklW+QUv+qrDgwyGAJhW5RM47qwJRxG20lJFQOTzf8PltHidxG0XhAUF+xG00MZFsaDl9wD42W4FWuG4MawFAlWvufz2XWknKokOANaDg49s7e7f7hieVx36RDx8QsMyJZhFN6O8AqrpUyG5q+fy8nY+Z9n+AeEmIbdlLakCuSJspXSZgVqfRIepdeshtjH7NCPsprrNxJ0kOMYyEtjwFS6kqmF+OWIBRAAAAAElFTkSuQmCC"
                                />
                                <div class="content-text">
                                  Statistics / Account Area
                                </div>
                              </div>
                              <div class="content-desc">
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE8SURBVHgBxVTBTsJAEJ1ZVmNiuGA82A/gBzwS6w+Id/wA/AATLx4sBw/6B/gDfEC9ixJv+gN+ABwIcCAkBEiHmaVLmtKWwoWXbHd2d2Y6s/NmEVJw9TK5UItZU+RAH993nk57aboquqi89otWxvm0SgCODJEhA2snrjdsFqb60/UGdVnT0YnPU1dGKKcCbei4mBlFIvrveKU72AEmklW+QUv+qrDgwyGAJhW5RM47qwJRxG20lJFQOTzf8PltHidxG0XhAUF+xG00MZFsaDl9wD42W4FWuG4MawFAlWvufz2XWknKokOANaDg49s7e7f7hieVx36RDx8QsMyJZhFN6O8AqrpUyG5q+fy8nY+Z9n+AeEmIbdlLakCuSJspXSZgVqfRIepdeshtjH7NCPsprrNxJ0kOMYyEtjwFS6kqmF+OWIBRAAAAAElFTkSuQmCC"
                                />
                                <div class="content-text">Explorer</div>
                              </div>
                              <div class="content-desc">
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE8SURBVHgBxVTBTsJAEJ1ZVmNiuGA82A/gBzwS6w+Id/wA/AATLx4sBw/6B/gDfEC9ixJv+gN+ABwIcCAkBEiHmaVLmtKWwoWXbHd2d2Y6s/NmEVJw9TK5UItZU+RAH993nk57aboquqi89otWxvm0SgCODJEhA2snrjdsFqb60/UGdVnT0YnPU1dGKKcCbei4mBlFIvrveKU72AEmklW+QUv+qrDgwyGAJhW5RM47qwJRxG20lJFQOTzf8PltHidxG0XhAUF+xG00MZFsaDl9wD42W4FWuG4MawFAlWvufz2XWknKokOANaDg49s7e7f7hieVx36RDx8QsMyJZhFN6O8AqrpUyG5q+fy8nY+Z9n+AeEmIbdlLakCuSJspXSZgVqfRIepdeshtjH7NCPsprrNxJ0kOMYyEtjwFS6kqmF+OWIBRAAAAAElFTkSuQmCC"
                                />
                                <div class="content-text">
                                  Anti Bot Features
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </div>
                    </div>
                    <div
                      data-index="2"
                      class="slick-slide slick-active"
                      tabindex="-1"
                      aria-hidden="false"
                      style="outline: none; width: 470px"
                    >
                      <div>
                        <li
                          tabindex="-1"
                          style="width: 100%; display: inline-block"
                        >
                          <div class="gallery_photo shadow">
                            <div class="gradient-box">Q1/2022</div>
                            <div class="card-img-overlay p-3"></div>
                            <div class="photo_content">
                              <div class="content-desc">
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE8SURBVHgBxVTBTsJAEJ1ZVmNiuGA82A/gBzwS6w+Id/wA/AATLx4sBw/6B/gDfEC9ixJv+gN+ABwIcCAkBEiHmaVLmtKWwoWXbHd2d2Y6s/NmEVJw9TK5UItZU+RAH993nk57aboquqi89otWxvm0SgCODJEhA2snrjdsFqb60/UGdVnT0YnPU1dGKKcCbei4mBlFIvrveKU72AEmklW+QUv+qrDgwyGAJhW5RM47qwJRxG20lJFQOTzf8PltHidxG0XhAUF+xG00MZFsaDl9wD42W4FWuG4MawFAlWvufz2XWknKokOANaDg49s7e7f7hieVx36RDx8QsMyJZhFN6O8AqrpUyG5q+fy8nY+Z9n+AeEmIbdlLakCuSJspXSZgVqfRIepdeshtjH7NCPsprrNxJ0kOMYyEtjwFS6kqmF+OWIBRAAAAAElFTkSuQmCC"
                                />
                                <div class="content-text">LaunchPad</div>
                              </div>
                              <div class="content-desc">
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE8SURBVHgBxVTBTsJAEJ1ZVmNiuGA82A/gBzwS6w+Id/wA/AATLx4sBw/6B/gDfEC9ixJv+gN+ABwIcCAkBEiHmaVLmtKWwoWXbHd2d2Y6s/NmEVJw9TK5UItZU+RAH993nk57aboquqi89otWxvm0SgCODJEhA2snrjdsFqb60/UGdVnT0YnPU1dGKKcCbei4mBlFIvrveKU72AEmklW+QUv+qrDgwyGAJhW5RM47qwJRxG20lJFQOTzf8PltHidxG0XhAUF+xG00MZFsaDl9wD42W4FWuG4MawFAlWvufz2XWknKokOANaDg49s7e7f7hieVx36RDx8QsMyJZhFN6O8AqrpUyG5q+fy8nY+Z9n+AeEmIbdlLakCuSJspXSZgVqfRIepdeshtjH7NCPsprrNxJ0kOMYyEtjwFS6kqmF+OWIBRAAAAAElFTkSuQmCC"
                                />
                                <div class="content-text">Own Price Charts</div>
                              </div>
                              <div class="content-desc">
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE8SURBVHgBxVTBTsJAEJ1ZVmNiuGA82A/gBzwS6w+Id/wA/AATLx4sBw/6B/gDfEC9ixJv+gN+ABwIcCAkBEiHmaVLmtKWwoWXbHd2d2Y6s/NmEVJw9TK5UItZU+RAH993nk57aboquqi89otWxvm0SgCODJEhA2snrjdsFqb60/UGdVnT0YnPU1dGKKcCbei4mBlFIvrveKU72AEmklW+QUv+qrDgwyGAJhW5RM47qwJRxG20lJFQOTzf8PltHidxG0XhAUF+xG00MZFsaDl9wD42W4FWuG4MawFAlWvufz2XWknKokOANaDg49s7e7f7hieVx36RDx8QsMyJZhFN6O8AqrpUyG5q+fy8nY+Z9n+AeEmIbdlLakCuSJspXSZgVqfRIepdeshtjH7NCPsprrNxJ0kOMYyEtjwFS6kqmF+OWIBRAAAAAElFTkSuQmCC"
                                />
                                <div class="content-text">Bookmarking</div>
                              </div>
                              <div class="content-desc">
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE8SURBVHgBxVTBTsJAEJ1ZVmNiuGA82A/gBzwS6w+Id/wA/AATLx4sBw/6B/gDfEC9ixJv+gN+ABwIcCAkBEiHmaVLmtKWwoWXbHd2d2Y6s/NmEVJw9TK5UItZU+RAH993nk57aboquqi89otWxvm0SgCODJEhA2snrjdsFqb60/UGdVnT0YnPU1dGKKcCbei4mBlFIvrveKU72AEmklW+QUv+qrDgwyGAJhW5RM47qwJRxG20lJFQOTzf8PltHidxG0XhAUF+xG00MZFsaDl9wD42W4FWuG4MawFAlWvufz2XWknKokOANaDg49s7e7f7hieVx36RDx8QsMyJZhFN6O8AqrpUyG5q+fy8nY+Z9n+AeEmIbdlLakCuSJspXSZgVqfRIepdeshtjH7NCPsprrNxJ0kOMYyEtjwFS6kqmF+OWIBRAAAAAElFTkSuQmCC"
                                />
                                <div class="content-text">
                                  Vaults for 3rd Parties
                                </div>
                              </div>
                              <div class="content-desc">
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE8SURBVHgBxVTBTsJAEJ1ZVmNiuGA82A/gBzwS6w+Id/wA/AATLx4sBw/6B/gDfEC9ixJv+gN+ABwIcCAkBEiHmaVLmtKWwoWXbHd2d2Y6s/NmEVJw9TK5UItZU+RAH993nk57aboquqi89otWxvm0SgCODJEhA2snrjdsFqb60/UGdVnT0YnPU1dGKKcCbei4mBlFIvrveKU72AEmklW+QUv+qrDgwyGAJhW5RM47qwJRxG20lJFQOTzf8PltHidxG0XhAUF+xG00MZFsaDl9wD42W4FWuG4MawFAlWvufz2XWknKokOANaDg49s7e7f7hieVx36RDx8QsMyJZhFN6O8AqrpUyG5q+fy8nY+Z9n+AeEmIbdlLakCuSJspXSZgVqfRIepdeshtjH7NCPsprrNxJ0kOMYyEtjwFS6kqmF+OWIBRAAAAAElFTkSuQmCC"
                                />
                                <div class="content-text">
                                  Release on Polygon
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </div>
                    </div>
                    <div
                      data-index="3"
                      class="slick-slide"
                      tabindex="-1"
                      aria-hidden="true"
                      style="outline: none; width: 470px"
                    >
                      <div>
                        <li
                          tabindex="-1"
                          style="width: 100%; display: inline-block"
                        >
                          <div class="gallery_photo shadow">
                            <div class="gradient-box">Q2/2022</div>
                            <div class="card-img-overlay p-3"></div>
                            <div class="photo_content">
                              <div class="content-desc">
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE8SURBVHgBxVTBTsJAEJ1ZVmNiuGA82A/gBzwS6w+Id/wA/AATLx4sBw/6B/gDfEC9ixJv+gN+ABwIcCAkBEiHmaVLmtKWwoWXbHd2d2Y6s/NmEVJw9TK5UItZU+RAH993nk57aboquqi89otWxvm0SgCODJEhA2snrjdsFqb60/UGdVnT0YnPU1dGKKcCbei4mBlFIvrveKU72AEmklW+QUv+qrDgwyGAJhW5RM47qwJRxG20lJFQOTzf8PltHidxG0XhAUF+xG00MZFsaDl9wD42W4FWuG4MawFAlWvufz2XWknKokOANaDg49s7e7f7hieVx36RDx8QsMyJZhFN6O8AqrpUyG5q+fy8nY+Z9n+AeEmIbdlLakCuSJspXSZgVqfRIepdeshtjH7NCPsprrNxJ0kOMYyEtjwFS6kqmF+OWIBRAAAAAElFTkSuQmCC"
                                />
                                <div class="content-text">Synthetic Assets</div>
                              </div>
                              <div class="content-desc">
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE8SURBVHgBxVTBTsJAEJ1ZVmNiuGA82A/gBzwS6w+Id/wA/AATLx4sBw/6B/gDfEC9ixJv+gN+ABwIcCAkBEiHmaVLmtKWwoWXbHd2d2Y6s/NmEVJw9TK5UItZU+RAH993nk57aboquqi89otWxvm0SgCODJEhA2snrjdsFqb60/UGdVnT0YnPU1dGKKcCbei4mBlFIvrveKU72AEmklW+QUv+qrDgwyGAJhW5RM47qwJRxG20lJFQOTzf8PltHidxG0XhAUF+xG00MZFsaDl9wD42W4FWuG4MawFAlWvufz2XWknKokOANaDg49s7e7f7hieVx36RDx8QsMyJZhFN6O8AqrpUyG5q+fy8nY+Z9n+AeEmIbdlLakCuSJspXSZgVqfRIepdeshtjH7NCPsprrNxJ0kOMYyEtjwFS6kqmF+OWIBRAAAAAElFTkSuQmCC"
                                />
                                <div class="content-text">Own Bridge</div>
                              </div>
                              <div class="content-desc">
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE8SURBVHgBxVTBTsJAEJ1ZVmNiuGA82A/gBzwS6w+Id/wA/AATLx4sBw/6B/gDfEC9ixJv+gN+ABwIcCAkBEiHmaVLmtKWwoWXbHd2d2Y6s/NmEVJw9TK5UItZU+RAH993nk57aboquqi89otWxvm0SgCODJEhA2snrjdsFqb60/UGdVnT0YnPU1dGKKcCbei4mBlFIvrveKU72AEmklW+QUv+qrDgwyGAJhW5RM47qwJRxG20lJFQOTzf8PltHidxG0XhAUF+xG00MZFsaDl9wD42W4FWuG4MawFAlWvufz2XWknKokOANaDg49s7e7f7hieVx36RDx8QsMyJZhFN6O8AqrpUyG5q+fy8nY+Z9n+AeEmIbdlLakCuSJspXSZgVqfRIepdeshtjH7NCPsprrNxJ0kOMYyEtjwFS6kqmF+OWIBRAAAAAElFTkSuQmCC"
                                />
                                <div class="content-text">
                                  1-Click Cross-Chain Swaps
                                </div>
                              </div>
                              <div class="content-desc">
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE8SURBVHgBxVTBTsJAEJ1ZVmNiuGA82A/gBzwS6w+Id/wA/AATLx4sBw/6B/gDfEC9ixJv+gN+ABwIcCAkBEiHmaVLmtKWwoWXbHd2d2Y6s/NmEVJw9TK5UItZU+RAH993nk57aboquqi89otWxvm0SgCODJEhA2snrjdsFqb60/UGdVnT0YnPU1dGKKcCbei4mBlFIvrveKU72AEmklW+QUv+qrDgwyGAJhW5RM47qwJRxG20lJFQOTzf8PltHidxG0XhAUF+xG00MZFsaDl9wD42W4FWuG4MawFAlWvufz2XWknKokOANaDg49s7e7f7hieVx36RDx8QsMyJZhFN6O8AqrpUyG5q+fy8nY+Z9n+AeEmIbdlLakCuSJspXSZgVqfRIepdeshtjH7NCPsprrNxJ0kOMYyEtjwFS6kqmF+OWIBRAAAAAElFTkSuQmCC"
                                />
                                <div class="content-text">Release on ETH</div>
                              </div>
                              <div class="content-desc">
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE8SURBVHgBxVTBTsJAEJ1ZVmNiuGA82A/gBzwS6w+Id/wA/AATLx4sBw/6B/gDfEC9ixJv+gN+ABwIcCAkBEiHmaVLmtKWwoWXbHd2d2Y6s/NmEVJw9TK5UItZU+RAH993nk57aboquqi89otWxvm0SgCODJEhA2snrjdsFqb60/UGdVnT0YnPU1dGKKcCbei4mBlFIvrveKU72AEmklW+QUv+qrDgwyGAJhW5RM47qwJRxG20lJFQOTzf8PltHidxG0XhAUF+xG00MZFsaDl9wD42W4FWuG4MawFAlWvufz2XWknKokOANaDg49s7e7f7hieVx36RDx8QsMyJZhFN6O8AqrpUyG5q+fy8nY+Z9n+AeEmIbdlLakCuSJspXSZgVqfRIepdeshtjH7NCPsprrNxJ0kOMYyEtjwFS6kqmF+OWIBRAAAAAElFTkSuQmCC"
                                />
                                <div class="content-text">Token Owner Area</div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </div>
                    </div>
                    <div
                      data-index="4"
                      class="slick-slide"
                      tabindex="-1"
                      aria-hidden="true"
                      style="outline: none; width: 470px"
                    >
                      <div>
                        <li
                          tabindex="-1"
                          style="width: 100%; display: inline-block"
                        >
                          <div class="gallery_photo shadow">
                            <div class="gradient-box">Q3/2022</div>
                            <div class="card-img-overlay p-3"></div>
                            <div class="photo_content">
                              <div class="content-desc">
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE8SURBVHgBxVTBTsJAEJ1ZVmNiuGA82A/gBzwS6w+Id/wA/AATLx4sBw/6B/gDfEC9ixJv+gN+ABwIcCAkBEiHmaVLmtKWwoWXbHd2d2Y6s/NmEVJw9TK5UItZU+RAH993nk57aboquqi89otWxvm0SgCODJEhA2snrjdsFqb60/UGdVnT0YnPU1dGKKcCbei4mBlFIvrveKU72AEmklW+QUv+qrDgwyGAJhW5RM47qwJRxG20lJFQOTzf8PltHidxG0XhAUF+xG00MZFsaDl9wD42W4FWuG4MawFAlWvufz2XWknKokOANaDg49s7e7f7hieVx36RDx8QsMyJZhFN6O8AqrpUyG5q+fy8nY+Z9n+AeEmIbdlLakCuSJspXSZgVqfRIepdeshtjH7NCPsprrNxJ0kOMYyEtjwFS6kqmF+OWIBRAAAAAElFTkSuQmCC"
                                />
                                <div class="content-text">
                                  Release on Avalanche
                                </div>
                              </div>
                              <div class="content-desc">
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE8SURBVHgBxVTBTsJAEJ1ZVmNiuGA82A/gBzwS6w+Id/wA/AATLx4sBw/6B/gDfEC9ixJv+gN+ABwIcCAkBEiHmaVLmtKWwoWXbHd2d2Y6s/NmEVJw9TK5UItZU+RAH993nk57aboquqi89otWxvm0SgCODJEhA2snrjdsFqb60/UGdVnT0YnPU1dGKKcCbei4mBlFIvrveKU72AEmklW+QUv+qrDgwyGAJhW5RM47qwJRxG20lJFQOTzf8PltHidxG0XhAUF+xG00MZFsaDl9wD42W4FWuG4MawFAlWvufz2XWknKokOANaDg49s7e7f7hieVx36RDx8QsMyJZhFN6O8AqrpUyG5q+fy8nY+Z9n+AeEmIbdlLakCuSJspXSZgVqfRIepdeshtjH7NCPsprrNxJ0kOMYyEtjwFS6kqmF+OWIBRAAAAAElFTkSuQmCC"
                                />
                                <div class="content-text">Crosswise Wallet</div>
                              </div>
                              <div class="content-desc">
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE8SURBVHgBxVTBTsJAEJ1ZVmNiuGA82A/gBzwS6w+Id/wA/AATLx4sBw/6B/gDfEC9ixJv+gN+ABwIcCAkBEiHmaVLmtKWwoWXbHd2d2Y6s/NmEVJw9TK5UItZU+RAH993nk57aboquqi89otWxvm0SgCODJEhA2snrjdsFqb60/UGdVnT0YnPU1dGKKcCbei4mBlFIvrveKU72AEmklW+QUv+qrDgwyGAJhW5RM47qwJRxG20lJFQOTzf8PltHidxG0XhAUF+xG00MZFsaDl9wD42W4FWuG4MawFAlWvufz2XWknKokOANaDg49s7e7f7hieVx36RDx8QsMyJZhFN6O8AqrpUyG5q+fy8nY+Z9n+AeEmIbdlLakCuSJspXSZgVqfRIepdeshtjH7NCPsprrNxJ0kOMYyEtjwFS6kqmF+OWIBRAAAAAElFTkSuQmCC"
                                />
                                <div class="content-text">
                                  IFFT style swaps using Chainlink Keepers
                                </div>
                              </div>
                              <div class="content-desc">
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE8SURBVHgBxVTBTsJAEJ1ZVmNiuGA82A/gBzwS6w+Id/wA/AATLx4sBw/6B/gDfEC9ixJv+gN+ABwIcCAkBEiHmaVLmtKWwoWXbHd2d2Y6s/NmEVJw9TK5UItZU+RAH993nk57aboquqi89otWxvm0SgCODJEhA2snrjdsFqb60/UGdVnT0YnPU1dGKKcCbei4mBlFIvrveKU72AEmklW+QUv+qrDgwyGAJhW5RM47qwJRxG20lJFQOTzf8PltHidxG0XhAUF+xG00MZFsaDl9wD42W4FWuG4MawFAlWvufz2XWknKokOANaDg49s7e7f7hieVx36RDx8QsMyJZhFN6O8AqrpUyG5q+fy8nY+Z9n+AeEmIbdlLakCuSJspXSZgVqfRIepdeshtjH7NCPsprrNxJ0kOMYyEtjwFS6kqmF+OWIBRAAAAAElFTkSuQmCC"
                                />
                                <div class="content-text">
                                  Shareholder / Governance Token
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </div>
                    </div>
                    <div
                      data-index="5"
                      class="slick-slide"
                      tabindex="-1"
                      aria-hidden="true"
                      style="outline: none; width: 470px"
                    >
                      <div>
                        <li
                          tabindex="-1"
                          style="width: 100%; display: inline-block"
                        >
                          <div class="gallery_photo shadow">
                            <div class="gradient-box">Q4/2022</div>
                            <div class="card-img-overlay p-3"></div>
                            <div class="photo_content">
                              <div class="content-desc">
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE8SURBVHgBxVTBTsJAEJ1ZVmNiuGA82A/gBzwS6w+Id/wA/AATLx4sBw/6B/gDfEC9ixJv+gN+ABwIcCAkBEiHmaVLmtKWwoWXbHd2d2Y6s/NmEVJw9TK5UItZU+RAH993nk57aboquqi89otWxvm0SgCODJEhA2snrjdsFqb60/UGdVnT0YnPU1dGKKcCbei4mBlFIvrveKU72AEmklW+QUv+qrDgwyGAJhW5RM47qwJRxG20lJFQOTzf8PltHidxG0XhAUF+xG00MZFsaDl9wD42W4FWuG4MawFAlWvufz2XWknKokOANaDg49s7e7f7hieVx36RDx8QsMyJZhFN6O8AqrpUyG5q+fy8nY+Z9n+AeEmIbdlLakCuSJspXSZgVqfRIepdeshtjH7NCPsprrNxJ0kOMYyEtjwFS6kqmF+OWIBRAAAAAElFTkSuQmCC"
                                />
                                <div class="content-text">Mobile App</div>
                              </div>
                              <div class="content-desc">
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE8SURBVHgBxVTBTsJAEJ1ZVmNiuGA82A/gBzwS6w+Id/wA/AATLx4sBw/6B/gDfEC9ixJv+gN+ABwIcCAkBEiHmaVLmtKWwoWXbHd2d2Y6s/NmEVJw9TK5UItZU+RAH993nk57aboquqi89otWxvm0SgCODJEhA2snrjdsFqb60/UGdVnT0YnPU1dGKKcCbei4mBlFIvrveKU72AEmklW+QUv+qrDgwyGAJhW5RM47qwJRxG20lJFQOTzf8PltHidxG0XhAUF+xG00MZFsaDl9wD42W4FWuG4MawFAlWvufz2XWknKokOANaDg49s7e7f7hieVx36RDx8QsMyJZhFN6O8AqrpUyG5q+fy8nY+Z9n+AeEmIbdlLakCuSJspXSZgVqfRIepdeshtjH7NCPsprrNxJ0kOMYyEtjwFS6kqmF+OWIBRAAAAAElFTkSuQmCC"
                                />
                                <div class="content-text">
                                  Release on Solana
                                </div>
                              </div>
                              <div class="content-desc">
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE8SURBVHgBxVTBTsJAEJ1ZVmNiuGA82A/gBzwS6w+Id/wA/AATLx4sBw/6B/gDfEC9ixJv+gN+ABwIcCAkBEiHmaVLmtKWwoWXbHd2d2Y6s/NmEVJw9TK5UItZU+RAH993nk57aboquqi89otWxvm0SgCODJEhA2snrjdsFqb60/UGdVnT0YnPU1dGKKcCbei4mBlFIvrveKU72AEmklW+QUv+qrDgwyGAJhW5RM47qwJRxG20lJFQOTzf8PltHidxG0XhAUF+xG00MZFsaDl9wD42W4FWuG4MawFAlWvufz2XWknKokOANaDg49s7e7f7hieVx36RDx8QsMyJZhFN6O8AqrpUyG5q+fy8nY+Z9n+AeEmIbdlLakCuSJspXSZgVqfRIepdeshtjH7NCPsprrNxJ0kOMYyEtjwFS6kqmF+OWIBRAAAAAElFTkSuQmCC"
                                />
                                <div class="content-text">
                                  Extended Chart Features
                                </div>
                              </div>
                              <div class="content-desc">
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE8SURBVHgBxVTBTsJAEJ1ZVmNiuGA82A/gBzwS6w+Id/wA/AATLx4sBw/6B/gDfEC9ixJv+gN+ABwIcCAkBEiHmaVLmtKWwoWXbHd2d2Y6s/NmEVJw9TK5UItZU+RAH993nk57aboquqi89otWxvm0SgCODJEhA2snrjdsFqb60/UGdVnT0YnPU1dGKKcCbei4mBlFIvrveKU72AEmklW+QUv+qrDgwyGAJhW5RM47qwJRxG20lJFQOTzf8PltHidxG0XhAUF+xG00MZFsaDl9wD42W4FWuG4MawFAlWvufz2XWknKokOANaDg49s7e7f7hieVx36RDx8QsMyJZhFN6O8AqrpUyG5q+fy8nY+Z9n+AeEmIbdlLakCuSJspXSZgVqfRIepdeshtjH7NCPsprrNxJ0kOMYyEtjwFS6kqmF+OWIBRAAAAAElFTkSuQmCC"
                                />
                                <div class="content-text">NFT marketplace</div>
                              </div>
                              <div class="content-desc">
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE8SURBVHgBxVTBTsJAEJ1ZVmNiuGA82A/gBzwS6w+Id/wA/AATLx4sBw/6B/gDfEC9ixJv+gN+ABwIcCAkBEiHmaVLmtKWwoWXbHd2d2Y6s/NmEVJw9TK5UItZU+RAH993nk57aboquqi89otWxvm0SgCODJEhA2snrjdsFqb60/UGdVnT0YnPU1dGKKcCbei4mBlFIvrveKU72AEmklW+QUv+qrDgwyGAJhW5RM47qwJRxG20lJFQOTzf8PltHidxG0XhAUF+xG00MZFsaDl9wD42W4FWuG4MawFAlWvufz2XWknKokOANaDg49s7e7f7hieVx36RDx8QsMyJZhFN6O8AqrpUyG5q+fy8nY+Z9n+AeEmIbdlLakCuSJspXSZgVqfRIepdeshtjH7NCPsprrNxJ0kOMYyEtjwFS6kqmF+OWIBRAAAAAElFTkSuQmCC"
                                />
                                <div class="content-text">Skill-Based Game</div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
        <div class="see_full_roadmap">
          <button class="btn btn_primary p-15 m-auto">See Full Roadmap</button>
        </div>
      </div>
    </section>
    <section class="teamwork_section" id="team">
      <div class="container">
        <div class="row">
          <div class="title"><h1>Team</h1></div>
        </div>
        <div class="exchange_slider">
          <div class="gallery_images">
            <ul>
              <div class="slick-slider slick-initialized" dir="ltr">
                <div class="slick-list">
                  <div
                    class="slick-track"
                    style="
                      width: 5648px;
                      opacity: 1;
                      transform: translate3d(-1412px, 0px, 0px);
                    "
                  >
                    <div
                      data-index="-4"
                      tabindex="-1"
                      class="slick-slide slick-cloned"
                      aria-hidden="true"
                      style="width: 353px"
                    >
                      <div>
                        <li
                          tabindex="-1"
                          style="width: 100%; display: inline-block"
                        >
                          <div class="gallery_photo shadow">
                            <img
                              class="user_img_top"
                              src="/static/media/user-4.9a9e75d3.png"
                            /><a
                              class="linkedin_img_icon"
                              href="https://www.linkedin.com/in/gregory-khine/"
                              target="_blank"
                              ><img
                                src="data:image/png;base64,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"
                            /></a>
                            <div class="card-img-overlay p-3"></div>
                            <div class="photo_content">
                              <h6>Gregory Khine</h6>
                              <p>Chief Operating Officer</p>
                            </div>
                            <div class="photo_description">
                              <p>
                                Founded an award-winning web agency as well as
                                popular online education resources in the late
                                90s. Greg fell down the crypto rabbit hole in
                                2015, and has since developed a particular
                                interest in DeFi, both the technology and its
                                transformative potential. He holds undergraduate
                                and graduate degrees from the London School of
                                Economics &amp; Political Science.
                              </p>
                            </div>
                          </div>
                        </li>
                      </div>
                    </div>
                    <div
                      data-index="-3"
                      tabindex="-1"
                      class="slick-slide slick-cloned"
                      aria-hidden="true"
                      style="width: 353px"
                    >
                      <div>
                        <li
                          tabindex="-1"
                          style="width: 100%; display: inline-block"
                        >
                          <div class="gallery_photo shadow">
                            <img
                              class="user_img_top"
                              src="/static/media/user-6.99b83222.png"
                            /><a
                              class="linkedin_img_icon"
                              href="#"
                              target="_blank"
                              ><img
                                src="data:image/png;base64,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"
                            /></a>
                            <div class="card-img-overlay p-3"></div>
                            <div class="photo_content">
                              <h6>Yehor Oshodin</h6>
                              <p>FrontEnd Lead</p>
                            </div>
                            <div class="photo_description">
                              <p>
                                I always look to add my own magical touch to any
                                new code that I write, and would like to mention
                                that in the past I have worked alongside some
                                very technically able individuals in the
                                industry. I consider myself a real team player
                                who understands the importance of teamwork,
                                collaboration, and open communication.
                              </p>
                            </div>
                          </div>
                        </li>
                      </div>
                    </div>
                    <div
                      data-index="-2"
                      tabindex="-1"
                      class="slick-slide slick-cloned"
                      aria-hidden="true"
                      style="width: 353px"
                    >
                      <div>
                        <li
                          tabindex="-1"
                          style="width: 100%; display: inline-block"
                        >
                          <div class="gallery_photo shadow">
                            <img
                              class="user_img_top"
                              src="data:image/png;base64,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"
                            /><a
                              class="linkedin_img_icon"
                              href="https://www.linkedin.com/in/leon-jin-7013011b9/"
                              target="_blank"
                              ><img
                                src="data:image/png;base64,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"
                            /></a>
                            <div class="card-img-overlay p-3"></div>
                            <div class="photo_content">
                              <h6>Leon Jin</h6>
                              <p>Lead Developer</p>
                            </div>
                            <div class="photo_description">
                              <p>
                                In recent years Leon has focused on developing
                                blockchain projects. He has an in-depth
                                understanding of blockchain technology, with a
                                particular focus on building decentralized
                                applications, yield farming methods, and new
                                proof methods.
                              </p>
                            </div>
                          </div>
                        </li>
                      </div>
                    </div>
                    <div
                      data-index="-1"
                      tabindex="-1"
                      class="slick-slide slick-cloned"
                      aria-hidden="true"
                      style="width: 353px"
                    >
                      <div>
                        <li
                          tabindex="-1"
                          style="width: 100%; display: inline-block"
                        >
                          <div class="gallery_photo shadow">
                            <img
                              class="user_img_top"
                              src="/static/media/user-5.bdbed114.png"
                            /><a
                              class="linkedin_img_icon"
                              href="https://www.linkedin.com/in/james-gao-49461a217/"
                              target="_blank"
                              ><img
                                src="data:image/png;base64,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"
                            /></a>
                            <div class="card-img-overlay p-3"></div>
                            <div class="photo_content">
                              <h6>James Gao</h6>
                              <p>Lead Developer</p>
                            </div>
                            <div class="photo_description">
                              <p>
                                James holds a bachelor's degree in computer
                                science and has a profound understanding of
                                software engineering. He is a full stack
                                developer who has contributed to several
                                well-known DeFi projects.
                              </p>
                            </div>
                          </div>
                        </li>
                      </div>
                    </div>
                    <div
                      data-index="0"
                      class="slick-slide slick-active slick-current"
                      tabindex="-1"
                      aria-hidden="false"
                      style="outline: none; width: 353px"
                    >
                      <div>
                        <li
                          tabindex="-1"
                          style="width: 100%; display: inline-block"
                        >
                          <div class="gallery_photo shadow">
                            <img
                              class="user_img_top"
                              src="@/assets/images/crosswise/user-2.png"
                            /><a
                              class="linkedin_img_icon"
                              href="https://www.linkedin.com/in/fbeeg/"
                              target="_blank"
                              ><img
                                src="data:image/png;base64,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"
                              />
                            </a>
                            <div class="card-img-overlay p-3"></div>
                            <div class="photo_content">
                              <h6>Frederic Beeg</h6>
                              <p>CEO/Founder</p>
                            </div>
                            <div class="photo_description">
                              <p>
                                Focused on building crypto and e-commerce
                                platforms. Living on Koh Phangan, Thailand and
                                Canggu, Bali, Indonesia. Built an
                                industry-leading digital marketplace for video
                                game distribution, and created several
                                successful brands on Amazon.
                              </p>
                            </div>
                          </div>
                        </li>
                      </div>
                    </div>
                    <div
                      data-index="1"
                      class="slick-slide slick-active"
                      tabindex="-1"
                      aria-hidden="false"
                      style="outline: none; width: 353px"
                    >
                      <div>
                        <li
                          tabindex="-1"
                          style="width: 100%; display: inline-block"
                        >
                          <div class="gallery_photo shadow">
                            <img
                              class="user_img_top"
                              src="@/assets/images/crosswise/user-3.png"
                            /><a
                              class="linkedin_img_icon"
                              href="https://www.linkedin.com/in/dino-dzizic-189a54191/"
                              target="_blank"
                              ><img
                                src="data:image/png;base64,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"
                            /></a>
                            <div class="card-img-overlay p-3"></div>
                            <div class="photo_content">
                              <h6>Dino Dzizic</h6>
                              <p>Chief Technology Officer</p>
                            </div>
                            <div class="photo_description">
                              <p>
                                DeFi/Dapp/NFT specialist with a passion for
                                blockchain technology. Dino has over 5 years
                                experience developing blockchain technology,
                                including high-profile projects, and holds a
                                Bachelor's degree in software engineering.
                              </p>
                            </div>
                          </div>
                        </li>
                      </div>
                    </div>
                    <div
                      data-index="2"
                      class="slick-slide slick-active"
                      tabindex="-1"
                      aria-hidden="false"
                      style="outline: none; width: 353px"
                    >
                      <div>
                        <li
                          tabindex="-1"
                          style="width: 100%; display: inline-block"
                        >
                          <div class="gallery_photo shadow">
                            <img
                              class="user_img_top"
                              src="@/assets/images/crosswise/user-4.png"
                            /><a
                              class="linkedin_img_icon"
                              href="https://www.linkedin.com/in/gregory-khine/"
                              target="_blank"
                              ><img
                                src="data:image/png;base64,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"
                            /></a>
                            <div class="card-img-overlay p-3"></div>
                            <div class="photo_content">
                              <h6>Gregory Khine</h6>
                              <p>Chief Operating Officer</p>
                            </div>
                            <div class="photo_description">
                              <p>
                                Founded an award-winning web agency as well as
                                popular online education resources in the late
                                90s. Greg fell down the crypto rabbit hole in
                                2015, and has since developed a particular
                                interest in DeFi, both the technology and its
                                transformative potential. He holds undergraduate
                                and graduate degrees from the London School of
                                Economics &amp; Political Science.
                              </p>
                            </div>
                          </div>
                        </li>
                      </div>
                    </div>
                    <div
                      data-index="3"
                      class="slick-slide slick-active"
                      tabindex="-1"
                      aria-hidden="false"
                      style="outline: none; width: 353px"
                    >
                      <div>
                        <li
                          tabindex="-1"
                          style="width: 100%; display: inline-block"
                        >
                          <div class="gallery_photo shadow">
                            <img
                              class="user_img_top"
                              src="@/assets/images/crosswise/user-6.png"
                            /><a
                              class="linkedin_img_icon"
                              href="#"
                              target="_blank"
                              ><img
                                src="data:image/png;base64,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"
                            /></a>
                            <div class="card-img-overlay p-3"></div>
                            <div class="photo_content">
                              <h6>Yehor Oshodin</h6>
                              <p>FrontEnd Lead</p>
                            </div>
                            <div class="photo_description">
                              <p>
                                I always look to add my own magical touch to any
                                new code that I write, and would like to mention
                                that in the past I have worked alongside some
                                very technically able individuals in the
                                industry. I consider myself a real team player
                                who understands the importance of teamwork,
                                collaboration, and open communication.
                              </p>
                            </div>
                          </div>
                        </li>
                      </div>
                    </div>
                    <div
                      data-index="4"
                      class="slick-slide"
                      tabindex="-1"
                      aria-hidden="true"
                      style="outline: none; width: 353px"
                    >
                      <div>
                        <li
                          tabindex="-1"
                          style="width: 100%; display: inline-block"
                        >
                          <div class="gallery_photo shadow">
                            <img
                              class="user_img_top"
                              src="data:image/png;base64,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"
                            /><a
                              class="linkedin_img_icon"
                              href="https://www.linkedin.com/in/leon-jin-7013011b9/"
                              target="_blank"
                              ><img
                                src="data:image/png;base64,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"
                            /></a>
                            <div class="card-img-overlay p-3"></div>
                            <div class="photo_content">
                              <h6>Leon Jin</h6>
                              <p>Lead Developer</p>
                            </div>
                            <div class="photo_description">
                              <p>
                                In recent years Leon has focused on developing
                                blockchain projects. He has an in-depth
                                understanding of blockchain technology, with a
                                particular focus on building decentralized
                                applications, yield farming methods, and new
                                proof methods.
                              </p>
                            </div>
                          </div>
                        </li>
                      </div>
                    </div>
                    <div
                      data-index="5"
                      class="slick-slide"
                      tabindex="-1"
                      aria-hidden="true"
                      style="outline: none; width: 353px"
                    >
                      <div>
                        <li
                          tabindex="-1"
                          style="width: 100%; display: inline-block"
                        >
                          <div class="gallery_photo shadow">
                            <img
                              class="user_img_top"
                              src="/static/media/user-5.bdbed114.png"
                            /><a
                              class="linkedin_img_icon"
                              href="https://www.linkedin.com/in/james-gao-49461a217/"
                              target="_blank"
                              ><img
                                src="data:image/png;base64,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"
                            /></a>
                            <div class="card-img-overlay p-3"></div>
                            <div class="photo_content">
                              <h6>James Gao</h6>
                              <p>Lead Developer</p>
                            </div>
                            <div class="photo_description">
                              <p>
                                James holds a bachelor's degree in computer
                                science and has a profound understanding of
                                software engineering. He is a full stack
                                developer who has contributed to several
                                well-known DeFi projects.
                              </p>
                            </div>
                          </div>
                        </li>
                      </div>
                    </div>
                    <div
                      data-index="6"
                      tabindex="-1"
                      class="slick-slide slick-cloned"
                      aria-hidden="true"
                      style="width: 353px"
                    >
                      <div>
                        <li
                          tabindex="-1"
                          style="width: 100%; display: inline-block"
                        >
                          <div class="gallery_photo shadow">
                            <img
                              class="user_img_top"
                              src="/static/media/user-2.2ab1dcea.png"
                            /><a
                              class="linkedin_img_icon"
                              href="https://www.linkedin.com/in/fbeeg/"
                              target="_blank"
                              ><img
                                src="data:image/png;base64,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"
                              />
                            </a>
                            <div class="card-img-overlay p-3"></div>
                            <div class="photo_content">
                              <h6>Frederic Beeg</h6>
                              <p>CEO/Founder</p>
                            </div>
                            <div class="photo_description">
                              <p>
                                Focused on building crypto and e-commerce
                                platforms. Living on Koh Phangan, Thailand and
                                Canggu, Bali, Indonesia. Built an
                                industry-leading digital marketplace for video
                                game distribution, and created several
                                successful brands on Amazon.
                              </p>
                            </div>
                          </div>
                        </li>
                      </div>
                    </div>
                    <div
                      data-index="7"
                      tabindex="-1"
                      class="slick-slide slick-cloned"
                      aria-hidden="true"
                      style="width: 353px"
                    >
                      <div>
                        <li
                          tabindex="-1"
                          style="width: 100%; display: inline-block"
                        >
                          <div class="gallery_photo shadow">
                            <img
                              class="user_img_top"
                              src="/static/media/user-3.9797d9fa.png"
                            /><a
                              class="linkedin_img_icon"
                              href="https://www.linkedin.com/in/dino-dzizic-189a54191/"
                              target="_blank"
                              ><img
                                src="data:image/png;base64,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"
                            /></a>
                            <div class="card-img-overlay p-3"></div>
                            <div class="photo_content">
                              <h6>Dino Dzizic</h6>
                              <p>Chief Technology Officer</p>
                            </div>
                            <div class="photo_description">
                              <p>
                                DeFi/Dapp/NFT specialist with a passion for
                                blockchain technology. Dino has over 5 years
                                experience developing blockchain technology,
                                including high-profile projects, and holds a
                                Bachelor's degree in software engineering.
                              </p>
                            </div>
                          </div>
                        </li>
                      </div>
                    </div>
                    <div
                      data-index="8"
                      tabindex="-1"
                      class="slick-slide slick-cloned"
                      aria-hidden="true"
                      style="width: 353px"
                    >
                      <div>
                        <li
                          tabindex="-1"
                          style="width: 100%; display: inline-block"
                        >
                          <div class="gallery_photo shadow">
                            <img
                              class="user_img_top"
                              src="/static/media/user-4.9a9e75d3.png"
                            /><a
                              class="linkedin_img_icon"
                              href="https://www.linkedin.com/in/gregory-khine/"
                              target="_blank"
                              ><img
                                src="data:image/png;base64,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"
                            /></a>
                            <div class="card-img-overlay p-3"></div>
                            <div class="photo_content">
                              <h6>Gregory Khine</h6>
                              <p>Chief Operating Officer</p>
                            </div>
                            <div class="photo_description">
                              <p>
                                Founded an award-winning web agency as well as
                                popular online education resources in the late
                                90s. Greg fell down the crypto rabbit hole in
                                2015, and has since developed a particular
                                interest in DeFi, both the technology and its
                                transformative potential. He holds undergraduate
                                and graduate degrees from the London School of
                                Economics &amp; Political Science.
                              </p>
                            </div>
                          </div>
                        </li>
                      </div>
                    </div>
                    <div
                      data-index="9"
                      tabindex="-1"
                      class="slick-slide slick-cloned"
                      aria-hidden="true"
                      style="width: 353px"
                    >
                      <div>
                        <li
                          tabindex="-1"
                          style="width: 100%; display: inline-block"
                        >
                          <div class="gallery_photo shadow">
                            <img
                              class="user_img_top"
                              src="/static/media/user-6.99b83222.png"
                            /><a
                              class="linkedin_img_icon"
                              href="#"
                              target="_blank"
                              ><img
                                src="data:image/png;base64,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"
                            /></a>
                            <div class="card-img-overlay p-3"></div>
                            <div class="photo_content">
                              <h6>Yehor Oshodin</h6>
                              <p>FrontEnd Lead</p>
                            </div>
                            <div class="photo_description">
                              <p>
                                I always look to add my own magical touch to any
                                new code that I write, and would like to mention
                                that in the past I have worked alongside some
                                very technically able individuals in the
                                industry. I consider myself a real team player
                                who understands the importance of teamwork,
                                collaboration, and open communication.
                              </p>
                            </div>
                          </div>
                        </li>
                      </div>
                    </div>
                    <div
                      data-index="10"
                      tabindex="-1"
                      class="slick-slide slick-cloned"
                      aria-hidden="true"
                      style="width: 353px"
                    >
                      <div>
                        <li
                          tabindex="-1"
                          style="width: 100%; display: inline-block"
                        >
                          <div class="gallery_photo shadow">
                            <img
                              class="user_img_top"
                              src="data:image/png;base64,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"
                            /><a
                              class="linkedin_img_icon"
                              href="https://www.linkedin.com/in/leon-jin-7013011b9/"
                              target="_blank"
                              ><img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAABItJREFUeNrMmF9IW3cUxz/NEo1GojPRWN2MwU6CtIrCqrMGhE4qBNHQhxXWiezJ0foyBPuwrriyUYfsSanbYBTtHmQDKyWQUtiEOFEKiu1wkpn5j1mjiWhmotVu7mG/K3ca9aqR+n26Ifd3zvee3zm/8z2/U5ubmxwQxUARkA9YATNgEP8FgClgDBgBBoGBgxg/pZBQClANVAIVgEah/Q3ABTwEHgALignp6twRXwi1264CNUA5wPj8KgPeIENTK4zOhpj0rzEf3AAgVa8hy6glN11HoTmB4mw9Z1LjJFOPgQ5dnfv+Ln72JhRqt2UD14FrgMbtWaZn2I9zJMD04gtF4clMjsWeb6CqwIgtJ1GKWBvQqqtzexUTCrXbioBGwDHhX+Ne3xyd/T58wXUOA5M+hg9KTNSWpmExagG6gWZdnXtwOyFVhNAVAU2Ao3dsiYYuLy2umUOTAfAF12lxzdDQ5aV3bAnAATQJX/+DKsI2NQKXnE8D3OyewPVskWjB9WyRm90TOJ8GAC4BjcJnZEIiZxy9Y0vccU4zNLVCtDE0tcId57Q8Utd3K/urwHcT/jVNQ5c3qpGJhIpzybS8l43FqN0APgTuA6hl50wNoLnXNxeRTG66DuvpuEM5H3u+yuhsaMf2nc3Q0VSdpRG+HwELEqFqoNztWaaz3xeRzJNPC48Ukbc/G9pBqrPfx7u5r2PLSSwXHL6VcqgSoGfYH7GaDhuZ/Wz4guv0DPuRc1CJ3lQxPr+KcySwr+GPOjwY63/h697ZqOSScyTA+PwqoiUVq0Sj1Ax4g4pO4B+eLLC68Q/dQ/6oEJpefMGAN4joj0Uq0bUVl/jnly3YchL5pNIc1aNAIF8tJMSOhNsNV86ncuV86tbv5fDLrefEeDV9vy9zOimG7BTleSfzbVULPcOkf03R4gtfDDPhX6OmxMTdmhzKvhzBMxempsTEwB9/4ZkLA5CTFs+P13IVEZP5NqskcSVJiMOio9+HZy5MnOa/wvXMhfmm97mitTLfBlW08sCkj2H2q3fwNhdJHZ2ffls6sB2VkJ2k6jVHInThLT2J8WoS49UUmBMAWF3/W9Fame+ASmhgssRXHRYJsa9FfFYCme8plRDk5KbreFWQ+R5TiemAQhHmVwGZ7xG1GFU2irP1mszk2H1P6zeSY8W+x4hk1rDxUos+Ti3LiRgsRu3Wu/vp7uJsvaS3B9VibnKdSY2rtOcbuPvz3j3K9XHenr8BmqqzaKrOUhQde75BmkxcwIBU9g8BqgqMmMSXb9czR0UkGyZ9DFUFRuQcJMWYAnwPlN96MEmLa+bYBRpAQ8WbUiQfA+/LBdoC0AGU1ZamaX79M7RDNY7OhhT3O6UStrY0TcqdDmmq3TqpxUTZZjFqqb+YcaxVV2hOoP5ihnSit8mn2e2toxXoLrMmccOeeSykCs0J3LBnUmZNkgbG1l3HIDHeNgOP7HkGbjssVJxLjuo23XZYsOcZEKK+eftIrd6+SFfnHgy1224B4TJrksNs1HI2Q3fso/S+tx8n6rLhRFzHnLgLq5NypffvAMIJ/oRjy3xiAAAAAElFTkSuQmCC"
                            /></a>
                            <div class="card-img-overlay p-3"></div>
                            <div class="photo_content">
                              <h6>Leon Jin</h6>
                              <p>Lead Developer</p>
                            </div>
                            <div class="photo_description">
                              <p>
                                In recent years Leon has focused on developing
                                blockchain projects. He has an in-depth
                                understanding of blockchain technology, with a
                                particular focus on building decentralized
                                applications, yield farming methods, and new
                                proof methods.
                              </p>
                            </div>
                          </div>
                        </li>
                      </div>
                    </div>
                    <div
                      data-index="11"
                      tabindex="-1"
                      class="slick-slide slick-cloned"
                      aria-hidden="true"
                      style="width: 353px"
                    >
                      <div>
                        <li
                          tabindex="-1"
                          style="width: 100%; display: inline-block"
                        >
                          <div class="gallery_photo shadow">
                            <img
                              class="user_img_top"
                              src="/static/media/user-5.bdbed114.png"
                            /><a
                              class="linkedin_img_icon"
                              href="https://www.linkedin.com/in/james-gao-49461a217/"
                              target="_blank"
                              ><img
                                src="data:image/png;base64,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"
                            /></a>
                            <div class="card-img-overlay p-3"></div>
                            <div class="photo_content">
                              <h6>James Gao</h6>
                              <p>Lead Developer</p>
                            </div>
                            <div class="photo_description">
                              <p>
                                James holds a bachelor's degree in computer
                                science and has a profound understanding of
                                software engineering. He is a full stack
                                developer who has contributed to several
                                well-known DeFi projects.
                              </p>
                            </div>
                          </div>
                        </li>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="tokenomic_section" id="tokenomic">
      <div class="container">
        <div class="row">
          <div class="title"><h1>Tokenomics</h1></div>
        </div>
        <div class="tokenomic_content">
          <div class="tokenomic_block">
            <div class="token_avata_wrap">
              <img
                src="@/assets/images/crosswise/CRSS-b.png"
                class="tokenMainImg"
                data-xblocker="passed"
                style="visibility: visible"
              /><img
                src="@/assets/images/crosswise/tokenomic-img-v1.png"
                class="tokenAvatar"
                data-xblocker="passed"
                style="visibility: visible"
              />
              <div class="tokenName">
                <img
                  src="@/assets/images/crosswise/ellipse.png"
                  data-xblocker="passed"
                  style="visibility: visible"
                />
                <div class="desc">CRSS</div>
              </div>
            </div>
            <div class="token_desc">
              <div class="max_supply">
                <h5 class="topic">Maximum Supply</h5>
                <div class="content">
                  <h6>50,000,000</h6>
                  <div class="special">$CRSS</div>
                </div>
              </div>
              <div class="emission_rate">
                <h5 class="topic">Emission Rate</h5>
                <div class="content">
                  <h6>first 14 days</h6>
                  <div class="special">1.2</div>
                </div>
                <div class="content">
                  <h6>after 14 days</h6>
                  <div class="special">1</div>
                </div>
              </div>
              <div class="teamToken">
                <h5>No Team Tokens</h5>
                <h6>
                  share of emission going to team wallet:
                  <b class="textBlue">8%</b>
                </h6>
              </div>
            </div>
          </div>
          <div class="tokenomic_block">
            <div class="token_avata_wrap">
              <img
                src="@/assets/images/crosswise/XCRSS.png"
                class="tokenMainImg"
                data-xblocker="passed"
                style="visibility: visible"
              /><img
                src="@/assets/images/crosswise/tokenomic-img-v2.png"
                class="tokenAvatar"
                data-xblocker="passed"
                style="visibility: visible"
              />
              <div class="tokenName">
                <img
                  src="@/assets/images/crosswise/ellipse.png"
                  data-xblocker="passed"
                  style="visibility: visible"
                />
                <div class="desc">XCRSS</div>
              </div>
            </div>
            <div class="token_desc">
              <div class="desc">
                <h5>Rewards Vesting</h5>
                <h6>
                  <b class="textBlue">50%</b> of rewards distributed in farms
                  and pools are paid out in XCRSS token, which is linearly
                  vested into CRSS within 5 months, with
                  <b class="textBlue">20%</b> unlocked every 30 days.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="presale_bottom_section" style="background-color:#f5f7fa;">
      <div class="container">
        <div class="row">
          <div class="title"><h1>Presale</h1></div>
        </div>
        <div class="presale_info">
          <div class="info_desc pt-50">Max Amount Per Wallet</div>
          <div class="info_desc t_b pt-30">25,000 BUSD</div>
          <div class="info_desc pt-50">Vesting</div>
          <div class="info_desc t_b pt-30">
            5 months linearly with 20% unlock every 30 days
          </div>
        </div>
        <div class="presale_stages">
          <div class="s_diagram size_md">
            <div class="stage_item">
              <div class="item_title">Stage 1</div>
              <h6 class="item_desc pt-30">Price <b>0.2 BUSD</b></h6>
              <h6 class="item_desc">1M Tokens = 200K BUSD</h6>
            </div>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAAAXCAYAAADug6rPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQOSURBVHgB7VndahRLEK7qHc7hYJDzBuc8kYQgolcmL+APiqiIMyEuQbzwEdz1RkWE+PdeShRvnC7rq6renY0a4tXMRRdke6a7/rq+6uruCVGl0ejeleOn9y8f5weXj9uzyiSqNBox0w1GI9w+vHQ20CpgIxKLLJnYn4m6/TOAVgEbkeYvzu8K5aUCxwaccHdw8eupoFXARqb5SwWNeYFnLY2iqHXznd+DVgGbAB282tojoQWWGAEyyt3h9q/LYwVsItS9dtAS1pnta9w+3v55pVXAJkQP32ztSe6f2zGEcSaR7smFbxugMVWaHM23vzybEV1NgoOI8Iy4u/Xu3D7G+K/P79uUdaFlXW7apu8Koj5TTpIyccqNteXdWuNRXkqyKaety9JJ/qENH7N39MtQLn3P6mVTbGzaJJcDr783oTtsYrzPbJ5ln/y61THKzmt6UF6y645+04DfnN0Ghc+uR+IZvGJjZLasvzFdxQ4N5QZ28O7+kenAHDLNshe6Rnmy6bTna5zpXyuOAE1m3c0P/+zz35/e6dlkJtwzWXDQ2rte6DJTCTSrMuVRZ2ED61XfLViMMWJr9a/3saS8uocKxvCs+oyvgDbgJYy5nbDXD3g29ZL7pD703oZt8w32kJUp67lLECiMC9mzWI2J1k9kGmqOPkFQVjwmh4BaS1CcXEZ5BzrAYzuO25tZ/DFOGzZdbtXntoqN4gNxjFPRvfK/yCjbXqLVBMyuSkMkaiVOLOEoQXEsWdsWc9wdgt8kJEbFBvDE4Cv90GjZJRS84VzIcvTzWqc4LwePB98SyO8tRdbLfrbJw56wZ3lw2AyILYQ+N3aW9TvHVk9r32LYAodkcL1mT9zPcMICqpYtOdznlb++GdHKJ/K4Rd8qajF/kRID64uJQUalGl1njU5yX7QEWKbSTEhLig6p8WwZlzxgHrjesNBVozy+jDWzs5UqQRCRk5ExMCa9mF68AThxNylh0UvGJxnlwbJuxBDGhPUPreVVrBQKfSSN+SGWLOI6vXRpWbI+gOKIEuyK69U8zjrHhpyDYdsK4zovkNESgUIyO+DOR2WuUuKoNQjlIABOLKuEs/hAPPuqgEWfL/wmG6BIWpPDlmCgi3vNkTCSrmrn/5746OmfX/94blkPHRMkHOcVpM7KIdk+uLj5UY/9VI/1kyO7MAu1FKtfm2UBC1QBmxAd2sri1vYs2xXz8vaHrd0hTwVsInSo3w91q+pwIjGwSBSs87sn+SpgEyADK0vrRxvC6WV5+/26DA6pAjYyzXeO26yfoChO8vqzuPP212CBKmAj0sEOvsinttwD8b+x08ACVcDGJOauXM71zra4d/TznnWSKmAjkl7tj9DqnWtx9+j0lVVpIvRoR/77E/4fKEF/a0dU5gIAAAAASUVORK5CYII="
            />
            <div class="stage_item">
              <div class="item_title">Stage 2</div>
              <h6 class="item_desc pt-30">Price <b>0.3 BUSD</b></h6>
              <h6 class="item_desc">1M Tokens = 300K BUSD</h6>
            </div>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAAAXCAYAAADug6rPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQOSURBVHgB7VndahRLEK7qHc7hYJDzBuc8kYQgolcmL+APiqiIMyEuQbzwEdz1RkWE+PdeShRvnC7rq6renY0a4tXMRRdke6a7/rq+6uruCVGl0ejeleOn9y8f5weXj9uzyiSqNBox0w1GI9w+vHQ20CpgIxKLLJnYn4m6/TOAVgEbkeYvzu8K5aUCxwaccHdw8eupoFXARqb5SwWNeYFnLY2iqHXznd+DVgGbAB282tojoQWWGAEyyt3h9q/LYwVsItS9dtAS1pnta9w+3v55pVXAJkQP32ztSe6f2zGEcSaR7smFbxugMVWaHM23vzybEV1NgoOI8Iy4u/Xu3D7G+K/P79uUdaFlXW7apu8Koj5TTpIyccqNteXdWuNRXkqyKaety9JJ/qENH7N39MtQLn3P6mVTbGzaJJcDr783oTtsYrzPbJ5ln/y61THKzmt6UF6y645+04DfnN0Ghc+uR+IZvGJjZLasvzFdxQ4N5QZ28O7+kenAHDLNshe6Rnmy6bTna5zpXyuOAE1m3c0P/+zz35/e6dlkJtwzWXDQ2rte6DJTCTSrMuVRZ2ED61XfLViMMWJr9a/3saS8uocKxvCs+oyvgDbgJYy5nbDXD3g29ZL7pD703oZt8w32kJUp67lLECiMC9mzWI2J1k9kGmqOPkFQVjwmh4BaS1CcXEZ5BzrAYzuO25tZ/DFOGzZdbtXntoqN4gNxjFPRvfK/yCjbXqLVBMyuSkMkaiVOLOEoQXEsWdsWc9wdgt8kJEbFBvDE4Cv90GjZJRS84VzIcvTzWqc4LwePB98SyO8tRdbLfrbJw56wZ3lw2AyILYQ+N3aW9TvHVk9r32LYAodkcL1mT9zPcMICqpYtOdznlb++GdHKJ/K4Rd8qajF/kRID64uJQUalGl1njU5yX7QEWKbSTEhLig6p8WwZlzxgHrjesNBVozy+jDWzs5UqQRCRk5ExMCa9mF68AThxNylh0UvGJxnlwbJuxBDGhPUPreVVrBQKfSSN+SGWLOI6vXRpWbI+gOKIEuyK69U8zjrHhpyDYdsK4zovkNESgUIyO+DOR2WuUuKoNQjlIABOLKuEs/hAPPuqgEWfL/wmG6BIWpPDlmCgi3vNkTCSrmrn/5746OmfX/94blkPHRMkHOcVpM7KIdk+uLj5UY/9VI/1kyO7MAu1FKtfm2UBC1QBmxAd2sri1vYs2xXz8vaHrd0hTwVsInSo3w91q+pwIjGwSBSs87sn+SpgEyADK0vrRxvC6WV5+/26DA6pAjYyzXeO26yfoChO8vqzuPP212CBKmAj0sEOvsinttwD8b+x08ACVcDGJOauXM71zra4d/TznnWSKmAjkl7tj9DqnWtx9+j0lVVpIvRoR/77E/4fKEF/a0dU5gIAAAAASUVORK5CYII="
            />
            <div class="stage_item">
              <div class="item_title">Stage 3</div>
              <h6 class="item_desc pt-30">Price <b>0.6 BUSD</b></h6>
              <h6 class="item_desc">1M Tokens = 600K BUSD</h6>
            </div>
          </div>
          <div class="s_diagram size_sm">
            <div class="stage_item">
              <div class="item_title">Stage 1</div>
              <h6 class="item_desc pt-30">Price <b>0.2 BUSD</b></h6>
              <h6 class="item_desc">1M Tokens = 200K BUSD</h6>
            </div>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAABsCAYAAACBzymiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUvSURBVHgBtVpNbhxVEH5VM7EQi4icwHODHAHMigUSjiwhZTXhBIglQiADESyBC2DnACCLC9g3YHwCzAlsIZNJPNOvUl9Vt2U5nrieVN0eW5a666vq79Xve0MleL13/tczIZrj/8p0uHr46Yv7ZKYleq1pRhP6qHCRSUcnq4BIGJz1p9RSRIQkKBMHr2qywhJRkSoUkYnTUllgOukLqIqQ8Q3gPTUihSlkeBstsLmAliDrcfC1cjEhGC4s2ZwXFu4KrKZKnMz5mgswgcqFci3nir+EJdW1lVzLwXkB5wQhyucc7qhBBKvzLYe3FPuke8tUuMJ0VVJjfs4leMFyQiBVEg6KNYW/wguD9JodoVjQrsBspWcMWgRRCjecZmdFdkchCnp5Yz6n3r0l2xU1/N29YTlnh78uqKCG6oJqsQ7JtEUoq4IO5o9QQ70+EyppvregZyla+ZmyF9RTrqdESrYcxcIQlXfqano+L1o8wTbBZVLBec2OSSPQgkpE9TpCQxKNuUWsY+ExmqL+R7zYJYJbEFkUCSpGuit6rgV6jcm0NUXWhKI/X2enXB7SlaaX/ErkxQKJRbIjFDWUvdRJjUVovECj+qN/7mA0j9HOIeeKpI8tQ/UnioZQc8rl4jmgpkeoFzdGLGVzPvi5T9D5Y4tFp7ddIZmm/twHf8RQLLk0BFElcxV8svtzxuzvtGDOzZ5D4SQW/Gp/tuXgvLqfpLfQ3JnNvt8SDKJw4sJQxD6BCgcTVzwr2iQHYAJ0chCZtTonduhakv1cB1zywQL1iEfouHr3piAtDZwbqO9A1eysCL7FPTydc9udI+/R09s5L9A92fllrlqEwnRJr0TF9iudFsoOf+u4vGPhYCPa0BRVGOwKgjJNtOhFoL5Q/thijHO0OreAT5WWan0uhffnGxbUJlFLt+mcm7cYKmzP3hIxBZ5yg2Noiyt6VuQgMK6maU5sCi3hMteyoG611dGSnluoNx1Wp3e516VTJNly32+pXimCi9rmijJ4ePo5Ue17uTKCn2uEgnIaw89x9cASrUQttPjOXLneL04EL/1ZBY2RcnF8ZtBe8iISbd7SZxWR9NbCD+a8XUz386GVo+CBZWtrIb6w6X0LypztWXRIuckdFwBZhnKXvmtRhq1QO8sNyZToZccKJM57+gSN4lZ957+ml7naz1t0PXilgVthph67ZS/3x72XX6r0rv7+9u0fD482PIheUco9Weubp5fzaljlBe/vnn/AUn/V5fpQ967/fL53Ob9LiPrWAss63VDnvnu6nKvyQ325z7Sr/J33jx5dqMAZ2aRjBx4Hz/eWdynw+wC+g5bvP1/OpesOYMDEnpVT9ym52iEowJc0FIBrd/jTbQUVLZeAm7fMNmDpDlweb0mL6av1EwP/+ujRGRSog/0LTm1SvqVgan6Ot2OZ3ohQo1Gfxb0J1Nay4KvVjjEyPGQKaKVvUM7s9cFxpwqeuAK2pEtW5mqfWwCsWg7RMPWj9Smt1wZsPN7m7ufd8xnXB8d6Z+bPg8DJs9qtZzqz7BePoR90g/4fPZQ+sBzsz/3d1dXHA/Cd4IOCSd06Voq2yb/PAoCF3npsiZFssR77OZ2BL1ay2rkJvBHcFSxn01qPlctta1eG9tOYd3vFvghUFlf0NvA7wU3BJ+ezrQd4g7Ldg6OtEB/Ucbggp8sNwPeC4/pFFchkC2uw3a+nlTnNBaf/0+uNwCHwmwrU3FkVO85d/Hd5tbN/shk4DO4KlrMy0UAhupDL97/46oQu7pN5A0Kuu7haolikAAAAAElFTkSuQmCC"
              class="mt-30"
            />
            <div class="stage_item mt-30">
              <div class="item_title">Stage 2</div>
              <h6 class="item_desc pt-30">Price <b>0.3 BUSD</b></h6>
              <h6 class="item_desc">1M Tokens = 300K BUSD</h6>
            </div>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAABsCAYAAACBzymiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUvSURBVHgBtVpNbhxVEH5VM7EQi4icwHODHAHMigUSjiwhZTXhBIglQiADESyBC2DnACCLC9g3YHwCzAlsIZNJPNOvUl9Vt2U5nrieVN0eW5a666vq79Xve0MleL13/tczIZrj/8p0uHr46Yv7ZKYleq1pRhP6qHCRSUcnq4BIGJz1p9RSRIQkKBMHr2qywhJRkSoUkYnTUllgOukLqIqQ8Q3gPTUihSlkeBstsLmAliDrcfC1cjEhGC4s2ZwXFu4KrKZKnMz5mgswgcqFci3nir+EJdW1lVzLwXkB5wQhyucc7qhBBKvzLYe3FPuke8tUuMJ0VVJjfs4leMFyQiBVEg6KNYW/wguD9JodoVjQrsBspWcMWgRRCjecZmdFdkchCnp5Yz6n3r0l2xU1/N29YTlnh78uqKCG6oJqsQ7JtEUoq4IO5o9QQ70+EyppvregZyla+ZmyF9RTrqdESrYcxcIQlXfqano+L1o8wTbBZVLBec2OSSPQgkpE9TpCQxKNuUWsY+ExmqL+R7zYJYJbEFkUCSpGuit6rgV6jcm0NUXWhKI/X2enXB7SlaaX/ErkxQKJRbIjFDWUvdRJjUVovECj+qN/7mA0j9HOIeeKpI8tQ/UnioZQc8rl4jmgpkeoFzdGLGVzPvi5T9D5Y4tFp7ddIZmm/twHf8RQLLk0BFElcxV8svtzxuzvtGDOzZ5D4SQW/Gp/tuXgvLqfpLfQ3JnNvt8SDKJw4sJQxD6BCgcTVzwr2iQHYAJ0chCZtTonduhakv1cB1zywQL1iEfouHr3piAtDZwbqO9A1eysCL7FPTydc9udI+/R09s5L9A92fllrlqEwnRJr0TF9iudFsoOf+u4vGPhYCPa0BRVGOwKgjJNtOhFoL5Q/thijHO0OreAT5WWan0uhffnGxbUJlFLt+mcm7cYKmzP3hIxBZ5yg2Noiyt6VuQgMK6maU5sCi3hMteyoG611dGSnluoNx1Wp3e516VTJNly32+pXimCi9rmijJ4ePo5Ue17uTKCn2uEgnIaw89x9cASrUQttPjOXLneL04EL/1ZBY2RcnF8ZtBe8iISbd7SZxWR9NbCD+a8XUz386GVo+CBZWtrIb6w6X0LypztWXRIuckdFwBZhnKXvmtRhq1QO8sNyZToZccKJM57+gSN4lZ957+ml7naz1t0PXilgVthph67ZS/3x72XX6r0rv7+9u0fD482PIheUco9Weubp5fzaljlBe/vnn/AUn/V5fpQ967/fL53Ob9LiPrWAss63VDnvnu6nKvyQ325z7Sr/J33jx5dqMAZ2aRjBx4Hz/eWdynw+wC+g5bvP1/OpesOYMDEnpVT9ym52iEowJc0FIBrd/jTbQUVLZeAm7fMNmDpDlweb0mL6av1EwP/+ujRGRSog/0LTm1SvqVgan6Ot2OZ3ohQo1Gfxb0J1Nay4KvVjjEyPGQKaKVvUM7s9cFxpwqeuAK2pEtW5mqfWwCsWg7RMPWj9Smt1wZsPN7m7ufd8xnXB8d6Z+bPg8DJs9qtZzqz7BePoR90g/4fPZQ+sBzsz/3d1dXHA/Cd4IOCSd06Voq2yb/PAoCF3npsiZFssR77OZ2BL1ay2rkJvBHcFSxn01qPlctta1eG9tOYd3vFvghUFlf0NvA7wU3BJ+ezrQd4g7Ldg6OtEB/Ucbggp8sNwPeC4/pFFchkC2uw3a+nlTnNBaf/0+uNwCHwmwrU3FkVO85d/Hd5tbN/shk4DO4KlrMy0UAhupDL97/46oQu7pN5A0Kuu7haolikAAAAAElFTkSuQmCC"
              class="mt-30"
            />
            <div class="stage_item mt-30">
              <div class="item_title">Stage 3</div>
              <h6 class="item_desc pt-30">Price <b>0.6 BUSD</b></h6>
              <h6 class="item_desc">1M Tokens = 600K BUSD</h6>
            </div>
          </div>
          <div class="stage_step">
            <div class="step_item b_green">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAASCAYAAAC9+TVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGgSURBVHgBlZO/UsJAEMZvL+polyeQaCMMDaXjAB5UlIFoDTyB8gTiE2hpB5SOoDyBieConXTQGX2C2DmOybn5hweTMHGrZOe73+5+ewdkRbCD4xysOR3+bVeNl6EZp6OxgLzKEKDjZw42JJ3tq8q/IKyo1YFKLkAOUhZZETQCcAKEdIXUhFO7lHgcVqydIeBSSPU8gDFM1okPgLYI0EeDRhxA9EiKAuD3OQJOSUx4W1uH591UZvPtffoAUYD7Ub8dC2CqAo70SgLTOectaSeV6eJROQnADdOcWUoqu4XeMe8MQBpKRY2HAhwBSMIQz1HOiRH+lAtaJwmgfLigmwAraCoAuQszwMnQkexm1FbQD5ly6QILN8IcetKUzI/pTNnOfiKo4lNIGjitKDt71zj/lwhAQ91bXPkDQMsYD67mHrBCrYEmiW2a+PC8mxpsxO02J3ZgjG+7fl2x3fwRA8pdsTwHEd5DUR2lSpCzuANV47FvzC0gy3P7z198fGJY/IeWjKebiZiMXKnfPtWF6gvjLetX3gt3PFyXTGxqLlcX4xfSRrHnRKOEIAAAAABJRU5ErkJggg=="
              />
              <div class="step_desc">
                Total of 1.1 million BUSD hard cap, 200K soft cap
              </div>
            </div>
            <div class="step_item">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAASCAYAAAC9+TVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGmSURBVHgBlZNdTsJAEMd3llAhYAI34AgcgSby8SgnAB5NMdgTgCcoBiuPyAnwscSH9gZwhN4AIiBpEzruVkrXSrH+H5rp7OxvZ2dngFyQVl2VJSpNXHCbqlG04+Jo3MLoZlNJQ9pkZllCydQaq9K/IC+1fYumqAkABf4PBNYZkoljsPWI9PpnjxAchgGwzDpZuWPBmiTJRK/t+iIAAad/AX5AfACQgQjoGvl2HECsET0HYPYjB5AY8VdLe+nFuLbv++HnAIqRG8QBxo196eAdFkLRVcq+7aQArjsjayPFp+AfCfZAr+8wcCjzHJCEEvdRIGgJC5OEADFuCaPaxy2F1CzwsDu+OY7TUa3ir1fRKquCdCVpzGyfnIAdP/3n+vaBbdZEuuu4sgg6AvwxCHysHmp3nh+eaqA3tm3WHGKaNhs8mQ8e7wk2PzMRwDNQjPzrd/aCRo1NhXp0xryFAOShN6VAW8wuHY9fe9Rr3hvXVliCiPTqtkwATAEUigEIoqy855ei++yT8oZCRJPduRQGgs0aTOZ9Eo2/2Bf8esTDAkVqR08X9QU2m7T7hG6IJAAAAABJRU5ErkJggg=="
              />
              <div class="step_desc">
                70% of presale amount for development and marketing
              </div>
            </div>
            <div class="step_item b_green">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAASCAYAAAC9+TVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGgSURBVHgBlZO/UsJAEMZvL+polyeQaCMMDaXjAB5UlIFoDTyB8gTiE2hpB5SOoDyBieConXTQGX2C2DmOybn5hweTMHGrZOe73+5+ewdkRbCD4xysOR3+bVeNl6EZp6OxgLzKEKDjZw42JJ3tq8q/IKyo1YFKLkAOUhZZETQCcAKEdIXUhFO7lHgcVqydIeBSSPU8gDFM1okPgLYI0EeDRhxA9EiKAuD3OQJOSUx4W1uH591UZvPtffoAUYD7Ub8dC2CqAo70SgLTOectaSeV6eJROQnADdOcWUoqu4XeMe8MQBpKRY2HAhwBSMIQz1HOiRH+lAtaJwmgfLigmwAraCoAuQszwMnQkexm1FbQD5ly6QILN8IcetKUzI/pTNnOfiKo4lNIGjitKDt71zj/lwhAQ91bXPkDQMsYD67mHrBCrYEmiW2a+PC8mxpsxO02J3ZgjG+7fl2x3fwRA8pdsTwHEd5DUR2lSpCzuANV47FvzC0gy3P7z198fGJY/IeWjKebiZiMXKnfPtWF6gvjLetX3gt3PFyXTGxqLlcX4xfSRrHnRKOEIAAAAABJRU5ErkJggg=="
              />
              <div class="step_desc">
                30% for initial CRSS/BNB and CRSS/BUSD liquidity
              </div>
            </div>
            <div class="step_item">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAASCAYAAAC9+TVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGmSURBVHgBlZNdTsJAEMd3llAhYAI34AgcgSby8SgnAB5NMdgTgCcoBiuPyAnwscSH9gZwhN4AIiBpEzruVkrXSrH+H5rp7OxvZ2dngFyQVl2VJSpNXHCbqlG04+Jo3MLoZlNJQ9pkZllCydQaq9K/IC+1fYumqAkABf4PBNYZkoljsPWI9PpnjxAchgGwzDpZuWPBmiTJRK/t+iIAAad/AX5AfACQgQjoGvl2HECsET0HYPYjB5AY8VdLe+nFuLbv++HnAIqRG8QBxo196eAdFkLRVcq+7aQArjsjayPFp+AfCfZAr+8wcCjzHJCEEvdRIGgJC5OEADFuCaPaxy2F1CzwsDu+OY7TUa3ir1fRKquCdCVpzGyfnIAdP/3n+vaBbdZEuuu4sgg6AvwxCHysHmp3nh+eaqA3tm3WHGKaNhs8mQ8e7wk2PzMRwDNQjPzrd/aCRo1NhXp0xryFAOShN6VAW8wuHY9fe9Rr3hvXVliCiPTqtkwATAEUigEIoqy855ei++yT8oZCRJPduRQGgs0aTOZ9Eo2/2Bf8esTDAkVqR08X9QU2m7T7hG6IJAAAAABJRU5ErkJggg=="
              />
              <div class="step_desc">
                Maximum total of 3 million tokens at pre-sale (6% of max supply)
              </div>
            </div>
            <div class="step_item b_green">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAASCAYAAAC9+TVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGgSURBVHgBlZO/UsJAEMZvL+polyeQaCMMDaXjAB5UlIFoDTyB8gTiE2hpB5SOoDyBieConXTQGX2C2DmOybn5hweTMHGrZOe73+5+ewdkRbCD4xysOR3+bVeNl6EZp6OxgLzKEKDjZw42JJ3tq8q/IKyo1YFKLkAOUhZZETQCcAKEdIXUhFO7lHgcVqydIeBSSPU8gDFM1okPgLYI0EeDRhxA9EiKAuD3OQJOSUx4W1uH591UZvPtffoAUYD7Ub8dC2CqAo70SgLTOectaSeV6eJROQnADdOcWUoqu4XeMe8MQBpKRY2HAhwBSMIQz1HOiRH+lAtaJwmgfLigmwAraCoAuQszwMnQkexm1FbQD5ly6QILN8IcetKUzI/pTNnOfiKo4lNIGjitKDt71zj/lwhAQ91bXPkDQMsYD67mHrBCrYEmiW2a+PC8mxpsxO02J3ZgjG+7fl2x3fwRA8pdsTwHEd5DUR2lSpCzuANV47FvzC0gy3P7z198fGJY/IeWjKebiZiMXKnfPtWF6gvjLetX3gt3PFyXTGxqLlcX4xfSRrHnRKOEIAAAAABJRU5ErkJggg=="
              />
              <div class="step_desc">Base price 0.75 BUSD after pre-sale</div>
            </div>
            <div class="step_item">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAASCAYAAAC9+TVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGmSURBVHgBlZNdTsJAEMd3llAhYAI34AgcgSby8SgnAB5NMdgTgCcoBiuPyAnwscSH9gZwhN4AIiBpEzruVkrXSrH+H5rp7OxvZ2dngFyQVl2VJSpNXHCbqlG04+Jo3MLoZlNJQ9pkZllCydQaq9K/IC+1fYumqAkABf4PBNYZkoljsPWI9PpnjxAchgGwzDpZuWPBmiTJRK/t+iIAAad/AX5AfACQgQjoGvl2HECsET0HYPYjB5AY8VdLe+nFuLbv++HnAIqRG8QBxo196eAdFkLRVcq+7aQArjsjayPFp+AfCfZAr+8wcCjzHJCEEvdRIGgJC5OEADFuCaPaxy2F1CzwsDu+OY7TUa3ir1fRKquCdCVpzGyfnIAdP/3n+vaBbdZEuuu4sgg6AvwxCHysHmp3nh+eaqA3tm3WHGKaNhs8mQ8e7wk2PzMRwDNQjPzrd/aCRo1NhXp0xryFAOShN6VAW8wuHY9fe9Rr3hvXVliCiPTqtkwATAEUigEIoqy855ei++yT8oZCRJPduRQGgs0aTOZ9Eo2/2Bf8esTDAkVqR08X9QU2m7T7hG6IJAAAAABJRU5ErkJggg=="
              />
              <div class="step_desc">Minimum buy 1 BUSD</div>
            </div>
          </div>
        </div>
        <div class="see_full_roadmap">
          <a
            class="btn btn_primary btn_whitelisted m-auto p-15 maxContent"
            href="https://x9epe3je3fk.typeform.com/crosswise"
            >Get Whitelisted</a
          >
        </div>
      </div>
    </section>
    <section class="fee_section">
      <div class="container">
        <div class="row">
          <div class="title"><h1>Fees</h1></div>
        </div>
        <div class="fee_classification">
          <div class="fee_item">
            <div class="item_title">Quick Swap</div>
            <div class="item_content">
              <div class="sub_title">0.2%</div>
              <div class="sub_desc">fee on every swap</div>
              <div class="sub_title">0.17%</div>
              <div class="sub_desc">
                Returned to liquidity pools and awarded to liquidity providers
              </div>
              <div class="sub_title">0.03%</div>
              <div class="sub_desc">to treasury</div>
            </div>
          </div>
          <div class="fee_item">
            <div class="item_title">Advanced Swap</div>
            <div class="item_content">
              <div class="sub_title">0.3%</div>
              <div class="sub_desc">fee on every swap</div>
              <div class="sub_title">0.17%</div>
              <div class="sub_desc">
                Returned to liquidity pools and awarded to liquidity providers
              </div>
              <div class="sub_title">0.13%</div>
              <div class="sub_desc">to treasury</div>
            </div>
          </div>
          <div class="fee_item">
            <div class="item_title">Auto-Compound</div>
            <div class="item_content">
              <div class="sub_title">5%</div>
              <div class="sub_desc">fee on auto-compounded rewards</div>
              <div class="sub_title">5%</div>
              <div class="sub_desc">fee used to buy back and burn CRSS</div>
              <div class="sub_desc">
                rewards are auto-compounded, we do our own yield optimization
              </div>
            </div>
          </div>
          <div class="fee_item">
            <div class="item_title">Transactions</div>
            <div class="item_content">
              <div class="sub_title">0.1%</div>
              <div class="sub_desc">fee on all transactions</div>
              <div class="sub_desc">
                Every time CRSS is transferred, whether for staking, creating LP
                or sending to another wallet, a
                <b class="textBlue">0.1%</b> transaction fee takes place.
              </div>
              <div class="sub_desc">
                Of this <b class="textBlue">0.04%</b> goes to the development
                and marketing wallet, <b class="textBlue">0.03%</b> goes into
                liquidity, and <b class="textBlue">0.03%</b> is used to buy back
                and burn CRSS.
              </div>
              <div class="sub_desc">
                This adds deflationary pressure and auto-liquidity for the CRSS
                token, further encouraging users to hold CRSS.
              </div>
            </div>
          </div>
          <div class="fee_item">
            <div class="item_title">Instant Rewards</div>
            <div class="item_content">
              <div class="sub_title">25%</div>
              <div class="sub_desc">fee on instant rewards</div>
              <div class="sub_desc">
                Farm and pool rewards are paid in
                <b class="textBlue">50%</b> CRSS and
                <b class="textBlue">50%</b> XCRSS, with XCRSS linearly vested
                within 5 months.
              </div>
              <div class="sub_desc">
                If users prefer, they can choose to claim rewards instantly but
                will only receive <b class="textBlue">75%</b>, with
                <b class="textBlue">25%</b> being burned.
              </div>
              <div class="sub_desc">
                This further reduces CRSS circulating supply and potential sell
                pressure.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="help_section" id="help" style="background-color: #f5f7fa;">
      <div class="container">
        <div class="help_section_group">
          <div class="help_section_left">
            <div class="row">
              <div class="faq">
                <dl class="faqList">
                  <div class="faqQuestion">
                    <dt>
                      <button
                        type="button"
                        aria-expanded="false"
                        aria-controls="faq1Desc"
                        data-qa="faqQuestionButton"
                        class="faqQuestionButton"
                      >
                        What is crosswise?
                      </button>
                    </dt>
                    <dd>
                      <div id="faq1Desc" data-qa="faqDesc" class="faqDesc">
                        <p>
                          A next-gen cross-chain Automated Market Maker (AMM)
                          based Decentralized Exchange (DEX). Crosswise aims to
                          bridge the user experience gap between traditional
                          centralized exchanges and their decentralized
                          counterparts.
                        </p>
                      </div>
                    </dd>
                  </div>
                  <div class="faqQuestion active">
                    <dt>
                      <button
                        type="button"
                        aria-expanded="true"
                        aria-controls="faq2Desc"
                        data-qa="faqQuestionButton"
                        class="faqQuestionButton fontWeightBold"
                      >
                        How can I purchase CRSS token?
                      </button>
                    </dt>
                    <dd>
                      <div
                        id="faq2Desc"
                        data-qa="faqDesc"
                        class="faqDesc showDescription"
                      >
                        <p>
                          During the pre-sale, you will only be able to purchase
                          CRSS using BUSD on Binance Smart Chain. Once crosswise
                          DEX is launched, you will be able to swap BUSD, BNB,
                          ETH, BTC, LTC and others against CRSS.
                        </p>
                      </div>
                    </dd>
                  </div>
                  <div class="faqQuestion">
                    <dt>
                      <button
                        type="button"
                        aria-expanded="false"
                        aria-controls="faq3Desc"
                        data-qa="faqQuestionButton"
                        class="faqQuestionButton"
                      >
                        How can I participate in the CRSS token pre-sale?
                      </button>
                    </dt>
                    <dd>
                      <div id="faq3Desc" data-qa="faqDesc" class="faqDesc">
                        <p>
                          Click on
                          <a href="https://x9epe3je3fk.typeform.com/crosswise"
                            >Get Whitelisted</a
                          >
                          in the top menu, complete the form, and wait for
                          confirmation. Please use a MetaMask wallet and ensure
                          you have added Binance Smart Chain network. Once
                          confirmed, you can click on "Buy Tokens" and do your
                          transaction.
                        </p>
                      </div>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          <div class="help_section_right">
            <div class="title"><h1>Join our community</h1></div>
            <div class="desc">
              <p>
                Crosswise is also a thriving community of DeFi enthusiasts! Join
                our growing community and stay up to date with the latest
                project developments.
              </p>
            </div>
            <div class="social_link_btn">
              <a
                class="social_link"
                href="https://twitter.com/crosswisefi"
                target="_blank"
                ><img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKYSURBVHgBlVQ9bNNQEL57dtqI/rliQWKoCwMwNR3ZXCQWpnRhpdm6kW5sSQc6QphQJxIhsaYDqANDIpaMpEhIICHiDgikDnEKBVPb77j3np1E0CC4/F3e3fved99nG+E/I3fc3AAhVojkgP+247n1dlZz+k0HVTL/6WXl+OLN7b8BOZ/33QigBQKXhotEKBKsE6APFnnx9I8SOq9bjnUO+kJi/eiaV5oEeP79qyaALDJKCsYfzFIkBCyB5KULnY4rLPzINeTlXvxd3viydt0fB3NbHTeawd6ImXpTime+CcmXSbhm58N8YMU4IIIFLi1PAfQu77+pY5g0PqyvtlWzHeZdK8IhKeKj1biY4SME0qY1n4notSvNd3etCGqIehMptoqBAAwowS63+GTTHSRdMgSzNnUI0eHb21eX9eGFxz3XOsoVJCZd7iiA6SKBmozDzD1FJZ0yY5RCmXk5DTI1bAghmE5yRYKpBUh1IaVnKrYe0OzFVDnGY8UySI0oD4eA3a3lwNseVIWUZmSicT9wlGXgJgE9vulgc/f+2HDr3qAigKpjTiq6wzqfo2UYTUpGPaDgJKRL7dpiYEZOYzYENkG0JUqPMz1WtleTTi1GyMTU2CgRGy9qzpiGaYhQNvJClA2YQdIkzXWicsShwkLfJZz5pzhVgzM14tjc7LsYW08EO2sqKcCYrMYUnWFsi8Lu7uzBREAV5WLfmZ7LVSRRGUZQ431a2wSo9ODpfP33/Xi/+K1AYqZP8usq2NZKgrLMKA6i0K4a0zWG8lW9/MiK1neeLXbhjLAFRAEmJ1UB1gadGmO12ulkBhCVbANm9egnxLWdvcUAJsRwlIde34G8XWCrPUuKJf5VaAE/oHwpkoOt53Nt+If4BSOML56rKdZJAAAAAElFTkSuQmCC" /></a
              ><a
                class="social_link"
                href="https://crosswise.medium.com/"
                target="_blank"
                ><img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAATCAYAAACdkl3yAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKySURBVHgBdVTNbhMxEJ5xvGtv0krhCRokDiBRqTwBgVslBOUJ0iMHDoC4t+UBaPsI5YoQICFxbPsEFHFACETDGaHmp0mTsuthxl5vKgKWdj0ef994Zjxj1MOXbdA1ygFA5wWCDF6DyDLLiPp/Dc/FH2hP3lFEEQUeIIoOKShFwapKjCBWOOTBE21p27e8Q57MSIwzlmAqiViaIKAL3gWRkEinAzsDCpT+BnrnZL6o896Vp7HsUNuB8UuSSJQ7rEw4aPG/FZCB75COmNyjcp8T0Ap2HWjDoUWuKvDtl7vXd2Rx5f2nNoP3SfIlXio4/rq6fEP2rr7+3CqSYp9UCFaxIWUGFvw3tJSMzPa1V9+XBPxtdfkgHZqu7Ru0vJ/208pbPdEdMzQtv9e3qAd1Kg0ZEM9M38Diz0ZzZfu4KQQ7yHa8njH1X43daCgNh1P8bC9FLeRZsjmCGjT174U1Vm0Vo3yvkS9sOuDcOLzHuiN/ABMBQ6p9WTgOz45TsqMEDM/mVIM+tZCN9bqAjh5f7iVjvWNGyZ4d65vRI3uWgnCEmw4T5qeksglgfaoomyDUpwgLZwDZVC3deXrSFlKTYHdxBFA/L28QRPYY8txz5I8vyivP/SbKbPOwblBtQ0hvNi/1rKt1silU9WUnigRf9zwUGTQLscq49LD74vniYedh/yOv2usPvFddNyGesVt5NJFakUJUoTq4ALS46IscqYvK3fJWc3ffFLUPCLUNRXTguGe5Zh5FQ2rsdk2i1vj0ldBznPsnnaH0qjdWXkRoXlSEVV/5zpEGxFjovul4LVx24Bl7FCOb6yecqTBcdHgBwgFYvQP+ldDZhRyFA6oXA2Orlyaheh9meS/bkHPUmPpOQgjxlUWGkVgZgdBW4Zkq8aUzkl/UunC3YW4Q/H/QnJxD3v0D7BJSiaO7DFYAAAAASUVORK5CYII=" /></a
              ><a class="social_link"
                ><img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN3SURBVHgBhVVNaBRJFH6vunvS486uPRdZ2UNa9riH1cOywsJOexB2T0n2tKDgCAo5+DODCCJIJog/oDB9UBRFJkEFTxpvooIdLwYUTA6eFOwcRFCwRychk8x0PV9Vd09iErWguuv91Fffe/1eNcL3BjUcu+04atm2oQk41PyWO66ndF7fcdpO7jAglQnI1Y7sSaTNrzHGSVjqjLY3D4XfBfxp9iEDyRpbnMQDKXXkBS+pRx2EFLVm/87RrwJuevG4IZlVZlFGxQpXHZswJe2EhGPvf/t77xrAX6am6iCgssxghVURQwoTFbr8ipjtRwZztY9E/832P6u9Lb/ef16WAhopCCXhpQx1pKTkiiD0QNKMzIGvXSV+SE4DNDqw49W/2wJTGaz5vpEkV4ylEFLQlB2qmCVJRyAOsmaQ5sRGoUyGxF4OUIzwKsCt1196EsSjLClJ3nqJSxMFIUsBS2XNWJ+XJicNQ+OT2GGaTdsDoUng8veDJgsOBzophbzLc5qVTUFihucA56zE9lk+2EXMAlG5hG1mbr6vP1EmJ0sRV58c/dn/o/5u67Pqpmn4cijZ315/605VN4d/nXtfJwmH1X5UeSb63bQX+hQWMbrGlLGpQZ4y2M4TURlimH5wuqh1LJf4teVBtTim5NyCOYFdrowsdBQg7EWAvJodwPwSwg8x1pX9n2ORm+tiwyJsZPRyMfpK51UiXfQbFtDPdwTlOwhqb74NIDZ05Yy9pMAAbFbyWjvfO1sMrS7tzfHMAC1JQ1ZMQ4Ff1P3MYP2KiJ3spb4lCM38ovk8iTcrZnR3H4i8GxeKgd2CIJ+zSuVKFOqcz1kDXTIm1HrXoU97cJGK0IuXH4ac1Kt9w58eca14vS9G1LTIqFy6UhgvD0cuF8Eg5xK4oKfH+KDhfS0vNug2F08RKKtUCq9e3rhFIxzc3ypBTMGqLwrcGQHPCY5glkVOBTkx4AC3qLfST5UtCVG+eK0w3qu9I7tbPlf/oZS/7hTJpyNmN40uNtIVAl/eKuznn7/543IvZ+PE/3MNRikvh55cC0omym6NDE+/iASMn7xVWHvbZOPUf/MjgqiWIKZtlrQXpVxVp3MZy4+cudHjtwv+yv3r3thnBiPX6hg1g4wSe7irzKFEOd4yC35tAtf8DtYFXDnqXuTYtp38U9p2sxrgN/8pnwHVeob+59T1jgAAAABJRU5ErkJggg==" /></a
              ><a
                class="social_link"
                href="https://t.me/crosswise_a"
                target="_blank"
                ><img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAPCAYAAAAGRPQsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAImSURBVHgBpZO9jtNAEMdn1s4HinNxJBokCsMLBJ1EBdIZGhokzBMkeYJLOhqUVHw151DQ3tEAHZwoqFByFUgUOZ4Ap6I4pPgQEXbs3WHsOOZOnKKgG2Wz9nr2N/P/r41wjigfvbdR4D2pq5aIoKvDf4Y5HpqwAU1A6dCMbOQ14qEEAa4Lufzpi62KsilF7PAmkwE+IvhAaPE1KYDNlTDr7dgUhtgmTXU4PwGk1SWqgS61bwqpz0CTGOrd2qz/I9PaHZvVktmIC2EfFNnw8+8z3uTFhbhd+V1qxEK6uGwF4TCZctj1F9+3SIscGVMTJXCVMudg4kfyO6YCuaD8gT6/uC011SukTiEtWOprDrv55MdQzdQWgMa7iTtAbgIwk3QAGrU/dy95N54e7ZCgzqLJtEraGyka5TA90F4K0jx+6ghAk4hzBZsrRP9jrzawO1PzzsPjXTmjFqUgQk6hpBrXBqGRB5mfp+Lug6nNk/0rAHfk1n2HQVDEIR98AzHrhICy5hKEv/+sVj8TdjJaDJorMeYsC1L1bFKiDRciKfGMYPTq+cbtUwdwVuiBfq0IZKV9UGbi4lx5iNRdlnuQ56+CVWc6gYjTa4Wwzy+5k0nL/1hsDhOrYBei6IoR8hxie7BXvV+eq24lQEoHr1cCxvvx4VowIwC/FOmtR2+MveT+8euaq4fR1UqIE4NBDJy47+r+Mn/tb/Nk7DhTE8NCj52bdD8Y7nL9D4Yi7bdOlPu/AAAAAElFTkSuQmCC" /></a
              ><a
                class="social_link"
                href="https://t.me/crosswise"
                target="_blank"
                ><img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANUSURBVHgBhVU9bBRXEJ55+3vGUe6UILnzXqpIiYRTIUWKsimSIkHI16VIcaSiSXJOkxSJvC7yI4GEXSBRGDA0NEicC6iQbpGQaJDsDtHAugEJIe3aB+a8d/uGee/tmjuw8NPtvtk3M9+b+d7MO4RDhk83Z2GQo5IHtVZymD0eCJLe+loAtQuU8/xZ14ZsScSzxBgkrA0+PnHlUMD6xo06fTR9mTRQqUKk0pAFFqk0JkhEgaey5rfxgYAzG72g8ESP7YNKo5Q6qrfyIDKIykKQiJ599tXSBOBM714gatBDgcF+BOPbEbyNzsESVrtKwtbT48e7+y6f3N68zBbtEoRMeiWGzpSXsJrLLVhh6NC/bepDM2l9kdmfXnsQwAsFppWoEUrQ0lU5lghlwELeQSkCqOghqvNBdViKhJs7Hbfvgdt3Qc3eC352XDRrHrnqm3Ve39u2d+0VJ3fChyc//8bd8bqlnh8f3F3/V4Vtuy/9Y2CoOaiEkATFIxytoAvx1HN3bmQbOwYKFQWIVSJQ/3L1yazt7TCgYcykbHjMuAaXfXt3JV5oZmH0uD70pxelVWzdX5hZViYc8ZzikAcoUJYYAEPbe2U1NLlSY2Y5jlp3o6NxFeJ3f6XzBcEiDGApjo7qkwyjNBSvlA/hREUwru3nmLH8oVnC+hS4l374Y3sdSd4Bgb/JAgJbUuvWv43NyncqF8ewKpuxzIYFZfbUEBKOeq4sEfVu8ptPTHSgABg5stn9r5GME1vbo9BIgknkVE0vkSMoERxht8a9zzPUcjYeGtlnmWfq/t9IfjqdhpOAGNRyQbWc0N/jb2U/hK3umcYmtk+ngQ3Wo4kT0x0hVEVuc78uS0GRRbCGe8XSACCzfSutSnt/hmJp9UIj0gi//Nw/xzAdeO9QXpiQlDEIaI9rJFAC6IbnL9a2NGCnndadwtpgbmeh7DjFuOTdEaubRpNMukJg8pqSQsyfvXpkHcbX//wxDVxyepxv8CZ13aiaCqLq1qjwTO0WFvz+z7Xp5Td5jI1oPg0c4Swye22DWJaEKQEqY1Wdrsp4q7Do1N/XP4gniTlgnDnRD9mlzYd1klEaE0qkWCKs960ja1EXM3iH6UPG6vc0O5QD858y8LOF+F2Q8fEapPyFs/6otUkAAAAASUVORK5CYII="
              /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="footer_section">
      <div class="container">
        <div class="footer_bar">
          <div class="footer_bar_icon">
            <img
              src="@/assets/images/crosswise/logo-light-theme-2.png"
              class="nav_logo"
              id="crosswise_logo"
            />
            <div class="footer_bar_connections"></div>
          </div>
          <div class="footer_bar_links">
            <div class="group_links">
              <div class="title">MEDIA</div>
              <div class="links">
                <a
                  class="link-item"
                  href="/static/media/Crosswise_Litepaper_Final.cccd7f14.pdf"
                  target="_blank"
                  >Litepaper</a
                ><a
                  class="link-item"
                  href="/static/media/Crosswise_Pitch_Deck_1.2.2e182ee4.pdf"
                  target="_blank"
                  >Pitchdeck</a
                >
              </div>
            </div>
            <div class="group_links">
              <div class="title">LEARN</div>
              <div class="links">
                <a
                  class="link-item"
                  href="https://crosswise.gitbook.io/crosswise/"
                  target="_blank"
                  >Gitbook</a
                ><a
                  class="link-item"
                  href="https://intercom.help/crosswise-f/en"
                  target="_blank"
                  >Support </a
                ><a
                  class="link-item"
                  href="https://crosswise.notion.site/Crosswise-ICO-Affiliate-Program-221dc5555eb8422b8210c03c952d1673"
                  target="_blank"
                  >Affiliate Program</a
                >
              </div>
            </div>
            <div class="group_links">
              <div class="title">FOLLOW</div>
              <div class="links">
                <a
                  class="link-item"
                  href="https://t.me/crosswise"
                  target="_blank"
                  >Telegram</a
                ><a
                  class="link-item"
                  href="https://discord.gg/4BuwxMz24J"
                  target="_blank"
                  >Discord</a
                ><a
                  class="link-item"
                  href="https://twitter.com/crosswisefi"
                  target="_blank"
                  >Twitter</a
                ><a
                  class="link-item"
                  href="https://crosswise.medium.com/"
                  target="_blank"
                  >Medium</a
                ><a
                  class="link-item"
                  href="https://www.instagram.com/crosswisedefi/"
                  target="_blank"
                  >Instagram</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="copyright">
          <div class="copyrightyear">
            © 2021 Crosswise, a SublimeMinds Brand
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {},
  components: {},
};
</script>

<style>
@import url("../assets/css/main.f3557dda.chunk.css");
@import url("../assets/css/2.203bdaad.chunk.css");
</style>