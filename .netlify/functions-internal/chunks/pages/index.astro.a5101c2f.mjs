import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderSlot, m as maybeRenderHead, f as renderComponent } from '../astro.10efa794.mjs';
import 'html-escaper';
/* empty css                           */import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';

const $$Astro$7 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="description" content="Digital amazonite">
		<meta name="viewport" content="width=device-width">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
        <meta name="description" content="Digital Amazoniteis a passionate organization dedicated to bridging the digital skills gap for female undergraduate entrepreneurs across Nigeria. ">
		<title>${title}</title>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css">
	${renderHead($$result)}</head>
	<body>
		${renderSlot($$result, $$slots["default"])}
	</body></html>`;
}, "C:/Users/David/Desktop/amazonite/src/layouts/Layout.astro");

const Logo = "/_astro/hero-banner.84cf49c2.png";

const $$Astro$6 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead($$result)}<header class="astro-3EF6KSR2">
    <nav class="container astro-3EF6KSR2">
        <div class="nav-logo astro-3EF6KSR2">
            <a href="#" class="astro-3EF6KSR2">
                <img${addAttribute(Logo, "src")} alt="brand logo" class="astro-3EF6KSR2">
            </a>
        </div>
        <div class="nav-links astro-3EF6KSR2">
            <a href="#features" class="astro-3EF6KSR2">About</a>
            <a href="#testimonials" class="astro-3EF6KSR2">Testimonials</a>
        </div>
        <div class="nav-cta astro-3EF6KSR2">
            <a href="#" class="astro-3EF6KSR2">Blog</a>
            <a href="https://github.com/LaB-CH3/astrobrew" class="button button-primary astro-3EF6KSR2">Join us</a>
        </div>
    </nav>
</header>`;
}, "C:/Users/David/Desktop/amazonite/src/components/Header.astro");

const Showcase = "/_astro/hero-banner1.172cb322.png";

const $$Astro$5 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead($$result)}<section class="product-hero astro-BBE6DXRZ">
    <div class="container astro-BBE6DXRZ">
       <div class="row astro-BBE6DXRZ">
           <div class="one-half column astro-BBE6DXRZ">
              <div class="d-cell astro-BBE6DXRZ">
               <h1 class="h1-title astro-BBE6DXRZ">Become a <span class="astro-BBE6DXRZ">Digital Amazononite</span></h1>
               <div class="content astro-BBE6DXRZ">
                   <p class="astro-BBE6DXRZ">Equip yourself with the digital skills to thrive in today's economy.</p>
                   <a href="https://github.com/LaB-CH3/astrobrew" class="button button-primary lg astro-BBE6DXRZ">Get started today</a>
               </div>
              </div>
           </div>
           <div class="one-half column hero-media astro-BBE6DXRZ">
               <img${addAttribute(Showcase, "src")} class="u-full-width astro-BBE6DXRZ" alt="Hero illustrator">
           </div>
       </div>
    </div>
   </section>`;
}, "C:/Users/David/Desktop/amazonite/src/components/Hero.astro");

const FeatureOne = "/_astro/object-one.558ffc97.svg";

const FeatureTwo = "/_astro/object-two.b838c338.svg";

const FeatureThree = "/_astro/object-three.7f93e264.svg";

const $$Astro$4 = createAstro();
const $$Features = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Features;
  return renderTemplate`${maybeRenderHead($$result)}<section class="solutions astro-VNIVFUH2" id="features">
    <div class="container astro-VNIVFUH2">
      
        <div class="row astro-VNIVFUH2">
            <div class="sol-wrap one-third column astro-VNIVFUH2">
                <div class="sol-media m-margin astro-VNIVFUH2">
                    <img${addAttribute(FeatureOne, "src")} alt="Prospect" class="astro-VNIVFUH2">
                </div>
                <h3 class="h3-title astro-VNIVFUH2">Learning</h3>
                <p class="astro-VNIVFUH2">Develop essential digital skills to grow your business online.</p>
            </div>
             <div class="sol-wrap one-third column astro-VNIVFUH2">
                <div class="sol-media  m-margin astro-VNIVFUH2">
                    <img${addAttribute(FeatureThree, "src")} alt="Automation" class="astro-VNIVFUH2">
                </div>
                <h3 class="h3-title astro-VNIVFUH2">Networking</h3>
                <p class="astro-VNIVFUH2">Meet and form friendships with other passionate entreprenuers and grow your career</p>
            </div>
            <div class="sol-wrap one-third column astro-VNIVFUH2">
                <div class="sol-media m-margin astro-VNIVFUH2">
                    <img${addAttribute(FeatureTwo, "src")} alt="Marketing" class="astro-VNIVFUH2">
                </div>
                <h3 class="h3-title astro-VNIVFUH2">Support</h3>
                <p class="astro-VNIVFUH2">Receive expert mentorship.</p>
            </div>
           
        </div>
    </div>
</section>`;
}, "C:/Users/David/Desktop/amazonite/src/components/Features.astro");

const FinalCtaa = "/_astro/cta.e83a2cb0.png";

const $$Astro$3 = createAstro();
const $$HowToUse = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$HowToUse;
  const features = ["Learn practical digital skills", "Gain entrepreneurial confidence", "Transform your business journey"];
  return renderTemplate`${maybeRenderHead($$result)}<section class="product-defined astro-5FOL4UCW">
    <div class="container astro-5FOL4UCW">
         <div class="row product-brief-items astro-5FOL4UCW">
            <div class="brief-media center one-half column astro-5FOL4UCW">
                <img${addAttribute(FinalCtaa, "src")} alt="Showcase mockup" class="astro-5FOL4UCW">
            </div>
            <div class="brief-tab one-half column astro-5FOL4UCW">
                <h3 class="h1-title astro-5FOL4UCW">Bridge the Gap, Empower Your Future</h3>
                <p class="m-paragraph m-margin astro-5FOL4UCW">At Digital Amazonite, we empower female undergraduates with the skills and confidence to thrive digitally.</p>
                <ol class="ro astro-5FOL4UCW">
                    ${features.map((el, index) => renderTemplate`<li class="astro-5FOL4UCW"><span class="astro-5FOL4UCW">${index + 1}</span> <span class="astro-5FOL4UCW">${el}</span></li>`)}
                </ol>
                <br class="astro-5FOL4UCW">
                <a href="https://github.com/LaB-CH3/astrobrew" class="button button-primary lg astro-5FOL4UCW">Register for free</a>
            </div>
           
        </div>
    </div>
</section>`;
}, "C:/Users/David/Desktop/amazonite/src/components/HowToUse.astro");

const TestimonialImage1 = "/_astro/esther.7f27046c.jpeg";

const $$Astro$2 = createAstro();
const $$FinalCta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FinalCta;
  return renderTemplate`${maybeRenderHead($$result)}<section class="fine-section padded astro-NQZR7C5X" id="testimonials">
    <div class="container astro-NQZR7C5X">
        <div class="testimony astro-NQZR7C5X">
            <div class="flex astro-NQZR7C5X">
                <div class="customer-pic astro-NQZR7C5X">
                    <div class="circular-image astro-NQZR7C5X">
                        <img${addAttribute(TestimonialImage1, "src")} class="astro-NQZR7C5X">
                    </div>
                </div>
                <div class="customer-testimony astro-NQZR7C5X">
                    <h4 class="h3-title astro-NQZR7C5X">"Digital Amazonite's training program transformed my professional growth. I gained practical skills in Graphics Designing, Content Creation, Business Branding, and Digital Marketing. I highly recommend their programs to anyone seeking to enhance their skills and stay ahead in the industry."</h4>
                    <p class="astro-NQZR7C5X">Adeleke Esther, Founder @Beadful</p>
                </div>
            </div>
        </div>
    </div>
</section>`;
}, "C:/Users/David/Desktop/amazonite/src/components/FinalCta.astro");

const Start = "/_astro/start.e331e478.svg";

const $$Astro$1 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  const creator = `https://instagram.com/codetonero/`;
  const links = [
    { title: "Help", link: creator },
    { title: "FAQ", link: creator },
    { title: "Privacy", link: creator },
    { title: "Discord", link: creator }
  ];
  return renderTemplate`${maybeRenderHead($$result)}<footer class="astro-SZ7XMLTE">
    <div class="container astro-SZ7XMLTE">
      <div class="flex astro-SZ7XMLTE">
        ${links.map((item) => renderTemplate`<a${addAttribute(item.link, "href")} target="_blank" class="astro-SZ7XMLTE">${item.title}</a>`)}      
      </div>
      <div class="center astro-SZ7XMLTE">
        <a href="https://github.com/LaB-CH3/astrobrew" class="astro-SZ7XMLTE">
          <img${addAttribute(Start, "src")} alt="" class="astro-SZ7XMLTE">
        </a>
      </div>
    </div>
</footer>`;
}, "C:/Users/David/Desktop/amazonite/src/components/Footer.astro");

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Digital Amazonite | Upskilling femaile entrepreneurs" }, { "default": ($$result2) => renderTemplate`
	${renderComponent($$result2, "Header", $$Header, {})}
	${renderComponent($$result2, "Hero", $$Hero, {})}
	${renderComponent($$result2, "Features", $$Features, {})}
	${renderComponent($$result2, "HowToUse", $$HowToUse, {})}
	${renderComponent($$result2, "FinalCta", $$FinalCta, {})}
	${renderComponent($$result2, "Footer", $$Footer, {})}
` })}`;
}, "C:/Users/David/Desktop/amazonite/src/pages/index.astro");

const $$file = "C:/Users/David/Desktop/amazonite/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
