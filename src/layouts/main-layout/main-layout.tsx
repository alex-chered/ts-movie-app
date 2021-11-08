import { ReactNode } from 'react';
// components
import { AppBackground } from 'components/app-background';
import { AppHeader } from 'components/app-header';

// PROPS
interface MainLayoutProps {
  children: ReactNode
}

// COMPONENT
export const MainLayout = (props: MainLayoutProps) => {
  const { children } = props;

  // RENDER
  return (
    <>
      <AppBackground />
      <div id="app-content">
        <AppHeader />
        { children }
      </div>
    </>
  );
};
