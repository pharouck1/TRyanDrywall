export const company = {
  name: "Ryan Drywall LLC",
  owner: "Tim Francis Ryan",
  phone: "(413) 533-7862",
  phoneHref: "+14135337862",
  email: "Timothyryan1602@gmail.com",
  address: "17 North Liberty St",
  city: "Belchertown",
  region: "MA",
  postalCode: "01007",
  country: "US",
  experience: "25+ years",
  established: "2018",
  dotNumber: "3901761",
} as const;

export const services = [
  {
    title: "Drywall installation",
    description: "Clean, careful hanging for new rooms, additions, and full construction projects.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=960&q=85",
    alt: "Construction professional working on an interior project",
    icon: "panels",
  },
  {
    title: "Taping & finishing",
    description: "Thoughtful joint finishing and surface preparation for a smooth, ready-to-paint result.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=960&q=85",
    alt: "Bright finished interior with smooth walls",
    icon: "finish",
  },
  {
    title: "Drywall repair",
    description: "Repairs for damaged sheetrock, with careful blending into the surrounding surface.",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=960&q=85",
    alt: "Contractor measuring an interior wall",
    icon: "repair",
  },
  {
    title: "New construction",
    description: "Dependable drywall work for new builds, coordinated around the needs of your project.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=960&q=85",
    alt: "Modern building under construction",
    icon: "build",
  },
  {
    title: "Rehabilitation repairs",
    description: "Practical wall and ceiling repairs that help bring existing spaces back into shape.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=960&q=85",
    alt: "Renovated home interior with carefully finished walls",
    icon: "rehab",
  },
  {
    title: "Custom ceiling work",
    description: "A considered approach to ceiling details, transitions, and distinctive interior finishes.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=960&q=85",
    alt: "Refined interior with custom ceiling details",
    icon: "ceiling",
  },
] as const;

export const gallery = [
  {
    title: "Wall installation",
    category: "Installation",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85",
    alt: "Construction worker at an active interior job site",
    className: "gallery-tall",
  },
  {
    title: "A finished living space",
    category: "Finished interior",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    alt: "Sunlit living room with clean, finished walls",
    className: "",
  },
  {
    title: "Interior renovation",
    category: "Renovation",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
    alt: "Completed renovated interior with natural finishes",
    className: "",
  },
  {
    title: "Room finishing",
    category: "Finishing",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85",
    alt: "Finished home interior with bright, smooth walls",
    className: "",
  },
  {
    title: "New construction",
    category: "New construction",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85",
    alt: "Contemporary building and construction site",
    className: "gallery-wide",
  },
] as const;

export const processSteps = [
  { number: "01", title: "Contact us", description: "Tell us a little about the space and the work you have in mind." },
  { number: "02", title: "Discuss your project", description: "We’ll talk through your needs, timing, and project details." },
  { number: "03", title: "Receive your estimate", description: "Get a project estimate based on the scope of work discussed." },
  { number: "04", title: "Get the job done", description: "Move forward with a clear understanding of the work ahead." },
] as const;
