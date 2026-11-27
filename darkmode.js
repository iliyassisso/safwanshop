(() => {
  const style = document.createElement('style');
  style.textContent = `
    html.dark-mode{color-scheme:dark;--ink:#edf0e9;--muted:#b5b9af;--paper:#171b18;--white:#222824;--green:#82ad8b;--green2:#658f70;--lime:#343d32;--line:#39423b;--shadow:0 18px 55px #0005}
    html.dark-mode body{background:var(--paper);color:var(--ink)}
    html.dark-mode header,html.dark-mode .showcase-banner,html.dark-mode .hero-grid,html.dark-mode .benefit-icon,html.dark-mode .feature,html.dark-mode .feature-copy{background-color:#242b26;color:var(--ink);border-color:#39433b}
    html.dark-mode .topline{background:#202721}html.dark-mode .links,html.dark-mode .links a{color:#e2e9df}html.dark-mode .links a{background:#29312b;border-color:#465248}
    html.dark-mode .showcase-products,html.dark-mode .showcase-product,html.dark-mode .product-card,html.dark-mode .cart-dialog,html.dark-mode .search-dialog,html.dark-mode .search-result,html.dark-mode .search-field input,html.dark-mode .keep-shopping,html.dark-mode .cart-close,html.dark-mode .search-close{background:#222824;color:var(--ink);border-color:#3b453d}
    html.dark-mode .product-info h3,html.dark-mode .section-head h2,html.dark-mode .cart-head h2,html.dark-mode .search-head h2,html.dark-mode .feature-copy h2,html.dark-mode .showcase-copy h2,html.dark-mode .showcase-copy p,html.dark-mode .hero-copy p{color:var(--ink)}
    html.dark-mode .product-info .type,html.dark-mode .section-head p,html.dark-mode .search-hint,html.dark-mode .showcase-windowbar span,html.dark-mode .footer-about,html.dark-mode .footer-col,html.dark-mode .copyright{color:#b5b9af}
    html.dark-mode .tag,html.dark-mode .image-note{background:#222824ed;color:#e7eee5}html.dark-mode .benefit{border-color:#39423b}html.dark-mode footer{background:#1d231f;color:var(--ink);border-color:#39423b}html.dark-mode .showcase-banner{background-color:#242b26}
    html.dark-mode .search-field input:focus{background:#29312b}html.dark-mode .search-overlay,html.dark-mode .cart-overlay{background:#000b}
    @media(max-width:700px){body:before{content:"";position:fixed;z-index:0;inset:0 0 auto;height:env(safe-area-inset-top,0px);background:var(--green);pointer-events:none}.topline{margin-top:0;padding-top:9px}}.nav{direction:ltr!important}.brand,.footer-brand{flex-direction:row-reverse!important}.navtools{display:flex;align-items:center;gap:12px;direction:ltr}.iconbtn{width:42px;height:42px;border:1px solid var(--line);border-radius:50%;background:#ffffff70;color:var(--ink);display:grid;place-items:center;position:relative;cursor:pointer;transition:transform .2s,background .2s,color .2s,box-shadow .2s}.iconbtn:hover{transform:translateY(-3px);background:var(--green);border-color:var(--green);color:#fff;box-shadow:0 7px 15px #315c4535}.cartbtn,.searchbtn,.themebtn{width:50px;height:50px}.iconbtn svg{width:25px;height:25px;display:block}.count{position:absolute;top:-3px;left:-4px;min-width:18px;height:18px;padding:0 4px;border-radius:9px;background:#db7952;color:white;font:11px 'DM Sans',sans-serif;display:grid;place-items:center}.brand-mark{width:34px;height:34px;flex:none;transition:transform .25s,filter .25s}.brand-wordmark{display:flex;flex-direction:column;align-items:flex-start;gap:3px;min-width:max-content;line-height:.85}.brand-wordmark strong{display:block;font:700 23px/.86 'Playfair Display',serif!important;letter-spacing:.075em!important;background:linear-gradient(115deg,#203a2b,#527a4e 60%,#b17a42);-webkit-background-clip:text;background-clip:text;color:transparent!important;transition:letter-spacing .3s,filter .3s}.brand-wordmark small{display:block;font:700 9px/1 'DM Sans',sans-serif!important;letter-spacing:.34em!important;color:var(--green)!important;margin-left:2px;transition:letter-spacing .3s}.brand:hover .brand-wordmark strong{letter-spacing:.13em!important;filter:drop-shadow(0 4px 7px #315c4545)}.brand:hover .brand-wordmark small{letter-spacing:.46em!important}.brand:hover .brand-mark{transform:rotate(-5deg) scale(1.08);filter:drop-shadow(0 5px 7px #315c4560)}@media(max-width:650px){.navtools{gap:5px}.navtools .iconbtn{width:42px;height:42px}.nav{position:relative}.nav > .brand{position:absolute;right:0;left:auto;top:8px;transform:none!important}header > .nav .mobilemenu{position:absolute;left:0;right:auto;top:8px}header.wrap.nav > .brand,header.nav > .brand{font-size:19px!important;flex:0 1 44%;max-width:44%;min-width:0;gap:4px!important;white-space:nowrap;transform:none!important}.brand-wordmark{min-width:0}.brand-wordmark strong{font-size:15px!important;letter-spacing:.045em!important}.brand-wordmark small{font-size:7.5px!important;letter-spacing:.24em!important}.brand-mark{width:27px!important;height:27px!important}header > .nav{display:flex;flex-wrap:wrap;align-items:center;gap:6px;height:auto!important;min-height:0;padding-top:6px;padding-bottom:6px}.nav > .nav-language-tools{display:flex!important;order:0!important;flex:1 0 100%;align-items:center;justify-content:center;gap:5px;min-width:0}.nav > .nav-center{display:none}.nav-language-tools > .language-control{order:0;flex:0 0 auto;justify-content:center}.nav > .brand{position:static;order:1;margin-inline-end:auto;transform:none!important}.nav > .mobilemenu{position:static!important;order:2;left:auto;right:auto;top:auto;margin-inline-start:0}.nav-language-tools > .navtools{order:1;flex:0 0 auto;justify-content:center;gap:5px}header > .nav > .brand{position:static;right:auto;left:auto;top:auto}header > .nav > .mobilemenu{position:static!important;left:auto;right:auto;top:auto}header.wrap.nav,header.nav{height:auto!important;min-height:0;display:flex;flex-wrap:wrap;align-items:center;gap:6px;padding-top:7px;padding-bottom:7px}header.wrap.nav > .nav-language-tools,header.nav > .nav-language-tools{display:flex!important;order:0!important;flex:1 0 100%;align-items:center;justify-content:center;gap:5px;min-width:0}header.wrap.nav > .brand,header.nav > .brand{position:static!important;order:1;margin-inline-end:auto;flex:0 1 44%;max-width:44%;transform:none!important}header.wrap.nav > .back,header.nav > .back{position:static!important;order:2;margin-inline-start:auto;flex:0 1 52%;max-width:52%;transform:none!important;white-space:nowrap;padding:7px 8px;font-size:12px}.nav-language-tools > .language-control{order:0;flex:0 0 auto;justify-content:center}.nav-language-tools > .navtools{order:1;flex:0 0 auto;justify-content:center;gap:5px}}@media(max-width:650px){header > .nav > .brand,header.wrap.nav > .brand,header.nav > .brand{transform:translateX(12px)!important}}@media(max-width:380px){.nav-language-tools{gap:3px}.nav-language-tools .language-menu{gap:2px}.nav-language-tools .language-menu button{width:44px;min-height:42px;font-size:9px}.nav-language-tools .flag-circle{width:22px;height:22px}.navtools{gap:3px}.navtools .iconbtn{width:36px;height:36px}}
  `;
  style.textContent += `
    @media(max-width:650px){.nav.mobile-nav-open{z-index:30}.nav.mobile-nav-open>.nav-center{display:flex;position:absolute;top:calc(100% + 5px);left:0;right:0;transform:none;z-index:60;justify-content:stretch}.nav.mobile-nav-open .links{display:flex;flex-direction:column;width:100%;gap:5px;padding:9px;border:1px solid var(--line);border-radius:12px;background:var(--white);box-shadow:0 12px 30px #20251f24}.nav.mobile-nav-open .links a{display:block;width:100%;padding:11px 14px;border:1px solid var(--line);border-radius:8px;background:var(--white);color:var(--ink);text-align:start}.nav.mobile-nav-open .links a:hover{background:var(--green);border-color:var(--green);color:white}.nav.mobile-nav-open .mobilemenu{background:var(--green);border-color:var(--green);color:white}}
  `;
  style.textContent += `
    @media(min-width:701px){header.wrap.nav,header.nav{width:100%;max-width:none;margin:0;padding-inline:max(calc((100% - 1050px)/2),18px)}}
    @media(max-width:650px){header>.nav{height:auto!important;min-height:56px!important;flex-wrap:nowrap!important;align-items:center;justify-content:space-between;gap:3px!important;padding:4px 0!important}header>.nav>.nav-language-tools{display:flex!important;order:1!important;flex:0 1 auto!important;align-items:center;gap:3px!important;min-width:0}header>.nav>.brand{position:static!important;order:0!important;flex:0 0 auto!important;max-width:none!important;margin:0!important;gap:2px!important;transform:none!important}header>.nav>.mobilemenu{position:static!important;order:2!important;left:auto!important;right:auto!important;top:auto!important;flex:0 0 26px!important;width:26px!important;height:26px!important;margin:0!important;font-size:14px!important}header>.nav>.nav-center{display:none}.nav-language-tools>.language-control{flex:0 0 auto!important}.nav-language-tools .language-menu{gap:2px!important}.nav-language-tools .language-menu button{width:32px!important;min-height:39px!important;padding:1px 0!important;gap:2px!important;font-size:8px!important}.nav-language-tools .flag-circle{width:20px!important;height:20px!important}.nav-language-tools>.navtools{flex:0 0 auto!important;gap:3px!important}.nav-language-tools .navtools .iconbtn{width:26px!important;height:26px!important}.nav-language-tools .navtools .iconbtn svg{width:15px!important;height:15px!important}.nav-language-tools .navtools .count{min-width:14px;height:14px;font-size:9px;top:-3px;left:-3px}.brand-mark{width:27px!important;height:27px!important}.brand-wordmark strong{font-size:15px!important;letter-spacing:.035em!important}.brand-wordmark small{font-size:7.5px!important;letter-spacing:.2em!important}}
    @media(max-width:380px){header>.nav{gap:2px!important}.nav-language-tools{gap:2px!important}.nav-language-tools .language-menu button{width:29px!important;min-height:36px!important;font-size:7px!important}.nav-language-tools .flag-circle{width:18px!important;height:18px!important}.nav-language-tools .navtools{gap:2px!important}.nav-language-tools .navtools .iconbtn{width:23px!important;height:23px!important}.nav-language-tools .navtools .iconbtn svg{width:14px!important;height:14px!important}.brand-mark{width:25px!important;height:25px!important}.brand-wordmark strong{font-size:14px!important}.brand-wordmark small{font-size:6.5px!important}header>.nav>.mobilemenu{flex-basis:24px!important;width:24px!important;height:24px!important}}
  `;
  style.textContent += `
    @media(max-width:650px){header.wrap.nav.product-page-nav{flex-wrap:nowrap!important;justify-content:space-between;gap:4px!important;padding-inline:0}header.wrap.nav.product-page-nav>.brand{position:static!important;order:0!important;flex:0 0 auto!important;max-width:none!important;min-width:0;margin:0!important;gap:2px!important;transform:none!important}header.wrap.nav.product-page-nav>.nav-language-tools{display:flex!important;order:1!important;flex:0 1 auto!important;width:auto!important;min-width:0;justify-content:flex-end;gap:2px!important}.product-page-nav .language-menu{gap:1px!important}.product-page-nav .language-menu button{width:28px!important;min-height:36px!important;padding:0!important;gap:1px!important;font-size:7px!important}.product-page-nav .flag-circle{width:18px!important;height:18px!important}.product-page-nav .navtools{gap:2px!important}.product-page-nav .navtools .iconbtn{width:23px!important;height:23px!important}.product-page-nav .navtools .iconbtn svg{width:14px!important;height:14px!important}.product-page-nav .navtools .count{min-width:12px;height:12px;font-size:8px;top:-3px;left:-3px}.product-page-nav .brand-mark{width:24px!important;height:24px!important}.product-page-nav .brand-wordmark strong{font-size:13px!important;letter-spacing:.025em!important}.product-page-nav .brand-wordmark small{font-size:6px!important;letter-spacing:.16em!important}}
  `;
  style.textContent += `
    @media(max-width:650px){
      header .nav{position:relative!important}header.nav{position:sticky!important;top:0!important}
      header .nav>.nav-language-tools,header.nav>.nav-language-tools{display:flex!important;position:static!important;order:1!important;flex:1 1 auto!important;width:auto!important;max-width:none!important;min-width:0!important;justify-content:flex-end!important;gap:7px!important}
      header .nav>.nav-language-tools>.language-control,header.nav>.nav-language-tools>.language-control{position:absolute!important;left:50%!important;top:calc(50% + 8px)!important;transform:translate(-50%,-50%)!important;z-index:25!important;margin:0!important}
      header .nav>.nav-language-tools>.language-control .language-menu,header.nav>.nav-language-tools>.language-control .language-menu{gap:8px!important}
      header .nav>.nav-language-tools>.navtools,header.nav>.nav-language-tools>.navtools{margin-left:auto!important;flex:0 0 auto!important}
      header .nav>.brand,header.nav>.brand{transform:translate(-18px,6px)!important}
      header.nav.checkout-page-nav{direction:ltr!important;display:grid!important;grid-template-columns:auto minmax(0,1fr) auto!important;grid-template-rows:48px!important;align-items:center!important;justify-content:stretch!important;gap:4px 5px!important;height:auto!important;min-height:0!important;padding:7px 0!important}
      header.nav.checkout-page-nav>.brand{grid-column:1!important;grid-row:1!important;position:static!important;order:0!important;flex:none!important;max-width:none!important;min-width:0!important;margin:0!important;transform:none!important;justify-self:start!important}
      header.nav.checkout-page-nav>.nav-language-tools{display:contents!important}
      header.nav.checkout-page-nav>.nav-language-tools>.navtools{grid-column:3!important;grid-row:1!important;justify-self:end!important;gap:3px!important;margin:0!important}
      header.nav.checkout-page-nav>.nav-language-tools>.language-control{grid-column:2!important;grid-row:1!important;position:static!important;left:auto!important;right:auto!important;top:auto!important;transform:none!important;justify-self:center!important;align-self:center!important;margin:0!important}
      header.nav.checkout-page-nav>.back{grid-column:1/-1!important;grid-row:2!important;position:static!important;order:3!important;justify-self:center!important;align-self:center!important;margin:0!important;transform:none!important;flex:none!important;max-width:none!important;white-space:nowrap}
      .checkout-page-nav .language-menu{gap:2px!important}.checkout-page-nav .language-menu button{width:34px!important;min-height:40px!important;padding:1px 0!important;font-size:8px!important}.checkout-page-nav .flag-circle{width:22px!important;height:22px!important}.checkout-page-nav .navtools{gap:3px!important}.checkout-page-nav .navtools .iconbtn{width:34px!important;height:34px!important}.checkout-page-nav .navtools .iconbtn svg{width:18px!important;height:18px!important}
      header .nav.success-page-nav>.nav-language-tools>.language-control,header.nav.success-page-nav>.nav-language-tools>.language-control{top:22px!important}
      header .nav .navtools .iconbtn,header.nav .navtools .iconbtn{position:relative!important;top:8px!important;width:32px!important;height:32px!important;background:#e7f0e9!important;border:1px solid #d6e4d9!important;border-radius:14px!important;box-shadow:0 3px 10px #315c4512!important}
      header .nav .navtools .iconbtn svg,header.nav .navtools .iconbtn svg{width:18px!important;height:18px!important}
      header .nav>.mobilemenu,header.nav>.mobilemenu{position:relative!important;top:4px!important;width:32px!important;height:32px!important;background:#e7f0e9!important;border:1px solid #d6e4d9!important;border-radius:14px!important;box-shadow:0 3px 10px #315c4512!important}
      @media(max-width:380px){header .nav .navtools,header.nav .navtools{gap:3px!important}header .nav .navtools .iconbtn,header.nav .navtools .iconbtn{width:27px!important;height:27px!important;border-radius:10px!important}header .nav .navtools .iconbtn svg,header.nav .navtools .iconbtn svg{width:16px!important;height:16px!important}header .nav>.mobilemenu,header.nav>.mobilemenu{width:27px!important;height:27px!important;min-width:27px!important;flex-basis:27px!important;border-radius:10px!important}}
    }
  `;
  style.textContent += `
    .nav .brand{background:#e7f0e9!important;border:1px solid #d6e4d9!important;border-radius:14px!important;padding:5px 10px!important;box-shadow:0 3px 12px #315c4512!important;transition:background .22s,border-color .22s,box-shadow .22s,transform .22s!important}
    .nav .brand:hover{background:#dcebe0!important;border-color:#bdd3c2!important;box-shadow:0 7px 16px #315c4522!important}
    .nav .language-menu button{background:#e7f0e9!important;border-color:#d6e4d9!important;transition:background .2s,border-color .2s,transform .2s,box-shadow .2s!important}
    .nav .language-menu button:hover,.nav .language-menu button[aria-pressed="true"]{background:#d8e8dc!important;border-color:#bcd2c1!important}
    .nav .language-menu button:hover{box-shadow:0 6px 14px #315c4525!important}
    @media(max-width:650px){.nav .brand{padding:4px 7px!important;border-radius:11px!important}}
  `;
  style.textContent += `
    header.shared-store-navigation .nav-center{display:flex;align-items:center;justify-content:center;flex:1;min-width:0;order:1}
    header.shared-store-navigation .nav-center .links{display:flex;align-items:center;justify-content:center;gap:7px;white-space:nowrap}
    header.shared-store-navigation .nav-center .links a{padding:9px 11px;border:1px solid #c6d4c3;border-radius:9px;background:#ffffff80;color:#3f4f42;text-decoration:none;font-weight:600;transition:background .2s,border-color .2s}
    header.shared-store-navigation .nav-center .links a:hover{background:#edf1e7;border-color:#bcd2c1}
    header.shared-store-navigation>.mobilemenu{display:none}
    header.shared-store-navigation>.nav-language-tools{order:2}
    @media(max-width:1050px){header.shared-store-navigation .nav-center .links{gap:3px}header.shared-store-navigation .nav-center .links a{padding:8px 7px;font-size:13px}}
    @media(max-width:650px){header.shared-store-navigation{position:sticky!important;top:0!important;z-index:1000!important;display:flex!important;flex-wrap:nowrap!important;align-items:center!important;justify-content:space-between!important;gap:3px!important;min-height:65px!important;height:auto!important;padding:4px 0!important}header.shared-store-navigation>.brand{order:0!important}header.shared-store-navigation>.nav-language-tools{order:1!important}header.shared-store-navigation>.mobilemenu{display:grid!important;position:relative!important;order:2!important;flex:0 0 32px!important;width:32px!important;height:32px!important;top:8px!important;place-items:center!important;cursor:pointer}header.shared-store-navigation>.nav-center{display:none!important;position:absolute!important;left:0!important;right:0!important;top:100%!important;z-index:70!important;flex:none!important;padding:10px!important;background:#e9eee3!important;border:1px solid #d6e4d9!important;border-radius:0 0 14px 14px!important;box-shadow:0 12px 25px #203a2b20!important}header.shared-store-navigation.mobile-nav-open>.nav-center{display:block!important}header.shared-store-navigation .nav-center .links{display:flex!important;flex-direction:column!important;align-items:stretch!important;gap:5px!important;white-space:normal!important}header.shared-store-navigation .nav-center .links a{display:block!important;padding:10px 12px!important;font-size:14px!important;text-align:right!important;background:#ffffffb8!important}header.shared-store-navigation .nav-center .links a:hover{background:#dcebe0!important}}
  `;
  style.textContent += `
    @media(max-width:650px){.nav.home-nav.mobile-nav-open>.nav-center{display:block!important;position:absolute!important;top:100%!important;left:0!important;right:0!important;z-index:70!important;padding:10px!important;background:#e9eee3!important;border:1px solid #d6e4d9!important;border-radius:0 0 14px 14px!important;box-shadow:0 12px 25px #203a2b20!important}.nav.home-nav.mobile-nav-open>.nav-center>.links{display:flex!important;position:static!important;flex-direction:column!important;align-items:stretch!important;gap:5px!important;min-width:0!important;padding:0!important;border:0!important;background:transparent!important;box-shadow:none!important}.nav.home-nav.mobile-nav-open>.nav-center>.links a{display:block!important;padding:10px 12px!important;text-align:right!important;background:#ffffffb8!important;border:1px solid #d6e4d9!important;border-radius:9px!important}}
  `;
  style.textContent += `
    @media(max-width:650px){.nav.shared-store-navigation{width:min(100% - 16px,500px)!important;display:grid!important;grid-template-columns:minmax(0,1fr) auto auto auto!important;grid-template-rows:56px!important;align-items:center!important;justify-content:stretch!important;column-gap:4px!important;padding:4px 0!important}.nav.shared-store-navigation>.brand{grid-column:1!important;grid-row:1!important;justify-self:start!important;min-width:0!important;max-width:none!important;transform:translate(-8px,6px)!important;gap:3px!important}.nav.shared-store-navigation .brand-mark{width:28px!important;height:28px!important}.nav.shared-store-navigation .brand-wordmark strong{font-size:18px!important}.nav.shared-store-navigation .brand-wordmark small{font-size:7px!important;letter-spacing:.16em!important}.nav.shared-store-navigation>.nav-language-tools{display:contents!important}.nav.shared-store-navigation .language-control{grid-column:2!important;grid-row:1!important;position:static!important;left:auto!important;right:auto!important;top:auto!important;transform:none!important;justify-self:center!important;align-self:center!important;margin:0!important}.nav.shared-store-navigation .language-menu{gap:1px!important}.nav.shared-store-navigation .language-menu button{width:28px!important;min-height:36px!important;padding:0!important;gap:1px!important;font-size:7px!important}.nav.shared-store-navigation .flag-circle{width:20px!important;height:20px!important}.nav.shared-store-navigation .navtools{grid-column:3!important;grid-row:1!important;justify-self:end!important;gap:3px!important;margin:0!important}.nav.shared-store-navigation .navtools .iconbtn{width:30px!important;height:30px!important}.nav.shared-store-navigation .navtools .iconbtn svg{width:17px!important;height:17px!important}.nav.shared-store-navigation>.mobilemenu{grid-column:4!important;grid-row:1!important;justify-self:end!important;top:8px!important;width:30px!important;height:30px!important;flex-basis:30px!important}.nav.shared-store-navigation>.nav-center{grid-column:1/-1!important;grid-row:2!important;top:100%!important}}
  `;
  style.textContent += `
    @media(max-width:650px){header .nav.shared-store-navigation>.language-control,header.nav.shared-store-navigation>.language-control{position:absolute!important;left:50%!important;right:auto!important;top:calc(50% + 8px)!important;transform:translate(-50%,-50%)!important;z-index:25!important;margin:0!important;grid-column:auto!important;grid-row:auto!important}}
  `;
  style.textContent += `
    @media(max-width:650px){header.nav.shared-store-navigation>.brand{transform:translate(-16px,14px)!important}}
  `;
  document.head.append(style);
  const saved = localStorage.getItem('safwanshop-theme');
  if (saved === 'dark') document.documentElement.classList.add('dark-mode');
  const icon = (dark) => dark
    ? '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/></svg>'
    : '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.2 15.1A8.5 8.5 0 0 1 8.9 3.8 8.7 8.7 0 1 0 20.2 15.1Z"/></svg>';
  window.toggleTheme = () => {
    const dark = document.documentElement.classList.toggle('dark-mode');
    localStorage.setItem('safwanshop-theme', dark ? 'dark' : 'light');
    const button = document.getElementById('themeToggle');
    if (button) button.innerHTML = icon(dark);
  };
  const button = document.getElementById('themeToggle');
  if (button) button.innerHTML = icon(document.documentElement.classList.contains('dark-mode'));
  try {
    const cart = JSON.parse(localStorage.getItem('safwanshop-cart') || '{}') || {};
    const quantity = Object.values(cart).reduce((sum, item) => sum + (Number(item?.qty) || 0), 0);
    const formatter = new Intl.NumberFormat(document.documentElement.lang === 'ar' ? 'ar-EG' : 'en');
    document.querySelectorAll('.navCartCount').forEach(count => { count.textContent = formatter.format(quantity); });
  } catch {}
  // Match the home navigation on product, checkout, and confirmation pages.
  const pageHeader=document.querySelector('header .nav')||document.querySelector('header');
  if(pageHeader&&pageHeader.classList.contains('home-nav'))pageHeader.classList.add('shared-store-navigation');
  if(pageHeader&&!pageHeader.classList.contains('home-nav')){
    pageHeader.classList.add('nav','wrap','home-nav','shared-store-navigation');
    pageHeader.classList.remove('product-page-nav','checkout-page-nav','success-page-nav');
    const nav=document.createElement('nav');nav.className='links';nav.setAttribute('aria-label','التنقل');
    nav.innerHTML='<a href="index.html#home">الرئيسية</a><a href="index.html#products">تسوّق الآن</a><a href="index.html#story">قصتنا</a><a href="index.html#contact">تواصل معنا</a>';
    const center=document.createElement('div');center.className='nav-center';center.append(nav);
    const oldBack=pageHeader.querySelector(':scope > .back');
    if(oldBack){oldBack.className='';oldBack.textContent='متابعة التسوق';nav.append(oldBack)}
    const languageGroup=pageHeader.querySelector(':scope > .nav-language-tools');
    pageHeader.insertBefore(center,languageGroup||pageHeader.firstChild);
    const menu=document.createElement('button');menu.className='iconbtn mobilemenu';menu.type='button';menu.setAttribute('aria-label','القائمة');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-controls','mobileLinks');menu.textContent='☰';
    nav.id='mobileLinks';pageHeader.append(menu);
    menu.addEventListener('click',()=>{const open=pageHeader.classList.toggle('mobile-nav-open');menu.setAttribute('aria-expanded',String(open))});
    nav.addEventListener('click',event=>{if(event.target.closest('a')){pageHeader.classList.remove('mobile-nav-open');menu.setAttribute('aria-expanded','false')}});
    document.addEventListener('click',event=>{if(!pageHeader.contains(event.target)){pageHeader.classList.remove('mobile-nav-open');menu.setAttribute('aria-expanded','false')}});
  }
  // Keep the language picker and action buttons as separate items in the shared header row.
  if(pageHeader){
    const languageGroup=pageHeader.querySelector(':scope > .nav-language-tools');
    if(languageGroup){
      const picker=languageGroup.querySelector('.language-control');
      const tools=languageGroup.querySelector('.navtools');
      if(picker)pageHeader.insertBefore(picker,languageGroup);
      if(tools)pageHeader.insertBefore(tools,languageGroup);
      languageGroup.remove();
    }
  }
})();









