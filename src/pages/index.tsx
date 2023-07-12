import TodoApp from '@/components/TodoApp';
import type { NextPage } from 'next';
import { styled } from 'styled-components';

const Layout = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  background: #3c7acb;
`;

const Home: NextPage = () => (
  <Layout>
    <TodoApp />
  </Layout>
);

export default Home;
