# 🗽 NYC Trip Checklist

A beautiful, interactive checklist for planning your New York City trip, built with React, Next.js, and ShadCN UI.

## ✨ Features

### 📋 Comprehensive Checklist
- **Must-See Attractions**: Iconic NYC landmarks like Statue of Liberty, Empire State Building, Central Park
- **Museums**: World-class institutions including MoMA, Met, Guggenheim
- **Neighborhoods**: Diverse areas to explore from SoHo to Williamsburg
- **Food**: NYC's iconic eats - pizza, bagels, delis, and more
- **Optional Experiences**: Broadway shows, sports games, helicopter tours
- **Essentials to Pack**: Everything you need for your trip

### 🎨 Modern UI/UX
- **Dark Mode by Default**: Beautiful dark theme that's easy on the eyes, with light mode toggle
- **Theme Persistence**: Your theme preference is saved and restored across sessions
- **System Theme Detection**: Automatically respects your device's color scheme preference
- Clean, minimalist design using ShadCN UI components
- Responsive layout that works on mobile and desktop
- Tabbed interface for easy navigation between sections
- Visual progress tracking with badges
- Smooth hover effects and transitions

### 💾 Smart Features
- **Local Storage**: Your progress is automatically saved and persists across browser sessions
- **Theme Storage**: Your dark/light mode preference is remembered
- **Progress Tracking**: See how many items you've completed per section and overall
- **Reset Functionality**: Clear all selections with one click
- **Visual Feedback**: Checked items are struck through and grayed out
- **Accessible Design**: High contrast ratios and keyboard navigation support

### 📱 Mobile-First Design
- **Ultra-Responsive**: Optimized for phones, tablets, and all screen sizes
- **Touch-Friendly**: Large touch targets and gesture-friendly interactions
- **Smart Layout**: 2-column tabs on mobile, expanding to 6 columns on desktop
- **Adaptive Text**: Font sizes and spacing adjust based on screen size
- **Optimized Performance**: Smooth scrolling and transitions on all devices

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd nyc-checklist
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **UI Components**: ShadCN UI with dark mode support
- **Styling**: Tailwind CSS with CSS variables for theming
- **Icons**: Lucide React
- **Language**: TypeScript
- **State Management**: React useState with localStorage persistence
- **Theming**: Custom hook with system preference detection and persistence
- **Responsive Design**: Mobile-first approach with breakpoint optimization

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles with dark mode support
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page
├── components/
│   ├── ui/                  # ShadCN UI components
│   ├── NYCTripChecklist.tsx # Main checklist component
│   ├── ThemeToggle.tsx      # Theme switcher component
│   └── Footer.tsx           # Footer with attribution and GitHub link
├── hooks/
│   └── useTheme.ts          # Custom theme management hook
└── lib/
    └── utils.ts             # Utility functions
```

## 🎯 Key Components

### NYCTripChecklist.tsx
The main component featuring:
- **Theme-Aware Design**: Automatically adapts to dark/light mode
- **Enhanced Mobile Layout**: Optimized grid system for all screen sizes
- Section-based organization with tabs
- Individual item tracking with checkboxes
- Progress counters and badges
- Local storage integration
- Reset functionality

### Theme System
- `useTheme.ts`: Custom hook for theme management
- `ThemeToggle.tsx`: Beautiful theme switcher component
- **CSS Variables**: Seamless color transitions between themes
- **System Detection**: Respects user's OS theme preference
- **Persistence**: Remembers your theme choice

### UI Components
- `Card`: For section containers with theme-aware styling
- `Tabs`: For navigation between sections with mobile optimization
- `Checkbox`: For individual checklist items
- `Badge`: For progress indicators
- `Button`: For actions like reset and theme toggle
- `Footer`: Attribution footer with GitHub link and project info

## 🔧 Customization

### Adding New Items
Edit the `CHECKLIST_DATA` constant in `NYCTripChecklist.tsx`:

```typescript
{
  id: 'new-item',
  text: 'Your new checklist item',
  icon: <YourIcon className="w-4 h-4" />
}
```

### Styling
- Modify Tailwind classes directly in the component
- Update the global styles in `globals.css`
- Customize ShadCN UI components in `components/ui/`

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Add more NYC attractions or experiences
- Improve the UI/UX
- Add new features like categories or priorities
- Fix bugs or improve performance

## 🌟 Acknowledgments

- Built with [ShadCN UI](https://ui.shadcn.com/) for beautiful, accessible components
- Icons provided by [Lucide React](https://lucide.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

Happy trip planning! 🗽✈️
