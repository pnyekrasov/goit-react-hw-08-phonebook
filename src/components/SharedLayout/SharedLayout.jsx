import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Loader } from 'components/Loader/Loader';
import { MainNav } from 'components/MainNav/MainNav';

import { Container } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <MainNav />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
