# Portfolio Components

This folder contains all reusable components for the portfolio website.

## Component Structure

```
components/
├── Navigation.tsx    # Fixed navigation bar with smooth scroll links
├── Hero.tsx          # Hero section with name, title, and CTA buttons
├── About.tsx         # About section with bio and quick facts
├── Skills.tsx        # Technical skills grid
├── SoftSkills.tsx    # Soft skills section
├── Education.tsx     # Education and certifications
├── Projects.tsx      # Featured projects showcase
├── Experience.tsx    # Work experience timeline
├── Contact.tsx       # Contact information and links
└── Footer.tsx        # Footer with copyright
```

## Usage

All components are imported and used in `app/page.tsx`:

```tsx
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
// ... other imports

export default function Home() {
  return (
    <div>
      <Navigation />
      <Hero />
      {/* ... other components */}
    </div>
  );
}
```

## Customization

- Update personal information in `app/constants/index.ts`
- Modify component data by editing the respective component files
- Add new components by creating new files and importing them in `page.tsx`

## Best Practices

- Keep components focused on a single responsibility
- Use TypeScript for type safety
- Extract reusable data to constants
- Maintain consistent styling with Tailwind CSS
