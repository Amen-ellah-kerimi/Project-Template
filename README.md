# React Clean Architecture Template

A comprehensive React project template built with **Clean Architecture** principles, **Tailwind CSS v3**, and modern development practices. This template is designed to scale from small prototypes to large enterprise applications while maintaining code quality and developer productivity.

## 🚀 Features

- **Clean Architecture**: Organized folder structure that promotes separation of concerns
- **Tailwind CSS v3**: Utility-first CSS framework with custom configuration
- **Scalable Structure**: Designed to grow from 1-3 developers to 50+ developer teams
- **Modern React**: Built with React 18+ and modern hooks patterns
- **TypeScript Ready**: Easy to convert to TypeScript
- **Reusable Components**: Pre-built UI components with consistent styling
- **Custom Hooks**: Shared logic encapsulated in reusable hooks
- **Service Layer**: Organized API communication and external services
- **Utility Functions**: Common helpers and validation functions
- **Feature Modules**: Example of feature-based organization

## 📁 Project Structure

```
src/
├── components/
│   ├── shared/           # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Input.jsx
│   │   ├── Modal.jsx
│   │   └── index.js
│   └── layout/           # Layout components
│       ├── Header.jsx
│       ├── Footer.jsx
│       ├── MainLayout.jsx
│       └── index.js
├── pages/                # Top-level page components
│   ├── HomePage.jsx
│   ├── LoginPage.jsx
│   ├── AboutPage.jsx
│   └── index.js
├── features/             # Feature-based modules
│   └── example-feature/  # Example comments feature
│       ├── components/
│       ├── hooks/
│       ├── services/
│       ├── Comments.jsx
│       └── index.js
├── hooks/                # Shared custom hooks
│   ├── useApi.js
│   ├── useLocalStorage.js
│   ├── useDebounce.js
│   ├── useToggle.js
│   └── index.js
├── services/             # API and external services
│   ├── api/
│   │   └── client.js     # HTTP client with interceptors
│   ├── userService.js
│   ├── storageService.js
│   └── index.js
├── utils/                # Utility functions
│   ├── formatters.js
│   ├── validators.js
│   ├── helpers.js
│   ├── constants.js
│   └── index.js
├── assets/               # Static assets
│   ├── images/
│   ├── icons/
│   └── styles/
└── context/              # React Context providers
```

## 🏗️ Architecture Principles

This template follows Clean Architecture principles to ensure:

### 1. Separation of Concerns
- **Components**: UI presentation logic only
- **Hooks**: Business logic and state management
- **Services**: External API communication
- **Utils**: Pure functions and helpers

### 2. Dependency Inversion
- High-level modules don't depend on low-level modules
- Both depend on abstractions (interfaces/contracts)
- Easy to mock and test

### 3. Feature-Based Organization
- Related functionality grouped together
- Independent modules that can be developed by separate teams
- Clear boundaries between features

### 4. Scalability Patterns
- **Small Projects (1-3 developers)**: Use shared components and simple page structure
- **Mid-size Projects (8-10 developers)**: Introduce feature modules and advanced state management
- **Large Projects (50+ developers)**: Adopt module-based architecture with independent teams

## 🎨 Tailwind CSS Configuration

The template includes a comprehensive Tailwind CSS setup:

### Custom Theme Extensions
- **Colors**: Primary and secondary color palettes
- **Typography**: Inter font family with custom weights
- **Spacing**: Additional spacing utilities
- **Animations**: Custom fade-in and slide-up animations

### Configuration Files
- `tailwind.config.js`: Main Tailwind configuration
- `postcss.config.js`: PostCSS configuration with Autoprefixer
- `src/index.css`: Tailwind directives and custom CSS layers

### CSS Architecture
```css
@layer base {
  /* Base styles and resets */
}

@layer components {
  /* Reusable component classes */
  .btn { /* ... */ }
  .card { /* ... */ }
}

@layer utilities {
  /* Custom utility classes */
  .text-balance { /* ... */ }
}
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

1. **Clone or download this template**
   ```bash
   git clone <repository-url>
   cd react-clean-architecture-template
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors automatically

## 📦 Component Library

### Shared Components

#### Button
```jsx
import { Button } from '@/components/shared';

<Button variant="primary" size="lg" loading={isLoading}>
  Click me
</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
- `size`: 'sm' | 'md' | 'lg' | 'xl'
- `loading`: boolean
- `disabled`: boolean

#### Card
```jsx
import { Card } from '@/components/shared';

<Card title="Card Title" subtitle="Optional subtitle">
  Card content goes here
</Card>
```

#### Input
```jsx
import { Input } from '@/components/shared';

<Input
  label="Email"
  type="email"
  error={errors.email}
  required
/>
```

#### Modal
```jsx
import { Modal } from '@/components/shared';

<Modal isOpen={isOpen} onClose={handleClose} title="Modal Title">
  Modal content
</Modal>
```

## 🔧 Custom Hooks

### useApi
Generic hook for API calls with loading, error, and data states:

```jsx
import { useApi } from '@/hooks';
import { userService } from '@/services';

const { data: users, loading, error, execute } = useApi(
  userService.getUsers,
  [], // dependencies
  { immediate: true }
);
```

### useLocalStorage
Persistent state with localStorage synchronization:

```jsx
import { useLocalStorage } from '@/hooks';

const [theme, setTheme] = useLocalStorage('theme', 'light');
```

### useDebounce
Debounce values for search inputs and API calls:

```jsx
import { useDebounce } from '@/hooks';

const [searchTerm, setSearchTerm] = useState('');
const debouncedSearchTerm = useDebounce(searchTerm, 300);
```

## 🏢 Scaling Your Application

### Small Applications (1-3 developers)
- Use the basic structure as-is
- Keep components in `components/shared`
- Simple page organization in `pages/`
- Minimal state management with React hooks

### Mid-size Applications (8-10 developers)
- Introduce feature modules in `features/`
- Implement proper state management (Redux/Zustand)
- Add more sophisticated routing
- Separate layout components

### Large Applications (50+ developers)
- Adopt module-based architecture
- Independent feature teams
- Micro-frontend considerations
- Advanced build optimization

## 🔄 Migration to TypeScript

This template is designed to be easily converted to TypeScript:

1. **Install TypeScript dependencies**
   ```bash
   npm install -D typescript @types/react @types/react-dom
   ```

2. **Add TypeScript configuration**
   ```bash
   # Create tsconfig.json
   npx tsc --init
   ```

3. **Rename files**
   - `.jsx` → `.tsx`
   - `.js` → `.ts`

4. **Add type definitions**
   - Props interfaces
   - API response types
   - Custom hook types

## 📚 Best Practices

### Component Organization
- Keep components small and focused
- Use composition over inheritance
- Implement proper prop validation
- Follow naming conventions

### State Management
- Use local state for component-specific data
- Lift state up when needed by multiple components
- Consider global state for app-wide data
- Implement proper error boundaries

### Performance
- Use React.memo for expensive components
- Implement proper key props for lists
- Lazy load routes and components
- Optimize bundle size

### Testing
- Write unit tests for utilities and hooks
- Component testing with React Testing Library
- Integration tests for features
- E2E tests for critical user flows

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The web framework used
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [Vite](https://vitejs.dev/) - Build tool and development server
- Clean Architecture principles by Robert C. Martin
