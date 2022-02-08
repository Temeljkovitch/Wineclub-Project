// Setting current year to the footer
const year = document.querySelector(".year");
year.textContent = new Date().getFullYear();

// Sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

// Fixing flexbox gap property that is missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// Making the mobile navigation work
const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

btnNav.addEventListener("click", function()
{
  header.classList.toggle("nav-open");
});

// Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function(link)
{
  link.addEventListener("click", function(event)
  {
    event.preventDefault();
    const href = link.getAttribute("href");

    // Scrolling back to the top
    if (href === "#")
    {
      window.scrollTo(
        {
          top: 0,
          behavior: "smooth",
        }
      )
    }
    // Scrolling to the other links
    if (href !== "#" && href.startsWith("#"))
    {
      const section = document.querySelector(href);
      section.scrollIntoView({ behavior: "smooth"});
    }
    // Closing mobile navigation
    if (link.classList.contains("main-nav-link"))
    {
      header.classList.toggle("nav-open");
    }
  });
});